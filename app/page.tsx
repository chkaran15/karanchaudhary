import { VelocityAnimation } from "@/components/animation/VelocityAnimation";
import { HomeAboutSection } from "@/components/Home/homeWrapper/HomeAboutSection";
import { HomeServiceInfo } from "@/components/Home/homeWrapper/HomeServiceInfo";
import { VideoWrapper } from "@/components/Home/homeWrapper/VideoWrapper";
import ProjectSection from "@/components/Home/homeWrapper/ProjectSection";
import CardScrollProject from "@/components/Home/homeWrapper/CardScrollProject";
import { TestimonialsSections } from "@/components/Home/homeWrapper/TestimonialsSection";
import { ServiceSection } from "@/components/Home/homeWrapper/services/ServiceSection";

export default function Home() {
  return (
    <main className="home-page-wrapper  ">
      <VelocityAnimation />
      <HomeAboutSection />
      <VideoWrapper />
      <HomeServiceInfo />
      <section className="hidden lg:block py-[8%]">
        <ProjectSection />
      </section>
      {/* for mobile */}
      <section className="block lg:hidden py-[8%]">
        <CardScrollProject />
      </section>
      <ServiceSection />
      <TestimonialsSections />

      <section className="h-screen"></section>
    </main>
  );
}
