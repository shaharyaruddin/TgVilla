import React from "react";
import RealResultCards from "./RealResultCards";
import { Star } from "lucide-react";

const SpaWhereExpertiseMeetsIndulgence = () => {
  const REAL_RESULT = [
    {
      title: "Repeat Visits",
      result: "82%",
    },
    {
      title: "Therapist Experience—average",
      result: "9+ years",
    },
    {
      title: "Product Repurchase Rate",
      result: "72%",
    },
  ];
  return (
    <div className="max-w-7xl max-2xl:p-3 mx-auto text-[#333333]">
      {/* content */}
      <div className="w-full  flex flex-col text-center justify-center items-center font-outfit  ">
        <div className="max-w-lg space-y-5">
          <h3>The Vistiq Experience</h3>
          <h2 className="font-cormorant text-6xl font-[600]  max-md:w-full">
            Where Expertise Meets Indulgence
          </h2>
          <p className="text-xl">
            We blend science and serenity to deliver meaningful results every
            time
          </p>
        </div>
      </div>
      {/* grid */}
      <div
        className="w-full min-h-[calc(100vh-200px)] grid grid-cols-4
       grid-rows-2 max-md:grid-rows-[auto] gap-2 my-10 max-xl:grid-cols-3 max-md:grid-cols-1"
      >
        <div className="  rounded-2xl p-2 bg-[url('/images/green.avif')] bg-center bg-cover bg-no-repeat">
          <div className="w-full h-full backdrop-blur-md rounded-2xl flex text-center space-y-4 justify-center flex-col text-white items-center">
            <h3>Our Philosophy</h3>
            <h2 className="font-cormorant text-2xl">Crafted for Calm</h2>
            <p>We create more than treatments—we create space to breathe.</p>
          </div>
        </div>
        {/* second */}
        <div className="flex items-end p-2 bg-red-200 rounded-2xl  col-span-2 row-span-2 max-md:col-span-1 max-md:min-h-[35rem] bg-[url('/images/women.avif')] bg-center bg-cover bg-no-repeat">
          {/* content */}
          <div className="w-full h-[15rem] backdrop-blur-md rounded-2xl flex p-3 space-y-4 justify-center flex-col text-white  ">
            <h2 className="font-cormorant text-4xl mt-4 font-[600]">
              Professionals You Can Trust
            </h2>
            <p>
              At Vistiq, our team consists of highly trained, certified spa and
              wellness professionals. From licensed massage therapists to expert
              estheticians, every practitioner is hand-selected for their skill,
              experience, and intuitive care.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-2">
          <h2 className="font-cormorant text-3xl font-[600]">Real Results</h2>
          {/* card */}
          {REAL_RESULT.map((item) => {
            return <RealResultCards title={item.title} result={item.result} />;
          })}
        </div>
        <div className=" bg-white rounded-2xl p-3 flex justify-between flex-col max-md:min-h-[13rem]">
          <div className="flex">
            {Array.from({ length: 5 }).map((item) => {
              return <Star size={15} className="fill-black/90" />;
            })}
          </div>
          <div className="">
            <h3 className="font-cormorant text-3xl mb-4">Community Love</h3>
            <p className="">
              Vistiq is more than a spa — it’s a part of our clients’ self-care
              rituals. From first-time guests to loyal regulars, our community
              keeps coming back for the warmth, the care, and the calm.
            </p>
          </div>
        </div>

        <div className="bg-[linear-gradient(to_bottom,white,transparent),url('/images/flower.avif')] via-transparent bg-center bg-cover bg-no-repeat h-full rounded-2xl flex justify-center items-center text-center flex-col font-outfit space-y-1 p-2 max-xl:col-span-2 max-md:col-span-1 max-md:min-h-[13rem]">
          <h3>Our Promise to You</h3>
          <h2>
            This isn’t just a spa treatment—it’s a reset for your mind, body,
            and soul.
          </h2>
          <a
            href="#"
            className="bg-[#333333] px-4 mt-5 py-2 rounded-full text-white"
          >
            Book Your Escape
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpaWhereExpertiseMeetsIndulgence;
