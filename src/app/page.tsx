import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Packages } from "@/components/sections/Packages";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-clip">
        <Hero />
        <Projects />
        <Packages />
        <Process />
        <Faq />
        <FinalCta />
      </main>
    </>
  );
}
