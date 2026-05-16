"use client";

import { useState } from "react";
import { CartProvider } from "@/contexts/CartContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Cardapio from "@/components/Cardapio";
import Sobre from "@/components/Sobre";
import Horarios from "@/components/Horarios";
import Localizacao from "@/components/Localizacao";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CartSidebar from "@/components/CartSidebar";

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <main className="min-h-screen bg-pizza-dark">
        <Navbar onOpenCart={() => setIsCartOpen(true)} />
        <Hero />
        <Cardapio />
        <Sobre />
        <Horarios />
        <Localizacao />
        <Footer />
        <WhatsAppButton />
        <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </main>
    </CartProvider>
  );
}
