import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Cardapio from "@/components/Cardapio";
import Sobre from "@/components/Sobre";
import Horarios from "@/components/Horarios";
import Localizacao from "@/components/Localizacao";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-pizza-dark">
      <Navbar />
      <Hero />
      <Cardapio />
      <Sobre />
      <Horarios />
      <Localizacao />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
