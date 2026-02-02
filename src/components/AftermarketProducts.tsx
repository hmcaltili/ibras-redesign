"use client";

import { useState } from "react";
import { Search, ChevronRight, Package, Box, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Ürün Verileri (OEM Numaraları Dahil)
const products = [
    {
        id: 1,
        title: "Radyatör Hortumları",
        category: "Soğutma Sistemi",
        description: "Yüksek sıcaklık ve basınca dayanıklı, uzun ömürlü radyatör hortumları.",
        code: "RAD-2026-01",
        oem: "1351.VF",
        has3d: true,
        embedUrl: "https://sketchfab.com/models/6c96e7f2531b44a09dcb738e1fc8582d/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_hint=0",
        image: "/images/products/1351-VF.jpg"
    },
    {
        id: 2,
        title: "Turbo Hortumları",
        category: "Hava Emiş Sistemi",
        description: "Yüksek performanslı motorlar için güçlendirilmiş turbo şarj hortumları.",
        code: "TUR-2026-02",
        oem: "14460BB30A",
        has3d: true
    },
    {
        id: 3,
        title: "Yakıt Hortumları",
        category: "Yakıt Sistemi",
        description: "Benzin ve dizel yakıtlar için sızdırmazlık garantili transfer hortumları.",
        code: "FUL-2026-03",
        oem: "1574.Q5"
    },
    {
        id: 4,
        title: "Isıtıcı Hortumları",
        category: "Isıtma Sistemi",
        description: "Araç içi iklimlendirme sistemleri için esnek ısıtıcı hortumları.",
        code: "HTR-2026-04",
        oem: "6466.K1"
    },
    {
        id: 5,
        title: "Hava Filtre Hortumları",
        category: "Hava Emiş Sistemi",
        description: "Temiz hava akışı sağlayan, dayanıklı filtre bağlantı hortumları.",
        code: "AIR-2026-05",
        oem: "1434.F6"
    },
    {
        id: 6,
        title: "Yağ Soğutma Hortumları",
        category: "Soğutma Sistemi",
        description: "Motor ve şanzıman yağı soğutma sistemleri için özel kauçuk hortumlar.",
        code: "OIL-2026-06",
        oem: "1103.L7"
    }
];

const categories = ["Tümü", "Hortum Türü", "Oem No", "İbraş No"];

const hoseTypes = [
    "By Pass Hortumları", "Contalar", "Dirsek ve Metrelik Hortumlar", "EGR boruları", "EGR hortumları",
    "Egzoz Askı Lastikleri", "Hava Filtre Boruları", "Hava Filtre Hortumları", "Hidrolik Direksiyon Hortumları",
    "Jikle Hortumları", "Kalorifer Boruları", "Kalorifer Hortumları", "Karter Havalandırma Hortumları",
    "Klima Hortumları", "Radyatör Hortumları", "Turbo Hortumları", "Yağ Hortumları", "Yakıt Hortumları"
];

export default function AftermarketProducts() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Tümü");
    const [selectedHoseType, setSelectedHoseType] = useState("");
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [selected3DProduct, setSelected3DProduct] = useState<number | null>(null);



    const filteredProducts = products.filter(product => {
        let matchesSearch = false;

        if (selectedCategory === "Oem No") {
            matchesSearch = product.oem.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (selectedCategory === "İbraş No") {
            matchesSearch = product.code.toLowerCase().includes(searchTerm.toLowerCase());
        } else {
            matchesSearch =
                product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.oem.toLowerCase().includes(searchTerm.toLowerCase());
        }

        const matchesHoseType = (selectedCategory === "Hortum Türü" && selectedHoseType)
            ? product.title.toLowerCase() === selectedHoseType.toLowerCase()
            : true;

        return matchesSearch && matchesHoseType;
    });

    return (
        <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-8 min-h-[600px] px-4 pb-4 pt-0 lg:p-4 -mt-10 lg:mt-0">
            {/* Sidebar - Search & Filters */}
            {/* Mobile Sticky Search - Only Mobile */}
            <div className="sticky top-20 z-50 bg-[#0a0a0a] py-1 lg:hidden border-b border-white/10 mb-4 -mx-4 px-4">

                <div className={`relative flex items-center bg-[#0a0a0a] rounded-lg border transition-colors ${isSearchFocused ? "border-[#E30613]" : "border-white/10"
                    }`}>
                    <Search className={`w-5 h-5 ml-4 transition-colors ${isSearchFocused ? "text-[#E30613]" : "text-gray-400"}`} />
                    <input
                        type="text"
                        placeholder={
                            selectedCategory === "Oem No" ? "OEM No ara..." :
                                selectedCategory === "İbraş No" ? "İbraş No ara..." :
                                    "Hortum türü veya kodu ara..."
                        }
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setIsSearchFocused(false)}
                        className="w-full bg-transparent border-none text-white px-4 py-4 focus:outline-none placeholder:text-gray-500"
                    />
                    <ChevronRight
                        className={`w-5 h-5 mr-4 text-gray-400 transition-transform duration-300 ${isSearchFocused ? "rotate-90 text-[#E30613]" : ""}`}
                    />
                </div>
            </div>

            {/* Sidebar - Search & Filters */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-full lg:w-1/4 space-y-8 lg:sticky lg:top-32 self-start"
            >
                {/* Desktop Search Bar */}
                {/* Desktop Search Bar */}
                <div className="hidden lg:block">
                    <div className={`relative flex items-center bg-[#0a0a0a] rounded-lg border transition-all ${isSearchFocused ? "border-[#E30613]" : "border-white/10 hover:border-[#E30613]"
                        }`}>
                        <Search className={`w-5 h-5 ml-4 transition-colors ${isSearchFocused ? "text-[#E30613]" : "text-gray-400"}`} />
                        <input
                            type="text"
                            placeholder={
                                selectedCategory === "Oem No" ? "OEM No ara..." :
                                    selectedCategory === "İbraş No" ? "İbraş No ara..." :
                                        "Hortum türü veya kodu ara..."
                            }
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onFocus={() => setIsSearchFocused(true)}
                            onBlur={() => setIsSearchFocused(false)}
                            className="w-full bg-transparent border-none text-white px-4 py-4 focus:outline-none placeholder:text-gray-500"
                        />
                        <ChevronRight
                            className={`w-5 h-5 mr-4 text-gray-400 transition-transform duration-300 ${isSearchFocused ? "rotate-90 text-[#E30613]" : ""}`}
                        />
                    </div>
                </div>

                {/* Categories */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <FilterIcon className="text-[#E30613]" />
                        Kategoriler
                    </h3>
                    <div className="space-y-2">
                        {categories.map((category) => (
                            <div key={category}>
                                <button
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        if (category !== "Hortum Türü") setSelectedHoseType("");
                                    }}
                                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between group ${selectedCategory === category
                                        ? "bg-[#E30613] text-white"
                                        : "hover:bg-white/5 text-gray-400 hover:text-white"
                                        }`}
                                >
                                    <span>{category}</span>
                                    {selectedCategory === category && <ChevronRight size={16} />}
                                </button>

                                {/* Hose Type Sub-filter */}
                                {category === "Hortum Türü" && selectedCategory === "Hortum Türü" && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className="mt-2 pl-4 border-l-2 border-white/10 ml-2 space-y-1 overflow-hidden"
                                    >
                                        <div className="max-h-60 overflow-y-auto pr-2 custom-scrollbar space-y-1">
                                            <button
                                                onClick={() => setSelectedHoseType("")}
                                                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${selectedHoseType === "" ? "bg-white/10 text-white" : "text-gray-500 hover:text-gray-300"
                                                    }`}
                                            >
                                                Tümü
                                            </button>
                                            {hoseTypes.map(type => (
                                                <button
                                                    key={type}
                                                    onClick={() => setSelectedHoseType(type)}
                                                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${selectedHoseType === type ? "bg-white/10 text-white" : "text-gray-500 hover:text-gray-300"
                                                        }`}
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Product Grid */}
            <div className="w-full lg:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="group relative bg-[#111] rounded-2xl border border-white/10 overflow-hidden hover:border-[#E30613]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#E30613]/10 flex flex-col"
                            >
                                {/* Üst Görsel Alanı */}
                                <div className="relative h-64 w-full bg-white/5 group-hover:bg-white/10 transition-colors flex items-center justify-center overflow-hidden">
                                    {product.image ? (
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5 z-10" />
                                            <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        </>
                                    ) : (
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5" />
                                            <Package className="w-16 h-16 text-gray-600 group-hover:scale-110 transition-transform duration-500" />
                                        </>
                                    )}
                                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                        <span className="text-xs font-medium text-gray-300">{product.title}</span>
                                    </div>
                                    {/* 3D Model Icon */}
                                    {product.has3d && (
                                        <div
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelected3DProduct(product.id);
                                            }}
                                            className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md p-2 rounded-lg border border-white/20 hover:border-[#E30613] hover:bg-black/80 transition-all duration-300 group/icon flex items-center justify-center cursor-pointer"
                                        >
                                            <Box className="w-5 h-5 text-white group-hover/icon:text-[#E30613] transition-colors duration-300" />
                                            <span className="max-w-0 overflow-hidden group-hover:max-w-[60px] ml-0 group-hover:ml-2 text-white group-hover/icon:text-[#E30613] text-xs font-bold whitespace-nowrap transition-all duration-300 opacity-0 group-hover:opacity-100">
                                                3D Gör
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Alt İçerik Alanı */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-white group-hover:text-[#E30613] transition-colors line-clamp-2 mb-2">
                                        OEM: {product.oem}
                                    </h3>
                                    <div className="mb-4">
                                        <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">
                                            İbraş No: {product.code}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-grow">
                                        {product.description}
                                    </p>
                                    <button className="w-full mt-auto py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-[#E30613] hover:border-[#E30613] transition-all flex items-center justify-center gap-2 group/btn">
                                        Detayları İncele
                                        <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredProducts.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                        <Search size={48} className="mb-4 opacity-50" />
                        <p className="text-lg">Kriterlere uygun ürün bulunamadı.</p>
                    </div>
                )}
            </div>

            {/* 3D Model Modal Overlay */}
            <AnimatePresence>
                {selected3DProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
                        onClick={() => setSelected3DProduct(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#111] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col relative shadow-2xl shadow-[#E30613]/20"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
                                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                    <Box className="text-[#E30613]" />
                                    Oem No: {products.find(p => p.id === selected3DProduct)?.oem}
                                </h3>
                                <button
                                    onClick={() => setSelected3DProduct(null)}
                                    className="p-2 rounded-full bg-white/5 hover:bg-[#E30613] text-white transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* 3D Viewer Area */}
                            <div className="w-full h-[60vh] bg-black relative flex items-center justify-center overflow-hidden">
                                {products.find(p => p.id === selected3DProduct)?.embedUrl ? (
                                    <iframe
                                        title={`Model Viewer - ${products.find(p => p.id === selected3DProduct)?.oem}`}
                                        className="w-full h-full"
                                        frameBorder="0"
                                        allowFullScreen
                                        allow="autoplay; fullscreen; xr-spatial-tracking"
                                        src={products.find(p => p.id === selected3DProduct)?.embedUrl}
                                    />
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E30613]/10 via-transparent to-transparent opacity-50" />

                                        {/* Placeholder Content */}
                                        <div className="text-center relative z-10">
                                            <div className="w-32 h-32 mx-auto mb-6 relative">
                                                <div className="absolute inset-0 border-4 border-[#E30613]/30 rounded-full animate-[spin_10s_linear_infinite]" />
                                                <div className="absolute inset-4 border-4 border-[#E30613]/50 rounded-full animate-[spin_7s_linear_infinite_reverse]" />
                                                <div className="absolute inset-8 border-4 border-[#E30613] rounded-full animate-[spin_5s_linear_infinite]" />
                                                <Box className="absolute inset-0 m-auto w-12 h-12 text-white animate-pulse" />
                                            </div>
                                            <h4 className="text-xl font-bold text-white mb-2">3D Model Yükleniyor...</h4>
                                            <p className="text-gray-400 max-w-md mx-auto">
                                                Bu alanda ürünün 360 derece dönebilen interaktif 3D modeli görüntülenecektir.
                                            </p>
                                        </div>

                                        {/* Controls Overlay (Mockup) - Only show if no actual 3D model */}
                                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
                                            <button className="text-white hover:text-[#E30613] transition-colors font-mono text-sm">360°</button>
                                            <div className="w-px h-4 bg-white/20 self-center" />
                                            <button className="text-white hover:text-[#E30613] transition-colors font-mono text-sm">Zoom</button>
                                            <div className="w-px h-4 bg-white/20 self-center" />
                                            <button className="text-white hover:text-[#E30613] transition-colors font-mono text-sm">AR</button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// Yardımcı Filtre İkonu
function FilterIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
    );
}