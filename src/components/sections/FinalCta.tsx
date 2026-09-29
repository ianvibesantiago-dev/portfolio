import { owner } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="container-page pb-10">
      <Reveal className="flex flex-col items-start gap-10 rounded-[40px] bg-signal px-8 py-16 md:px-16 md:py-24">
        <h2 id="cta-title" className="display max-w-4xl">
          Seu próximo cliente <span className="serif">está procurando você agora.</span>
        </h2>
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <WhatsAppButton />
          <p className="max-w-xs text-ink/75">Me conte sobre o seu negócio. A prévia é grátis e sem compromisso.</p>
        </div>
      </Reveal>
      <footer className="flex flex-col justify-between gap-3 pt-10 text-sm text-ink-soft md:flex-row">
        <p>© {new Date().getFullYear()} {owner.name} · {owner.role}</p>
        <a href={owner.github} target="_blank" rel="noopener" className="hover:text-ink">GitHub ↗</a>
      </footer>
    </section>
  );
}
