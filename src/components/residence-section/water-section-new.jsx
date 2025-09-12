"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const WaterSectionNew = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  const cardsData = [
    {
      title: "Wakeboard",
      description: `Wakeboard is a water sport that involves standing on a board and using a rope to pull yourself through the water. It is a popular sport in many parts of the world, including the United States, Canada, and Europe.`,
      img: "/assets/images/whiteboard.webp",
    },
    {
      title: "Jet Ski",
      description: `Jet Ski is a water sport that involves riding a jet ski over water, offering speed and thrill. It is one of the most popular water activities worldwide.`,
      img: "/assets/images/jetski.avif",
    },
    {
      title: "Water Skiing",
      description: `Water Skiing involves riding on skis while being pulled by a boat. It combines balance, strength, and excitement for adventure seekers.`,
      img: "/assets/images/crazzysofa.webp",
    },
  ];

  useGSAP(() => {
    const cards = sectionsRef.current;

    gsap.set(cards, { yPercent: 100 });
    gsap.set(cards[0], { yPercent: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${cards.length * 100}%`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: false,
      },
    });

    cards.forEach((card, i) => {
      if (i === 0) return;
      tl.to(card, { yPercent: 0 }, `+=1`);
    });
  }, []);

  return (
    <div className="bg-[#F8F6F0]">
      <div
        ref={containerRef}
        className="max-w-7xl pb-0 md:pb-20 mx-auto min-h-screen relative overflow-hidden px-4 sm:px-6 md:px-16"
      >
        {/* Sticky Heading (only once at top) */}
        <h3 className="text-3xl md:text-4xl w-fit font-cormorant font-semibold text-black sticky top-22 md:top-24 z-20 bg-[#F8F6F0] pb-6">
          Enjoy the Water Sports
        </h3>

        {cardsData.map((card, index) => (
          <section
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="md:h-screen h-[90vh] flex flex-col md:flex-row absolute"
          >
            {/* Left Content */}
            <div className="flex-1 bg-[#F8F6F0] flex flex-col justify-center pr-0 md:pr-10">
              <div className="max-w-xl px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-cormorant font-semibold text-black mb-4">
                  {card.title}
                </h2>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg font-sans leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>

            {/* Right Image - Full Height */}
            <div className="w-full md:w-[45%] h-[40vh] sm:h-[60vh] md:h-[90vh] p-2 sm:p-2 md:p-6 rounded-2xl mt-2 sm:mt-2 md:mt-0">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default WaterSectionNew;