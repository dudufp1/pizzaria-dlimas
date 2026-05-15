"use client";

import { motion } from "framer-motion";
import { Award, Heart, Clock } from "lucide-react";

export default function Sobre() {
  const features = [
    {
      icon: Award,
      title: "Qualidade Premium",
      description: "Ingredientes selecionados e receitas tradicionais",
    },
    {
      icon: Heart,
      title: "Feito com Amor",
      description: "Cada pizza é preparada com dedicação e carinho",
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Seu pedido quentinho na hora certa",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-pizza-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre a <span className="text-pizza-red">Pizzaria D'Limas</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Uma história de paixão pela pizza e compromisso com a qualidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Nossa História
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              A Pizzaria D'Limas nasceu do sonho de oferecer pizzas autênticas
              com o sabor da tradição. Desde o início, nossa missão foi
              proporcionar experiências gastronômicas únicas através de
              ingredientes de qualidade e receitas que preservam o verdadeiro
              sabor da pizza.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Com dedicação e amor pelo que fazemos, conquistamos a confiança
              de nossos clientes e nos tornamos referência em pizzas artesanais
              na região.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-pizza-dark p-6 rounded-2xl border border-gray-800 hover:border-pizza-red/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-pizza-red/20 p-3 rounded-xl">
                    <feature.icon className="w-8 h-8 text-pizza-red" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
