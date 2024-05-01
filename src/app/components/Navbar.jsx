import Image from "next/image";
import React from "react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  return (
    <div className="max-w-[1250px] mx-auto p-6 flex items-center justify-between gap-4">
      <Link href="/" className="w-[75px] md:w-[95px] cursor-pointer">
        <Image
          src={"/logo.png"}
          alt="Sheeps Skin LOGO"
          width={200}
          height={100}
          className="w-full  h-full object-cover"
        />
      </Link>
      <LanguageSwitcher />
    </div>
  );
};

export default Navbar;
