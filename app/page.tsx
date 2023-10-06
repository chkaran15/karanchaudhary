import HeroSection from "@/components/Home/homeWrapper/HeroSection";
import ImageSection from "@/components/Home/homeWrapper/ImageSection";
import { VideoSection } from "@/components/Home/homeWrapper/BannerTextSection";
import BannerSection from "@/components/Home/homeWrapper/BannerSection";
import { VelocityAnimation } from "@/components/animation/VelocityAnimation";

export default function Home() {
  return (
    <main className="home-page-wrapper bg-primary1 h-[250vh]">
      <BannerSection />
      <VelocityAnimation />
      {/* <HeroSection /> */}
      {/* <ImageSection /> */}
    </main>
  );
}
