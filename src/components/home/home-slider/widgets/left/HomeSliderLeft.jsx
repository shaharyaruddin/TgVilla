"use client";
import React, { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomeSliderPera from "./widgets/HomeSliderPera";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeSliderLeft = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Bedroom 1");

  // GSAP for main content animation only
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".leftToRight", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".slider-container",
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });
  }, []);

  const handleReadMoreClick = () => {
    setActiveTab("Bedroom 1");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const modalContent = {
    "Bedroom 1": {
      features: [
        "King Size Bed",
        "Sofa Bed",
        "Air Conditioner",
        "Bed linens",
        "Clothing storage",
        "Private Bathroom",
      ],
      images: [
        "/assets/images/bedroomVilla/bedroom2.jpg",
        "/assets/resort/7.jpg",
        "/assets/resort/8.jpg",
      ],
    },
    "Bedroom 2": {
      features: [
        "Queen Size Bed",
        "Air Conditioner",
        "Bed linens",
        "Clothing storage",
        "Private Bathroom",
      ],
      images: [
        "/assets/resort/5.jpg",
        "/assets/resort/8.jpg",
        "/assets/resort/9.jpg",
      ],
    },
    "Sofa bed": {
      features: [
        "Sofa Bed",
        "Air Conditioner",
        "Bed linens",
        "Clothing storage",
        "Private Bathroom",
      ],
      images: [
        "/assets/resort/6.jpg",
        "/assets/resort/4.jpg",
        "/assets/resort/7.jpg",
      ],
    },
  };

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center p-5 slider-container bg-[#E8E4D9]">
        <div className="w-[80%] max-md:w-full space-y-5 max-md:space-x-2">
          <h3 className="font-playfair text-4xl max-md:text-xl leftToRight">
            A Glimpse into Paradise
          </h3>
          <h1 className="font-playfair text-[4rem] leading-none max-md:text-[2rem] leftToRight">
            Through Our 5-Star <br />
            TG Luxury Resort
          </h1>
          <HomeSliderPera className="leftToRight">
            Step inside a world of private luxury and wellness at TG Luxury
            Villas, where high-end interiors, stunning outdoor spaces, and
            private facilities create an unforgettable experience.
          </HomeSliderPera>
          <HomeSliderPera className="leftToRight">
            Nestled in Limassol's most prestigious area, our exclusive villas
            offer both tranquil relaxation and easy access to Cyprus's finest
            beaches, restaurants, and nightlife.
          </HomeSliderPera>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              className="border border-black rounded-full p-2 px-5 mt-5 font-medium leftToRight"
              onClick={handleReadMoreClick}
            >
              Read More
            </button>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50"
            onClick={handleCloseModal}
          >
            <div
              className="bg-white rounded-xl p-6 w-11/12 md:w-2/3 lg:w-1/2 shadow-2xl transform transition-all duration-300 ease-in-out hover:shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex bg-gray-100 p-2 rounded-lg justify-around mb-6">
                {Object.keys(modalContent).map((tab) => (
                  <button
                    key={tab}
                    className={`px-6 py-2 text-sm font-medium ${
                      activeTab === tab
                        ? "bg-white rounded-md shadow-md text-gray-800"
                        : "text-gray-500 hover:text-gray-800"
                    } transition-colors duration-200`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                  <ul className="list-none pl-5 space-y-2">
                    {modalContent[activeTab].features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="text-green-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-1/2">
                  <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    className="w-full h-64 rounded-xl shadow-md"
                  >
                    {modalContent[activeTab].images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="w-full h-64 overflow-hidden rounded-xl">
                          <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover zoom-image"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              <button
                className="mt-6 w-full md:w-auto px-6 py-2 bg-gray-100 rounded-full font-medium text-gray-800 hover:bg-gray-200 transition-colors duration-200"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeSliderLeft;
