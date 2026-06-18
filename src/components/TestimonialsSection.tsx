import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5511989569045&text=Ol%C3%A1%2C%20encontrei%20o%20site%20no%20google%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%21";

interface Review {
  id: string;
  author: string;
  photo: string;
  profileUrl: string;
  rating: number;
  text: string;
  relativeTime: string;
  publishTime: string;
}

interface ReviewsResponse {
  rating: number | null;
  totalReviews: number | null;
  mapsUri: string | null;
  reviews: Review[];
}

const fallbackReviews: Review[] = [
  {
    id: "fallback-1",
    author: "Luana M.",
    photo: "",
    profileUrl: "",
    rating: 5,
    text: "A Mauih superou todas as nossas expectativas. Cada detalhe foi pensado com carinho e profissionalismo. Nossa casa ficou exatamente como sonhamos.",
    relativeTime: "",
    publishTime: "",
  },
  {
    id: "fallback-2",
    author: "Priscila D.",
    photo: "",
    profileUrl: "",
    rating: 5,
    text: "A experiência foi incrível do início ao fim. A equipe é atenciosa, criativa e muito organizada. Recomendo de olhos fechados!",
    relativeTime: "",
    publishTime: "",
  },
  {
    id: "fallback-3",
    author: "Carol R.",
    photo: "",
    profileUrl: "",
    rating: 5,
    text: "O que mais nos encantou foi a escuta. Elas realmente entenderam nosso estilo de vida e traduziram isso em cada ambiente. Resultado impecável.",
    relativeTime: "",
    publishTime: "",
  },
];

async function fetchReviews(): Promise<ReviewsResponse> {
  const { data, error } = await supabase.functions.invoke<ReviewsResponse>("google-reviews");
  if (error) throw error;
  if (!data) throw new Error("Sem dados");
  return data;
}

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();

  const { data, isLoading } = useQuery({
    queryKey: ["google-reviews"],
    queryFn: fetchReviews,
    staleTime: 1000 * 60 * 60, // 1 hora
    retry: 1,
  });

  const reviews = data?.reviews?.length ? data.reviews.slice(0, 3) : fallbackReviews;
  const mapsUri = data?.mapsUri ?? "https://maps.app.goo.gl/mCvrjjHyaMwUaWj8A";
  const rating = data?.rating;
  const totalReviews = data?.totalReviews;

  return (
    <section id="depoimentos" className="section-padding bg-primary">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-sans-modern text-sm tracking-[0.3em] uppercase text-primary-foreground/60 mb-4">
            Depoimentos
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-primary-foreground">
            O que nossos clientes dizem
          </h2>

          {rating !== null && rating !== undefined && totalReviews ? (
            <a
              href={mapsUri}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-primary-foreground/80 hover:text-secondary transition-colors"
            >
              <span className="font-serif text-2xl text-secondary">{rating.toFixed(1)}</span>
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(rating) ? "fill-secondary text-secondary" : "text-primary-foreground/30"
                    }`}
                  />
                ))}
              </span>
              <span className="font-sans-modern text-xs tracking-wider uppercase">
                {totalReviews} avaliações no Google
              </span>
            </a>
          ) : null}
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="bg-primary-foreground/5 border border-primary-foreground/10 p-8 animate-pulse h-64"
              />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <TestimonialCard key={review.id} review={review} index={i} />
            ))}
          </div>
        )}

        <div className="text-center mt-16">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 text-primary-foreground px-8 py-4 font-sans-modern text-sm tracking-widest uppercase hover:bg-green-700 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Quero ser o próximo depoimento
          </a>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ review, index }: { review: Review; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`bg-primary-foreground/5 border border-primary-foreground/10 p-8 transition-all duration-700 flex flex-col ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < review.rating ? "fill-secondary text-secondary" : "text-primary-foreground/30"
            }`}
          />
        ))}
      </div>

      <p className="font-sans-modern text-sm text-primary-foreground/80 leading-relaxed mb-6 line-clamp-6 flex-1">
        {review.text}
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-primary-foreground/10">
        {review.photo ? (
          <img
            src={review.photo}
            alt={review.author}
            referrerPolicy="no-referrer"
            className="w-10 h-10 rounded-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center font-serif text-secondary">
            {review.author.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-serif text-base text-secondary leading-tight">{review.author}</p>
          {review.relativeTime ? (
            <p className="font-sans-modern text-xs text-primary-foreground/50">{review.relativeTime}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
