"use client";
import React, { useRef } from "react";
import gsap from "gsap";

const ResortTopSection = () => {
  const images = [
    "/assets/resort2/10.webp",
    "/assets/resort2/14.webp",
    "/assets/resort2/16.webp",
    "/assets/resort2/18.jpg",
    "/assets/resort2/19.jpg",
    "/assets/resort2/21.jpg",
  ];

  const containerRef = useRef(null);

  let lastTime = 0;
  let lastImageIndex = 0;

  const MouseMoveHandle = (e) => {
    const now = Date.now();
    if (now - lastTime < 120) return; // throttle
    lastTime = now;

    const { clientX, clientY } = e;

    // image create
    const img = document.createElement("img");
    if (lastImageIndex >= images.length) lastImageIndex = 0;
    img.src = images[lastImageIndex++];
    img.style.position = "absolute";
    img.style.pointerEvents = "none";
    img.style.width = "300px";
    img.style.height = "300px";
    img.style.left = `${clientX}px`;
    img.style.top = `${clientY}px`;
    img.style.opacity = "0";
    containerRef.current.appendChild(img);

    // animation
    gsap.fromTo(
      img,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" }
    );

    gsap.to(img, {
      opacity: 0,
      duration: 0.5,
      delay: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        img.remove(); 
      },
    });
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
