import { faq } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

/** Acordeão nativo (<details>): acessível e funciona sem JavaScript. */
export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-title" className="container-page grid scroll-mt-24 gap-12 py-24 lg:grid-cols-[1fr_1.6fr]">
      <Reveal className="flex flex-col gap-4">
        <p className="kicker">Dúvidas</p>
        <h2 id="duvidas-title" className="heading">
          Perguntas <span className="serif">frequentes.</span>
        </h2>
      </Reveal>
      <div className="border-t border-line">
        {faq.map((f, i) => (
          <Reveal key={f.q} delay={i * 0.05}>
            <details className="group border-b border-line py-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                {f.q}
                <span aria-hidden className="grid size-8 shrink-0 place-items-center rounded-full border border-line transition-transform duration-300 group-open:rotate-45 group-open:border-signal group-open:text-signal">
                  +
                </span>
              </summary>
              <p className="max-w-xl pt-4 text-ink-soft">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
