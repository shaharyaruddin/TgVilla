"use client";
import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const FAQSection = () => {
  const faqs = [
    {
      question: "How can I check the availability of a villa or resort?",
      answer:
        "You can check availability by visiting our booking page or contacting our support team directly.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Cancellations made 7 days before the booking are fully refundable. Later cancellations may incur charges.",
    },
    {
      question: "Is there a minimum stay requirement?",
      answer: "Yes, most of our villas require a minimum stay of 2 nights.",
    },
    {
      question: "What amenities are included with the stay?",
      answer:
        "Amenities include free Wi-Fi, air conditioning, swimming pool access, and housekeeping services.",
    },
    {
      question: "Can I book multiple villas for a group or event?",
      answer:
        "Yes, you can book multiple villas. Please contact our team for special group arrangements.",
    },
    {
      question: "Are pets allowed on the property?",
      answer:
        "Some properties are pet-friendly, but it depends on the villa. Please confirm before booking.",
    },
    {
      question:
        "How do I make a special request (e.g., early check-in, late check-out)?",
      answer:
        "Special requests can be added during the booking process or discussed with our support team.",
    },
    {
      question: "Do you provide airport transfers or transportation services?",
      answer:
        "Yes, airport transfers can be arranged upon request with an additional charge.",
    },
    {
      question: "Is the property staff available during our stay?",
      answer:
        "Yes, staff will be available to assist you throughout your stay.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F4F4EA]">
      <div className="max-w-2xl mx-auto py-12 p-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-center py-4 font-cormorant">
          Frequently asked questions
        </h2>
        {faqs.map((item, index) => (
          <div key={index} className="border-b border-gray-200 mb-2">
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <span className="text-gray-800 text-sm font-semibold">
                {item.question}
              </span>
              <span className="text-xl text-gray-600">
                {expandedIndex === index ? (
                  <RxCross2  className=" w-4 h-4" />
                ) : (
                  <IoAdd className="w-4 h-4" />
                )}
              </span>
            </div>
            {expandedIndex === index && (
              <div className="p-3 text-xs font-medium text-gray-700">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
