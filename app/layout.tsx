import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dodilix – Soluciones inteligentes para la gestión de siniestros",
  description:
    "Dodilix optimiza la gestión de siniestros con inteligencia artificial, automatización y comunicación omnicanal. Reducí tiempos, costos y errores en tu operación.",
  keywords: "gestión de siniestros, inteligencia artificial, aseguradoras, automatización, siniestros",
  openGraph: {
    title: "Dodilix – Gestión de siniestros inteligente",
    description:
      "Plataforma integral que combina IA, automatización y comunicación omnicanal para transformar la gestión de siniestros.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
