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
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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


    const villaDetails = [
    {
      title: "5-Star Hotel Services & Facilities",
      desc: "Enjoy a seamless blend of high-end hospitality and personalized care.",
    },
    {
      title: "Heated Saltwater Pool",
      desc: "Immerse yourself in crystal-clear waters designed for ultimate relaxation.",
    },
    {
      title: "Luxury Outdoor Jacuzzi",
      desc: "Experience hydrotherapy in an exclusive, serene setting.",
    },
    {
      title: "Outdoor Glass Sauna",
      desc: "Detox with panoramic views of the lush surroundings.",
    },
    {
      title: "Daily Breakfast*",
      desc: "Start your day with a gourmet meal prepared to perfection.",
    },
    {
      title: "Hot Water 24/7",
      desc: "Indulge in uninterrupted luxury and comfort.",
    },
    {
      title: "10-Min Walk to the Beach, Bars & Restaurants",
      desc: "Prime location with easy access to coastal experiences.",
    },
    {
      title: "Luxury Designer Furniture",
      desc: "Elegantly curated interiors for a sophisticated ambiance.",
    },
    {
      title: "6-Day Weekly Cleaning Service",
      desc: "Enjoy a pristine environment throughout your stay.",
    },
    {
      title: "Private Yoga Sessions*",
      desc: "Enhance your wellness with expert-led classes.",
    },
    {
      title: "Outdoor Sound System & Exotic Garden Leisure Area",
      desc: "Immerse yourself in a tranquil atmosphere.",
    },
    {
      title: "Ping Pong Table",
      desc: "Stay active and entertained with recreational options.",
    },
    {
      title: "Electric Scooters & Bicycles*",
      desc: "Explore Limassol with ease and style.",
    },
  ];

  const images = [
    "/assets/resort/39.jpg",
    "/assets/resort/46.jpg",
    "/assets/resort/50.jpg",
    "/assets/resort/29.jpg",
    "/assets/resort/33.jpg",
    "/assets/resort/34.jpg",
  ];




  return (
    <div className="max-width mx-auto px-3 lg:px-12 w-full bg-[#E8E4D9]">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Left Side - Text Content */}
        <div
          className="p-3 lg:p-9 w-full md:w-1/2 space-y-4"
          ref={textContainer}
        >
          <h1 className="text-4xl font-bold font-playfair">
            Welcome to TG Luxury Villas — Exclusive Private Retreats
          </h1>
          <h2 className="font-playfair text-3xl font-semibold text-gray-800">
            Luxury Villas in Limassol – A Private Wellness & Spa Retreat
          </h2>
          <p className="font-playfair text-xl">
            Experience 5-star luxury, wellness, and peace in our private
            high-end villas, just 10 minutes from the beach. Designed for
            romantic escapes, family retreats, and wellness getaways, our villas
            offer unmatched comfort and style.
          </p>
          <p className="font-playfair text-xl">
            Enjoy boutique hotel-style services like daily cleaning, private
            yoga, premium bath products, and smart home features — all in a
            serene, exclusive setting.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xl font-playfair">
            <li>5-Star Hotel Services with personalized care</li>
            <li>Heated Saltwater Pool for deep relaxation</li>
            <li>Outdoor Jacuzzi in a peaceful setting</li>
            <li>Glass Sauna with scenic views</li>
            <li>Daily gourmet breakfast*</li>
            <li>24/7 Hot Water for nonstop comfort</li>
          </ul>
          <button
              className="border border-black rounded-full p-2 px-5 mt-5 font-medium leftToRight"
              onClick={openModal}
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
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
            isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-xs bg-opacity-50"
            onClick={closeModal}
          ></div>

          {/* Modal Box */}
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative bg-[#FFFFFF] max-w-[60%] max-lg:max-w-[80%] max-sm:max-w-[90%] max-md:px-5 max-md:py-5 w-full px-10 py-10 rounded-lg shadow-lg transform transition-transform duration-300 ease-out ${
              isModalOpen ? "scale-100" : "scale-0"
            }`}
          >
            <h2 className="text-5xl max-md:text-3xl font-bold font-cormorant mb-5">
              Villa Details at a Glance
            </h2>

            <div className="space-y-4 max-h-[70vh] overflow-y-auto">
              <div className="font-playfair">
                Welcome to TG Luxury Villas, your exclusive escape in Limassol,
                Cyprus. Experience five-star luxury, wellness, and tranquility
                in a private, high-end villa designed for discerning travelers.{" "}
                <br />
                Located just 10 minutes from the beach, our heated saltwater
                pool, luxury outdoor Jacuzzi, and glass-fronted sauna provide
                the ultimate spa-like experience. Whether you're seeking a
                romantic getaway, a family retreat, or a wellness escape, our
                luxury Cyprus villas redefine indulgence.
                <br /> Enjoy boutique hotel-style services, including daily
                cleaning, private yoga sessions, premium bath amenities, and
                smart home technology—all wrapped in an atmosphere of
                exclusivity and comfort.
                <br />
              </div>
              {villaDetails.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between border-b-2 border-[#DCDAD0] pb-3 font-outfit max-xl:flex-col"
                >
                  <span>{item.title}</span>
                  <span>{item.desc}</span>
                </div>
              ))}

              <div className="font-playfair">
                Book your stay today and experience the best private villa
                rental in Cyprus. <br />
                Indulge in a fully private, high-end villa experience where
                every detail is designed for your comfort and relaxation.
                Whether you're seeking a romantic retreat, a wellness getaway,
                or a luxurious family escape, TG Luxury Villas offers a refined
                setting for unforgettable moments.
              </div>
            </div>
            <button
              onClick={closeModal}
              className="mt-4 text-[#26180F] w-fit capitalize border-2 px-3 py-2 rounded-full font-medium border-[#26180F]"
            >
              close
            </button>
          </div>
        </div>
    </div>
  );
};

export default TgDetails;
