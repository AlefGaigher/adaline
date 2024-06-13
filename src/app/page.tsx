import "./globals.css";
import { SectionHero } from "../../components/section-hero";
import { Info } from "../../components/info";
import { About } from "../../components/about";
import { Systems } from "../../components/systems";
import { Brands } from "../../components/brands";
import { News } from "../../components/news";
import { Contact } from "../../components/contact";
import { Testimonial } from "../../components/testimonials";


export default function Home() {
  return (
      <main>
          <SectionHero />
          <Info />
          <About />
          <Systems />
          <Testimonial />
          <Brands />
          <News />
          <Contact />
      </main>
  );
}
