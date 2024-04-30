import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section>
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt=""
              src="/about.jpeg"
              className="absolute inset-0 h-full w-full object-cover"
              width={500}
              height={600}
            />
          </div>

          <div className="lg:py-12">
            <h2 className="text-3xl font-bold sm:text-4xl">About Us</h2>

            <p className="mt-4 text-[#666666]">
              Quality Assurance: We meticulously select and process each animal
              skin to guarantee exceptional quality and longevity in every
              product we create.
              <br />
              Ethical Practices: We prioritize ethical sourcing and sustainable
              practices to ensure the welfare of the animals and the
              preservation of natural habitats.
            </p>

            <Link
              href="/about"
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

export default About;
