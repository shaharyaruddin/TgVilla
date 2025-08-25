"use client";
import React from "react";
import { motion } from "framer-motion"; // <-- Important: Add this import

const BeachSection = () => {
  const images = [
    "/assets/images/beach/2.jpg",
    "/assets/images/beach/6.jpg",
    "/assets/images/beach/7.jpg",
    "/assets/images/beach/10.jpg",
    "/assets/images/beach/11.jpg",
    "/assets/images/beach/9.jpg",
  ];

  return (
    <>
      <h1 className="my-5 mb-12 text-4xl font-bold font-playfair italic text-center">
        Your life on the beach
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-4 pb-20">
        {images.map((imgSrc, idx) => (
          <motion.div
            key={`beach-img-${idx}`}
            style={{
              rotate: Math.random() * 30 - 10,
            }}
            whileHover={{
              scale: 1.3,
              rotate: 0,
              zIndex: 100,
            }}
            whileTap={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            className="rounded-xl p-1 bg-white border border-neutral-100 overflow-hidden"
          >
            <img
              src={imgSrc}
              alt={`Beach ${idx + 1}`}
              className="rounded-lg h-14 w-14 md:h-40 md:w-40 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default BeachSection;
