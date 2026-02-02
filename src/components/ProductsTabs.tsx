"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Thermometer, Wind, Droplet, Fuel, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
    {
        id: "heating-cooling",
        label: "Isıtma ve Soğutma Sistemleri",
        icon: Thermometer,
        title: "Isıtma ve Soğutma Sistemleri",
        description: (
            <>
                <p className="mb-4">
                    İbras, çeşitli ısıtma soğutma sistemleri geliştirir, tasarlar ve üretir. 40 yılı aşkın tecrübesiyle müşteri talebine göre düşük ve yüksek adetlerde plastik ve metal boru üretimi yapılabilmektedir. Montajlı ürünlere bağlantı elemanları, hızlı bağlantı elemanları, sıcaklık sensörleri eklenebilmektedir.
                </p>
                <p className="mb-4">
                    Ağır koşullar altında birçok kimyasala karşı dayanıklı mekanik koruma, ısı koruması, ısı yansıtma, gürültü sönümleme için manşonlar ve farklı malzeme, elyaf, plastik, kauçuk, metal, kompozit gibi çeşitli ara parçalar üretilmektedir.
                </p>
                <p className="mb-4">
                    İbraş, 3,5 bar basınca, 200 °C'ye kadar sıcaklık sağlayan araç teknolojisinin değişen gereksinimlerine göre sürekli olarak hortum ve boru yapıları geliştirmektedir.
                </p>
                <p className="mb-4">
                    Isıtma soğutma sisteminde kullanılan plastik borular kauçuk hortumlara göre daha hafiftir. Plastik borular sayesinde daha düşük yakıt tüketimi sağlar ve üretimin çevresel etkisi de azaltılabilir.
                </p>
                <p className="mb-6">
                    Yaylı kelepçe, vidalı kelepçe, paslanmaz tel kelepçe, kulaklı kelepçe, Visa® kelepçe gibi birçok alternatif bağlantılar müşteri istekleri ve spresifikasyonlarına göre kullanılmaktadır.
                </p>

                <ul className="list-disc pl-5 mb-8 text-gray-300 space-y-2">
                    <li>Kauçuk Hortum (Ekstrüzyon)</li>
                    <li>Kauçuk Sarma (Kalender) Hortum</li>
                    <li>Tek Katman Plastik Borular</li>
                    <li>Katmanlı Plastik Borular</li>
                    <li>İki Boyutlu Enjeksiyon Plastik Borular</li>
                    <li>Üç Boyutlu Enjeksiyon Plastik Borular</li>
                    <li>Üç Boyutlu Şişirme Plastik Borular</li>
                </ul>

                <div className="mt-6 hidden lg:flex gap-6">
                    <Image
                        src="/images/ürünler/heat/heating1.png"
                        alt="Isıtma Soğutma Sistemleri 1"
                        width={200}
                        height={128}
                        className="rounded-lg brightness-50 hover:brightness-100 transition-all duration-300 shadow-2xl"
                    />
                    <Image
                        src="/images/ürünler/heat/heating2.png"
                        alt="Isıtma Soğutma Sistemleri 2"
                        width={200}
                        height={128}
                        className="rounded-lg brightness-50 hover:brightness-100 transition-all duration-300 shadow-2xl"
                    />
                    <Image
                        src="/images/ürünler/heat/heating3.png"
                        alt="Isıtma Soğutma Sistemleri 3"
                        width={200}
                        height={128}
                        className="rounded-lg brightness-50 hover:brightness-100 transition-all duration-300 shadow-2xl"
                    />
                </div>
            </>
        ),
        details: []
    },
    {
        id: "air-management",
        label: "Hava Yönetim Sistemleri",
        icon: Wind,
        title: "Hava Yönetim Sistemleri",
        description: (
            <>
                <h3 className="text-xl font-bold text-white mb-4">Kirli/Temiz Hava Sistemleri</h3>
                <p className="mb-8">
                    Motorun hava yönetimi, Müşterilere için optimum çözüm geliştirmek için kauçuk, fiber hortumlar ve plastik kanallardan oluşan, atmosferden başlayıp, hava filtresine giden, kirli hava kanalları ile birbirine bağlanan sistemdir. Hava filtresi ile turbo şarj arasında -150 mbar vakum basıncına dayanabilen Temiz Hava kanalları kullanılmaktadır. Kauçuk hortumlar ve plastik kanallar, vakum direnci, montaj esnekliği ve titreşim direnci açısından tasarlanmıştır. Müşteri gereksinimlerine uygun olarak (-40) ile (+180 oC) arasında elastomer ve termplastik çözümler mevcuttur.
                </p>

                <h3 className="text-xl font-bold text-white mb-4">Şarj Havası Hattı Sistemleri</h3>
                <p className="mb-4">
                    Yüklenen hava, plastik, metal kanallar veya lastik hortumlar aracılığıyla turbo şarj cihazından hava emme manifolduna şarj havası soğutucusu üzerinden dolaşır. Intercooler giriş ve çıkış kanalları 220 °C'ye kadar kullanılabilir, 3,5 bar basınca dayanır.
                </p>

                <ul className="list-disc pl-5 mb-8 text-gray-300 space-y-2">
                    <li>Ekstrüde Şarj Hava Hortumları</li>
                    <li>Sargılı Şarj Hava Hortumları</li>
                    <li>3D Şişirme Kalıplı Kanallar</li>
                    <li>2D Enjeksiyon Kalıplı Kanallar</li>
                    <li>3D Enjeksiyon Kalıplı Kanallar</li>
                </ul>

                <h3 className="text-xl font-bold text-white mb-4">Plastik Sistem Bileşenleri</h3>
                <p className="mb-4">
                    Metallerin plastiklerle değiştirilmesiyle, araç ağırlığını azaltmak, bileşen maliyetini azaltmak ve ayrıca oldukça karmaşık geometriler üreterek yakıt tüketimini, ısı direncini, dayanıklılığı, kararlılığı ve güvenilirliği artırmak mümkündür. İbraş şişirme kanalları, 2D şişirme ve 3D emme şişirme tekniklerini kullanarak 80°C'den 230°C'ye kadar hava sistemi parçalarının tüm sıcaklık aralığını kapsar. İbraş, kirli veya temiz hava kanalları için PP, TPV veya PA gibi standart malzemeleri, şarj hava kanalları için cam takviyeli PPS veya özel poliamidler gibi yüksek sıcaklığa dayanıklı plastik malzemeleri işleyebilmektedir. Şişirme kalıplama maliyet tasarrufu, yakıt tasarrufu ve CO2'de azalma sağlar.
                </p>

                <div className="mt-6 hidden lg:flex gap-6">
                    <Image
                        src="/images/ürünler/air/air1.png"
                        alt="Hava Yönetim Sistemleri 1"
                        width={200}
                        height={128}
                        className="rounded-lg brightness-50 hover:brightness-100 transition-all duration-300 shadow-2xl"
                    />
                    <Image
                        src="/images/ürünler/air/air2.png"
                        alt="Hava Yönetim Sistemleri 2"
                        width={200}
                        height={128}
                        className="rounded-lg brightness-50 hover:brightness-100 transition-all duration-300 shadow-2xl"
                    />
                    <Image
                        src="/images/ürünler/air/air3.png"
                        alt="Hava Yönetim Sistemleri 3"
                        width={200}
                        height={128}
                        className="rounded-lg brightness-50 hover:brightness-100 transition-all duration-300 shadow-2xl"
                    />
                </div>
            </>
        ),
        details: []
    },
    {
        id: "lubrication",
        label: "Yağlama Sistemleri",
        icon: Droplet,
        title: "Yağlama Sistemleri",
        description: (
            <>
                <h3 className="text-xl font-bold text-white mb-4">Yağlama Hatları</h3>
                <p className="mb-8">
                    Yüksek sıcaklığa dayanıklı kauçuk hortumlar, yağ ve yağ karışımını motor bloğundan turboşarj muhafazasına taşır.
                </p>

                <h3 className="text-xl font-bold text-white mb-4">Şanzıman Yağı Soğutma Hatları</h3>
                <p className="mb-8">
                    Şanzımanın termal yönetimi, şanzıman yağı soğutma sistemi ile gerçekleştirilir. Şanzıman yağı soğutma sistemli hatlar çelik, plastik veya kauçuk olabilir. +175 °C'ye kadar sıcaklık gereksinimleri için kauçuk ve plastik hatlar mevcuttur. Çizgiler, SAE J1532 spesifikasyonuna karşılık gelir.
                </p>

                <h3 className="text-xl font-bold text-white mb-4">Motor Yağı Soğutma Hatları</h3>
                <p className="mb-4">
                    Motor yağı hatları, motor ile soğutucu arasında yağ transferi yapar. 175 °C'ye kadar dayanıklı plastik ve kauçuk solüsyon, yüksek basınç gereksinimlerine karşı iyi performans gösterir.
                </p>
                <div className="mt-6 hidden lg:flex gap-6">
                    <Image
                        src="/images/ürünler/yag/yag1.png"
                        alt="Yağlama Hatları Image 1"
                        width={200}
                        height={128}
                        className="rounded-lg brightness-50 hover:brightness-100 transition-all duration-300 shadow-2xl"
                    />
                    <Image
                        src="/images/ürünler/yag/yag2.png"
                        alt="Yağlama Hatları Image 2"
                        width={200}
                        height={128}
                        className="rounded-lg brightness-50 hover:brightness-100 transition-all duration-300 shadow-2xl"
                    />
                    <Image
                        src="/images/ürünler/yag/yag3.png"
                        alt="Yağlama Hatları Image 3"
                        width={200}
                        height={128}
                        className="rounded-lg brightness-50 hover:brightness-100 transition-all duration-300 shadow-2xl"
                    />
                </div>
            </>
        ),
        details: []
    },
    {
        id: "fuel",
        label: "Yakıt Sistemleri",
        icon: Fuel,
        title: "Yakıt Sistemleri",
        description: (
            <>
                <h3 className="text-xl font-bold text-white mb-4">CNG & LPG Dağıtım Sistemleri</h3>
                <p className="mb-8">
                    CNG ve LPG dağıtım sistemleri için 20 bar'a kadar çalışma basıncına sahip hortum ve hatlar üretilebilmektedir.
                </p>

                <h3 className="text-xl font-bold text-white mb-4">Yakıt Dolum Hortumları</h3>
                <p className="mb-4">
                    Düşük geçirgenlikli yakıt dolum hortumları her türlü yakıt için üretilmektedir.
                </p>
                <div className="mt-6 hidden lg:flex gap-6">
                    <Image
                        src="/images/ürünler/yakıt.png"
                        alt="Yakıt Sistemleri 1"
                        width={200}
                        height={128}
                        className="rounded-lg brightness-50 hover:brightness-100 transition-all duration-300 shadow-2xl"
                    />
                    <Image
                        src="/images/ürünler/yakıt2.png"
                        alt="Yakıt Sistemleri 2"
                        width={200}
                        height={128}
                        className="rounded-lg brightness-50 hover:brightness-100 transition-all duration-300 shadow-2xl"
                    />
                </div>
            </>
        ),
        details: []
    }
];

export default function ProductsTabs() {
    const activeTabObj = tabs[0];
    const [activeTab, setActiveTab] = useState(activeTabObj.id);

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
                            <tab.icon className="w-5 h-5 flex-shrink-0" />
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
                                    className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 h-full relative overflow-hidden"
                                >
                                    <div className="flex items-start justify-between mb-8 relative z-10">
                                        <div>
                                            <h2 className="text-3xl font-bold text-white mb-2">{tab.title}</h2>
                                            <div className="h-1 w-20 bg-[#E30613] rounded-full" />
                                        </div>
                                        <tab.icon className="w-16 h-16 text-white/10" />
                                    </div>

                                    <div className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-12 whitespace-pre-line relative z-10">
                                        {tab.description}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
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
