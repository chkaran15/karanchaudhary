import HeroSection from "@/components/Home/homeWrapper/HeroSection";
import ImageSection from "@/components/Home/homeWrapper/ImageSection";

export default function Home() {
  return (
    <main className="home-page-wrapper w-full bg-[#1f1c3d] text-white pt-16 ">
      <HeroSection />
      <ImageSection />
    </main>
  );
}
