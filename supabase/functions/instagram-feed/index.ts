import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

interface IgMedia {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const token = Deno.env.get("INSTAGRAM_ACCESS_TOKEN");
    const userId = Deno.env.get("INSTAGRAM_USER_ID");

    if (!token || !userId) {
      return new Response(
        JSON.stringify({ error: "Missing Instagram credentials" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const fields = "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";
    const url = `https://graph.facebook.com/v21.0/${userId}/media?fields=${fields}&limit=12&access_token=${token}`;

    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
      console.error("Instagram API error:", data);
      return new Response(
        JSON.stringify({ error: data?.error?.message || "Instagram API error" }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const posts = (data.data as IgMedia[])
      .filter((m) => m.media_type !== "VIDEO" || m.thumbnail_url)
      .slice(0, 6)
      .map((m) => ({
        id: m.id,
        caption: m.caption ?? "",
        image: m.media_type === "VIDEO" ? m.thumbnail_url! : m.media_url,
        permalink: m.permalink,
        timestamp: m.timestamp,
      }));

    return new Response(JSON.stringify({ posts }), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (err) {
    console.error("instagram-feed error:", err);
    return new Response(
      JSON.stringify({ error: (err as Error).message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
