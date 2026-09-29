import { maintenance, packages } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Packages() {
  return (
    <section id="pacotes" aria-labelledby="pacotes-title" className="scroll-mt-24 bg-ink text-paper">
      <div className="container-page flex flex-col gap-14 py-24">
        <Reveal className="flex flex-col gap-4">
          <p className="kicker text-paper/60">Pacotes</p>
          <h2 id="pacotes-title" className="heading">
            Preço fechado, <span className="serif text-signal">sem surpresa.</span>
          </h2>
        </Reveal>

        <ul className="grid gap-4 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal
              as="li"
              key={p.name}
              delay={i * 0.1}
              className={`relative flex flex-col gap-6 rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1 ${p.featured ? "bg-signal text-ink" : "border border-paper/15"}`}
            >
              {p.featured && <span className="absolute top-8 right-8 rounded-full bg-ink px-3 py-1 text-xs font-medium text-paper">Mais pedido</span>}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="flex items-baseline gap-2">
                <span className="text-5xl font-semibold tracking-tight">{p.price}</span>
                {p.period && <span className={p.featured ? "text-ink/70" : "text-paper/60"}>{p.period}</span>}
              </p>
              <p className={p.featured ? "text-ink/80" : "text-paper/70"}>{p.description}</p>
              <ul className={`flex flex-col gap-3 border-t pt-6 text-sm ${p.featured ? "border-ink/20" : "border-paper/15"}`}>
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span aria-hidden>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <WhatsAppButton
                label="Quero esse"
                message={`Olá, Ian! Tenho interesse no pacote ${p.name}.`}
                variant={p.featured ? "dark" : "light"}
                className="mt-auto self-start"
              />
            </Reveal>
          ))}
        </ul>

        <Reveal className="flex flex-col justify-between gap-4 rounded-3xl border border-paper/15 p-8 md:flex-row md:items-center">
          <p>
            <strong className="font-semibold">Manutenção · {maintenance.price}</strong>
            <span className="block text-paper/70 md:inline md:pl-3">{maintenance.description}</span>
          </p>
          <span className="kicker text-paper/60">Opcional</span>
        </Reveal>
      </div>
    </section>
  );
}
