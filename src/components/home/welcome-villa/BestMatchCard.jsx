'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useBook } from '@/contexts/book-context';
import { useRouter } from 'next/navigation';
import { differenceInDays } from 'date-fns';

const BestMatchCard = ({ villa,option,standardPrice }) => {
  const { bookData: currentBookData, setBookData } = useBook();
  const router = useRouter();
  const [additionalServices, setAdditionalServices] = useState([]);

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
        service.name === serviceName ? { ...service, selected: !service.selected } : service
      )
    );
  };

  const handleReserve = async () => {
    const selectedServices = additionalServices.filter((service) => service.selected);

    const totalServicePrice = additionalServices
      .filter((service) => service.selected)
      .reduce((acc, service) => {
        const servicePrice = service.each
          ? service.price * villa.nights * villa.guests
          : service.price * villa.nights;
        return acc + servicePrice;
      }, 0);

    const totalPrice = parseFloat(villa.price || 0) + totalServicePrice;

    // ✅ Use villa.startDate and villa.endDate directly from props (from searchOptions)
    const startDate = villa.startDate;
    const endDate = villa.endDate;
    const totalNights = startDate && endDate ? differenceInDays(endDate, startDate) : villa.nights;

    // Merge with current bookData, using villa data where necessary
    const updatedBookData = {
      ...currentBookData,
      startDate,
      endDate,
      totalNights,
      guests: villa.guests || 2,
      rateType: villa.rateType || 'Non-Refundable',
      totalNightsPrice: parseFloat(villa.price || 0),
      villaId: villa.id,
      villaName: villa.name,
      villaNumber: villa.id,
      additionalServices: selectedServices,
      totalPrice: totalPrice.toFixed(2),
    };
    setBookData(updatedBookData);
    router.push('/checkout');
  };

  const {
    id = 1,
    type = 'Standard (Non-Refundable)',
    name = 'Unknown Villa',
    nights = 1,
    guests = 2,
    services = [],
    rateType = 'Non-Refundable',
  } = villa || {};

  return (
    <div className="relative my-3 max-md:my-0 w-full min-h-[10rem] grid grid-cols-1 text-white">
      {/* Left - Image */}
      <div className="w-full h-full relative">
        {id === 1 ? (
          <img
            src="/images/villa/card.jpg"
            alt="villa"
            className="object-cover rounded-tl-xl rounded-tr-xl"
          />
        ) : (
          <img
            src="/images/villa2/card.jpg"
            alt="villa"
            className="object-cover rounded-tl-xl rounded-tr-xl"
          />
        )}
      </div>
      {/* Right - Details */}
      <div className="flex bg-white rounded-bl-xl rounded-br-xl flex-col sticky space-y-3 justify-center p-5 text-black/80 min-w-full">
        {/* Top */}
        <div className="w-full font-cormorant pb-2 flex flex-col border-b-2 border-black/40 text-2xl">
          <h3 className="text-base capitalize font-[600]">standard (Non-Refundable)</h3>
          <h2 className="font-[700] text-lg">{name}</h2>
        </div>
        {/* Center */}
        <div className="flex justify-between border-b-2 border-black/40 pb-3 flex-col items-start">
          <div className="flex justify-between w-full">
            <div className="flex flex-col font-medium items-start">
              <h3 className="font-cormorant text-base">
                ({nights} {nights === 1 ? 'night' : 'nights'} | {guests}{' '}
                {guests === 1 ? 'guest' : 'guests'})
              </h3>
              <div className="flex items-center gap-2">
                {rateType !== 'standard' && (
                  <p className="text-sm text-red-500 line-through">€{standardPrice}</p>
                )}
                <h3 className="font-bold text-xl">€{option.totalNightsPrice}</h3>
              </div>
            </div>
            <div className="flex items-center ml-4 space-x-2">
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleReserve();
                }}
                className="border border-black/40 px-4 py-2 items-center rounded-lg text-sm"
              >
                RESERVE
              </Link>
              <Link
                href={id === 1 ? '/details-1' : '/details-2'}
                className="border border-black/40 px-4 py-2 items-center rounded-lg text-sm"
              >
                view Detail
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="py-0">
          <div className="flex space-x-5">
            <a href="#" className="font-bold text-sm border-b-2 border-black">
              VIEW ROOM DETAILS
            </a>
            <a href="#" className="font-bold text-sm border-b-2 border-black">
              VIEW GALLERY
            </a>
          </div>
          {/* Services */}
          {services.length > 0 ? (
            <div className="py-1">
              <ul>
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm space-x-2 cursor-pointer select-none"
                  >
                    <label className="flex items-center space-x-2 cursor-pointer w-full">
                      <input
                        type="checkbox"
                        className="size-3 accent-white border-2 border-white rounded cursor-pointer"
                        checked={additionalServices.find((s) => s.name === service.name)?.selected || false}
                        onChange={() => handleCheckboxChange(service.name)}
                      />
                      <span>
                        {service.name || 'N/A'}{' '}
                        <span className="font-cormorant text-xl">({service.price || 'N/A'})</span>
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
    </div>
  );
};

export default BestMatchCard;