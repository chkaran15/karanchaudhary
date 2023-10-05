import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="home-info-wrapper w-full relative h-[90vh]">
      <h1 className="home-title-wrapper absolute md:w-[650px] px-[2%] text-4xl md:text-6xl font-extrabold">
        <span className="text-gray-500">Creative</span> Design Implementation &{" "}
        <span className="text-gray-500">Web</span> Development{" "}
        <span className="text-gray-500">Experiences</span>.
      </h1>
      <div className="home-subtitle absolute px-[2%] flex flex-col gap-4 md:w-[450px]  ">
        <h1 className="subtitle-wrapper text-[18px] lg:text-lg font-semibold">
          We craft enchanting user experiences for startups and tech firms,
          aligning seamlessly with business needs, ensuring satisfaction, and
          fostering synergy.
        </h1>
        <div className="subitile-image-wrapper flex justify-between items-center">
          <h1 className="text-2xl subtitle-text-wrapper font-bold w-[280px]">
            Full Stack <span className="text-gray-400">Developer :</span> Karan{" "}
            <span className="text-gray-400">Chaudhary</span>
          </h1>
          <Link href="/about">
            <Image
              className="home-image rounded-full hover:opacity-50 hover:scale-90"
              src="/profile/profile.jpg"
              alt="karan"
              width={90}
              height={90}
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
