"use client"

import Link from "next/link";
import React from "react";

import { useTranslations } from "next-intl";
import AnimatedText from "./AnimatedText";

import {delay, motion} from 'framer-motion'
import { slideInFromBottom } from "../utils/motion";


const initial ={
  opacity: 0,
  y:50
}

const anim ={
  opacity:1,
  y:0,
  transition:{
    duration: 0.2,
    delay: 0.3,
    ease: 'easeIn',
  }
}

const Hero = () => {
  const t = useTranslations("Home");
  const t2 = useTranslations("Common");

  return (
    <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div>
        <h1 className="text-[40px] xs:text-[55px] md:text-[90px] font-[700] leading-[110%] max-w-[900px]">
          <AnimatedText
                repeatDelay={10000}
                text={t("introText")}
                once={true}
              />
        </h1>
        <motion.p variants={slideInFromBottom(0.25,100)} initial={"hidden"} animate={"visible"} className="text-[#666666] text-lg mt-4">{t("introData")}</motion.p>
      </div>
      <motion.div variants={slideInFromBottom(0.5,100)} initial={"hidden"} animate={"visible"}  className="flex flex-col mt-8">
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
      </motion.div>
    </div>
  );
};

export default Hero;
