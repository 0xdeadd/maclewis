import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// TODO: Collect 3 real testimonials from Mac's past clients
const TESTIMONIALS = [
  {
    quote: "[Real testimonial from Mac's customer goes here]",
    name: "[Client Name]",
    detail: "[Project Type], [County]",
  },
  {
    quote: "[Real testimonial from Mac's customer goes here]",
    name: "[Client Name]",
    detail: "[Project Type], [County]",
  },
  {
    quote: "[Real testimonial from Mac's customer goes here]",
    name: "[Client Name]",
    detail: "[Project Type], [County]",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-mac-red font-semibold text-sm tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-mac-dark mt-3">
            WHAT CLIENTS SAY
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Card
              key={i}
              className="border-2 border-dashed border-muted-foreground/20 shadow-none bg-secondary/30"
            >
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-mac-red/30 mb-4" />
                <p className="text-muted-foreground/60 italic text-lg leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-muted-foreground/50">
                    {t.name}
                  </p>
                  <p className="text-sm text-muted-foreground/40">
                    {t.detail}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
