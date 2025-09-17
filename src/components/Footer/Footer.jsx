import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      {/* ---------------- MOBILE & DESKTOP ---------------- */}
      <div className="max-w-7xl hidden mx-auto  flex-col lg:flex-row justify-between items-center max-md:items-start md:hidden lg:flex">
        {/* Left Section - Link and Menu */}
        <div className="flex flex-col lg:flex-row mb-6 lg:mb-0 space-y-6 lg:space-y-0 lg:space-x-12 order-2 lg:order-none">
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
              <li>
                <Link href="https://www.booking.com/">» Booking.com</Link>
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
                  TG Spa Facilities and Wellness
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

        {/* Center Section */}
        <div className="flex flex-col justify-center items-center w-full text-center mb-6 lg:mb-0 order-first lg:order-none">
          <img
            src="/assets/logo/tg-villa.svg"
            className="size-50 mb-2"
            alt="logo"
          />
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
        <div className="mb-6 lg:mb-0 min-h-[15rem] max-md:min-h-[10rem] order-3 lg:order-none">
          <h3 className="text-app-yellow text-3xl max-md:text-2xl mb-6 font-playfair">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm ">
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

      {/* ---------------- TABLET ONLY ---------------- */}
      <div className="max-w-7xl mx-auto  md:grid lg:hidden  gap-6">
        {/* Center Section */}
        <div className="flex  justify-between items-center text-center  max-md:flex-col max-md:justify-center">
          <div className="max-md:flex max-md:flex-col max-md:items-center">
            <img
              src="/assets/logo/tg-villa.svg"
              className="h-20 mb-2"
              alt="logo"
            />

            <p className="text-xs text-white">
              Start your trip with your family in the most beautiful villa
            </p>
          </div>
          <div className="">
            <p className=" font-playfair text-app-yellow text-xl">
              Get a trip now!
            </p>

            <Link href="/bookings">
              <button className="mt-2 text-white py-2 px-6 rounded-full hover:bg-app-yellow transition border border-app-yellow">
                Book Now
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-10">
          {/* Left Section - Link */}
          <div>
            <h3 className="text-app-yellow text-3xl font-playfair mb-6">
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
              <li>
                <Link href="https://www.booking.com/">» Booking.com</Link>
              </li>
            </ul>
          </div>
          {/* Right Section - Menu */}
          <div>
            <h3 className="text-app-yellow text-3xl font-playfair mb-6">
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
                  TG Spa Facilities and Wellness
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

          {/* Contact Us Full Width Row */}
          <div className="mt-6 col-span-2 flex justify-between items-center max-md:flex-col max-md:items-start">
            <h3 className="text-app-yellow text-3xl  font-playfair">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm max-md:mt-3">
              <li className="flex items-center">
                <MapPin size={20} className="mr-1" /> Ithakis 10, Agios
                Tychonas, 4521 Limassol, Cyprus
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
      </div>
    </footer>
  );
};

export default Footer;
