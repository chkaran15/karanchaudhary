import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="home-page-wrapper w-full bg-[#1f1c3d] text-white pt-16 ">
      <div className="home-info-wrapper w-full relative h-[90vh]">
        <h1 className="home-title-wrapper absolute md:w-[650px] top-[10%] lg:top-[25%]  px-[2%] text-4xl md:text-6xl font-extrabold">
          <span className="text-gray-500">Creative</span> Design Implementation
          & <span className="text-gray-500">Web</span> Development{" "}
          <span className="text-gray-500">Experiences</span>.
        </h1>
        <div className="home-subtitle absolute  flex flex-col gap-4 md:w-[450px] bottom-[2%] sm:right-[2%] px-[2%]">
          <h1 className="subtitle-wrapper text-[18px] lg:text-lg font-semibold">
            We craft enchanting user experiences for startups and tech firms,
            aligning seamlessly with business needs, ensuring satisfaction, and
            fostering synergy.
          </h1>
          <div className="image-wrapper flex justify-between items-center">
            <h1 className="text-2xl font-bold w-[280px]">
              Full Stack <span className="text-gray-400">Developer :</span>{" "}
              Karan <span className="text-gray-400">Chaudhary</span>
            </h1>
            <Link href="/aboutme">
              <Image
                className="home-image rounded-full hover:opacity-50 hover:scale-90"
                src="/profile/profile.jpg"
                alt="karan"
                width={90}
                height={90}
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
