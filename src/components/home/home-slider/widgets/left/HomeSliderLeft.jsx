"use client";
import React, { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomeSliderPera from "./widgets/HomeSliderPera";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Image paths for 2 Bedroom and 3 Bedroom Villas
const villaImages = {
  twoBedroom: [
    "/assets/images/bedroomVilla/bedroom1.jpg",
    "/assets/images/bedroomVilla/bedroom2.jpg",
    "/assets/images/bedroomVilla/bedroom4.jpg",
    "/assets/images/bedroomVilla/bedroom6.jpg",
    "/assets/images/bedroomVilla/bedroom5.jpg",
    "/assets/images/bedroomVilla/bedroom7.jpg",
    "/assets/images/bedroomVilla/bedroom8.jpg",
  ],
  threeBedroom: [
    "/assets/images/bedroomvilla-3/bedroom1.jpg",
    "/assets/images/bedroomvilla-3/bedroom2.jpg",
    "/assets/images/bedroomvilla-3/bedroom3.jpg",
    "/assets/images/bedroomvilla-3/bedroom4.jpg",
    "/assets/images/bedroomvilla-3/bedroom5.jpg",
    "/assets/images/bedroomvilla-3/bedroom6.jpg",
    "/assets/images/bedroomvilla-3/bedroom7.jpg",
    "/assets/images/bedroomvilla-3/bedroom8.jpg",
    "/assets/images/bedroomvilla-3/bedroom9.jpg",
    "/assets/images/bedroomvilla-3/bedroom10.jpg",
    "/assets/images/bedroomvilla-3/bedroom11.jpg",
    "/assets/images/bedroomvilla-3/bedroom12.jpg",
    "/assets/images/bedroomvilla-3/bedroom13.jpg",
    "/assets/images/bedroomvilla-3/bedroom14.jpg",
  ],
};

const HomeSliderLeft = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("twoBedroom");
  const [selectedImage, setSelectedImage] = useState(null);

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
        // markers: true
      },
    });
  }, []); 

  // GSAP for modal animation (only for modal entrance)
  useGSAP(() => {
    if (isGalleryOpen) {
      gsap.from(".modal", {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [isGalleryOpen]);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setIsGalleryOpen(false);
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, []);

  const handleSeeMoreClick = () => {
    setIsGalleryOpen(true);
  };

  const handleCloseModal = () => {
    setIsGalleryOpen(false);
    setSelectedImage(null);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const getRelatedImages = (currentImage) => {
    const currentIndex = villaImages[activeTab].indexOf(currentImage);
    const related = villaImages[activeTab].filter((img, idx) => idx !== currentIndex);
    return related.slice(0, 4);
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
          <button
            className="border rounded-full p-2 px-5 mt-5 font-medium leftToRight"
            onClick={handleSeeMoreClick}
          >
            See More
          </button>
        </div>
      </div>

      {/* Modal Gallery */}
      {isGalleryOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white p-6 rounded-lg w-[85%] max-w-5xl max-h-[80vh] overflow-y-auto modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-playfair text-2xl">Villa Gallery</h2>
              <button
                className="text-gray-600 hover:text-gray-800 font-bold"
                onClick={handleCloseModal}
              >
                ✕
              </button>
            </div>
            {/* Tabs */}
            <div className="flex justify-center space-x-4 mb-6">
              <button
                className={`text-xs md:text-base px-4 py-2 font-medium rounded-lg transition-colors duration-300 ${
                  activeTab === "twoBedroom"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => handleTabClick("twoBedroom")}
              >
                2 Bedroom Villa
              </button>
              <button
                className={`text-xs md:text-base px-4 py-2 font-medium rounded-lg transition-colors duration-300 ${
                  activeTab === "threeBedroom"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => handleTabClick("threeBedroom")}
              >
                3 Bedroom Villa
              </button>
            </div>
            {/* Image Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {villaImages[activeTab].map((image, index) => (
                <div key={`${activeTab}-${index}`}>
                  <img
                    src={image}
                    alt={`${activeTab} Villa ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg shadow-md cursor-pointer"
                    onClick={() => {
                      handleImageClick(image);
                      setIsGalleryOpen(false); // Close modal when clicking an image
                    }}
                    onError={() => console.error(`Failed to load image: ${image}`)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Full-Screen Image Slider Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60]"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-[90%] max-h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={1}
              centeredSlides={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              className="w-full h-full flex items-center justify-center"
            >
              {villaImages[activeTab].map((image, index) => (
                <SwiperSlide key={`${activeTab}-swiper-${index}`}>
                  <img
                    src={image}
                    alt={`${activeTab} Villa ${index + 1}`}
                    className="max-w-full max-h-[80vh] object-contain mx-auto"
                    onError={() => console.error(`Failed to load swiper image: ${image}`)}
                  />
                </SwiperSlide>
              ))}
              {/* Custom Navigation Buttons */}
              <div className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-black/80 transition-all z-[70]" />
              <div className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-black/80 transition-all z-[70]" />
            </Swiper>
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/80 transition-all z-[80] font-bold text-lg"
              onClick={handleCloseModal}
            >
              ✕
            </button>
          </div>
          {/* Related Images */}
          <div className="absolute bottom-4 grid grid-cols-4 gap-2 p-4 bg-black/50 z-[100] rounded-lg">
            {getRelatedImages(selectedImage).map((image, index) => (
              <img
                key={`${activeTab}-related-${index}`}
                src={image}
                alt={`Related ${activeTab} Villa ${index + 1}`}
                className="w-20 h-20 object-cover rounded-md cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(image);
                }}
                onError={() => console.error(`Failed to load related image: ${image}`)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HomeSliderLeft;