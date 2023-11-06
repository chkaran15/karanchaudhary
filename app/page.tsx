// import HeroSection from "@/components/Home/homeWrapper/HeroSection";
import ImageSection from "@/components/Home/homeWrapper/ImageSection";
// import { VideoSection } from "@/components/Home/homeWrapper/BannerTextSection";
import BannerSection from "@/components/Home/homeWrapper/BannerSection";
import { VelocityAnimation } from "@/components/animation/VelocityAnimation";
import { HomeAboutSection } from "@/components/Home/homeWrapper/HomeAboutSection";
import { HomeServiceInfo } from "@/components/Home/homeWrapper/HomeServiceInfo";

import HomeWrapperAnimaiton from "@/components/Home/homeWrapper/HomeWrapperAnimation";
import { ImageWrapper } from "@/components/Home/homeWrapper/ImageWrapper";
import ProjectSection from "@/components/Home/homeWrapper/ProjectSection";
import CardScrollProject from "@/components/Home/homeWrapper/CardScrollProject";
import { TestimonialsSections } from "@/components/Home/homeWrapper/TestimonialsSection";

export default function Home() {
  return (
    <main className="home-page-wrapper overflow-hidden ">
      {/* <BannerSection /> */}
      <VelocityAnimation />
      <HomeAboutSection />
      <ImageWrapper />
      <HomeServiceInfo />

      <section className="hidden lg:block">
        <ProjectSection />
      </section>
      {/* for mobile */}
      <section className="block lg:hidden">
        <CardScrollProject />
      </section>

      <TestimonialsSections />

      {/* <HomeWrapperAnimaiton /> */}
      {/* <ImageSection /> */}
    </main>
  );
}
