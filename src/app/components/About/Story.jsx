import React from "react";

const Story = () => {
  return (
    <section className="p-4">
      <div
        id="story"
        className="max-w-[1250px] mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 border-b pb-12">
          <div className="">
            <h2 className="text-3xl font-bold sm:text-4xl leading-[110%]">
              Ethical Sourcing, Sustainable Practices
            </h2>
          </div>
          <div className="">
            <p className="text-[#666666]">
              Central to our philosophy is the belief that every animal skin has
              a story to tell, and it is our responsibility to ensure that story
              is one of respect and stewardship.
              <br />
              <br />
              As part of our commitment to social responsibility, we actively
              support indigenous communities and traditional artisans who rely
              on animal skins for their livelihoods.
              <br />
              <br />
              We’re committed to helping our customers grow their revenue faster
              by unleashing the potential of video and AI.
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
