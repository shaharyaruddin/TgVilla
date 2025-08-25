import { Mail, Phone, MapPin } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center max-md:items-start">
        {/* Left Section - Link and Menu */}
        <div className="flex flex-col lg:flex-row mb-6 md:mb-0 space-y-6 md:space-y-0 md:space-x-12 order-2 md:order-none">
          {/* Link Section */}
          <div className='min-h-[15rem] max-md:min-h-[10rem]'>
            <h3 className="text-app-yellow text-3xl max-md:text-2xl font-playfair mb-6">Link</h3>
            <ul className="space-y-2 text-sm">
              <li>» Booking Changes, <br /> Cancellations & Terms</li>
              <li>» Privacy and Policy</li>
              <li>» Airbnb.com</li>
              <li>» Booking.com</li>
            </ul>
          </div>
          {/* Menu Section */}
          <div className='min-h-[15rem] max-md:min-h-[10rem]'>
            <h3 className="text-app-yellow text-3xl max-md:text-2xl mb-6 font-playfair">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li>» TG Resort</li>
              <li>» TG Residences</li>
              <li>» Services</li>
              <li>» About Us</li>
            </ul>
          </div>
        </div>

        {/* Center Section - Logo and Tagline (Top on mobile, center on desktop) */}
        <div className="flex flex-col justify-center items-center w-full  text-center mb-6 md:mb-0 order-first md:order-none">
          <div className="flex justify-center items-center mb-2">
            <img src="/assets/logo/tg-villa.svg" className='size-50' alt="logo" />
          </div>
          {/* <p className="text-3xl max-md:text-2xl font-playfair">TG Luxury Stays</p> */}
          <p className="max-md:text-base mt-2 font-playfair text-app-yellow text-xl">Get a trip now!</p>
          <p className="text-xs text-white">Start your trip with your family in the most beautiful villa</p>
          <button className="mt-4 text-white py-2 px-6 rounded-full hover:bg-app-yellow transition border border-app-yellow">
            Book Now
          </button>
        </div>

        {/* Right Section - Contact Us */}
        <div className="mb-6 md:mb-0 min-h-[15rem] max-md:min-h-[10rem] order-3 md:order-none">
          <h3 className="text-app-yellow text-3xl max-md:text-2xl mb-6 font-playfair">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className='flex items-center'><MapPin size={20} className='mr-1'/> Ithakis 10, Agios Tychonas, 4521 Limassol, Cyprus</li>
            <li className='flex items-center'><Phone size={20} className='mr-1'/> +357 97631969</li>
            <li className='flex items-center'><Mail size={20} className='mr-1'/> support@tgluxurystay.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;