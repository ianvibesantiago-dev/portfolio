"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { owner, whatsappUrl } from "@/content/site";

const links = [
  { href: "#projetos", label: "Projetos" },
  { href: "#pacotes", label: "Pacotes" },
  { href: "#processo", label: "Processo" },
  { href: "#duvidas", label: "Dúvidas" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 16));

  return (
    <header className="sticky top-3 z-50 px-3">
      <div
        className={`mx-auto flex max-w-[1280px] items-center justify-between gap-4 rounded-full border py-2 pr-2 pl-5 transition-all duration-300 ${
          scrolled ? "border-line bg-paper/85 shadow-sm backdrop-blur" : "border-transparent"
        }`}
      >
        <a href="#" className="font-semibold tracking-tight">
          {owner.name}
          <span className="text-signal">.</span>
        </a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-8 text-sm text-ink-soft">
            {links.map((l) => (
              <li key={l.href}><a href={l.href} className="transition-colors hover:text-ink">{l.label}</a></li>
            ))}
          </ul>
        </nav>
        <a href={whatsappUrl()} target="_blank" rel="noopener" className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-signal">
          Falar comigo
        </a>
      </div>
    </header>
  );
}
