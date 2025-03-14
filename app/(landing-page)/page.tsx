import Reviews from "./components/home/fiveSection/Reviews";
import Hero from "./components/home/fristSection/Hero";
import Newsletter from "./components/home/seventSection/Newsletter";
import Faq from "./components/home/sixSection/Faq";
import Services from "./components/home/thireSection/Services";
import Features from "./components/home/towSection/Features";

export default function Home() {
  return (
    <main className="px-5">
      <Hero />
      {/* <Services /> */}
      <Features />
      <Reviews />
      <Faq />
      <Newsletter />
    </main>
  );
}
