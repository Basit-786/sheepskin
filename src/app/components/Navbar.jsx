"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

import { motion } from "framer-motion";
import {
  onceTrue,
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
} from "../utils/motion";

const Navbar = () => {
  return (
    <div className="max-w-[1250px] mx-auto p-6 flex items-center justify-between gap-4">
      <motion.div
        variants={slideInFromLeft(0.15)}
        initial={"hidden"}
        viewport={onceTrue}
        whileInView={"visible"}
        className="w-[75px] md:w-[95px] cursor-pointer"
      >
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="Sheeps Skin LOGO"
            width={200}
            height={100}
            className="w-full  h-full object-cover"
          />
        </Link>
      </motion.div>
   
        <LanguageSwitcher />
    </div>
  );
};

export default Navbar;
