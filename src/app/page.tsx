import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Gallery } from "@/components/gallery";
import { ServiceArea } from "@/components/service-area";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
