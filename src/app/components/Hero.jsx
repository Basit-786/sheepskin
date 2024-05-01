import Link from "next/link";
import React from "react";

import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Home");
  const t2 = useTranslations("Common");

  return (
    <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div>
        <h1 className="text-[40px] xs:text-[55px] md:text-[90px] font-[700] leading-[110%] max-w-[900px]">
          {t("introText")}
        </h1>
        <p className="text-[#666666] text-lg mt-4">{t("introData")}</p>
      </div>
      <div className="flex flex-col mt-8">
        <h2 className="text-[#333333] text-2xl md:text-3xl font-[700]">{t2('explore')}</h2>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <Link
            href={"/"}
            className="w-full bg-light-white hover:bg-secondary transition-all duration-200 ease-in-out px-3 md:px-4 py-2 md:py-3 rounded-[60px] text-black hover:text-white flex items-center justify-center text-sm xs:text-lg md:text-xl font-medium cursor-pointer"
          >
            {t2("home")}
          </Link>
          <Link
            href={"#services"}
            className="w-full bg-light-white hover:bg-secondary transition-all duration-200 ease-in-out px-3 md:px-4 py-2 md:py-3 rounded-[60px] text-black hover:text-white flex items-center justify-center text-sm xs:text-lg md:text-xl font-medium cursor-pointer"
          >
            {t2("services")}
          </Link>
          <Link
            href={"/about"}
            className="w-full bg-light-white hover:bg-secondary transition-all duration-200 ease-in-out px-3 md:px-4 py-2 md:py-3 rounded-[60px] text-black hover:text-white flex items-center justify-center text-sm xs:text-lg md:text-xl font-medium cursor-pointer"
          >
            {t2("about")}
          </Link>
          <Link
            href={"#contact"}
            className="w-full bg-light-white hover:bg-secondary transition-all duration-200 ease-in-out px-3 md:px-4 py-2 md:py-3 rounded-[60px] text-black hover:text-white flex items-center justify-center text-sm xs:text-lg md:text-xl font-medium cursor-pointer"
          >
            {t2("contact")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
