import React from "react";

const WhoWeAre = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-left max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-cormorant font-semibold text-[#6A3A1C] mb-4">
          Who We Are
        </h2>
        <p className=" leading-relaxed text-[#6A3A1C]">
          We are a team of hospitality experts passionate about creating
          unforgettable experiences for discerning guests. Every stay is crafted
          with precision, ensuring luxury, comfort, and exceptional attention to
          detail in every aspect of our villas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-stretch">
        {/* Left Image */}
        <div>
          <img
            src="/assets/about/pool.jpg"
            alt="Pool"
            className="rounded-md shadow-lg w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between h-full">
          <div>
            <img
              src="/assets/about/topimg.jpg"
              alt="Couch"
              className="rounded-md shadow-md w-full object-cover"
            />
          </div>

          <div className="mt-6">
            <h2 className="text-4xl font-cormorant font-semibold text-[#6A3A1C] mb-4">
              <span className="text-5xl  text-[#6A3A1C] mr-2">“</span>
              Our Story
            </h2>
            <p className=" leading-relaxed text-[#6A3A1C] px-5 text-sm">
              TG Luxury Stay began with a simple vision – to redefine villa
              hospitality in Cyprus. What started as one exceptional property
              has blossomed into a collection of luxurious retreats, each
              crafted to deliver more than just a stay – a lasting impression.
              From indulgent spa facilities to impeccable service, every detail
              is thoughtfully curated to create unforgettable moments. Today,
              our villas stand as a testament to that vision, elevating the art
              of luxury living beyond the expected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
