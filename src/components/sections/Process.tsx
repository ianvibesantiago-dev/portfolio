import { steps } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

export function Process() {
  return (
    <section id="processo" aria-labelledby="processo-title" className="container-page flex scroll-mt-24 flex-col gap-14 py-24">
      <Reveal className="flex flex-col gap-4">
        <p className="kicker">Processo</p>
        <h2 id="processo-title" className="heading">
          Do primeiro “oi” ao <span className="serif">site no ar.</span>
        </h2>
      </Reveal>
      <ol className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal as="li" key={s.n} delay={i * 0.1} className="group flex flex-col gap-10 bg-paper p-8 transition-colors duration-300 hover:bg-surface">
            <span className="font-mono text-sm text-ink-soft transition-colors group-hover:text-signal">{s.n}</span>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-ink-soft">{s.description}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
