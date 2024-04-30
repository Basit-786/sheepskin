import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div>
        <h1 className="text-[90px] font-[700] leading-[100%] max-w-[900px]">
          Unleash the Potential of Animal Skins{" "}
        </h1>
        <p className="text-[#666666] text-lg mt-4">
          At [Your Company Name], we specialize in utilizing the finest animal
          skins, including sheep, reindeer, and deer, to craft an array of
          medical products, decorations, and much more. Our dedication to
          quality craftsmanship and ethical sourcing ensures that every item we
          produce meets the highest standards.
        </p>
      </div>
      <div className="flex flex-col mt-8">
        <h2 className="text-[#333333] text-3xl font-[700]">Explore</h2>
        <div className="w-full grid grid-cols-4 gap-4 mt-6">
          <Link
            href={"/"}
            className="w-full bg-light-white hover:bg-secondary transition-all duration-200 ease-in-out px-4 py-3 rounded-[60px] text-black hover:text-white flex items-center justify-center text-xl font-medium cursor-pointer"
          >
            Home
          </Link>
          <Link
            href={"/"}
            className="w-full bg-light-white hover:bg-secondary transition-all duration-200 ease-in-out px-4 py-3 rounded-[60px] text-black hover:text-white flex items-center justify-center text-xl font-medium cursor-pointer"
          >
            Services
          </Link>
          <Link
            href={"/about"}
            className="w-full bg-light-white hover:bg-secondary transition-all duration-200 ease-in-out px-4 py-3 rounded-[60px] text-black hover:text-white flex items-center justify-center text-xl font-medium cursor-pointer"
          >
            About Us
          </Link>
          <Link
            href={"#contact"}
            className="w-full bg-light-white hover:bg-secondary transition-all duration-200 ease-in-out px-4 py-3 rounded-[60px] text-black hover:text-white flex items-center justify-center text-xl font-medium cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
