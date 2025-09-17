"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import GalleryModal from "../modals/gallery1-modal";

const ImageSection = () => {
  const [open, setOpen] = useState(false);

  const images = [
    {
      src: "/assets/images/bedroomVilla/bedroom29.jpg",
      alt: "2 Bedroom Villa",
    },
    {
      src: "/assets/images/bedroomVilla/bedroom32.jpg",
      alt: "2 Bedroom Villa",
    },
    {
      src: "/assets/images/bedroomVilla/bedroom33.jpg",
      alt: "2 Bedroom Villa",
    },
    {
      src: "/assets/images/bedroomVilla/bedroom34.jpg",
      alt: "2 Bedroom Villa",
    },
    {
      src: "/assets/images/bedroomVilla/bedroom4.webp",
      alt: "2 Bedroom Villa",
    },
    {
      src: "/assets/images/bedroomVilla/bedroom35.jpg",
      alt: "2 Bedroom Villa",
    },
    {
      src: "/assets/images/bedroomVilla/bedroom10.jpg",
      alt: "2 Bedroom Villa",
    },
    {
      src: "/assets/images/bedroomVilla/bedroom12.jpg",
      alt: "2 Bedroom Villa",
    },
    {
      src: "/assets/images/bedroomVilla/bedroom14.jpg",
      alt: "2 Bedroom Villa",
    },
    {
      src: "/assets/images/bedroomVilla/bedroom28.webp",
      alt: "2 Bedroom Villa",
    },
  ];

  const handleViewGalleryClick = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div className="w-full min-h-screen px-20 max-2xl:px-10 max-md:px-5 flex flex-col bg-[#F4F4EA] space-y-5 pb-10">
      <div className=" w-full flex justify-center">
        <button
          onClick={handleViewGalleryClick}
          className="bg-app-yellow transform transition-all duration-300 hover:scale-105 w-[10rem] rounded-full px-4 py-2 font-medium hover:bg-app-yellow/90 text-black"
        >
          View Gallery
        </button>
      </div>

      <div className="grid grid-cols-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 gap-2  max-md:mt-5 max-md:grid-cols-2 ">
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

      <GalleryModal
        open={open}
        setOpen={setOpen}
        images={images}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ImageSection;
