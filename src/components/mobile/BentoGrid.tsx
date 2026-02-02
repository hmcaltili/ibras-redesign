import { Anchor, Zap, Tractor, TrainFront, CarFront, ChevronRight } from "lucide-react";

export default function MobileBentoGrid() {
    const items = [
        {
            title: "Deniz Taşıtları",
            icon: <Anchor className="w-8 h-8 text-white group-hover:text-ibras-red transition-colors" />,
        },
        {
            title: "Ev Aletleri",
            icon: <Zap className="w-8 h-8 text-white group-hover:text-ibras-red transition-colors" />,
        },
        {
            title: "Tarım ve Sanayi",
            icon: <Tractor className="w-8 h-8 text-white group-hover:text-ibras-red transition-colors" />,
        },
        {
            title: "Raylı Sistemler",
            icon: <TrainFront className="w-8 h-8 text-white group-hover:text-ibras-red transition-colors" />,
        },
        {
            title: "Otomotiv Sanayi",
            icon: <CarFront className="w-8 h-8 text-white group-hover:text-ibras-red transition-colors" />,
        },
    ];

    return (
        <section id="products" className="py-16 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 text-center px-4">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Aktif Rol Aldığımız <span className="text-ibras-red">Alanlar</span>
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Ürettiğimiz Geniş Ürün Yelpazesi İle İbraş Kauçuk Olarak Dünyanın Dört Bir Yanında Adımızı Ve Kalitemizi Yaşatıyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 px-2">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-ibras-red transition-all duration-300 group flex items-center justify-between text-left h-[100px]"
                        >
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-white group-hover:bg-white/10 transition-all duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white group-hover:text-ibras-red transition-colors">{item.title}</h3>
                            </div>

                            <ChevronRight className="text-gray-600 group-hover:text-ibras-red transition-colors" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
