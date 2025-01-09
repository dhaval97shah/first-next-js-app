"use client";
import Link from "next/link";
import { FOOTER_LINKS } from "../consts/FOOTER_LINKS";

const FooterLinks = () => {
  return (
    <div className="mt-24 grid text-center lg:mb-0 lg:grid-cols-4 gap-2 lg:text-left">
      {FOOTER_LINKS.map(
        (item: { title: string; description: string; link: string }) => (
          <Link
            href={item.link}
            className="text-white hover:text-black group rounded-xl border border-transparent px-5 py-4 hover:border-gray-300 hover:bg-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 transition ease-in-out duration-300"
            rel="noopener noreferrer"
            key={item.title}
          >
            <h2 className="mb-3 text-2xl font-semibold skill-font">
              {item.title}
            </h2>
            <p className="m-0 max-w-[30ch] text-base opacity-70 line-font group-hover:opacity-100">
              {item.description}
            </p>
          </Link>
        )
      )}
    </div>
  );
};

export default FooterLinks;
