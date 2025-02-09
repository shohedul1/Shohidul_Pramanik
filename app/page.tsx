import Reviews from "@/components/home/fiveSection/Reviews";
import Gallery from "@/components/home/fourSection/Gallery";
import Hero from "@/components/home/fristSection/Hero";
import Newsletter from "@/components/home/seventSection/Newsletter";
import Faq from "@/components/home/sixSection/Faq";
import Services from "@/components/home/thireSection/Services";
import Features from "@/components/home/towSection/Features";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Services />
      <Gallery />
      <Reviews />
      <Faq />
      <Newsletter />

    </main>
  );
}
