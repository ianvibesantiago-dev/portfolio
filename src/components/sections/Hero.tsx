"use client";

import { motion } from "motion/react";
import { owner, projects } from "@/content/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const ease = [0.22, 1, 0.36, 1] as const;
const niches = projects.map((p) => p.niche);

export function Hero() {
  return (
    <section className="flex flex-col gap-16 pt-20 pb-12 md:pt-28">
      <div className="container-page flex flex-col gap-10">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="kicker flex items-center gap-3">
          <span className="size-2 animate-pulse-dot rounded-full bg-green-500" />
          Aceitando novos projetos · {owner.city}
        </motion.p>

        <h1 className="display max-w-5xl">
          {["Sites que", "trabalham pelo"].map((line, i) => (
            <span key={line} className="block overflow-hidden pb-1">
              <motion.span className="block" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease }}>
                {line}
              </motion.span>
            </span>
          ))}
          <span className="block overflow-hidden pb-2">
            <motion.span className="serif block text-signal" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.3, ease }}>
              seu negócio.
            </motion.span>
          </span>
        </h1>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7, ease }} className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-lg text-ink-soft">
            Eu sou o {owner.name.split(" ")[0]}. Crio sites rápidos, bonitos e feitos para gerar contato — e mando uma{" "}
            <strong className="font-medium text-ink">prévia grátis em 48 horas</strong> antes de você fechar.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <WhatsAppButton />
            <a href="#projetos" className="px-2 py-3 font-medium underline decoration-line underline-offset-4 transition-colors hover:decoration-ink">
              Ver projetos
            </a>
          </div>
        </motion.div>
      </div>

      {/* Nichos atendidos em faixa infinita */}
      <div aria-hidden className="overflow-hidden border-y border-line py-5 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-12">
          {[...niches, ...niches, ...niches].map((n, i) => (
            <span key={i} className="flex items-center gap-12 text-2xl whitespace-nowrap md:text-3xl">
              <span className={i % 2 ? "serif" : "font-medium tracking-tight"}>{n}</span>
              <span className="text-signal">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
