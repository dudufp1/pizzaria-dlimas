"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cart, removeFromCart, updateQuantity, getTotal, clearCart } = useCart();
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;

    let message = "Olá! Quero fazer o seguinte pedido:\n\n";

    cart.forEach((item) => {
      const emoji = item.category === "Doces" ? "🍰" : item.category === "Refrigerantes" ? "🥤" : "🍕";
      message += `${emoji} ${item.quantity}x ${item.name} - R$${(item.price * item.quantity).toFixed(2)}\n`;
    });

    message += `\n💰 Total: R$${getTotal().toFixed(2)}\n\n`;
    message += `Meu nome: ${customerName || "Não informado"}\n`;
    message += `Endereço: ${customerAddress || "Não informado"}\n`;
    message += `Forma de pagamento: ${paymentMethod || "Não informado"}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5561995279317?text=${encodedMessage}`, "_blank");
    
    clearCart();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-pizza-charcoal shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="w-6 h-6 text-pizza-red" />
                  <h2 className="text-2xl font-bold text-white">Carrinho</h2>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </motion.button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">Seu carrinho está vazio</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-pizza-dark p-4 rounded-xl border border-gray-800"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <h3 className="text-white font-semibold mb-1">{item.name}</h3>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => removeFromCart(item.name)}
                            className="text-red-500 hover:text-red-400 transition-colors ml-2"
                          >
                            <Trash2 size={18} />
                          </motion.button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.name, item.quantity - 1)}
                              className="bg-pizza-red/20 hover:bg-pizza-red/40 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                            >
                              <Minus size={16} />
                            </motion.button>
                            <span className="text-white font-semibold w-8 text-center">
                              {item.quantity}
                            </span>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.name, item.quantity + 1)}
                              className="bg-pizza-red/20 hover:bg-pizza-red/40 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                            >
                              <Plus size={16} />
                            </motion.button>
                          </div>
                          <span className="text-pizza-gold font-bold">
                            R$ {(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="border-t border-gray-800 pt-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-lg">Total</span>
                      <span className="text-2xl font-bold text-pizza-gold">
                        R$ {getTotal().toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="text-gray-400 text-sm mb-2 block">Seu Nome</label>
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Digite seu nome"
                        className="w-full bg-pizza-dark border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pizza-red transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm mb-2 block">Endereço</label>
                      <input
                        type="text"
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        placeholder="Digite seu endereço"
                        className="w-full bg-pizza-dark border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pizza-red transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm mb-2 block">Forma de Pagamento</label>
                      <select
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-full bg-pizza-dark border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pizza-red transition-colors"
                      >
                        <option value="">Selecione</option>
                        <option value="PIX">PIX</option>
                        <option value="Dinheiro">Dinheiro</option>
                        <option value="Cartão">Cartão</option>
                      </select>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle size={20} />
                    Finalizar pedido no WhatsApp
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={clearCart}
                    className="w-full mt-3 bg-pizza-dark border border-gray-800 hover:border-pizza-red/50 text-gray-400 hover:text-white py-3 rounded-xl font-semibold transition-colors"
                  >
                    Limpar Carrinho
                  </motion.button>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
