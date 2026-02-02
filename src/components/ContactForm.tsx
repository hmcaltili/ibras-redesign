"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ContactFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="absolute top-full right-0 z-50 w-[400px] pt-4"
                >
                    <div className="relative">
                        {/* Close Button - Outside or Corner */}
                        <button
                            onClick={onClose}
                            className="absolute -top-3 -right-3 bg-ibras-red text-white p-2 rounded-full shadow-lg hover:bg-red-700 transition-colors z-50"
                        >
                            <X size={20} />
                        </button>

                        <form className="bg-[#111] p-6 rounded-xl border border-white/10 shadow-2xl relative">
                            <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">İletişim Formu</h3>

                            <div className="space-y-5">
                                <div className="relative group">
                                    <input
                                        type="text"
                                        placeholder=" "
                                        className="w-full bg-transparent border-b border-gray-700 text-white py-2 focus:outline-none focus:border-ibras-red transition-colors peer text-sm"
                                    />
                                    <label className="absolute left-0 top-2 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-ibras-red peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm cursor-text pointer-events-none">
                                        <span className="text-ibras-red mr-1">*</span> Adınız Soyadınız
                                    </label>
                                </div>

                                <div className="relative group">
                                    <input
                                        type="email"
                                        placeholder=" "
                                        className="w-full bg-transparent border-b border-gray-700 text-white py-2 focus:outline-none focus:border-ibras-red transition-colors peer text-sm"
                                    />
                                    <label className="absolute left-0 top-2 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-ibras-red peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm cursor-text pointer-events-none">
                                        <span className="text-ibras-red mr-1">*</span> E-Posta Adresiniz
                                    </label>
                                </div>

                                <div className="relative group">
                                    <input
                                        type="tel"
                                        placeholder=" "
                                        className="w-full bg-transparent border-b border-gray-700 text-white py-2 focus:outline-none focus:border-ibras-red transition-colors peer text-sm"
                                    />
                                    <label className="absolute left-0 top-2 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-ibras-red peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm cursor-text pointer-events-none">
                                        Telefon Numaranız
                                    </label>
                                </div>

                                <div className="relative group">
                                    <textarea
                                        rows={3}
                                        placeholder=" "
                                        className="w-full bg-transparent border border-gray-700 text-white p-2 rounded-sm focus:outline-none focus:border-ibras-red transition-colors peer resize-none text-sm"
                                    />
                                    <label className="absolute left-2 top-2 text-gray-500 transition-all peer-focus:-top-5 peer-focus:left-0 peer-focus:text-xs peer-focus:text-ibras-red peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm cursor-text pointer-events-none bg-[#111] px-1">
                                        Mesajınız
                                    </label>
                                </div>
                            </div>

                            <div className="flex justify-end pt-6">
                                <button className="w-full bg-ibras-red hover:bg-red-700 text-white py-3 font-bold tracking-wide rounded-sm transition-all shadow-lg shadow-ibras-red/20 hover:shadow-ibras-red/40">
                                    GÖNDER
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
