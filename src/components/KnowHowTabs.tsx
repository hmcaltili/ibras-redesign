"use client";

import { useState, useEffect } from "react";
import { Settings, Factory, FlaskConical, ClipboardCheck, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
    {
        id: "processing",
        label: "İşleme",
        icon: Settings,
        title: "Kalıp İşleme Teknolojileri",
        description: `İbraş Kalıp Departmanı iki birimden oluşmakta olup, tüm ürün yelpazesi için gerekli olan kauçuk ve plastik işleme kalıp ve ekipmanları kendi bünyesinde üretme kabiliyetine sahiptir.

Parça üretimi için gerekli olan kalıplar, kalıp departmanı tarafından tasarlanmaktadır. Kalıp optimizasyonu için “Moldflow analizi” yapılmaktadır.

Müşteri gereksinimlerini mükemmel bir şekilde karşılanması ve ürün kalitesinin en üst düzeyde korunması için kalıplara periyodik bakım yapılır.

Kendi bünyemizde makine, alet, ekipman imalatımız, müşterilerimiz için özelleştirilmiş çözümler geliştirmemizi sağlar.`,
        details: [
            "Gelişmiş CAD/CAM Entegrasyonu",
            "Yüksek Hassasiyetli CNC İşleme",
            "Moldflow (Kalıp Akış) Analizi",
            "Hızlı Prototipleme"
        ]
    },
    {
        id: "production",
        label: "Üretim",
        icon: Factory,
        title: "Global Üretim Standartları",
        description: (
            <>
                Akışkan Transfer Sistemi parçaları üreticisi olarak İbraş, müşteri standart ve kalite beklentilerine uygun ürünler üretmektedir. Uzun yıllara dayanan tecrübemiz, yetkin çalışanlarımız ve tedarikçilerimiz yardımıyla üretim süreçlerimizi sürekli iyileştiriyor, prototip üretimden seri üretime kadar çok çeşitli süreçleri kullanarak müşterilerimize en uygun çözümü sunmaya çalışıyoruz.
                <br /><br />
                <strong className="text-white text-lg block mb-2">Kauçuk Karışımı</strong>
                Daha iyi performans gösteren, daha hafif ve daha yeşil bileşiklere yönelik artan talebi karşılamak için Ar-Ge ve Karışım üretim ekibimiz, uzun vadeli değer üretimi ve sürdürülebilirliğe odaklanarak müşteri taleplerine göre kauçuk karışımları geliştirir ve üretir.
                <br /><br />
                <strong className="text-white text-lg block mb-2">Ekstrüzyon</strong>
                Modüler sürekli ve kesintili ekstrüzyon hatlarımızda kauçuk hortum grubunda takviyeli ve takviyesiz ürünler üretebilmekteyiz. Üretim esnekliğimiz sayesinde çeşitli üretim miktarları için müşterilerimizin taleplerine olumlu cevap verebilmekte, prototip veya seri üretim yapabilmekteyiz. Plastik ekstrüzyon ile üretilen borularda tek katmanlı ve çok katmanlı çözümlerimizle birlikte farklı ürün gruplarına farklı standartlara uygun çözümler sunuyoruz. Sürdürülebilir termoplastik malzemeler kullanarak daha temiz mobilite için alternatif akışkan sistem parçaları geliştiriyoruz.
                <br /><br />
                <strong className="text-white text-lg block mb-2">Şişirme (Blow Molding)</strong>
                Araçlarda kullanılan metallerin plastiklerle değiştirilmesiyle, bir taraftan araç ağırlığı ve bileşen maliyetini azaltılırken aynı zamanda oldukça karmaşık geometriler üreterek yakıt tüketimini, ısı direncini, dayanıklılığı, kararlılığı ve güvenilirliği artırmak mümkündür. İbraş’ta 2D ve 3D şişirme tekniklerini kullanarak üretilen borular 80°C'den 230°C'ye kadar hava sistemi parçalarının tüm sıcaklık aralığını kapsar. Ibraş, PP, TPV veya PA gibi standart malzemelerden mamul kirli ve temiz hava borularının yanında, turbo boruları için yüksek sıcaklığa dayanıklı cam elyaf takviyeli PPS veya özel poliamid plastik malzemeleri işleyebilmektedir. Şişirme kalıplama, maliyet tasarrufu, yakıt tasarrufu, CO2 emisyonlarında azalma ve kalite iyileştirmeleri sağlar.

                <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="relative h-48 rounded-lg overflow-hidden border border-white/10 group">
                        <img src="/know how/üretim/production-10.jpg" alt="Üretim" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-transparent lg:bg-black/60 transition-opacity duration-500 group-hover:opacity-0" />
                    </div>
                    <div className="relative h-48 rounded-lg overflow-hidden border border-white/10 group">
                        <img src="/know how/üretim/production-4.jpg" alt="Üretim Hattı" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-transparent lg:bg-black/60 transition-opacity duration-500 group-hover:opacity-0" />
                    </div>
                    <div className="relative h-48 rounded-lg overflow-hidden border border-white/10 group">
                        <img src="/know how/üretim/tooling-1.jpg" alt="Kalıp İşleme" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-transparent lg:bg-black/60 transition-opacity duration-500 group-hover:opacity-0" />
                    </div>
                    <div className="relative h-48 rounded-lg overflow-hidden border border-white/10 group">
                        <img src="/know how/üretim/tooling-2.jpg" alt="Teknoloji" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-transparent lg:bg-black/60 transition-opacity duration-500 group-hover:opacity-0" />
                    </div>
                </div>
            </>
        ),
        details: []
    },
    {
        id: "rnd",
        label: "Ar-Ge",
        icon: FlaskConical,
        title: "Araştırma ve Geliştirme",
        description: `Kurumsal değerlerimiz aynı zamanda gelişim felsefemizi de yansıtır. İnsan ve Müşteri odaklı İşbirliği ve sürekli gelişme temelinde ilerliyoruz.

Tüm iş ortaklarımızla işbirliği içinde, dinamik ekibimiz ve tedarik zincirimizin avantajı ile sürdürülebilir mobilite ve endüstriyel akışkan sistemleri için yenilikçi çözümler tasarlıyor, geliştiriyor ve sunuyoruz.

Prototip üretimi, analiz, simülasyon ve test yeteneklerimiz ile müşterilerimize kıyaslama aşamasından başlayarak tüm ürün yaşam döngüsü boyunca mühendislik hizmetleri sunuyoruz.`,
        details: [
            "Termoplastik, Elastomer ve Termoplastik Elastomer Ürün Çözümleri",
            "Müşteri Standartlarına Uygun Hibrit Malzemeler ve Prosesler İle Üretilen Sistemler ve Ambalaj Tasarımları",
            "Hızlı Prototipleme - Bilgisayar Destekli Tasarım (CAD)",
            "Bilgisayar Destekli Analiz (CAE)",
            "Analiz ve Test Hizmetleri"
        ]
    },
    {
        id: "testing",
        label: "Test",
        icon: ClipboardCheck,
        title: "Kalite Güvence ve Test",
        description: (
            <>
                Kendi bünyemizdeki makine, alet, ekipman imalatımız, müşterilerimiz için özelleştirilmiş çözümler geliştirmemizi sağlar.

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <div className="relative h-64 rounded-lg overflow-hidden border border-white/10 group">
                        <img src="/know how/test1/test-1.png" alt="Test 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-transparent lg:bg-black/60 transition-opacity duration-500 group-hover:opacity-0" />
                    </div>
                    <div className="relative h-64 rounded-lg overflow-hidden border border-white/10 group">
                        <img src="/know how/test1/test-2.png" alt="Test 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-transparent lg:bg-black/60 transition-opacity duration-500 group-hover:opacity-0" />
                    </div>
                    <div className="relative h-64 rounded-lg overflow-hidden border border-white/10 group">
                        <img src="/know how/test1/test-3(1).png" alt="Test 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-transparent lg:bg-black/60 transition-opacity duration-500 group-hover:opacity-0" />
                    </div>
                </div>
            </>
        ),
        details: []
    }
];

export default function KnowHowTabs() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [activeTab]);

    return (
        <section className="pt-0 pb-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar Navigation */}
                <div className="sticky top-20 z-40 bg-[#0a0a0a] border-b border-white/10 px-4 py-1 lg:p-0 lg:static lg:bg-transparent lg:border-none lg:col-span-1 flex flex-row lg:flex-col gap-3 lg:gap-0 lg:space-y-2 overflow-x-auto lg:overflow-visible h-fit -mx-0 lg:mx-0 scrollbar-hide snap-x">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-auto lg:w-full flex-shrink-0 snap-center whitespace-nowrap text-left px-6 py-4 rounded-xl flex items-center gap-4 transition-all duration-300 font-medium border ${activeTab === tab.id
                                ? "bg-[#E30613] text-white border-[#E30613] shadow-lg shadow-[#E30613]/20"
                                : "bg-white/5 text-white border-white/10 hover:bg-white/10 backdrop-blur-sm"
                                }`}
                        >
                            <tab.icon className="w-5 h-5" />
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="lg:col-span-3 min-h-[500px] relative pt-0 lg:pt-0">
                    <AnimatePresence mode="wait">
                        {tabs.map((tab) => (
                            tab.id === activeTab && (
                                <motion.div
                                    key={tab.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 h-full"
                                >
                                    <div className="flex items-start justify-between mb-8">
                                        <div>
                                            <h2 className="text-3xl font-bold text-white mb-2">{tab.title}</h2>
                                            <div className="h-1 w-20 bg-[#E30613] rounded-full" />
                                        </div>
                                        <tab.icon className="w-16 h-16 text-white/10" />
                                    </div>

                                    <div className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-12 whitespace-pre-line">
                                        {tab.description}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {tab.details.map((detail, index) => (
                                            <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-black/20 border border-white/5 hover:border-[#E30613]/50 transition-colors group/item">
                                                <ChevronRight className="w-5 h-5 text-[#E30613] flex-shrink-0 group-hover/item:text-white transition-colors" />
                                                <span className="text-gray-200 font-medium">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}