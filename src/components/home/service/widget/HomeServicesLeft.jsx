"use client";
import React, { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const HomeServicesLeft = () => {
  // State for modal and slider
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample image URLs for the slider (replace with your actual image paths)
  const sliderImages = [
    "/assets/images/bed.webp",
    "/assets/resort/10.jpg",
    "/assets/resort/17.jpg",
    "/assets/resort/18.jpg",
    "/assets/resort/19.jpg",
    "/assets/resort/50.jpg",
  ];

  // GSAP animations
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Existing animations for background
    gsap.from(".homeServiceBgImage", {
      scaleY: 0.15,
      transformOrigin: "bottom",
      scrollTrigger: {
        trigger: ".homeService",
        start: "top top",
        end: "bottom center",
        scrub: 1.5,
      },
    });

    // Existing animation for image container
    gsap.from(".homeServiceImageContainer", {
      scaleY: 0.15,
      transformOrigin: "bottom",
      scrollTrigger: {
        trigger: ".homeService",
        start: "top 75%",
        end: "center center",
        scrub: 1.5,
      },
    });

    // Yoyo zoom animation for the image
    gsap.to(".homeServiceImage", {
      scale: 1.1, // Zoom in slightly
      duration: 2,
      repeat: -1, // Infinite repeat
      yoyo: true, // Zoom in and out
      ease: "power1.inOut", // Smooth easing
    });

    // Animate modal when it opens
    if (isModalOpen) {
      gsap.from(".modal", {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  }, [isModalOpen]); // Re-run GSAP when modal state changes

  // Open modal
  const openModal = () => {
    setIsModalOpen(true);
    setCurrentSlide(0); // Start at first image
  };

  // Close modal
  const closeModal = () => {
    gsap.to(".modal", {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power3.in",
      onComplete: () => setIsModalOpen(false),
    });
  };

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <div className="w-full h-full p-10 px-16 relative max-[51.25em]:min-h-[20rem]! max-[51.25em]:p-0!">
      {/* Background */}
      <div className="bg-[#C8B29C] homeServiceBgImage absolute w-[85%] h-[90%] -translate-y-1/2 right-19 max-lg:right-5 max-[51.25em]:hidden rounded-[3rem] top-[55%] max-[51.25em]:-translate-y-0 max-[-51.25em]:static!"></div>
      {/* Image Container */}
      <div
        className="homeServiceImageContainer absolute w-[85%] h-[90%] max-[51.25em]:h-full! max-[51.25em]:w-full! rounded-[3rem] max-lg:rounded-none cursor-pointer overflow-hidden"
        onClick={openModal}
      >
        <img
          src="/assets/images/bed.webp"
          alt="welcome-image"
          className="homeServiceImage w-full h-full object-cover"
        />
      </div>

      {/* Modal with Slider */}
      {isModalOpen && (
        <div className="modal fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50">
          <div className="relative bg-white p-6 rounded-lg max-w-3xl w-full max-h-[80vh]">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-800"
            >
              ×
            </button>
            <h3 className="text-2xl font-playfair mb-4 text-center">Hotel Gallery</h3>
            <div className="relative w-full h-96">
              <img
                src={sliderImages[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
              >
                →
              </button>
            </div>
            <p className="text-center mt-4 text-gray-700">
              Image {currentSlide + 1} of {sliderImages.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeServicesLeft;