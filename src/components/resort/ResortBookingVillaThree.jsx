"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import VillaGalleryModal from "../gallery-modal";
import Link from "next/link";

const ResortBookingVillaThree = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("twoBedroom");

  const images = [
    {
      src: "/assets/images/bedroomvilla-3/bedroom15.jpg",
      alt: "3 Bedroom villa ",
    },
    {
      src: "/assets/images/bedroomvilla-3/bedroom16.jpg",
      alt: "3 Bedroom villa",
    },
    {
      src: "/assets/images/bedroomvilla-3/bedroom17.jpg",
      alt: "3 Bedroom villa",
    },
    {
      src: "/assets/images/bedroomvilla-3/bedroom18.jpg",
      alt: "3 Bedroom villa",
    },
    {
      src: "/assets/images/bedroomvilla-3/bedroom5.webp",
      alt: "3 Bedroom villa",
    },
    {
      src: "/assets/images/bedroomvilla-3/bedroom6.webp",
      alt: "3 Bedroom villa",
    },
    {
      src: "/assets/images/bedroomvilla-3/bedroom25.jpg",
      alt: "3 Bedroom villa",
    },
    {
      src: "/assets/images/bedroomvilla-3/bedroom26.webp",
      alt: "3 Bedroom villa",
    },
    {
      src: "/assets/images/bedroomvilla-3/bedroom12.webp",
      alt: "3 Bedroom villa",
    },
    {
      src: "/assets/images/bedroomvilla-3/bedroom27.jpg",
      alt: "3 Bedroom villa",
    },
  ];

  const modalImages = [
    {
      src: "/assets/images/bedroomvilla-3/bedroom15.jpg",
      alt: "3 Bedroom villa ",
    },
    {
      src: "/assets/images/bedroomvilla-3/bedroom16.jpg",
      alt: "3 Bedroom villa",
    },
    {
      src: "/assets/images/bedroomvilla-3/bedroom17.jpg",
      alt: "3 Bedroom villa",
    },
    {
      src: "/assets/images/bedroomvilla-3/bedroom18.jpg",
      alt: "3 Bedroom villa",
    },
    {
      src: "/assets/images/bedroomvilla-3/bedroom5.webp",
      alt: "3 Bedroom villa",
    },
    {
      src: "/assets/images/bedroomvilla-3/bedroom6.webp",
      alt: "3 Bedroom villa",
    },
    {
      src: "/assets/images/bedroomvilla-3/bedroom25.jpg",
      alt: "3 Bedroom villa",
    },
    {
      src: "/assets/images/bedroomvilla-3/bedroom26.webp",
      alt: "3 Bedroom villa",
    },
    {
      src: "/assets/images/bedroomvilla-3/bedroom12.webp",
      alt: "3 Bedroom villa",
    },
    {
      src: "/assets/images/bedroomvilla-3/bedroom27.jpg",
      alt: "3 Bedroom villa",
    },
  ];

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setIsGalleryOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, []);

  const handleViewGalleryClick = () => {
    setIsGalleryOpen(true);
  };

  const handleCloseModal = () => {
    setIsGalleryOpen(false);
  };

  const handleImageClick = (image) => {
    // Optional: Handle image click if needed (e.g., open full-screen view)
    setIsGalleryOpen(false);
  };

  // Structure images for VillaGalleryModal (single tab for 2 Bedroom Villa)
  const villaImages = {
    twoBedroom: modalImages.map((img) => img.src),
  };

  return (
    <div className="w-full min-h-screen px-20 max-2xl:px-10 max-md:px-5 flex flex-col bg-[#EBE7DC] space-y-5 py-10">
      <h2 className="text-6xl font-[600] text-[#514941] font-cormorant max-md:text-4xl ">
        3 Bedroom Villa
      </h2>
      <div className="flex gap-4">
        <Link href="/villa-details">
          <button 
          className="font-bold text-sm border-b-2 border-black"
          >
            Villa Details
          </button>
        </Link>
        <button
          className="font-bold text-sm border-b-2 border-black"
          onClick={handleViewGalleryClick}
        >
          View Gallery
        </button>
      </div>

      <div className="grid grid-cols-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 gap-2 mt-10 max-md:mt-5 max-md:grid-cols-2 ">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative h-[20rem] max-[1700px]:h-[17rem] max-[1120px]:h-[15rem] max-[800px]:h-[13rem] max-[430px]:h-[10rem] w-full"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 430px) 100vw,
                     (max-width: 800px) 50vw,
                     (max-width: 1120px) 33vw,
                     (max-width: 1700px) 25vw,
                     20vw"
            />
          </div>
        ))}
      </div>

      <VillaGalleryModal
        isOpen={isGalleryOpen}
        onClose={handleCloseModal}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        villaImages={villaImages}
        onImageClick={handleImageClick}
      />

      <div className="text-[#514941] mt-10 max-md:mt-5">
        <h3 className="text-xl max-md:text-sm">What Our Guests Say</h3>
        <h2 className="text-[3.5vw] font-cormorant font-bold max-md:text-[7vw]">
          Hear From Our Satisfied Guests
        </h2>
        <p className="text-xl max-md:text-sm">
          Our guests rave about the exceptional service, luxurious amenities,
          and breathtaking views that make their stay unforgettable. Read their
          heartfelt testimonials to see why our villa is the perfect choice for
          your next getaway.
        </p>
      </div>
    </div>
  );
};

export default ResortBookingVillaThree;
