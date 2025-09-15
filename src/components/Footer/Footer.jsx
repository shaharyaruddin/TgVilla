import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center max-md:items-start">
        {/* Left Section - Link and Menu */}
        <div className="flex flex-col lg:flex-row mb-6 md:mb-0 space-y-6 md:space-y-0 md:space-x-12 order-2 md:order-none">
          {/* Link Section */}
          <div className="min-h-[15rem] max-md:min-h-[10rem]">
            <h3 className="text-app-yellow text-3xl max-md:text-2xl font-playfair mb-6">
              Link
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms">
                  » Booking Changes, <br /> Cancellations & Terms
                </Link>
              </li>

              <li>
                <Link href="/privacy">» Privacy and Policy</Link>
              </li>
              <li>
                <Link href="https://www.airbnb.com/users/show/590548157">
                  » Airbnb.com
                </Link>
              </li>
              <li className="">
                <Link href="https://www.booking.com/hotel/cy/new-luxury-2-bedroom-house-heated-salty-swimming-pool-sauna-and-garden.en-gb.html?label=gen173nr-1BCAsoOUJGbmV3LWx1eHVyeS0yLWJlZHJvb20taG91c2UtaGVhdGVkLXNhbHR5LXN3aW1taW5nLXBvb2wtc2F1bmEtYW5kLWdhcmRlbkgzWARoOYgBAZgBCbgBGMgBD9gBAegBAYgCAagCBLgCn9rlwQbAAgHSAiQ1MDkyYmE4MS0xMGNlLTRjZGUtYmY3OS1hMGJlZGVhZjM0Y2TYAgXgAgE&sid=9e24681f85baa197b4bc0d33a6fbed63&dist=0&keep_landing=1&sb_price_type=total&type=total&">
                  »Booking.com
                </Link>
              </li>
            </ul>
          </div>
          {/* Menu Section */}
          <div className="min-h-[15rem] max-md:min-h-[10rem]">
            <h3 className="text-app-yellow text-3xl max-md:text-2xl mb-6 font-playfair">
              Menu
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                »{" "}
                <Link href="/resort" className="hover:underline">
                  TG Resort
                </Link>
              </li>
              <li>
                »{" "}
                <Link href="/residence" className="hover:underline">
                  TG Residences
                </Link>
              </li>
              <li>
                »{" "}
                <Link href="/spa" className="hover:underline">
                  Services
                </Link>
              </li>

              <li>
                »{" "}
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Center Section - Logo and Tagline (Top on mobile, center on desktop) */}
        <div className="flex flex-col justify-center items-center w-full  text-center mb-6 md:mb-0 order-first md:order-none">
          <div className="flex justify-center items-center mb-2">
            <img
              src="/assets/logo/tg-villa.svg"
              className="size-50"
              alt="logo"
            />
          </div>
          {/* <p className="text-3xl max-md:text-2xl font-playfair">TG Luxury Stays</p> */}
          <p className="max-md:text-base mt-2 font-playfair text-app-yellow text-xl">
            Get a trip now!
          </p>
          <p className="text-xs text-white">
            Start your trip with your family in the most beautiful villa
          </p>
          <Link href="/bookings">
            <button className="mt-4 text-white py-2 px-6 rounded-full hover:bg-app-yellow transition border border-app-yellow">
              Book Now
            </button>
          </Link>
        </div>

        {/* Right Section - Contact Us */}
        <div className="mb-6 md:mb-0 min-h-[15rem] max-md:min-h-[10rem] order-3 md:order-none">
          <h3 className="text-app-yellow text-3xl max-md:text-2xl mb-6 font-playfair">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <MapPin size={20} className="mr-1" /> Ithakis 10, Agios Tychonas,
              4521 Limassol, Cyprus
            </li>
            <li className="flex items-center">
              <Phone size={20} className="mr-1" /> +357 97631969
            </li>
            <li className="flex items-center">
              <Mail size={20} className="mr-1" /> support@tgluxurystay.com
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
