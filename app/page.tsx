import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problematica from "@/components/Problematica";
import QueEsDodilix from "@/components/QueEsDodilix";
import Impacto from "@/components/Impacto";
import Arquitectura from "@/components/Arquitectura";
import CTA from "@/components/CTA";
import Soluciones from "@/components/Soluciones";
import GestorOmnicanal from "@/components/GestorOmnicanal";
import TecnologiaSeguridad from "@/components/TecnologiaSeguridad";
import Contacto from "@/components/Contacto";
import SobreDodilix from "@/components/SobreDodilix";

export default function Home() {
  return (
    <main style={{ background: "#060612", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <Problematica />
      <QueEsDodilix />
      <Impacto />
      <Arquitectura />
      <CTA />
      <Soluciones />
      <GestorOmnicanal />
      <TecnologiaSeguridad />
      <Contacto />
      <SobreDodilix />
    </main>
  );
}
