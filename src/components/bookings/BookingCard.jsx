"use client";
import { useBook } from "@/contexts/book-context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { differenceInDays } from "date-fns";
import VillaGalleryModal from "../gallery-modal";

const BookingCard = ({ villa, option, standardPrice }) => {
  const { bookData: currentBookData, setBookData } = useBook();
  const router = useRouter();
  const [additionalServices, setAdditionalServices] = useState([]);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("twoBedroom");

  // Define villa images
  const twoBedroomVilla = [
    { src: "/assets/images/bedroomVilla/bedroom29.jpg", alt: "2 Bedroom Villa" },
    { src: "/assets/images/bedroomVilla/bedroom32.jpg", alt: "2 Bedroom Villa" },
    { src: "/assets/images/bedroomVilla/bedroom33.jpg", alt: "2 Bedroom Villa" },
    { src: "/assets/images/bedroomVilla/bedroom34.jpg", alt: "2 Bedroom Villa" },
    { src: "/assets/images/bedroomVilla/bedroom4.webp", alt: "2 Bedroom Villa" },
    { src: "/assets/images/bedroomVilla/bedroom35.jpg", alt: "2 Bedroom Villa" },
    { src: "/assets/images/bedroomVilla/bedroom10.jpg", alt: "2 Bedroom Villa" },
    { src: "/assets/images/bedroomVilla/bedroom12.jpg", alt: "2 Bedroom Villa" },
    { src: "/assets/images/bedroomVilla/bedroom14.jpg", alt: "2 Bedroom Villa" },
    { src: "/assets/images/bedroomVilla/bedroom28.webp", alt: "2 Bedroom Villa" },
  ];

  const threeBedroomVilla = [
    { src: "/assets/images/bedroomvilla-3/bedroom15.jpg", alt: "3 Bedroom Villa" },
    { src: "/assets/images/bedroomvilla-3/bedroom16.jpg", alt: "3 Bedroom Villa" },
    { src: "/assets/images/bedroomvilla-3/bedroom17.jpg", alt: "3 Bedroom Villa" },
    { src: "/assets/images/bedroomvilla-3/bedroom18.jpg", alt: "3 Bedroom Villa" },
    { src: "/assets/images/bedroomvilla-3/bedroom5.webp", alt: "3 Bedroom Villa" },
    { src: "/assets/images/bedroomvilla-3/bedroom6.webp", alt: "3 Bedroom Villa" },
    { src: "/assets/images/bedroomvilla-3/bedroom25.jpg", alt: "3 Bedroom Villa" },
    { src: "/assets/images/bedroomvilla-3/bedroom26.webp", alt: "3 Bedroom Villa" },
    { src: "/assets/images/bedroomvilla-3/bedroom12.webp", alt: "3 Bedroom Villa" },
    { src: "/assets/images/bedroomvilla-3/bedroom27.jpg", alt: "3 Bedroom Villa" },
  ];

  const villaImages = villa?.name?.includes("2-Bedroom")
    ? twoBedroomVilla
    : threeBedroomVilla;

  const handleCloseModal = () => {
    setIsGalleryOpen(false);
  };

  const handleViewGalleryClick = () => {
    setActiveTab(villa?.name?.includes("2-Bedroom") ? "twoBedroom" : "threeBedroom");
    setIsGalleryOpen(true);
  };

  useEffect(() => {
    // Initialize additional services with selected: false
    setAdditionalServices(
      (villa.services || []).map((service) => ({
        ...service,
        selected: false,
      }))
    );
  }, [villa.services]);

  const handleCheckboxChange = (serviceName) => {
    setAdditionalServices((prevState) =>
      prevState.map((service) =>
        service.name === serviceName
          ? { ...service, selected: !service.selected }
          : service
      )
    );
  };

  const handleReserve = async () => {
    const selectedServices = additionalServices.filter(
      (service) => service.selected
    );

    const totalServicePrice = additionalServices
      .filter((service) => service.selected)
      .reduce((acc, service) => {
        const servicePrice = service.each
          ? service.price * villa.nights * villa.guests
          : service.price * villa.nights;
        return acc + servicePrice;
      }, 0);

    const totalPrice = parseFloat(villa.price || 0) + totalServicePrice;

    const startDate = villa.startDate;
    const endDate = villa.endDate;
    const totalNights =
      startDate && endDate
        ? differenceInDays(endDate, startDate)
        : villa.nights;

    const updatedBookData = {
      ...currentBookData,
      startDate,
      endDate,
      totalNights,
      guests: villa.guests || 2,
      rateType: villa.rateType || "Non-Refundable",
      totalNightsPrice: parseFloat(villa.price || 0),
      villaId: villa.id,
      villaName: villa.name,
      villaNumber: villa.id,
      additionalServices: selectedServices,
      totalPrice: totalPrice.toFixed(2),
    };
    setBookData(updatedBookData);
    router.push("/checkout");
  };

  const {
    _id,
    type = "Standard (Non-Refundable)",
    name = "Unknown Villa",
    nights = 1,
    guests = 2,
    services = [],
    rateType = "Non-Refundable",
  } = villa || {};

  const handleImageClick = (image) => {
    setIsGalleryOpen(false);
  };

  return (
    <div className="relative my-10 max-xl:my-3 w-full min-h-[35rem] max-2xl:min-h-[30rem] max-xl:min-h-[28rem] max-md:min-h-[20rem] grid grid-cols-2 max-md:grid-cols-1 text-white">
      {/* Left - Image */}
      <div className="w-full h-full">
        {villa?.name?.includes("2-Bedroom") ? (
          <img
            src="/assets/images/bedroomVilla-3/bedroom25.jpg"
            alt="villa"
            className="object-cover rounded-tl-xl rounded-tr-xl"
          />
        ) : (
          <img
            src="/assets/images/bedroomVilla-3/bedroom15.jpg"
            alt="villa"
            className="object-cover rounded-tl-xl rounded-tr-xl"
          />
        )}
      </div>
      {/* Right - Details */}
      <div className="flex max-md:rounded-bl-xl max-md:rounded-br-xl flex-col max-md:sticky space-y-5 max-md:space-y-3 justify-center p-5 bg-[#F4F4EA] text-black/80 absolute left-1/2 -translate-x-[10%] top-1/2 -translate-y-[40%] min-w-[45vw] max-2xl:min-w-[54vw] max-md:min-w-full max-md:-translate-y-0 max-md:-translate-x-0">
        {/* Top */}
        <div className="w-full font-cormorant pb-3 max-xl:pb-2 flex flex-col border-b-2 border-black/40 text-2xl">
          <h3 className="text-lg max-xl:text-base">
            test Standard (Non-Refundable)
          </h3>
          <h2 className="font-[700] max-xl:text-lg">{name}</h2>
        </div>
        {/* Center */}
        <div className="flex justify-between items-center border-b-2 border-black/40 pb-6 max-xl:pb-3 max-md:flex-col max-md:items-start">
          <h3 className="text-base max-xl:text-sm">{name}</h3>
          <div className="flex max-md:justify-between max-md:w-full">
            <div className="flex flex-col items-end font-medium max-md:items-start">
              <h3 className="font-cormorant text-xl max-xl:text-sm max-md:text-base">
                ({nights} {nights === 1 ? "night" : "nights"} | {guests}{" "}
                {guests === 1 ? "guest" : "guests"})
              </h3>
              <div className="flex items-center gap-2">
                {rateType !== "standard" && (
                  <p className="text-sm text-red-500 line-through">
                    €{standardPrice}
                  </p>
                )}
                <h3 className="font-bold text-2xl max-xl:text-xl">
                  €{option.totalNightsPrice}
                </h3>
              </div>
            </div>
            <div className="flex items-center ml-4">
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleReserve();
                }}
                className="border border-black/40 px-4 py-2 items-center rounded-lg max-xl:text-sm"
              >
                RESERVE
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="py-10 max-xl:py-0">
            <div className="flex space-x-5">
            <Link
              href={
                villa?.name?.includes("2-Bedroom")
                  ? "/2-bedroom-villa"
                  : "/3-bedroom-villa"
              }
              className="font-bold text-sm border-b-2 border-black"
            >
              VIEW ROOM DETAILS
            </Link>
            <button
              className="font-bold text-sm border-b-2 border-black"
              onClick={handleViewGalleryClick}
            >
              View Gallery
            </button>
          </div>
          {/* Services */}
          {services.length > 0 ? (
            <div className="py-2 max-xl:py-1">
              <ul>
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center max-xl:text-sm space-x-2 cursor-pointer select-none"
                  >
                    <label className="flex items-center space-x-2 cursor-pointer w-full">
                      <input
                        type="checkbox"
                        className="size-4 max-xl:size-3 accent-white border-2 border-white rounded cursor-pointer"
                        checked={
                          additionalServices.find(
                            (s) => s.name === service.name
                          )?.selected || false
                        }
                        onChange={() => handleCheckboxChange(service.name)}
                      />
                      <span>
                        {service.name || "N/A"}{" "}
                        <span className="font-cormorant text-xl">
                          ({service.price || "N/A"})
                        </span>
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-sm text-black/60">No services available</p>
          )}
        </div>
      </div>

      {/* Gallery Modal */}
      <VillaGalleryModal
        isOpen={isGalleryOpen}
        onClose={handleCloseModal}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        villaImages={{ [activeTab]: villaImages }}
        onImageClick={handleImageClick}
      />
    </div>
  );
};

export default BookingCard;