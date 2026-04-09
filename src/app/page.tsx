import { DemoBanner } from "@/components/demo-banner";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Testimonials } from "@/components/testimonials";
import { Gallery } from "@/components/gallery";
import { ServiceArea } from "@/components/service-area";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <DemoBanner />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Gallery />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
