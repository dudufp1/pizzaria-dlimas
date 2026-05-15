"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function Localizacao() {
  return (
    <section id="localizacao" className="py-20 bg-pizza-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossa <span className="text-pizza-red">Localização</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Venha nos visitar ou peça delivery
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-pizza-dark p-6 rounded-2xl border border-gray-800 hover:border-pizza-red/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-pizza-red/20 p-3 rounded-xl">
                  <MapPin className="w-8 h-8 text-pizza-red" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Endereço</h3>
                  <p className="text-gray-400">
                    CEILÂNDIA NORTE QNQ 04 CONJUNTO 1 LOTE 26
                    <br />
                    Ceilândia, Brasília - DF, 72260-401, Brazil
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-pizza-dark p-6 rounded-2xl border border-gray-800 hover:border-pizza-red/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-pizza-gold/20 p-3 rounded-xl">
                  <Navigation className="w-8 h-8 text-pizza-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Como Chegar</h3>
                  <p className="text-gray-400 mb-4">
                    Use o Google Maps para encontrar o melhor caminho até nós
                  </p>
                  <motion.a
                    href="https://www.google.com.br/maps/place/Pizzaria+D%E2%80%99Limas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-pizza-red hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200"
                  >
                    Abrir no Google Maps
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.123456789!2d-47.9292!3d-15.7801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e6b0e0e0e0e0e%3A0x0!2sCEIL%C3%82NDIA%20NORTE%20QNQ%2004%20CONJUNTO%201%20LOTE%2026%20-%20Ceil%C3%A2ndia%2C%20Bras%C3%ADlia%20-%20DF%2C%2072260-401%2C%20Brazil!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
