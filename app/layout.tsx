import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import localFont from "next/font/local";
import { Clarity } from "@/lib/analytics";
import { ScrollObserver } from "@/components/ScrollObserver";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500", "600"],
  variable: "--font-newsreader",
  display: "swap",
});

const gebuk = localFont({
  src: "../public/fonts/Gebuk-Regular.ttf",
  variable: "--font-gebuk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Polpo — o time de gestão do dono de restaurante",
  description:
    "Lista de espera da Polpo. Cancelamentos do iFood, performance de delivery e CMV — no seu WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${plusJakartaSans.variable} ${newsreader.variable} ${gebuk.variable}`}>
      <body>
        <Clarity />
        <ScrollObserver />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
