import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// TODO: Replace with real testimonials from Mac's past clients
const TESTIMONIALS = [
  {
    quote: "Mac and his crew cleared our 12-acre lot in half the time we expected. No surprises, no hidden costs. They left the site perfectly graded and ready for our builder to start footings the next week.",
    name: "James T.",
    detail: "Residential Clearing & Grading, Coweta County",
  },
  {
    quote: "We've used Mac Lewis on three subdivisions now. They show up when they say they will, the work is done right, and they don't cut corners on drainage. That's hard to find in this business.",
    name: "David R.",
    detail: "Subdivision Development, Carroll County",
  },
  {
    quote: "Had a tight timeline on a commercial pad site and Mac's team worked around the weather to keep us on schedule. The utility install was seamless — no issues with the county inspection.",
    name: "Sarah M.",
    detail: "Commercial Site Work, Fayette County",
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
              className="border border-muted-foreground/10 shadow-sm bg-secondary/30"
            >
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-mac-red/40 mb-4" />
                <p className="text-muted-foreground italic text-lg leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-mac-dark">
                    {t.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
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
