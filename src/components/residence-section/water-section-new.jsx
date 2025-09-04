'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

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

  useGSAP(() => {
    const cards = sectionsRef.current;

    // Pehle sab ko neeche set kar dete hain
    gsap.set(cards, { yPercent: 100 });
    gsap.set(cards[0], { yPercent: 0 }); // pehla card visible

    // Timeline create karte hain
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${cards.length * 100}%`, // har card ke liye scroll space
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: false, // testing ke liye
      },
    });

    cards.forEach((card, i) => {
      if (i === 0) return; // first card already visible
      tl.to(card, { yPercent: 0 }, `+=${1}`); // har card ek step me upar aayega
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen serviceContainer relative bg-[#E8E4D9] overflow-hidden"
    >
      {cardsData.map((card, index) => (
        <section
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          className="h-screen w-full flex items-center absolute justify-center  text-white text-2xl card"
        >
          <div className="bg-white rounded-xl flex max-w-[70vw]  w-full max-md:max-w-full max-md:mx-3 p-3 max-md:flex-col">
            {/* Left - Image */}
            <div className="w-[30rem] max-md:w-full h-full flex justify-center">
              <img
                src={card.img}
                alt={card.title}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>

            {/* Right - Text */}
            <div className="max-w-2xl mt-6 md:mt-12 md:ml-10 min-h-40">
              <h2 className="text-3xl md:text-5xl font-cormorant font-semibold text-black mb-4">
                {card.title}
              </h2>
              <p className="text-gray-700 text-base md:text-lg  font-sans">
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
