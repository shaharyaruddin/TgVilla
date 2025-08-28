"use client";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TgDetails = () => {
  const textContainer = useRef(null);
  const imageContainer = useRef(null);
  const bgImageRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Bedroom 1");

  // GSAP animations using useGSAP
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Left section animation (scale from left)
    gsap.from(textContainer.current, {
      scaleX: 0.15,
      opacity: 0,
      transformOrigin: "left",
      duration: 2,
      scrollTrigger: {
        trigger: textContainer.current,
        start: "top 80%",
        end: "60% 70%",
        scrub: 2,
      },
    });

    // Right section animation (scale from right for both Swiper and background)
    gsap.from([imageContainer.current, bgImageRef.current], {
      scaleX: 0.15,
      opacity: 0,
      transformOrigin: "right",
      duration: 2,
      scrollTrigger: {
        trigger: imageContainer.current,
        start: "top 80%",
        end: "60% 70%",
        scrub: 2,
      },
    });
  }, []);

  // Handle ESC key press to close modal
  useGSAP(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, []);

  const images = [
    "/assets/resort/4.webp",
    "/assets/resort/5.jpg",
    "/assets/resort/6.webp",
    "/assets/resort/7.webp",
    "/assets/resort/8.jpg",
    "/assets/resort/9.webp",
  ];

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

  const handleSeeMoreClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-width mx-auto px-3 lg:px-12 w-full bg-[#E8E4D9]">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Left Side - Text Content */}
        <div className=" p-9 w-full md:w-1/2 space-y-4" ref={textContainer}>
          <h1 className="text-4xl font-bold font-playfair">
            Welcome to TG Luxury Villas — Exclusive Private Retreats
          </h1>
          <h2 className="font-playfair text-3xl font-semibold text-gray-800">
            Luxury Villas in Limassol – A Private Wellness & Spa Retreat
          </h2>
          <p>
            Experience 5-star luxury, wellness, and peace in our private
            high-end villas, just 10 minutes from the beach. Designed for
            romantic escapes, family retreats, and wellness getaways, our villas
            offer unmatched comfort and style.
          </p>
          <p>
            Enjoy boutique hotel-style services like daily cleaning, private
            yoga, premium bath products, and smart home features — all in a
            serene, exclusive setting.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>5-Star Hotel Services with personalized care</li>
            <li>Heated Saltwater Pool for deep relaxation</li>
            <li>Outdoor Jacuzzi in a peaceful setting</li>
            <li>Glass Sauna with scenic views</li>
            <li>Daily gourmet breakfast*</li>
            <li>24/7 Hot Water for nonstop comfort</li>
          </ul>
          <button
            className="border rounded-full p-2 px-5 mt-5 font-medium"
            onClick={handleSeeMoreClick}
          >
            See More
          </button>
        </div>

        {/* Right Side - Swiper Slider */}
        <div
          className="w-full mt-0 md:mt-26 md:w-1/2 relative"
          ref={imageContainer}
        >
          {/* Gray Background Box */}
          <div
            ref={bgImageRef}
            className="bg-[#9A9A9A] absolute w-full h-[61%] top-[25%] -translate-y-1/2 right-5 z-0 rounded-lg max-lg:right-5 max-[51.25em]:hidden"
          ></div>

          {/* Swiper on top of the gray background */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full h-96 rounded-lg shadow-md relative z-10"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-96 overflow-hidden rounded-lg">
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

      {/* Zoom Animation Styles */}
      <style jsx>{`
        .zoom-image {
          animation: zoomPulse 6s ease-in-out infinite;
        }

        @keyframes zoomPulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }

        .swiper-button-prev,
        .swiper-button-next {
          color: #fff;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 20px;
        }

        .swiper-pagination-bullet {
          background: #fff;
          opacity: 0.7;
        }

        .swiper-pagination-bullet-active {
          background: #000;
          opacity: 1;
        }
      `}</style>

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
  );
};

export default TgDetails;
