"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface Pizza {
  name: string;
  description: string;
  price: number;
}

interface Category {
  name: string;
  items: Pizza[];
}

const categories: Category[] = [
  {
    name: "Tradicionais",
    items: [
      { name: "Mussarela", description: "Queijo mussarela de qualidade premium", price: 30 },
      { name: "Calabresa", description: "Calabresa defumada com cebola e azeitonas", price: 35 },
      { name: "Portuguesa", description: "Molho, mussarela, calabresa, cebola, tomate, pimentão, ovo, azeitona e orégano", price: 40 },
      { name: "Frango com Catupiry", description: "Frango desfiado com catupiry cremoso", price: 40 },
      { name: "4 Queijos", description: "Mussarela, provolone, parmesão e catupiry", price: 42 },
      { name: "Milho", description: "Molho, mussarela, milho, azeitona e orégano", price: 30 },
      { name: "Queijo e Presunto", description: "Molho, mussarela, presunto e orégano", price: 30 },
      { name: "Marguerita", description: "Molho, mussarela, tomate, manjericão fresco e orégano", price: 30 },
      { name: "Napolitana", description: "Molho, mussarela, presunto, tomate, cebola, azeitona e orégano", price: 35 },
      { name: "Bacon", description: "Molho, mussarela, bacon, milho e orégano", price: 35 },
      { name: "Calabresa com Cheddar", description: "Molho, mussarela, calabresa, azeitona, cebola, cheddar e orégano", price: 40 },
      { name: "Calabresa com Catupiry", description: "Molho, mussarela, calabresa, cebola, catupiry e orégano", price: 40 },
      { name: "Vegetariana", description: "Molho, mussarela, catipiry, palmito, cebola, tomate, pimentão, azeitona e orégano", price: 40 },
      { name: "Frango com Cheddar", description: "Molho, mussarela, frango, azeitona, cheddar e orégano", price: 40 },
      { name: "Calabacon", description: "Molho, mussarela, calabresa, bacon, cebola, azeitona e orégano", price: 42 },
      { name: "Franbacon", description: "Molho, mussarela, frango, bacon e orégano", price: 42 },
      { name: "Frango com Palmito", description: "Molho, mussarela, palmito, frango, tomate, cebola, azeitona e orégano", price: 45 },
      { name: "Moda da Casa", description: "Molho, mussarela, frango, milho, calabresa, bacon, azeitona e orégano", price: 45 },
      { name: "Carne de Sol", description: "Molho, mussarela, carne de sol, cebola, catupiry e orégano", price: 45 },
      { name: "5 Queijos", description: "Molho, mussarela, catupiry, cheddar, parmesão, provolone e orégano", price: 45 },
    ],
  },
  {
    name: "Premium",
    items: [
      { name: "Camarão com Polenguinho", description: "Camarões frescos com polenguinho cremoso", price: 60 },
      { name: "Caviar do Sertão", description: "Carne de sol com queijo coalho e cream cheese", price: 60 },
      { name: "Mineirinha Apimentada", description: "Molho, mussarela, linguiça fina suína com pimenta, queijo coalho, cebola e azeitona", price: 60 },
      { name: "Mineirinha sem Pimenta", description: "Molho, mussarela, linguiça fina suína, queijo coalho, cebola e azeitona", price: 60 },
      { name: "Lombo Suíno Assado com Truffles", description: "Molho especial, mussarela, lombo assado, cebola e batata truffles", price: 60 },
      { name: "Ouro Branco", description: "Creme de leite, mussarela, chocolate, ouro branco e cereja", price: 60 },
      { name: "Pamonha com Coco", description: "Creme de leite, mussarela, creme de milho, pamonha, coco ralado e leite condensado", price: 60 },
    ],
  },
  {
    name: "Doces",
    items: [
      { name: "Prestígio", description: "Chocolate com coco ralado", price: 35 },
      { name: "Morango com Nutella", description: "Morangos frescos com Nutella", price: 40 },
      { name: "Banana com Açúcar e Canela", description: "Creme de leite, mussarela, banana, açúcar e canela", price: 30 },
      { name: "Banana com Chocolate", description: "Creme de leite, mussarela, banana e chocolate", price: 35 },
      { name: "Chocolate", description: "Creme de leite, mussarela e chocolate", price: 30 },
      { name: "Beijinho", description: "Creme de leite, mussarela, leite condensado e coco", price: 35 },
      { name: "Banana com Nutella", description: "Creme de leite, mussarela, banana e nutella", price: 35 },
      { name: "Morango com Chocolate", description: "Creme de leite, mussarela, morango e chocolate", price: 40 },
    ],
  },
  {
    name: "Bordas",
    items: [
      { name: "Catupiry", description: "Borda recheada com catupiry", price: 8 },
      { name: "Cheddar", description: "Borda recheada com cheddar", price: 8 },
      { name: "Chocolate", description: "Borda recheada com chocolate", price: 10 },
      { name: "Chocolate Branco", description: "Borda recheada com chocolate branco", price: 5 },
      { name: "Nutella", description: "Borda recheada com nutella", price: 7 },
      { name: "Queijo", description: "Borda recheada com queijo", price: 7 },
      { name: "Requeijão", description: "Borda recheada com requeijão", price: 7 },
    ],
  },
  {
    name: "Refrigerantes",
    items: [
      { name: "Coca-Cola 2L", description: "Refrigerante tradicional", price: 12 },
      { name: "Guaraná 2L", description: "Refrigerante nacional", price: 10 },
      { name: "Sprite 2L", description: "Refrigerante de limão", price: 10 },
      { name: "Fanta Uva 2L", description: "Refrigerante de uva", price: 10 },
      { name: "Fanta Laranja 2L", description: "Refrigerante de laranja", price: 10 },
      { name: "Guaraná Antarctica 1.5L", description: "Refrigerante nacional", price: 7 },
      { name: "Guaraná Antarctica Zero 1.5L", description: "Refrigerante nacional zero", price: 7 },
      { name: "Guaraná Kuat 1.5L", description: "Refrigerante nacional", price: 7 },
      { name: "Coca-Cola Zero 1.5L", description: "Refrigerante tradicional zero", price: 9 },
      { name: "Guaraná Antarctica 600ML", description: "Refrigerante nacional", price: 6 },
      { name: "Coca-Cola Zero 600ML", description: "Refrigerante tradicional zero", price: 6 },
      { name: "Fanta Laranja 600ML", description: "Refrigerante de laranja", price: 6 },
      { name: "Fanta Uva 600ML", description: "Refrigerante de uva", price: 6 },
    ],
  },
];

export default function Cardapio() {
  const [activeCategory, setActiveCategory] = useState(0);

  const handleWhatsAppOrder = (pizzaName: string) => {
    const message = encodeURIComponent(`Olá! Quero pedir a pizza ${pizzaName}`);
    window.open(`https://wa.me/5561995279317?text=${message}`, "_blank");
  };

  return (
    <section id="cardapio" className="py-20 bg-pizza-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nosso <span className="text-pizza-red">Cardápio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Descubra nossas pizzas artesanais feitas com ingredientes selecionados
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeCategory === index
                  ? "bg-pizza-red text-white scale-105"
                  : "bg-pizza-charcoal text-gray-300 hover:bg-pizza-red/20"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories[activeCategory].items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-pizza-charcoal rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-800 hover:border-pizza-red/50"
            >
              <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-pizza-gold">
                  R$ {item.price.toFixed(2)}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleWhatsAppOrder(item.name)}
                  className="bg-pizza-red hover:bg-red-700 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2 transition-colors duration-200"
                >
                  <MessageCircle size={18} />
                  Pedir
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
