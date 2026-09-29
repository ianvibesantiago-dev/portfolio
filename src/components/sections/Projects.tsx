import Image from "next/image";
import { projects } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

export function Projects() {
  return (
    <section id="projetos" aria-labelledby="projetos-title" className="container-page flex scroll-mt-24 flex-col gap-14 py-24">
      <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="flex flex-col gap-4">
          <p className="kicker">Projetos · {String(projects.length).padStart(2, "0")}</p>
          <h2 id="projetos-title" className="heading">
            Um estilo para <span className="serif">cada negócio.</span>
          </h2>
        </div>
        <p className="max-w-sm text-ink-soft">Todos no ar, com código aberto no GitHub. Clique e navegue — é o site de verdade.</p>
      </Reveal>

      <ul className="grid gap-x-8 gap-y-16 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal as="li" key={p.slug} delay={(i % 2) * 0.12} className={i === 0 ? "md:col-span-2" : ""}>
            <article className="group flex flex-col gap-5">
              <a href={p.url} target="_blank" rel="noopener" className="relative block overflow-hidden rounded-2xl border border-line bg-surface" aria-label={`Abrir o site ${p.name}`}>
                {/* Barra de navegador estilizada */}
                <span aria-hidden className="flex items-center gap-1.5 border-b border-line px-4 py-3">
                  <span className="size-2.5 rounded-full bg-line" />
                  <span className="size-2.5 rounded-full bg-line" />
                  <span className="size-2.5 rounded-full bg-line" />
                  <span className="ml-3 truncate font-mono text-xs text-ink-soft">{p.url.replace("https://", "")}</span>
                </span>
                <span className={`relative block overflow-hidden ${i === 0 ? "aspect-[16/8]" : "aspect-[16/10]"}`}>
                  <Image
                    src={p.image}
                    alt={`Página inicial do site ${p.name}`}
                    fill
                    sizes={i === 0 ? "(min-width:1280px) 1200px, 100vw" : "(min-width:768px) 50vw, 100vw"}
                    className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    priority={i === 0}
                  />
                  <span aria-hidden className="absolute right-4 bottom-4 translate-y-3 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Ver site ↗
                  </span>
                </span>
              </a>

              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span aria-hidden className="size-3 rounded-full" style={{ background: p.accent }} />
                  <h3 className="text-2xl font-semibold tracking-tight">{p.name}</h3>
                  <span className="kicker">{p.niche}</span>
                  {p.concept && <span className="rounded-full border border-line px-2.5 py-0.5 text-xs text-ink-soft">Conceito</span>}
                </div>
                <p className="max-w-xl text-ink-soft">{p.summary}</p>
                <ul className="flex flex-wrap gap-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="rounded-full bg-surface px-3 py-1 text-sm">{h}</li>
                  ))}
                </ul>
                <p className="flex gap-6 pt-1 text-sm font-medium">
                  <a href={p.url} target="_blank" rel="noopener" className="underline decoration-line underline-offset-4 hover:decoration-ink">Ver site ↗</a>
                  <a href={p.repo} target="_blank" rel="noopener" className="underline decoration-line underline-offset-4 hover:decoration-ink">Código ↗</a>
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
