import Image from "next/image";

// TODO: Replace ALL placeholder images with real project photos
const PROJECTS = [
  {
    src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
    alt: "Excavator clearing land",
    label: "Land Clearing — Coweta County",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    alt: "Construction site grading work",
    label: "Site Grading — Newnan, GA",
  },
  {
    src: "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&q=80",
    alt: "Utility trenching",
    label: "Utility Installation — Peachtree City",
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    alt: "Concrete foundation pour",
    label: "Commercial Foundation — Carroll County",
  },
  {
    src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80",
    alt: "Heavy equipment on site",
    label: "Subdivision Development — Heard County",
  },
  {
    src: "https://images.unsplash.com/photo-1621905252472-943afaa20e20?w=600&q=80",
    alt: "Finished graded lot",
    label: "Residential Pad — Fayette County",
  },
];

export function Gallery() {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-mac-red font-semibold text-sm tracking-wider uppercase">
            Our Work
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-mac-dark mt-3">
            RECENT PROJECTS
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            From lot clearing to finished pads. Here&apos;s what it looks like when
            we show up.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden"
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-sm">
                  {project.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
