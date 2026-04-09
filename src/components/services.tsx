import { TreePine, Mountain, Zap, HardHat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SERVICES = [
  {
    icon: TreePine,
    title: "Clearing",
    description:
      "Complete land clearing for residential and commercial sites. We handle timber, brush, stumps, and debris removal — leaving your lot clean and ready for the next phase.",
  },
  {
    icon: Mountain,
    title: "Grading",
    description:
      "Precision site grading, cut-and-fill operations, and drainage solutions. We move dirt to spec, whether it's a single lot or a 200-acre subdivision.",
  },
  {
    icon: Zap,
    title: "Utilities",
    description:
      "Underground utility installation including water, sewer, storm drain, and conduit. Coordinated with local authorities for inspections and tie-ins.",
  },
  {
    icon: HardHat,
    title: "Concrete",
    description:
      "Foundations, footings, curb and gutter, sidewalks, and retaining walls. Poured on schedule and built to code — every time.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-mac-red font-semibold text-sm tracking-wider uppercase">
            What We Do
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-mac-dark mt-3">
            FULL-SERVICE SITE DEVELOPMENT
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Everything between raw land and vertical construction. One crew, one
            point of contact, no excuses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <Card
              key={service.title}
              className="group border-0 shadow-none bg-secondary/50 hover:bg-mac-dark hover:text-white transition-all duration-300 rounded-lg"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-mac-red/10 group-hover:bg-mac-red flex items-center justify-center mb-5 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-mac-red group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-white/70 transition-colors duration-300 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
