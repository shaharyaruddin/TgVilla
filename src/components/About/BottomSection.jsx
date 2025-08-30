"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const BottomSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".horizontal-line").forEach((line) => {
        gsap.fromTo(
          line,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: line,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      gsap.utils.toArray(".vertical-line").forEach((line) => {
        gsap.fromTo(
          line,
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            duration: 2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: line,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="max-w-7xl py-10 mx-auto px-5">
      {/* Heading */}
      <div className="py-12">
        <div className="flex justify-center">
          <h2 className="max-w-96 font-cormorant text-center text-[#6A3A1C] text-4xl md:text-5xl">
            TG Luxury routes
          </h2>
        </div>
      </div>

      {/* Wrapper */}
      <div className="relative min-h-[800px] md:min-h-[1000px]">
        <div className="text-[#6A3A1C] font-cormorant">
          <div className="grid grid-cols-1 md:grid-cols-2 relative gap-y-12">
            {/* 1st card */}
            <div className="flex flex-col items-center md:items-start">
              <img
                src="/assets/about/pool.jpg"
                alt="Exclusive Villas"
                className="w-[20rem] md:w-[28rem] h-64 object-cover"
              />
              <h3 className="text-2xl md:text-3xl font-semibold mt-2">
                Exclusive Villas
              </h3>
              <p className="max-w-84 text-base md:text-lg font-semibold">
                Our collection of exclusive villas is carefully selected to
                combine privacy, comfort, and breathtaking locations, offering
                you the perfect escape into luxury living.
              </p>
            </div>

            {/* Lines + Circle */}
            <div className="hidden lg:block">
              <div className="horizontal-line absolute top-[10%] left-1/3 right-[20%] h-[1.5px] bg-[#6A3A1C] opacity-50"></div>
              <div className="vertical-line absolute top-[10%] right-[20%] bottom-[50%] w-[1px] bg-[#6A3A1C] opacity-50"></div>
              <div className="absolute top-[9.5%] right-[19.5%] w-4 h-4 border-2 rounded-full bg-white border-[#6A3A1C]"></div>
            </div>

            {/* 2nd card */}
            <div className="z-50 flex flex-col items-center md:items-end col-span-1 md:col-span-2">
              <img
                src="/assets/about/chair.jpg"
                alt="Bespoke Interiors"
                className="w-[20rem] md:w-[28rem] h-64 object-cover"
              />
              <div className="flex flex-col justify-start items-start text-left mt-2 max-w-[28rem]">
                <h3 className="text-2xl md:text-3xl font-semibold">
                  Bespoke Interiors
                </h3>
                <p className="text-base md:text-lg font-semibold">
                  Each residence is designed with timeless elegance and
                  custom-crafted interiors, blending modern sophistication with
                  classic charm to create a truly unique atmosphere.
                </p>
              </div>
            </div>

            {/* Lines + Circle */}
            <div className="hidden lg:block">
              <div className="horizontal-line absolute top-[45%] left-[20%] right-1/3 h-[1.5px] bg-[#6A3A1C] opacity-50"></div>
              <div className="vertical-line absolute top-[45%] left-[20%] bottom-[20%] w-[2px] bg-[#6A3A1C] opacity-50"></div>
              <div className="absolute top-[44.5%] left-[19.5%] w-4 h-4 rounded-full border-2 bg-white border-[#6A3A1C]"></div>
            </div>

            {/* 3rd card */}
            <div className="z-50 flex flex-col items-center md:items-start col-span-1 md:col-span-2">
              <img
                src="/assets/about/cloth.jpg"
                alt="Dedicated Service"
                className="w-[20rem] md:w-[28rem] h-64 object-cover"
              />
              <h3 className="text-2xl md:text-3xl font-semibold mt-2">
                Dedicated Concierge
              </h3>
              <p className="max-w-84 text-base md:text-lg font-semibold">
                From personalized travel arrangements to tailored experiences,
                our concierge team ensures every detail of your stay is managed
                with precision, care, and discretion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
