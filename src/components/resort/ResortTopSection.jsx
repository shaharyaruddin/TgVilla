"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ResortTopSection = () => {
  const images = [
    "/assets/resort2/10.webp",
    "/assets/resort2/11.webp",
    "/assets/resort2/12.webp",
    "/assets/resort2/13.webp",
    "/assets/resort2/14.webp",
    "/assets/resort2/15.webp",
    "/assets/resort2/16.webp",
    "/assets/resort2/17.jpg",
    "/assets/resort2/18.jpg",
    "/assets/resort2/19.jpg",
    "/assets/resort2/20.webp",
    "/assets/resort2/21.jpg",
  ];

  const containerRef = useRef();

  let lastTime = 0;
  let lastImageIndex = 0;

  const MouseMoveHandle = (e) => {
    const now = Date.now();
    if (now - lastTime < 100) return;
    lastTime = now;

    const { clientX, clientY } = e;

    // image display
    const img = document.createElement("img");
    if (lastImageIndex >= images.length) {
      lastImageIndex = 0;
    }
    img.src = images[lastImageIndex];
    img.style.position = "absolute";
    img.style.scale = "0";
    img.style.width = "300px";
    img.style.height = "300px";

    gsap.to(img, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });

    img.style.left = `${clientX}px`;
    img.style.top = `${clientY}px`;
    containerRef.current.appendChild(img);

    const timer = setTimeout(() => {
      img.remove();
    }, 1000);
    lastImageIndex++;

    return () => clearTimeout(timer);
  };

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen max-xl:min-h-[40vh] max-md:min-h-[10rem] max-md:items-end bg-no-repeat bg-cover flex justify-center items-center relative"
      style={{ backgroundImage: "url(/assets/images/posters/mainhero.webp)" }}
      onMouseMove={MouseMoveHandle}
    >
      <h3 className="text-[12vw] max-xl:text-[15vw] max-md:text-[17vw] uppercase font-[600] text-transparent bg-clip-text bg-[url(/assets/images/posters/poster-2.jpg)]">
        tg resort
      </h3>
    </div>
  );
};

export default ResortTopSection;
