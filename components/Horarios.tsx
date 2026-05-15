"use client";

import { motion } from "framer-motion";
import { Clock, XCircle, CheckCircle } from "lucide-react";

export default function Horarios() {
  const schedule = [
    { day: "Segunda", hours: "Fechado", isOpen: false },
    { day: "Terça a Quinta", hours: "18h às 23h", isOpen: true },
    { day: "Sexta e Sábado", hours: "18h às 23h", isOpen: true },
    { day: "Domingo", hours: "18h às 23h", isOpen: true },
  ];

  return (
    <section id="horarios" className="py-20 bg-pizza-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos <span className="text-pizza-red">Horários</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estamos prontos para atender você nos melhores horários
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-pizza-charcoal rounded-2xl p-8 shadow-lg border border-gray-800"
          >
            <div className="flex items-center justify-center mb-8">
              <Clock className="w-12 h-12 text-pizza-gold mr-4" />
              <h3 className="text-2xl font-bold text-white">Horário de Funcionamento</h3>
            </div>

            <div className="space-y-4">
              {schedule.map((item, index) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-pizza-dark border border-gray-700 hover:border-pizza-red/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    {item.isOpen ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-500" />
                    )}
                    <span className="text-xl font-semibold text-white">{item.day}</span>
                  </div>
                  <span
                    className={`text-lg font-semibold ${
                      item.isOpen ? "text-pizza-gold" : "text-red-500"
                    }`}
                  >
                    {item.hours}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-4 bg-pizza-red/10 rounded-xl border border-pizza-red/30 text-center"
            >
              <p className="text-gray-300">
                🍕 Pedidos antecipados podem ser feitos pelo WhatsApp
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
