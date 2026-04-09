import { Shield, MapPin, Clock, Users } from "lucide-react";

const STATS = [
  {
    icon: Clock,
    // TODO: Replace with actual years in business
    value: "10+",
    label: "Years Experience",
  },
  {
    icon: Shield,
    value: "Licensed",
    label: "& Fully Insured",
  },
  {
    icon: MapPin,
    value: "West GA",
    label: "Locally Owned",
  },
  {
    icon: Users,
    // TODO: Replace with actual number
    value: "500+",
    label: "Projects Completed",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-mac-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <span className="text-mac-red font-semibold text-sm tracking-wider uppercase">
              Why Mac Lewis
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-3 mb-6">
              BUILT ON DIRT.
              <span className="block text-mac-yellow">BACKED BY REPUTATION.</span>
            </h2>
            <div className="space-y-4 text-white/70 text-lg leading-relaxed">
              <p>
                Mac Lewis Clearing and Grading was built in the red clay of West
                Georgia. We know this ground because we&apos;ve been working it for
                years — every ridge, every drainage issue, every county
                inspector by name.
              </p>
              <p>
                We don&apos;t subcontract the hard parts. Our crews run our iron on
                your site, every day, until the job is done. Builders call us
                back because we finish on time, stay on budget, and don&apos;t leave
                problems buried under topsoil.
              </p>
              <p>
                From a one-acre residential pad to a full commercial subdivision,
                we bring the same standard: do it right, do it once, move on.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-lg p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-mac-yellow mx-auto mb-3" />
                <div className="font-heading text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
