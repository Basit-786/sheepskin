"use client"
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { MdOutlineSavings } from "react-icons/md";
import { BsPersonCheck } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

import {motion} from 'framer-motion'
import { onceTrue, slideInFromBottom } from "@/app/utils/motion";

const Story = () => {
  const t = useTranslations("About");

  return (
    <section className="">
      <div
        id="story"
        className="max-w-[1250px] mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
      >
        <motion.div initial={{opacity:0}} whileInView={{opacity:1, transition:{duration:0.3}}} viewport={onceTrue} className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8 border-[#dddddd] border-b pb-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold sm:text-4xl leading-[110%]">
              {t("storyHeading")}
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[#666666]">
              {t("storyTxt1")}
              <br />
              <br />
              {t("storyTxt2")}
            </p>
          </div>
          <div className="">
            <p className="text-[#666666]">
              {t("storyTxt3")}
              <br />
              <br />
              {t("storyTxt4")}
            </p>
          </div>
          <div className="relative h-72 overflow-hidden rounded-lg sm:h-80 lg:h-full">
            <Image
              alt=""
              src="/about/ab1.jpg"
              width={500}
              height={500}
              className="absolute inset-0 h-full w-full object-cover"
            />{" "}
          </div>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div variants={slideInFromBottom(0.2,100)} initial={"hidden"} viewport={onceTrue} whileInView={"visible"}  className="py-12 px-4 gap-3 w-full cursor-pointer text-[#2e2e2e] hover:bg-white hover:scale-[1.02] transition flex flex-col items-center justify-center border-[#dddddd] border rounded-lg">
            <MdOutlineSavings className="text-[45px] lg:text-[60px]" />

            <h3 className="text-3xl font-bold mt-4">Savings</h3>
            <h2 className="text-2xl font-semibold text-secondary">
              Over 12,000$+
            </h2>
          </motion.div>
          <motion.div variants={slideInFromBottom(0.33,120)} initial={"hidden"} viewport={onceTrue} whileInView={"visible"}  className="py-12 px-4 gap-3 w-full cursor-pointer text-[#2e2e2e] hover:bg-white hover:scale-[1.02] transition flex flex-col items-center justify-center border-[#dddddd] border rounded-lg">
            <BsPersonCheck className="text-[45px] lg:text-[60px]" />

            <h3 className="text-3xl font-bold mt-4">Customers</h3>
            <h2 className="text-2xl font-semibold text-secondary">255+</h2>
          </motion.div>
          <motion.div variants={slideInFromBottom(0.5,140)} initial={"hidden"} viewport={onceTrue} whileInView={"visible"}  className="py-12 px-4 gap-3 w-full cursor-pointer text-[#2e2e2e] hover:bg-white hover:scale-[1.02] transition flex flex-col items-center justify-center border-[#dddddd] border rounded-lg">
            <BiSupport className="text-[45px] lg:text-[60px]" />

            <h3 className="text-3xl font-bold mt-4">Support</h3>
            <h2 className="text-2xl font-semibold text-secondary">24/7</h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
