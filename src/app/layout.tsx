import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { owner } from "@/content/site";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const instrument = Instrument_Serif({ variable: "--font-instrument", subsets: ["latin"], weight: "400", style: ["normal", "italic"], display: "swap" });

export const metadata: Metadata = {
  title: `${owner.name} — Sites que trabalham pelo seu negócio`,
  description:
    "Sites rápidos, bonitos e feitos para vender — para clínicas, restaurantes, escritórios, imobiliárias e construtoras. Prévia grátis em 48 horas.",
  openGraph: {
    locale: "pt_BR",
    type: "website",
    title: `${owner.name} — Sites que trabalham pelo seu negócio`,
    images: ["/projects/horizonte-imoveis.jpg"],
  },
};

export const viewport: Viewport = { themeColor: "#f3f2ee" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${geistMono.variable} ${instrument.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
