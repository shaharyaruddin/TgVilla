"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import TestimonialCardReview from "./TestimonialCardReview";

const TestimonialReviewSection = () => {
  const leftRowRef = useRef(null);
  const rightRowRef = useRef(null);
  const duration = 40;
  useEffect(() => {
    const leftCards = leftRowRef.current.children;
    const rightCards = rightRowRef.current.children;

    // Duplicate cards for seamless looping
    const leftCardsArray = Array.from(leftCards);
    const rightCardsArray = Array.from(rightCards);
    leftCardsArray.forEach((card) =>
      leftRowRef.current.appendChild(card.cloneNode(true))
    );
    rightCardsArray.forEach((card) =>
      rightRowRef.current.appendChild(card.cloneNode(true))
    );

    const leftRowWidth = leftRowRef.current.scrollWidth / 2; // Divide by 2 since we duplicated
    const rightRowWidth = rightRowRef.current.scrollWidth / 2;

    // GSAP animation for left-moving row
    gsap.to(leftRowRef.current, {
      x: -leftRowWidth,
      duration: duration,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % leftRowWidth), // Seamless loop
      },
    });

    // GSAP animation for right-moving row
    gsap.to(rightRowRef.current, {
      x: rightRowWidth,
      duration: duration, // Adjust speed (higher = slower)
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % rightRowWidth), // Seamless loop
      },
    });
  }, []);

  return (
    <div className="mt-10 space-y-5 overflow-x-hidden">
      {/* Left-moving row */}
      <div className="flex space-x-3" ref={leftRowRef}>
        {Array.from({ length: 10 }).map((_, index) => (
          <TestimonialCardReview
            key={`left-${index}`}
            companyName="booking.com"
            className={index % 2 === 0 ? "bg-[#E9ECF2]" : ""}
          />
        ))}
      </div>
      {/* Right-moving row */}
      <div className="flex space-x-3" ref={rightRowRef}>
        {Array.from({ length: 10 }).map((_, index) => (
          <TestimonialCardReview
            key={`right-${index}`}
            companyName="Airbnb.com"
            className={index % 2 === 1 ? "bg-[#E9ECF2]" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialReviewSection;
