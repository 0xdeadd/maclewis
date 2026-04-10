import Image from "next/image";

// TODO: Replace with real project photos from Mac
const PROJECTS = [
  {
    src: "https://images.pexels.com/photos/1579356/pexels-photo-1579356.jpeg?auto=compress&w=600",
    alt: "Aerial view of excavator and bulldozer grading a site",
    label: "Site Grading — Coweta County",
  },
  {
    src: "https://images.pexels.com/photos/13923406/pexels-photo-13923406.jpeg?auto=compress&w=600",
    alt: "Bulldozer grading a cleared field",
    label: "Land Clearing — Newnan, GA",
  },
  {
    src: "https://images.pexels.com/photos/8809464/pexels-photo-8809464.jpeg?auto=compress&w=600",
    alt: "CAT motor grader leveling a dirt road",
    label: "Road Grading — Carroll County",
  },
  {
    src: "https://images.pexels.com/photos/1116035/pexels-photo-1116035.jpeg?auto=compress&w=600",
    alt: "Loader moving dirt on a construction site",
    label: "Earthwork — Heard County",
  },
  {
    src: "https://images.pexels.com/photos/259966/pexels-photo-259966.jpeg?auto=compress&w=600",
    alt: "Close up of yellow CAT bulldozer tracks in mud",
    label: "Heavy Equipment — Fayette County",
  },
  {
    src: "https://images.pexels.com/photos/12236053/pexels-photo-12236053.jpeg?auto=compress&w=600",
    alt: "Aerial view of bulldozer cutting a road through terrain",
    label: "Subdivision Development — Troup County",
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
