import type { Metadata } from "next";
import { Lato, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const lato = Lato({
  variable: "--font-sans",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Reemplaza por la URL real del sitio en Vercel
  metadataBase: new URL("https://hospital-valdivia-web.vercel.app"),
  title: {
    default: "ESE Hospital San Juan de Dios — Valdivia",
    template: "%s — Hospital San Juan de Dios",
  },
  description:
    "Portal informativo interno del ESE Hospital San Juan de Dios de Valdivia, Antioquia.",
  openGraph: {
    title: "ESE Hospital San Juan de Dios — Valdivia",
    description:
      "Portal informativo interno del ESE Hospital San Juan de Dios de Valdivia, Antioquia.",
    locale: "es_CO",
    type: "website",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary",
    title: "ESE Hospital San Juan de Dios — Valdivia",
    description:
      "Portal informativo interno del ESE Hospital San Juan de Dios de Valdivia, Antioquia.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${lato.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <div className="flex min-h-screen bg-[#f4f8f6]">
          <Sidebar />
          <div className="flex min-w-0 flex-1 flex-col">
            <Header />
            <main className="flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
