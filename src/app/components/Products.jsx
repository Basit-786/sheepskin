"use client"

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {motion} from 'framer-motion'
import { onceTrue, slideInFromBottom } from "../utils/motion";

const Products = () => {
  const t = useTranslations("Common");
  return (
    <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <motion.div variants={slideInFromBottom(0.2,100)} initial={"hidden"} viewport={onceTrue} whileInView={"visible"}  id="services" className="flex flex-col py-6 lg:py-10">
        <h2 className="text-[#333333] text-2xl md:text-4xl font-[700] my-3 md:my-6 capitalize">
          {t("ourServices")}
        </h2>
        <div className="w-full grid grid-cols-2 xs:grid-cols-4 gap-4 lg:gap-20 mt-3 md:mt-6 max-w-[1100px]">
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <Link
              href={"/sheeps"}
              className="w-full bg-light-white rounded-full p-9 xs:p-6 md:p-12 cursor-pointer hover:bg-secondary group transition duration-200"
            >
              <Image
                src={"/icons/sheep1.png"}
                alt="Sheep"
                width={200}
                height={200}
                className="w-full h-full transition duration-200 object-cover group-hover:brightness-0 group-hover:invert-[1]"
              />
            </Link>
            <h3 className="text-md md:text-xl font-medium text-center">
              Sheep
            </h3>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <Link
              href={"/reindeer"}
              className="w-full bg-light-white rounded-full p-9 xs:p-6 md:p-12 cursor-pointer hover:bg-secondary group transition duration-200"
            >
              <Image
                src={"/icons/sheep2.png"}
                alt="Reindeer"
                width={200}
                height={200}
                className="w-full h-full transition duration-200 object-cover group-hover:brightness-0 group-hover:invert-[1]"
              />
            </Link>
            <h3 className="text-md md:text-xl font-medium text-center">
              Reindeer
            </h3>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <Link
              href={"/deer"}
              className="w-full bg-light-white rounded-full p-9 xs:p-6 md:p-12 cursor-pointer hover:bg-secondary group transition duration-200"
            >
              <Image
                src={"/icons/sheep3.png"}
                alt="Sheep"
                width={200}
                height={200}
                className="w-full h-full transition duration-200 object-cover group-hover:brightness-0 group-hover:invert-[1]"
              />
            </Link>
            <h3 className="text-md md:text-xl font-medium text-center">
              Daniel Deer
            </h3>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <Link
              href={"/medical"}
              className="w-full bg-light-white rounded-full p-9 xs:p-6 md:p-12 cursor-pointer hover:bg-secondary group transition duration-200"
            >
              <Image
                src={"/icons/sheep4.png"}
                alt="Sheep"
                width={200}
                height={200}
                className="w-full h-full transition duration-200 object-cover group-hover:brightness-0 group-hover:invert-[1]"
              />
            </Link>
            <h3 className="text-md md:text-xl font-medium text-center">
              Medical
            </h3>
          </div>
        </div>
      </motion.div>
      <motion.div variants={slideInFromBottom(0.5,130)} initial={"hidden"} viewport={onceTrue} whileInView={"visible"}  className="flex flex-col mt-2 md:mt-8">
        <h2 className="text-[#333333] text-2xl md:text-4xl font-[700] my-2 md:my-6 capitalize">
          {t("ourProducts")}
        </h2>
        <div className="w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          <Link
            href={"/sheeps"}
            className="w-full flex flex-col items-center justify-between gap-4 bg-white rounded-lg md:p-5 p-4 py-4 md:py-6 shadow-card"
          >
            <div className="px-3 cursor-pointer h-[140px]">
              <Image
                src={"/pr1.png"}
                alt="Sheep"
                width={200}
                height={200}
                className="object-cover h-full w-full hover:scale-110 transition-all duration-150 ease-in-out"
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <h3 className="text-2xl font-semibold">Sheep</h3>
              <p className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                doloribus?
              </p>
            </div>
          </Link>
          <Link
            href={"/reindeer"}
            className="w-full flex flex-col items-center justify-between gap-4 bg-white rounded-lg md:p-5 p-4 py-4 md:py-6 shadow-card"
          >
            <div className="px-3 cursor-pointer h-[140px] ">
              <Image
                src={"/pr2.png"}
                alt="Sheep"
                width={200}
                height={200}
                className="object-cover h-full w-full hover:scale-110 transition-all duration-150 ease-in-out"
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <h3 className="text-2xl font-semibold">Reindeer</h3>
              <p className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                doloribus?
              </p>
            </div>
          </Link>
          <Link
            href={"/deer"}
            className="w-full flex flex-col items-center justify-between gap-4 bg-white rounded-lg md:p-5 p-4 py-4 md:py-6 shadow-card"
          >
            <div className="px-3 cursor-pointer h-[140px]">
              <Image
                src={"/pr3.png"}
                alt="Sheep"
                width={200}
                height={200}
                className="object-cover h-full w-full hover:scale-110 transition-all duration-150 ease-in-out"
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <h3 className="text-2xl font-semibold">Deer</h3>
              <p className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                doloribus?
              </p>
            </div>
          </Link>
          <Link
            href={"/medical"}
            className="w-full flex flex-col items-center justify-between gap-4 bg-white rounded-lg md:p-5 p-4 py-4 md:py-6 shadow-card"
          >
            <div className="px-3 cursor-pointer h-[140px] ">
              <Image
                src={"/pr4.png"}
                alt="Sheep"
                width={200}
                height={200}
                className="object-cover h-full w-full hover:scale-110 transition-all duration-150 ease-in-out"
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <h3 className="text-2xl font-semibold">Medical</h3>
              <p className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                doloribus?
              </p>
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Products;
