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
import Link from "next/link";

const HomeSliderLeft = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
              onClick={openModal}
            >
              Read More
            </button>

            <Link href="/resort">
              <div className="border bg-black text-white  border-black rounded-full p-2 px-5 mt-5 font-medium leftToRight">
                View Our Villas
              </div>
            </Link>
          </div>
        </div>

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
              <div className="font-outfit">
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

              <div className="font-outfit">
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
    </>
  );
};

export default HomeSliderLeft;
