import { whatsappUrl } from "@/content/site";

type Props = { label?: string; message?: string; variant?: "dark" | "light"; className?: string };

export function WhatsAppButton({ label = "Pedir minha prévia grátis", message, variant = "dark", className = "" }: Props) {
  const styles = variant === "dark" ? "bg-ink text-paper hover:bg-signal" : "bg-paper text-ink hover:bg-signal hover:text-paper";
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener"
      className={`group inline-flex items-center gap-3 rounded-full py-2 pr-2 pl-6 font-medium transition-colors duration-300 ${styles} ${className}`}
    >
      {label}
      <span aria-hidden className="grid size-10 place-items-center rounded-full bg-signal text-paper transition-transform duration-300 group-hover:rotate-[-45deg] group-hover:bg-ink">
        →
      </span>
    </a>
  );
}
