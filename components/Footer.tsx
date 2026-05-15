"use client";

import { motion } from "framer-motion";
import { Pizza, Phone, CreditCard, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-pizza-dark py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Pizza className="w-8 h-8 text-pizza-red" />
              <span className="text-2xl font-bold text-white">
                Pizzaria D&apos;Limas
              </span>
            </div>
            <p className="text-gray-400">
              A melhor pizzaria da região com pizzas artesanais e ingredientes
              premium.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5 text-pizza-gold" />
                <span>(61) 99527-9317</span>
              </div>
              <a
                href="https://wa.me/5561995279317"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pizza-red hover:text-red-400 transition-colors"
              >
                Pedir no WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Endereço</h3>
            <div className="flex items-start gap-2 text-gray-400">
              <MapPin className="w-5 h-5 text-pizza-gold mt-1" />
              <span>
                CEILÂNDIA NORTE QNQ 04 CONJUNTO 1 LOTE 26
                <br />
                Ceilândia, Brasília - DF
                <br />
                72260-401, Brazil
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Pagamento</h3>
            <div className="flex items-center gap-2 text-gray-400">
              <CreditCard className="w-5 h-5 text-pizza-gold" />
              <span>PIX: 054-340-277-01</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-gray-500">
            © {new Date().getFullYear()} Pizzaria D&apos;Limas. Todos os direitos
            reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
