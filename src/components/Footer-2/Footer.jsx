import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[url('/assets/footer-background.jpg')] bg-cover bg-no-repeat bg-center text-[#3f3b2f] text-sm font-sans">
      <div className="max-w-full mx-auto px-6 sm:px-8 md:px-10 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-[#c7bca9] pb-6 mb-6">
          {/* Social + Follow */}
          <div className="flex flex-wrap justify-start items-center gap-4">
            <span className="italic font-estancia text-xl text-[#5a4632]">
              follow us
            </span>
            <FaFacebookF
              size={20}
              className="text-[#7a6e4b] hover:text-[#3f3b2f] cursor-pointer"
            />
            <FaInstagram
              size={20}
              className="text-[#7a6e4b] hover:text-[#3f3b2f] cursor-pointer"
            />
            <FaPinterestP
              size={20}
              className="text-[#7a6e4b] hover:text-[#3f3b2f] cursor-pointer"
            />
            <FaTiktok
              size={20}
              className="text-[#7a6e4b] hover:text-[#3f3b2f] cursor-pointer"
            />
            <FaYoutube
              size={20}
              className="text-[#7a6e4b] hover:text-[#3f3b2f] cursor-pointer"
            />
          </div>

          {/* Book Now */}
          <div className="mt-4 md:mt-0 text-left md:text-right">
            <Link
              href="/bookings"
              className="inline-block hover:scale-105 bg-[#6b4a2d] text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:bg-[#3f3b2f] hover:shadow-lg transition-all duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 border-b border-[#c7bca9] pb-6 mb-6 text-left">
          {/* Contact Info */}
          <div className="space-y-2 font-semibold">
            <p>34°42'48.0"N 33°08'29.9"E</p>
            <p>Ithakis 10, Agios Tychonas, 4521 Limassol, Cyprus</p>
            <Link
              href="/contact"
              className="underline text-[#3f3b2f] hover:text-[#000]"
            >
              View Details
            </Link>
            <p className="mt-2">Phone: +357 97631969</p>
            <p>Email: support@tgluxurystay.com</p>
          </div>

          {/* Left Links */}
          <div className="flex flex-col font-semibold space-y-2">
            <Link href="/resort" className="hover:text-[#000]">
              TG Resort
            </Link>
            <Link href="/residence" className="hover:text-[#000]">
              TG Residence
            </Link>
            <Link href="/spa" className="hover:text-[#000]">
              TG Spa Facilities and Wellness
            </Link>
            <Link href="/about" className="hover:text-[#000]">
              About Us
            </Link>
          </div>

          {/* Right Links */}
          <div className="flex flex-col font-semibold space-y-2">
            <Link href="/terms" className="hover:text-[#000]">
              Booking Changes, Cancellations & Terms
            </Link>
            <Link href="/privacy" className="hover:text-[#000]">
              Privacy and Policy
            </Link>
            <Link
              href="https://www.airbnb.com/users/show/590548157"
              className="hover:text-[#000]"
            >
              Airbnb.com
            </Link>
            <Link href="https://www.booking.com/" className="hover:text-[#000]">
              Booking.com
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="font-semibold text-left">
          <p>
            {/* © 2025{" "} */}
            <Link href="https://www.tgresidence.com/">www.tgresidence.com</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
