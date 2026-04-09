import { MapPin } from "lucide-react";

const COUNTIES = [
  { name: "Coweta County", note: "Home base — Newnan & surrounding" },
  { name: "Fayette County", note: "Peachtree City, Fayetteville" },
  { name: "Heard County", note: "Franklin, Centralhatchee" },
  { name: "Troup County", note: "LaGrange, Hogansville" },
  { name: "Carroll County", note: "Carrollton, Villa Rica" },
  { name: "Meriwether County", note: "Greenville, Warm Springs" },
];

export function ServiceArea() {
  return (
    <section id="service-area" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-mac-red font-semibold text-sm tracking-wider uppercase">
            Where We Work
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-mac-dark mt-3">
            SERVICE AREA
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Based in Coweta County, serving builders and developers across West
            Georgia. If you&apos;re within an hour of Newnan, we&apos;re there.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {COUNTIES.map((county) => (
            <div
              key={county.name}
              className="flex items-start gap-3 p-5 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <MapPin className="w-5 h-5 text-mac-red mt-0.5 shrink-0" />
              <div>
                <div className="font-semibold text-mac-dark">{county.name}</div>
                <div className="text-muted-foreground text-sm">
                  {county.note}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          Don&apos;t see your county? Call us — we travel for the right project.
        </p>
      </div>
    </section>
  );
}
