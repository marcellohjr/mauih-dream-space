import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const PLACE_ID = 'ChIJz0tPFzxdzpQRa1KpM377qlE';
const GATEWAY_URL = 'https://connector-gateway.lovable.dev/google_maps';

interface GoogleReview {
  name: string;
  rating: number;
  text?: { text: string; languageCode: string };
  originalText?: { text: string; languageCode: string };
  authorAttribution: { displayName: string; uri: string; photoUri: string };
  publishTime: string;
  relativePublishTimeDescription: string;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    const GOOGLE_MAPS_API_KEY = Deno.env.get('GOOGLE_MAPS_API_KEY');

    if (!LOVABLE_API_KEY || !GOOGLE_MAPS_API_KEY) {
      throw new Error('Credenciais do Google Maps não configuradas');
    }

    const response = await fetch(
      `${GATEWAY_URL}/places/v1/places/${PLACE_ID}?languageCode=pt-BR`,
      {
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          'X-Connection-Api-Key': GOOGLE_MAPS_API_KEY,
          'X-Goog-FieldMask': 'reviews,rating,userRatingCount,googleMapsUri',
        },
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error('Google Places error:', response.status, errText);
      return new Response(
        JSON.stringify({ error: 'Falha ao buscar reviews', status: response.status }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    const reviews = (data.reviews as GoogleReview[] | undefined) ?? [];

    const formatted = reviews
      .filter((r) => r.rating >= 4 && (r.text?.text || r.originalText?.text))
      .map((r) => ({
        id: r.name,
        author: r.authorAttribution.displayName,
        photo: r.authorAttribution.photoUri,
        profileUrl: r.authorAttribution.uri,
        rating: r.rating,
        text: r.text?.text ?? r.originalText?.text ?? '',
        relativeTime: r.relativePublishTimeDescription,
        publishTime: r.publishTime,
      }));

    return new Response(
      JSON.stringify({
        rating: data.rating ?? null,
        totalReviews: data.userRatingCount ?? null,
        mapsUri: data.googleMapsUri ?? null,
        reviews: formatted,
      }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
      }
    );
  } catch (err) {
    console.error('google-reviews error:', err);
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : 'Erro desconhecido' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
