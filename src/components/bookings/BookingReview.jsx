'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ReviewCard from './ReviewCard';

const bookingData = [
  {
    name: 'Nicolas P. from United Kingdom',
    nights: 14,
    villa: 'Luxury 2-Bedroom Villa',
    image: '/assets/booking/review/1.avif',
  },
  {
    name: 'Yossi from Israel',
    nights: 7,
    villa: 'Luxury 2-Bedroom Villa',
    image: '/assets/booking/review/1.avif',
  },
  {
    name: 'Kyriakos from Cyprus',
    nights: 5,
    villa: 'Luxury 3-Bedroom Villa',
    image: '/assets/booking/review/1.avif',
  },
  {
    name: 'Ethan Z. from United States',
    nights: 10,
    villa: 'Luxury 3-Bedroom Villa',
    image: '/assets/booking/review/1.avif',
  },
  {
    name: 'Maria G. from Spain',
    nights: 12,
    villa: 'Luxury 2-Bedroom Villa',
    image: '/assets/booking/review/1.avif',
  },
  {
    name: 'Ahmed K. from Egypt',
    nights: 8,
    villa: 'Luxury 3-Bedroom Villa',
    image: '/assets/booking/review/1.avif',
  },
  {
    name: 'Sophie L. from France',
    nights: 6,
    villa: 'Luxury 2-Bedroom Villa',
    image: '/assets/booking/review/1.avif',
  },
];

const BookingReview = () => {
  return (
    <div className="relative w-full py-10 flex  flex-col items-center text-white bg-[#F4F4EA] mt-10 max-md:py-5 px-10 max-md:px-5">
     <h3 className='text-black font-cormorant text-[3vw] max-2xl:text-[3.5vw] max-xl:text-[5vw]  max-md:text-[6vw] max-sm:text-[9vw] mb-4'>Reviews</h3>
      <Swiper
       loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[ Autoplay]} // Re-added Navigation module
        slidesPerView={5} // Default to 5 slides
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 }, // Mobile: 1 slide
          640: { slidesPerView: 2 }, // Tablet: 2 slides
          1024: { slidesPerView: 3 }, // Desktop: 3 slides
          1440: { slidesPerView: 5 }, // Large screens: 5 slides
        }}
        className="w-full  mx-auto" // Set max width to accommodate 5 slides
      >
        {bookingData.map((review, index) => (
          <SwiperSlide key={index} className="flex justify-center">
           <ReviewCard image={review.image} name={review.name} nights={review.nights} villa={review.villa}/>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BookingReview;