import { navlinks } from "@/data/navlinks";
import { sociallinks } from "@/data/sociallinks";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-wrapper-container py-6 bg-black  px-4 lg:px-10 overflow-hidden flex flex-wrap gap-4 justify-around items-center">
      <div className="footer-content w-[200px]">
        <h1 className="important-links-wrapper text-gray-400 text-2xl ">
          Important Links
        </h1>

        <ul className="important-link-item ">
          {navlinks?.map((link) => (
            <li className=" text-gray-500 hover:text-white my-2" key={link?.id}>
              <Link href={link?.url}>{link?.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-content w-[200px] ">
        <h1 className="important-links-wrapper text-gray-400 text-2xl ">
          Social Links
        </h1>

        <ul className="important-link-item ">
          {sociallinks?.map((link) => (
            <li
              className=" text-gray-500 hover:text-white my-2 capitalize"
              key={link?.id}
            >
              <Link href={link?.url} target="_blank">
                {link?.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
