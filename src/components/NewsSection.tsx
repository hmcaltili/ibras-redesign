"use client";

import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function NewsSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [mobileActiveIndex, setMobileActiveIndex] = useState<number | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth >= 768) {
                setMobileActiveIndex(null);
                return;
            }

            let closestIndex = null;
            let closestDistance = Infinity;

            // Center of the scroll container
            const container = scrollContainerRef.current;
            if (!container) return;

            const containerCenter = container.getBoundingClientRect().left + container.clientWidth / 2;

            cardRefs.current.forEach((card, index) => {
                if (!card) return;
                const rect = card.getBoundingClientRect();
                const cardCenter = rect.left + rect.width / 2;
                const distance = Math.abs(containerCenter - cardCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            setMobileActiveIndex(closestIndex);
        };

        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll, { passive: true });
        }
        window.addEventListener('resize', handleScroll);

        // Initial check
        handleScroll();

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const rawNews = [
        {
            title: "Babalar Günü Etkinliği",
            date: "13.06.2025",
            summary: "Babalar Günü'nü çalışanlarımızla birlikte kutlayarak, aile olmanın mutluluğunu paylaştık.",
            image: "/images/2025-06-13-babalar-gunu-etkinligi_1750776349.jpg"
        },
        {
            title: "Karaoke Etkinliği",
            date: "30.05.2025",
            summary: "Eğlenceli anlar yaşadığımız Karaoke etkinliğimizde müziğin ritmine kapılarak stres attık.",
            image: "/images/2025-05-30-karaoke_1750776172.jpg"
        },
        {
            title: "Masa Tenisi Turnuvası",
            date: "28.05.2025",
            summary: "Türkiye Kurumlararası Masa Tenisi Turnuvası'na katılarak takım ruhumuzu ve sportif başarımızı sergiledik.",
            image: "/images/2025-05-28-masa-tenisi-turnuvasi_1750775997.jpg"
        },
        {
            title: "Anneler Günü Kutlaması",
            date: "09.05.2025",
            summary: "Anneler Günü vesilesiyle çalışan annelerimizi onurlandırdık ve bu özel günü birlikte kutladık.",
            image: "/images/2025-05-09-anneler-gunu-etkinligi_1750775510.jpg"
        },
        {
            title: "İznik Ultra Maratonu",
            date: "20.04.2025",
            summary: "Sınırları zorladığımız İznik Ultra Maratonu'na katılarak dayanıklılığımızı ve azmimizi gösterdik.",
            image: "/images/2025-04-20-iznik-ultra-maratonu_1750775339.jpg"
        },
        {
            title: "Kıdem Ödülleri Töreni",
            date: "17.04.2025",
            summary: "Şirketimize değer katan uzun süreli çalışanlarımıza kıdem ödüllerini takdim ederek teşekkür ettik.",
            image: "/images/2025-04-17-kidem-odul-toreni_1750775102.jpg"
        },
        {
            title: "Kaizen ve Öneri Ödülleri",
            date: "17.04.2025",
            summary: "Sürekli iyileştirme kültürümüzü destekleyen Kaizen ve öneri ödüllerimizi sahipleriyle buluşturduk.",
            image: "/images/2025-04-17-kaizen-oner-odulleri_1750774978.jpg"
        },
        {
            title: "Kadınlar Günü Etkinliği",
            date: "07.03.2025",
            summary: "8 Mart Dünya Kadınlar Günü'nde kadın çalışanlarımızın gücünü ve emeğini kutladık.",
            image: "/images/2025-03-07-kadinlar-gunu-etkinligi_1750774528.jpg"
        },
        {
            title: "LODER Ziyareti",
            date: "05.03.2025",
            summary: "Lösemili Çocuklar Derneği (LODER) ziyaret edilerek, çocukların tedavi süreçlerine destek olduk.",
            image: "/images/2025-03-05-loder-ziyareti_1750774398.jpg"
        },
        {
            title: "Bilgi Yarışması",
            date: "28.02.2025",
            summary: "Düzenlediğimiz bilgi yarışması ile hem eğlendik hem de bilgilerimizi tazeledik.",
            image: "/images/2025-02-28-kahve-bahane-bilgi-yarismasi_1750774263.jpg"
        },
        {
            title: "Tiyatro Etkinliği",
            date: "21.12.2024",
            summary: "Sanata verdiğimiz değeri göstererek hep birlikte tiyatro etkinliğine katıldık.",
            image: "/images/2024-12-21-tiyatro-etkinligi_1750774106.jpg"
        },
        {
            title: "İnovasyon Ödülü",
            date: "05.12.2024",
            summary: "Yenilikçi çalışmalarımızla sektörde fark yaratarak İnovasyon Ödülü'ne layık görüldük.",
            image: "/images/2024-12-05-yenilesim-odul-toreni_1750774001.jpg"
        },
        {
            title: "Kahve Etkinliğinde Buluştuk",
            date: "29.11.2024",
            summary: "Düzenlediğimiz Kahve Etkinliği'nde tüm İbraş çalışanları olarak bir araya gelerek keyifli anlar paylaştık.",
            image: "/images/2024-11-29-kahve-bahane_1750773737.jpg"
        },
        {
            title: "Çocuklara Kitap Bağışı",
            date: "23.10.2024",
            summary: "Geleceğimiz olan çocuklara kitap ve oyuncak bağışında bulunarak onların eğitimine katkı sağladık.",
            image: "/images/2024-10-23-kitap-okuma-saati_1750773490.jpg"
        },
        {
            title: "Sosyal Sorumluluk Koşusuna Katıldık",
            date: "06.10.2024",
            summary: "Lösemi tedavisi gören çocuklar için düzenlenen Eker I Run yardım koşusunda yerimizi aldık ve iyilik için koştuk.",
            image: "/images/2024-10-06-eker-i-run-kosusu_1750773345.jpg"
        },
        {
            title: "HEPAD Ziyareti",
            date: "11.09.2024",
            summary: "Sevimli dostlarımızı yalnız bırakmadık. HEPAD ziyaretimizde barınak hayvanlarına mama desteği sağladık.",
            image: "/images/2024-09-11-hepad-barinaklarin-teslim-edilmesi_1750772629.jpg"
        },
        {
            title: "Huzurevi Ziyaretimiz",
            date: "16.07.2024",
            summary: "Büyüklerimizi unutmadık. Huzurevi ziyaretimizle onlara moral olduk ve tecrübelerinden ilham aldık.",
            image: "/images/2024-07-16-down-kardesligi-dernegi-ziyareti_1725882886.jpg"
        },
        {
            title: "Çevre Etkinliği",
            date: "05.06.2024",
            summary: "Daha temiz bir gelecek için çevre temizliği etkinliği düzenledik ve doğaya katkıda bulunduk.",
            image: "/images/2024-06-05-cop-toplama-cevre-gunu_1725880628.jpg"
        }
    ];

    // Generate ~50 items by cycling
    const news = Array.from({ length: 50 }).map((_, i) => ({
        ...rawNews[i % rawNews.length],
        id: i
    }));

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const isMobile = window.innerWidth < 768;
            const itemWidth = isMobile ? 320 : scrollContainerRef.current.clientWidth / 3;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -itemWidth : itemWidth,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="min-h-screen snap-start snap-always flex flex-col justify-center items-center bg-[#0a0a0a] relative py-32 overflow-hidden">
            <div className="w-full max-w-[1400px] flex flex-col items-center justify-center relative z-10 px-4">

                {/* Section Header */}
                <div className="mb-12 text-center relative z-20 pointer-events-none">
                    <span className="text-[#E30613] font-mono text-xs tracking-widest uppercase mb-3 block">Haberler</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Güncel Kalmaya <br className="hidden md:block" /> Devam Ediyoruz
                    </h2>
                </div>

                {/* Carousel Container */}
                <div className="relative w-full flex items-center gap-4">

                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#E30613] hover:border-[#E30613] transition-all duration-300 backdrop-blur-sm shadow-xl z-30 shrink-0 hidden md:flex cursor-pointer"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Draggable/Scrollable List */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 overflow-x-auto no-scrollbar py-8 w-full snap-x snap-mandatory"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {news.map((item, i) => (
                            <motion.div
                                key={i}
                                ref={(el) => { cardRefs.current[i] = el; }}
                                className={`relative h-[340px] rounded-xl border overflow-hidden shrink-0 group snap-center bg-[#0a0a0a] transition-all duration-300 group-[.mobile-active]:-translate-y-1 ${mobileActiveIndex === i ? 'mobile-active border-[#E30613]' : 'border-white/10 hover:border-[#E30613]'}`}
                                style={{
                                    width: 'calc(33.333% - 10px)',
                                    minWidth: '300px'
                                }}
                                whileHover={{ y: -5 }}
                            >
                                {/* Background Image with Dark Filter */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-[.mobile-active]:scale-110"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                />
                                {/* Dark overlay to dim brightness as requested */}
                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 group-[.mobile-active]:bg-black/50 transition-opacity duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 group-hover:opacity-100 group-[.mobile-active]:opacity-100 transition-opacity duration-300" />

                                {/* Content Wrapper */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end items-start text-left">

                                    {/* Default Visible: Date & Title */}
                                    <div className="w-full transform transition-all duration-300 group-hover:-translate-y-2 group-[.mobile-active]:-translate-y-2">
                                        <div className="flex items-center gap-2 text-[#E30613] text-xs font-mono mb-2">
                                            <Calendar size={14} />
                                            <span>{item.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white leading-tight line-clamp-2 drop-shadow-md group-hover:text-white/90 group-[.mobile-active]:text-white/90">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Hover Reveal: Summary & Button */}
                                    <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-[.mobile-active]:h-auto group-[.mobile-active]:opacity-100 overflow-hidden transition-all duration-500 ease-in-out">
                                        <div className="pt-4 space-y-4">
                                            <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                                                {item.summary}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <button
                        onClick={() => scroll('right')}
                        className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#E30613] hover:border-[#E30613] transition-all duration-300 backdrop-blur-sm shadow-xl z-30 shrink-0 hidden md:flex cursor-pointer"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Mobile Navigation Arrows */}
                <div className="flex md:hidden justify-center items-center gap-8 mt-6 w-full relative z-30">
                    <button
                        onClick={() => scroll('left')}
                        className="pointer-events-auto p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#E30613] hover:border-[#E30613] transition-all duration-300 backdrop-blur-sm shadow-xl"
                    >
                        <ChevronLeft size={28} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="pointer-events-auto p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#E30613] hover:border-[#E30613] transition-all duration-300 backdrop-blur-sm shadow-xl"
                    >
                        <ChevronRight size={28} />
                    </button>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute inset-0 bg-radial-gradient from-[#E30613]/5 to-transparent pointer-events-none" />

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}