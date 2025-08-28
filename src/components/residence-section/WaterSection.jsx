"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const WaterSection = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsDesktop(window.innerWidth >= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    }, (context) => {
      const { isDesktop, isMobile } = context.conditions;

      if (isDesktop) {
        ScrollTrigger.refresh();

        const cards = gsap.utils.toArray(".water-card");
        const cardHeight = 460;
        const cardGap = 40;
        const totalAnimationHeight = (cards.length - 1) * (cardHeight + cardGap);

        ScrollTrigger.create({
          trigger: ".water-card-stack-container",
          pin: true,
          start: "top top",
          end: `+=${totalAnimationHeight}`,
          pinSpacing: true,
        });

        cards.forEach((card, index) => {
          if (index > 0) {
            gsap.to(card, {
              y: -index * (cardHeight + cardGap),
              zIndex: cards.length + index,
              ease: "power1.inOut",
              scrollTrigger: {
                trigger: ".water-card-stack-container",
                start: "top top+=80",
                end: `+=${index * (cardHeight + cardGap)}`,
                scrub: 1.5,
                markers: false,
              },
            });
          }
        });
      }

      if (isMobile) {
        ScrollTrigger.refresh();

        const cards = gsap.utils.toArray(".water-card");
        const cardHeight = 520; // Adjusted for mobile
        const totalAnimationHeight = (cards.length - 1) * cardHeight;

        ScrollTrigger.create({
          trigger: ".water-card-stack-container",
          pin: true,
          start: "top 10%",
          end: `+=${totalAnimationHeight}`,
          pinSpacing: true,
        });

        cards.forEach((card, index) => {
          if (index > 0) {
            gsap.to(card, {
              y: -index * cardHeight,
              zIndex: cards.length + index,
              ease: "power1.inOut",
              scrollTrigger: {
                trigger: ".water-card-stack-container",
                start: "top 10%",
                end: `+=${index * cardHeight}`,
                scrub: 1,
                markers: false,
              },
            });
          }
        });
      }

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    });

    return () => mm.revert();
  }, []);

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
      description: `Crazy Sofa is a water sport that involves riding a crazy sofa.`,
      img: "/assets/images/crazzysofa.webp",
    },
  ];

  return (
    <div className="w-full bg-[#E8E4D9] flex flex-col items-center justify-center px-4 pt-8 ">
      {/* Heading */}
      <div className="text-center max-md:mb-3">
        <h1 className="text-5xl md:text-6xl font-semibold font-cormorant text-black ">
          Enjoy the Water Sport 
        </h1>
      </div>

      {/* Card Stack Section */}
      <div className="water-card-stack-container relative w-[90%] md:w-[70%] min-h-[90vh] max-md:min-h-[70vh]">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`water-card ${
              isDesktop ? "absolute" : "absolute"
            } left-0 right-0 mx-auto bg-white flex flex-col md:flex-row justify-between items-start p-6 rounded-md shadow-lg`}
            style={{
              zIndex: cardsData.length - index,
              top: isDesktop
                ? `${index * 520 + window.innerHeight * 0.1}px`
                : `${index * 520}px`,
              height: "520px",
            }}
          >
            {/* Left - Image */}
            <div className="w-full md:w-[35%] flex justify-center">
              <img
                src={card.img}
                alt={card.title}
                className="rounded-lg object-cover w-full h-[260px] md:h-[460px]"
              />
            </div>

            {/* Right - Text */}
            <div className="w-full md:w-[65%] mt-6 md:mt-12 md:ml-10">
              <h2 className="text-3xl md:text-5xl font-cormorant font-semibold text-black mb-4">
                {card.title}
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed font-sans">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaterSection;