import PageNotFound from "@/components/animation/PageNotFound";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="global w-full bg-black text-white h-screen flex flex-col gap-6 justify-center items-center overflow-hidden">
      {/* <div className="page-not-found-wrapper h-screen flex flex-col gap-6 justify-center items-center "> */}
        <PageNotFound />
        <Link
          href={"/"}
          className="back-button-wrapper color text-white border cursor-pointer hover:bg-orange-600 border-app-border p-2 px-4 rounded "
        >
          Return Back
        </Link>
      {/* </div> */}
    </div>
  );
}
