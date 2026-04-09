import Image from "next/image";
import { Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// TODO: Replace with real phone number
const PHONE = "770-328-4984";
const PHONE_HREF = `tel:+1${PHONE.replace(/-/g, "")}`;

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {/* TODO: Replace with real hero image — aerial job site or excavator at work */}
      <Image
        src="https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=1920&q=80"
        alt="Aerial view of bulldozers and excavators grading a construction site"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 bg-mac-red/90 rounded-sm">
          <span className="text-white text-sm font-semibold tracking-wider uppercase">
            West Georgia Site Development
          </span>
        </div>
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6">
          CLEARING THE WAY
          <span className="block text-mac-yellow mt-2">IN WEST GEORGIA</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          From raw land to ready-to-build. Professional clearing, grading,
          utilities, and concrete — done right the first time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-mac-red hover:bg-mac-red/90 text-white text-lg px-8 py-6 font-bold shadow-lg"
            )}
          >
            Request a Quote
          </a>
          <a
            href={PHONE_HREF}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-white/30 bg-transparent text-white hover:bg-white/10 text-lg px-8 py-6 font-semibold"
            )}
          >
            <Phone className="w-5 h-5 mr-2" />
            Call {PHONE}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 rounded-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
