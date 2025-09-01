import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactDetail = () => {
  return (
    <div className="bg-[#F4F4EA]">
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          <div className="p-4  border-none md:border border-r-2 border-r-[#FDD17C] border-l-0 border-b-0 border-t-0">
            <div className="flex justify-center pb-2">
              <img src="/assets/contact/phone.svg" alt="phone" />
            </div>
            <h3 className="text-xl font-cormorant font-semibold text-gray-800">
              Phone number
            </h3>
            <p className="text-gray-600 text-sm">+357 97631969</p>
          </div>
          <div className="p-4 border-none md:border border-r-2 border-r-[#FDD17C] border-l-0 border-b-0 border-t-0">
            <div className="flex justify-center pb-2">
              <img src="/assets/contact/email.svg" alt="phone" />
            </div>{" "}
            <h3 className="text-xl font-cormorant font-semibold text-gray-800">
              Email address
            </h3>
            <p className="text-gray-600 text-sm">support@tgluxurystay.com</p>
          </div>
          <div className="p-4 border-none md:border border-r-2 border-r-[#FDD17C] border-l-0 border-b-0 border-t-0">
            <div className="flex justify-center pb-2">
              <img src="/assets/contact/location.svg" alt="phone" />
            </div>{" "}
            <h3 className="text-xl font-cormorant font-semibold text-gray-800">
              Our location
            </h3>
            <p className="text-gray-600 text-sm">
              Ithakis 10, Agios Tychonas, 4521 Limassol, Cyprus
            </p>
          </div>
          <div className="p-4 flex flex-col justify-center gap-3">
            <a
              href="https://www.airbnb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 bg-black text-white p-2 rounded-3xl text-sm hover:bg-gray-700"
            >
              Book on Airbnb.com
            </a>
            <a
              href="https://www.booking.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white p-2 rounded-3xl text-sm hover:bg-gray-700"
            >
              Book on Booking.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
