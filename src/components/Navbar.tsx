"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronRight, Globe } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import ContactForm from "./ContactForm";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close mobile menu if clicked outside
      if (isOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
      // Close language menu if clicked outside
      if (isLangOpen && langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, isLangOpen]);

  const languages = [
    { code: 'TR', label: 'Türkçe', flag: '🇹🇷' },
    { code: 'EN', label: 'English', flag: '🇬🇧' },
    { code: 'FR', label: 'Français', flag: '🇫🇷' },
    { code: 'DE', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'RU', label: 'Русский', flag: '🇷🇺' },
    { code: 'PL', label: 'Polski', flag: '🇵🇱' },
    { code: 'IT', label: 'Italiano', flag: '🇮🇹' },
  ];

  return (
    <>
      <nav ref={navRef} className="fixed top-0 w-full z-[9999] bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 relative">
            <div className="-ml-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0 flex-shrink-0">
              <Link href="/" className="flex items-center" onClick={() => window.scrollTo(0, 0)}>
                <Image
                  src="/logo.png"
                  alt="IBRAS Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {["Anasayfa", "Kurumsal", "Ürünler", "Know How", "Aftermarket"].map((item) => (
                  <Link
                    key={item}
                    href={
                      item === "Kurumsal" ? "/kurumsal" :
                        item === "Anasayfa" ? "/" :
                          item === "Ürünler" ? "/urunler" :
                            item === "Know How" ? "/know-how" :
                              item === "Aftermarket" ? "/aftermarket" :
                                `#${item.toLowerCase()}`
                    }
                    onClick={() => window.scrollTo(0, 0)}
                    className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-ibras-red transition-colors duration-400 ease-in-out"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div
                className="relative"
                onMouseEnter={() => setIsLangOpen(true)}
                onMouseLeave={() => setIsLangOpen(false)}
              >
                <button className="text-gray-300 hover:text-ibras-red transition-colors py-2">
                  <Globe size={20} />
                </button>
                {/* Desktop Dropdown */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ${isLangOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <div className="p-2 space-y-1">
                    {languages.map((lang) => (
                      <button key={lang.code} className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-left">
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="relative"
                onMouseEnter={() => setIsContactOpen(true)}
                onMouseLeave={() => setIsContactOpen(false)}
              >
                <button
                  className="bg-ibras-red hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 group"
                >
                  İletişim Formu
                  <ChevronRight size={16} className={`mt-[2px] transition-transform duration-300 ${isContactOpen ? 'rotate-90' : 'group-hover:rotate-90'}`} />
                </button>
                <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
              </div>
            </div>

            {/* Mobile Globe Icon */}
            <div ref={langRef} className="-mr-2 flex md:hidden relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md transition-colors focus:outline-none ${isLangOpen ? 'text-ibras-red' : 'text-gray-400 hover:text-white'}`}
              >
                <Globe size={24} />
              </button>

              {/* Mobile Dropdown */}
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50">
                  <div className="p-2 space-y-1">
                    {languages.map((lang) => (
                      <button key={lang.code} className="w-full flex items-center gap-3 px-3 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-left" onClick={() => setIsLangOpen(false)}>
                        <span className="text-xl">{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["Anasayfa", "Kurumsal", "Ürünler", "Know How", "Aftermarket"].map((item) => (
                <Link
                  key={item}
                  href={
                    item === "Kurumsal" ? "/kurumsal" :
                      item === "Anasayfa" ? "/" :
                        item === "Ürünler" ? "/urunler" :
                          item === "Know How" ? "/know-how" :
                            item === "Aftermarket" ? "/aftermarket" :
                              `#${item.toLowerCase().replace("ü", "u").replace("ş", "s").replace("ı", "i")}`
                  }
                  className="block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-ibras-red transition-colors duration-300"
                  onClick={() => {
                    setIsOpen(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

    </>
  );
}
