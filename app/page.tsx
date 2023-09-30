import HeroSection from "@/components/Home/homeWrapper/HeroSection";
import ImageSection from "@/components/Home/homeWrapper/ImageSection";

export default function Home() {
  return (
    <main className="home-page-wrapper w-full bg-primary1 text-white pt-16 ">
      <HeroSection />
      <ImageSection />
 
    </main>
  );
}
