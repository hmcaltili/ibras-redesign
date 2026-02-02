import { Calendar, Layers, Warehouse, Globe2, Factory, Users, Building2, Package } from "lucide-react";

export default function Stats() {
    const stats = [
        {
            title: "45 Yıllık Deneyim",
            description: "Ürettiğimiz geniş ürün yelpazesi ile ibraş Kauçuk olarak dünyanın dört bir yanında adımızı ve kalitemizi yaşatıyoruz.",
            icon: <Calendar className="w-10 h-10 mb-4 text-white" />
        },
        {
            title: "3.500.000 Üretim Hacmi",
            description: "Ürettiğimiz geniş ürün yelpazesi ile ibraş Kauçuk olarak dünyanın dört bir yanında adımızı ve kalitemizi yaşatıyoruz.",
            icon: <Layers className="w-10 h-10 mb-4 text-white" />
        },
        {
            title: "3500m2 Depolama Alanı",
            description: "Ürettiğimiz geniş ürün yelpazesi ile ibraş Kauçuk olarak dünyanın dört bir yanında adımızı ve kalitemizi yaşatıyoruz.",
            icon: <Warehouse className="w-10 h-10 mb-4 text-white" />
        },
        {
            title: "%80 İhracat Oranı",
            description: "Ürettiğimiz geniş ürün yelpazesi ile ibraş Kauçuk olarak dünyanın dört bir yanında adımızı ve kalitemizi yaşatıyoruz.",
            icon: <Globe2 className="w-10 h-10 mb-4 text-white" />
        },
        {
            title: "16.000 m2 Üretim Tesisi",
            description: "Ürettiğimiz geniş ürün yelpazesi ile ibraş Kauçuk olarak dünyanın dört bir yanında adımızı ve kalitemizi yaşatıyoruz.",
            icon: <Factory className="w-10 h-10 mb-4 text-white" />
        },
        {
            title: "47 Ülkeye İhracat",
            description: "Ürettiğimiz geniş ürün yelpazesi ile ibraş Kauçuk olarak dünyanın dört bir yanında adımızı ve kalitemizi yaşatıyoruz.",
            icon: <Globe2 className="w-10 h-10 mb-4 text-white" />
        },
        {
            title: "65.000 m2 Yeni Üretim Tesisi",
            description: "1. Etap 25.000 m2, 2. Etap 20.000 m2 Kapalı Alan, 20.000 m2 Açık Alan yatırım",
            icon: <Building2 className="w-10 h-10 mb-4 text-white" />
        },
        {
            title: "120.000+ Eşdeğer Ürün",
            description: "Ürettiğimiz geniş ürün yelpazesi ile ibraş Kauçuk olarak dünyanın dört bir yanında adımızı ve kalitemizi yaşatıyoruz.",
            icon: <Package className="w-10 h-10 mb-4 text-white" />
        },
    ];

    return (
        <section className="py-24 bg-[#990000] relative overflow-hidden">
            {/* Background Overlay Effect */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transform scale-[0.8] origin-top lg:transform-none lg:scale-100 w-full mobile-stats-container">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Sayıların Gücüne İnanıyoruz
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
                    {stats.map((item, i) => (
                        <div
                            key={i}
                            className="group bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-all duration-300 flex flex-col items-start h-full"
                        >
                            <div className="p-3 bg-white/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-white/80 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
