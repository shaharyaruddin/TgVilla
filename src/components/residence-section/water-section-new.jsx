'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WaterSectionNew = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  const cardsData = [
    {
      title: "Wakeboard",
      description: `Wakeboard is a water sport that involves standing on a board and using a rope to pull yourself through the water.`,
      img: "/assets/images/whiteboard.webp",
    },
    {
      title: "Jet Ski",
      description: `Jet Ski is a water sport that involves riding a jet ski.`,
      img: "/assets/images/jetski.avif",
    },
    {
      title: "Water Skiing",
      description: `Water Skiing involves riding on skis while being pulled by a boat.`,
      img: "/assets/images/crazzysofa.webp",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const sections = sectionsRef.current;

  
    // GSAP animation for each section
    sections.forEach((section, index) => {
      if (index < sections.length - 1) {
        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: '+=100%',
          pin: true,
          pinSpacing: false,
          scrub: true,
          onEnter: () => {
            gsap.to(section, {
              y: -100,
              duration: 0.5,
            });
          },
          onLeaveBack: () => {
            gsap.to(section, {
              duration: 0.5,
            });
          },
        });
      } else {
        // Last section: normal scrolling after pinning ends
        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          pin: true,
          pinSpacing: true,
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-screen relative bg-[#E8E4D9]">
      {cardsData.map((card, index) => (
        <section
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          className={`h-screen w-full flex items-center justify-center bg-[#E8E4D9] text-white text-2xl `}
        >
          <div className=" bg-white rounded-xl flex max-w-[70vw] p-3">
            {/* Left - Image */}
            <div className="w-[30rem] h-[30rem] flex justify-center">
              <img
                src={card.img}
                alt={card.title}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>

            {/* Right - Text */}
            <div className=" w-2xl mt-6 md:mt-12 md:ml-10">
              <h2 className="text-3xl md:text-5xl font-cormorant font-semibold text-black mb-4">
                {card.title}
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed font-sans">
                {card.description}
              </p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default WaterSectionNew;