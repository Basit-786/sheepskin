import { useTranslations } from "next-intl";
import React from "react";

const Story = () => {
  const t = useTranslations("About");

  return (
    <section className="">
      <div
        id="story"
        className="max-w-[1250px] mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 border-b pb-12">
          <div className="">
            <h2 className="text-3xl font-bold sm:text-4xl leading-[110%]">
              {t("storyHeading")}
            </h2>
          </div>
          <div className="">
            <p className="text-[#666666]">
              {t("storyTxt1")}
              <br />
              <br />
              {t("storyTxt2")}
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[#666666]">
              {t("storyTxt3")}
              <br />
              <br />
              {t("storyTxt4")}
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="py-12 px-4 w-full cursor-pointer hover:bg-white hover:scale-[1.02] transition flex flex-col items-center justify-center border rounded-lg">
            <h3 className="text-3xl font-bold mb-4">Savings</h3>
            <h2 className="text-2xl my-4 font-semibold text-secondary">
              Over 12,000$+
            </h2>
          </div>
          <div className="py-12 px-4 w-full cursor-pointer hover:bg-white hover:scale-[1.02] transition flex flex-col items-center justify-center border rounded-lg">
            <h3 className="text-3xl font-bold mb-4">Customers</h3>
            <h2 className="text-2xl my-4 font-semibold text-secondary">255+</h2>
          </div>
          <div className="py-12 px-4 w-full cursor-pointer hover:bg-white hover:scale-[1.02] transition flex flex-col items-center justify-center border rounded-lg">
            <h3 className="text-3xl font-bold mb-4">Support</h3>
            <h2 className="text-2xl my-4 font-semibold text-secondary">24/7</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
