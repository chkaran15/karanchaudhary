import { BannerSection } from "@/components/Home/homeWrapper/BannerSection";
import HeroSection from "@/components/Home/homeWrapper/HeroSection";
import ImageSection from "@/components/Home/homeWrapper/ImageSection";

export default function Home() {
  return (
    <main className="home-page-wrapper bg-primary1 h-[150vh]">
      <BannerSection />
      {/* <HeroSection /> */}
      {/* <ImageSection /> */}
    </main>
  );
}
