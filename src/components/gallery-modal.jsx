"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const VillaGalleryModal = ({
  isOpen,
  onClose,
  activeTab,
  setActiveTab,
  villaImages,
  onImageClick,
}) => {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useGSAP(() => {
    if (isOpen) {
      gsap.from(".modal", {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Check if villaImages[activeTab] exists and is an array
  const images = villaImages[activeTab] || [];
  if (!Array.isArray(images)) {
    console.error("Invalid villaImages data for activeTab:", activeTab, villaImages);
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg text-center">
          <p>No images available for this villa.</p>
          <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-200 rounded">
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg w-[85%] max-w-5xl max-h-[80vh] overflow-y-auto modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-playfair text-2xl">Villa Gallery</h2>
          <button
            className="text-gray-600 hover:text-gray-800 font-bold"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={`${activeTab}-${index}`}>
              <img
                src={image.src} // Access the src property
                alt={image.alt || `${activeTab} Villa ${index + 1}`} // Use alt if available, fallback to default
                className="w-full h-64 object-cover rounded-lg shadow-md cursor-pointer"
                onClick={() => onImageClick(image)}
                onError={() => console.error(`Failed to load image: ${image.src}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VillaGalleryModal;