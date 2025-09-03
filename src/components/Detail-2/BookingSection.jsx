"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingSection = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: 1,
    roomType: "standard",
    specialRequests: "",
  });

  const handleBookNowClick = () => {
    setShowCalendar(true);
  };

  const handleNextClick = () => {
    if (checkInDate && checkOutDate) {
      setShowCalendar(false);
      setShowForm(true);
    } else {
      alert("Please select both check-in and check-out dates.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking details submitted successfully!");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      guests: 1,
      roomType: "standard",
      specialRequests: "",
    });
    setShowForm(false);
    setCheckInDate(null);
    setCheckOutDate(null);
  };

  return (
    <div className="bg-[#F4F4EA]  md:pt-20 pt-10  flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-4">
        {!showCalendar && !showForm && (
          <div className="flex justify-center">
            <button
              onClick={handleBookNowClick}
              className="relative px-6 py-3 rounded-2xl bg-gradient-to-r from-black via-gray-800 to-black text-white font-semibold text-base shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-gray-900 hover:to-black"
            >
              <span className="absolute inset-0 rounded-2xl  opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
              Book Now
            </button>
          </div>
        )}

        {showCalendar && (
          <div className="bg-white p-6 rounded-2xl shadow-xl min-w-lg mx-auto animate-fade-in">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Select Your Dates
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Check-In Date
                </label>
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  minDate={new Date()}
                  selectsStart
                  startDate={checkInDate}
                  endDate={checkOutDate}
                  placeholderText="Select check-in date"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Check-Out Date
                </label>
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  minDate={checkInDate || new Date()}
                  selectsEnd
                  startDate={checkInDate}
                  endDate={checkOutDate}
                  placeholderText="Select check-out date"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={handleNextClick}
                className="w-fit px-6 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:from-yellow-600 hover:to-orange-600 transition-all duration-300"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {showForm && (
          <div className="bg-white p-6 rounded-2xl shadow-xl min-w-2xl  mx-auto ">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Booking Details
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Guests
                </label>
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  min="1"
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Room Type
                </label>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="standard">Standard Suite</option>
                  <option value="deluxe">Deluxe Suite</option>
                  <option value="presidential">Presidential Suite</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Special Requests
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Any special requests?"
                  rows="3"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:from-yellow-600 hover:to-orange-600 transition-all duration-300"
              >
                Submit Booking
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingSection;
