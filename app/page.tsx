import Gallery from "@/components/home/fourSection/Gallery";
import Hero from "@/components/home/fristSection/Hero";
import Services from "@/components/home/thireSection/Services";
import Features from "@/components/home/towSection/Features";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Features/>
      <Services/>
      <Gallery/>
    </main>
  );
}
