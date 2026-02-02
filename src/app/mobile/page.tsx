import MobileNavbar from "@/components/mobile/Navbar";
import MobileHero from "@/components/mobile/Hero";
import MobileBentoGrid from "@/components/mobile/BentoGrid";
import MobileFooter from "@/components/mobile/Footer";

export default function MobileHome() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-ibras-red selection:text-white">
            <MobileNavbar />
            <MobileHero />
            <MobileBentoGrid />
            <MobileFooter />
        </main>
    );
}
