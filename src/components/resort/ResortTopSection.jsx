"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ResortTopSection = () => {
  const images = [
    "/assets/images/beach/2.jpg",
    "/assets/images/beach/6.jpg",
    "/assets/images/beach/7.jpg",
    "/assets/images/beach/9.jpg",
    "/assets/images/beach/10.jpg",
    "/assets/images/beach/11.jpg",
    "/assets/images/bedroomVilla/bedroom1.jpg",
    "/assets/images/bedroomVilla/bedroom2.jpg",
    "/assets/images/bedroomVilla/bedroom4.jpg",
    "/assets/images/bedroomVilla/bedroom5.jpg",
    "/assets/images/bedroomVilla/bedroom6.jpg",
    "/assets/images/bedroomVilla/bedroom7.jpg",
    "/assets/images/bedroomVilla/bedroom8.jpg",
    "/assets/images/bedroomvilla-3/bedroom1.jpg",
    "/assets/images/bedroomvilla-3/bedroom2.jpg",
    "/assets/images/bedroomvilla-3/bedroom3.jpg",
    "/assets/images/bedroomvilla-3/bedroom4.jpg",
    "/assets/images/bedroomvilla-3/bedroom5.jpg",
    "/assets/images/bedroomvilla-3/bedroom6.jpg",
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
      className="w-full min-h-screen bg-no-repeat bg-cover flex justify-center items-center relative"
      style={{ backgroundImage: "url(/assets/images/posters/poster-5.jpg)" }}
      onMouseMove={MouseMoveHandle}
    >
      <h3 className="text-[12vw] uppercase font-[600] text-transparent bg-clip-text bg-[url(/assets/images/posters/poster-2.jpg)]">
        tg resort
      </h3>
    </div>
  );
};

export default ResortTopSection;
