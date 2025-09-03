import React from "react";

const rules = [
  {
    id: 1,
    title: "Authorized Guests Only",
    description:
      "Only individuals listed on the booking reservation are allowed on the property. Unauthorized visitors are not permitted",
  },
  {
    id: 2,
    title: "Visitors Requests",
    description:
      "If you wish to invite additional visitors, please send us a request in advance on the property. Unauthorized visitors are not permitted",
  },
  {
    id: 3,
    title: "Non-Compliance",
    description:
      "Hosting unauthorized guests may result in additional charges or termination of your stay",
  },
  {
    id: 4,
    title: "Check-in",
    description:
      "From 3:00 PM. You need to let the property know what time you will be arriving in advance.",
  },
  {
    id: 5,
    title: "Check-out",
    description: "From 10:00 AM to 11:00 AM",
  },
  {
    id: 6,
    title: "Check-out",
    description: "From 10:00 AM to 11:00 AM",
  },
  {
    id: 7,
    title: "Cancellation/ prepayment",
    description: "From 10:00 AM to 11:00 AM",
  },
  {
    id: 8,
    title: "Damage policy",
    description: "From 10:00 AM to 11:00 AM",
  },
  {
    id: 9,
    title: "Children & Beds Child policies",
    description:
      "Cancelation and prepayment policies vary according to accommodation type. Check what conditions apply to each option when making your selection.",
  },
  {
    id: 10,
    title: "No age restriction",
    description: "There's no age requirement for check-in",
  },
  {
    id: 11,
    title: "Smoking",
    description: "Smoking is not allowed.",
  },
  {
    id: 12,
    title: "Parties",
    description: "Parties/events are not allowed",
  },
  {
    id: 13,
    title: "Quiet hours",
    description: "Guests need be quiet between 11:00 PM and 8:00 AM.",
  },
  {
    id: 14,
    title: "Pets",
    description: "Pets are not allowed.",
  },
];

const HouseRuleSection = () => {
  return (
    <div className="bg-[#F4F4EA]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6">
        <h2 className="text-4xl font-cormorant font-bold mb-10">House Rules</h2>
        <div className="space-y-6">
          {rules.map((rule) => (
            <div
              key={rule.id}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start"
            >
              {/* Left - Number */}
              <p className="text-gray-500 text-xs font-medium">({rule.id})</p>

              {/* Center - Title */}
              <p className="text-sm font-medium">{rule.title}</p>

              {/* Right - Description */}
              <p className="text-xs md:text-right text-gray-700">
                {rule.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HouseRuleSection;
