import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, Pin, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function MobileFooter() {
    return (
        <footer className="bg-[#050505] border-t border-white/10 pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-6">

                {/* Mobile Stacked Layout */}
                <div className="flex flex-col gap-10 mb-10">

                    {/* Social Media */}
                    <div className="flex justify-center gap-8">
                        {[<Facebook key="fb" size={24} />, <Instagram key="ig" size={24} />, <Linkedin key="li" size={24} />, <Youtube key="yt" size={24} />].map((icon, i) => (
                            <a key={i} href="#" className="text-gray-400 hover:text-ibras-red transition-all duration-300">
                                {icon}
                            </a>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6 text-center">
                        <h3 className="text-white font-bold text-lg">İletişim</h3>
                        <ul className="space-y-4 flex flex-col items-center">
                            <li className="flex flex-col items-center gap-2 text-sm text-gray-400">
                                <MapPin className="w-5 h-5 text-ibras-red" />
                                <span>Ahmet Vefik Paşa OSB Mah.<br />Taşpınar Sk. No:3/1<br />Kestel-BURSA/TÜRKİYE</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-400">
                                <Phone className="w-5 h-5 text-ibras-red" />
                                <span>+90 224 371 22 66</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-400">
                                <Mail className="w-5 h-5 text-ibras-red" />
                                <span>ibras@ibras.com.tr</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="w-full">
                        <h4 className="text-white text-sm font-bold mb-4 text-center">E-BÜLTEN | HABERDAR OL</h4>
                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="E-Posta Adresi"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-ibras-red w-full text-center"
                            />
                            <button className="bg-ibras-red hover:bg-red-700 text-white px-4 py-3 rounded-lg text-sm font-bold transition-all w-full">
                                KAYIT OL
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col items-center gap-6 text-xs text-gray-500 text-center">
                    <p>© 2026 IBRAS. Tüm hakları saklıdır.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#" className="hover:text-white">Gizlilik</a>
                        <a href="#" className="hover:text-white">Kullanım Şartları</a>
                        <a href="#" className="hover:text-white">KVKK</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
