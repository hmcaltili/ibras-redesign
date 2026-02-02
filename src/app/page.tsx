import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import StatsGrid from "@/components/StatsGrid";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-ibras-red selection:text-white">
      <Hero />
      <BentoGrid />
      <StatsGrid />
      <NewsSection />
      <Footer />
    </main>
  );
}
