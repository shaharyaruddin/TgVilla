import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";

const GetInTouchSection = () => {
  return (
    <div className="bg-[#F4F4EA]">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-stretch py-12 gap-8 md:gap-6">
          {/* Left Section */}
          <div className="w-full flex flex-col justify-between">
            <div>
              <div className="mb-6 md:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-cormorant font-semibold text-gray-800">
                  Get in touch with us
                </h2>
                <p className="text-gray-600 text-sm sm:text-base max-w-full md:max-w-96 mt-2">
                  Start your journey to luxury and relaxation with ease. Your
                  dream escape is just a click away!
                </p>
              </div>
              <div className="flex py-3 space-x-4">
                <a href="#" className="text-gray-600">
                  <FaInstagram size={18} />
                </a>
                <a href="#" className="text-gray-600">
                  <FaFacebookF size={18} />
                </a>
                <a href="#" className="text-gray-600">
                  <IoLogoLinkedin size={18} />
                </a>
                <a href="#" className="text-gray-600">
                  <BsTwitterX size={18} />
                </a>
                <a href="#" className="text-gray-600">
                  <FaYoutube size={18} />
                </a>
              </div>
            </div>

            {/* Bottom Image */}
            <div className="mt-6 md:mt-0">
              <img
                src="/assets/contact/getintouch.jpg"
                alt="contact"
                className="w-full sm:w-[90%] md:w-[600px] h-48 sm:h-56 object-cover rounded"
              />
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="w-full bg-[#EBE7DC] p-4 sm:p-6 rounded-md shadow-sm flex flex-col justify-between">
            <h3 className="text-[#514941] text-base sm:text-sm mb-4">
              Contact us today
            </h3>
            <form className="flex flex-col flex-1">
              <div className="mb-4">
                <label
                  className="block text-[#514941] text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border rounded placeholder:bg-[#F4F4EA] text-sm bg-[#F4F4EA]"
                  placeholder="Full name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-[#514941] text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border rounded placeholder:bg-[#F4F4EA] text-sm bg-[#F4F4EA]"
                  placeholder="Email address"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-[#514941] text-sm font-medium mb-2"
                  htmlFor="phone"
                >
                  Phone no
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-2 border rounded placeholder:bg-[#F4F4EA] text-sm bg-[#F4F4EA]"
                  placeholder="Phone number"
                />
              </div>
              <div className="mb-4 flex-1">
                <label
                  className="block text-[#514941] text-sm font-medium mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 border rounded text-sm resize-none h-28 bg-[#F4F4EA] placeholder:text-gray-500"
                  placeholder="Enter message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white p-2 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchSection;
