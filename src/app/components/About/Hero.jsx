import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-40 overflow-hidden rounded-lg sm:h-80 lg:h-full">
            <Image
              alt=""
              src="/about.jpeg"
              width={500}
              height={500}
              className="absolute inset-0 h-full w-full object-cover"
            />{" "}
          </div>
          <div className="lg:py-12">
            <h4 className="uppercase text-sm tracking-[2px] font-semibold text-secondary mb-3">
              About Us
            </h4>
            <h2 className="text-3xl font-bold sm:text-4xl leading-[110%]">
              Our Journey: 40 Years of Ethical Innovation
            </h2>

            <p className="mt-4 text-[#666666]">
              In the heart of [Your Region], amidst the rugged landscapes and
              pristine wilderness, the story of [Your Company Name] began over
              40 years ago. It was a tale woven with passion, respect for
              nature, and a relentless pursuit of ethical innovation.
            </p>

            <Link
              href="#story"
              className="mt-8 inline-block rounded bg-secondary px-8 py-3 text-sm font-semibold text-white"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
