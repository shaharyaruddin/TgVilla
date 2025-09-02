import {
  Bath,
  BedDouble,
  CarFront,
  CircleParking,
  Coffee,
  Dog,
  Fence,
  House,
  LampDesk,
  Refrigerator,
  School,
  Tv,
  Utensils,
  Waves,
} from "lucide-react";
import Image from "next/image";

import HomeIcon from "../../public/icons/amenities/home.svg";
import SaunaIcon from "../../public/icons/amenities/sauna.svg";
import SeaViewIcon from "../../public/icons/amenities/sea-view.svg";
import SizeIcon from "../../public/icons/amenities/size.svg";
import SpaIcon from "../../public/icons/amenities/spa.svg";
import SwimmingPoolIcon from "../../public/icons/amenities/swimming-pool.svg";

// Dynamic imports for images
const importImages = (path, count) => {
  return Array.from({ length: count }, (_, i) =>
    require(`${path} (${i + 1}).jpeg`)
  );
};

import bedroom1_1 from "../../public/images/villa2/bedroom1/bedroom1 (1).jpg";
import bedroom1_2 from "../../public/images/villa2/bedroom1/bedroom1 (2).jpg";
import bedroom1_3 from "../../public/images/villa2/bedroom1/bedroom1 (3).jpg";
import bedroom1_4 from "../../public/images/villa2/bedroom1/bedroom1 (4).jpg";
import bedroom1_5 from "../../public/images/villa2/bedroom1/bedroom1 (5).jpg";
import bedroom1_6 from "../../public/images/villa2/bedroom1/bedroom1 (6).jpg";
import bedroom1_7 from "../../public/images/villa2/bedroom1/bedroom1 (7).jpg";
import bedroom1_8 from "../../public/images/villa2/bedroom1/bedroom1 (8).jpg";
import bedroom1_9 from "../../public/images/villa2/bedroom1/bedroom1 (9).jpg";
import bedroom1_10 from "../../public/images/villa2/bedroom1/bedroom1 (10).jpg";
import bedroom1_11 from "../../public/images/villa2/bedroom1/bedroom1 (11).jpg";
import bedroom1_12 from "../../public/images/villa2/bedroom1/bedroom1 (12).jpg";
import bedroom1_13 from "../../public/images/villa2/bedroom1/bedroom1 (13).jpg";
import bedroom1_14 from "../../public/images/villa2/bedroom1/bedroom1 (14).jpg";
import bedroom1_15 from "../../public/images/villa2/bedroom1/bedroom1 (15).jpg";
import bedroom1_16 from "../../public/images/villa2/bedroom1/bedroom1 (16).jpg";
import bedroom1_17 from "../../public/images/villa2/bedroom1/bedroom1 (17).jpg";
import bedroom1_18 from "../../public/images/villa2/bedroom1/bedroom1 (18).jpg";
import bedroom1_19 from "../../public/images/villa2/bedroom1/bedroom1 (19).jpg";
import bedroom1_20 from "../../public/images/villa2/bedroom1/bedroom1 (20).jpg";
import bedroom1_21 from "../../public/images/villa2/bedroom1/bedroom1 (21).jpg";

import bedroom2_1 from "../../public/images/villa2/bedroom2/bedroom2 (1).jpg";
import bedroom2_2 from "../../public/images/villa2/bedroom2/bedroom2 (2).jpg";
import bedroom2_3 from "../../public/images/villa2/bedroom2/bedroom2 (3).jpg";
import bedroom2_4 from "../../public/images/villa2/bedroom2/bedroom2 (4).jpg";
import bedroom2_5 from "../../public/images/villa2/bedroom2/bedroom2 (5).jpg";
import bedroom2_6 from "../../public/images/villa2/bedroom2/bedroom2 (6).jpg";
import bedroom2_7 from "../../public/images/villa2/bedroom2/bedroom2 (7).jpg";
import bedroom2_8 from "../../public/images/villa2/bedroom2/bedroom2 (8).jpg";
import bedroom2_9 from "../../public/images/villa2/bedroom2/bedroom2 (9).jpg";
import bedroom2_10 from "../../public/images/villa2/bedroom2/bedroom2 (10).jpg";

import bedroom3_1 from "../../public/images/villa2/bedroom3/bedroom3 (1).jpg";
import bedroom3_2 from "../../public/images/villa2/bedroom3/bedroom3 (2).jpg";
import bedroom3_3 from "../../public/images/villa2/bedroom3/bedroom3 (3).jpg";
import bedroom3_4 from "../../public/images/villa2/bedroom3/bedroom3 (4).jpg";
import bedroom3_5 from "../../public/images/villa2/bedroom3/bedroom3 (5).jpg";
import bedroom3_6 from "../../public/images/villa2/bedroom3/bedroom3 (6).jpg";
import bedroom3_7 from "../../public/images/villa2/bedroom3/bedroom3 (7).jpg";
import bedroom3_8 from "../../public/images/villa2/bedroom3/bedroom3 (8).jpg";
import bedroom3_9 from "../../public/images/villa2/bedroom3/bedroom3 (9).jpg";
import bedroom3_10 from "../../public/images/villa2/bedroom3/bedroom3 (10).jpg";
import bedroom3_11 from "../../public/images/villa2/bedroom3/bedroom3 (11).jpg";
import bedroom3_12 from "../../public/images/villa2/bedroom3/bedroom3 (12).jpg";
import bedroom3_13 from "../../public/images/villa2/bedroom3/bedroom3 (13).jpg";
import bedroom3_14 from "../../public/images/villa2/bedroom3/bedroom3 (14).jpg";

import kitchen_1 from "../../public/images/villa2/kitchen/kitchen (1).jpg";
import kitchen_2 from "../../public/images/villa2/kitchen/kitchen (2).jpg";
import kitchen_3 from "../../public/images/villa2/kitchen/kitchen (3).jpg";
import kitchen_4 from "../../public/images/villa2/kitchen/kitchen (4).jpg";
import kitchen_5 from "../../public/images/villa2/kitchen/kitchen (5).jpg";
import kitchen_6 from "../../public/images/villa2/kitchen/kitchen (6).jpg";
import kitchen_7 from "../../public/images/villa2/kitchen/kitchen (7).jpg";
import kitchen_8 from "../../public/images/villa2/kitchen/kitchen (8).jpg";
// import kitchen_9 from "../../public/images/villa2/kitchen/kitchen (9).jpg";
// import kitchen_11 from "../../public/images/villa2/kitchen/kitchen (11).jpg";

import living_room_1 from "../../public/images/villa2/living-room/living-room (1).jpg";
import living_room_2 from "../../public/images/villa2/living-room/living-room (2).jpg";
import living_room_3 from "../../public/images/villa2/living-room/living-room (3).jpg";
import living_room_4 from "../../public/images/villa2/living-room/living-room (4).jpg";
import living_room_5 from "../../public/images/villa2/living-room/living-room (5).jpg";
import living_room_6 from "../../public/images/villa2/living-room/living-room (6).jpg";
import living_room_7 from "../../public/images/villa2/living-room/living-room (7).jpg";
import living_room_8 from "../../public/images/villa2/living-room/living-room (8).jpg";
import living_room_9 from "../../public/images/villa2/living-room/living-room (9).jpg";
import living_room_10 from "../../public/images/villa2/living-room/living-room (10).jpg";
import living_room_11 from "../../public/images/villa2/living-room/living-room (11).jpg";
import living_room_12 from "../../public/images/villa2/living-room/living-room (12).jpg";
import living_room_13 from "../../public/images/villa2/living-room/living-room (13).jpg";
import living_room_14 from "../../public/images/villa2/living-room/living-room (14).jpg";
import living_room_15 from "../../public/images/villa2/living-room/living-room (15).jpg";
import living_room_16 from "../../public/images/villa2/living-room/living-room (16).jpg";
// import living_room_17 from "../../public/images/villa2/living-room/living-room (17).jpg";

import terrace_1 from "../../public/images/villa2/terrace/terrace (1).jpg";
import terrace_10 from "../../public/images/villa2/terrace/terrace (10).jpg";
import terrace_11 from "../../public/images/villa2/terrace/terrace (11).jpg";
import terrace_12 from "../../public/images/villa2/terrace/terrace (12).jpg";
import terrace_13 from "../../public/images/villa2/terrace/terrace (13).jpg";
import terrace_14 from "../../public/images/villa2/terrace/terrace (14).jpg";
// import terrace_15 from "../../public/images/villa2/terrace/terrace (15).jpg";
import terrace_2 from "../../public/images/villa2/terrace/terrace (2).jpg";
import terrace_3 from "../../public/images/villa2/terrace/terrace (3).jpg";
import terrace_4 from "../../public/images/villa2/terrace/terrace (4).jpg";
import terrace_5 from "../../public/images/villa2/terrace/terrace (5).jpg";
import terrace_6 from "../../public/images/villa2/terrace/terrace (6).jpg";
import terrace_7 from "../../public/images/villa2/terrace/terrace (7).jpg";
import terrace_8 from "../../public/images/villa2/terrace/terrace (8).jpg";
import terrace_9 from "../../public/images/villa2/terrace/terrace (9).jpg";

import toilet_shower_1 from "../../public/images/villa2/toilet-shower/toilet-shower (1).jpg";
import toilet_shower_2 from "../../public/images/villa2/toilet-shower/toilet-shower (2).jpg";
import toilet_shower_3 from "../../public/images/villa2/toilet-shower/toilet-shower (3).jpg";
import toilet_shower_4 from "../../public/images/villa2/toilet-shower/toilet-shower (4).jpg";
// import toilet_shower_5 from "../../public/images/villa2/toilet-shower/toilet-shower (5).jpg";

import pool_garden_1 from "../../public/assets/images/bedroomvilla-3/bedroom15.jpg";
import pool_garden_2 from "../../public/assets/images/bedroomvilla-3/bedroom16.jpg";
import pool_garden_3 from "../../public/assets/images/bedroomvilla-3/bedroom17.jpg";
import pool_garden_4 from "../../public/assets/images/bedroomvilla-3/bedroom18.jpg";
import pool_garden_5 from "../../public/assets/images/bedroomvilla-3/bedroom5.webp";
import pool_garden_6 from "../../public/assets/images/bedroomvilla-3/bedroom6.webp";
import pool_garden_7 from "../../public/assets/images/bedroomvilla-3/bedroom25.jpg";
import pool_garden_8 from "../../public/assets/images/bedroomvilla-3/bedroom26.webp";
import pool_garden_9 from "../../public/assets/images/bedroomvilla-3/bedroom12.webp";
import pool_garden_10 from "../../public/assets/images/bedroomvilla-3/bedroom27.jpg";
import pool_garden_11 from "../../public/assets/images/bedroomvilla-3/bedroom14.jpg";
import pool_garden_12 from "../../public/assets/images/bedroomvilla-3/bedroom13.jpg";
import pool_garden_13 from "../../public/assets/images/bedroomvilla-3/bedroom12.webp";
import pool_garden_14 from "../../public/assets/images/bedroomvilla-3/bedroom11.jpg";
import pool_garden_15 from "../../public/assets/images/bedroomvilla-3/bedroom10.jpg";
import pool_garden_16 from "../../public/assets/images/bedroomvilla-3/bedroom15.jpg";
import pool_garden_17 from "../../public/assets/images/bedroomvilla-3/bedroom15.jpg";
import pool_garden_18 from "../../public/assets/images/bedroomvilla-3/bedroom15.jpg";
import pool_garden_19 from "../../public/assets/images/bedroomvilla-3/bedroom15.jpg";
import pool_garden_20 from "../../public/images/villa2/pool-garden/pool-garden (20).jpg";
import pool_garden_21 from "../../public/images/villa2/pool-garden/pool-garden (21).jpg";
import pool_garden_22 from "../../public/images/villa2/pool-garden/pool-garden (22).jpg";
import pool_garden_23 from "../../public/images/villa2/pool-garden/pool-garden (23).jpg";
// import pool_garden_24 from "../../public/images/villa2/pool-garden/pool-garden (24).jpg";
// import pool_garden_25 from "../../public/images/villa2/pool-garden/pool-garden (25).jpg";

export const hero = [
  "Welcome to Paradise",
  "The best resort",
  "of Limassol",
  "In Cyprus",
];

export const navbarLinks = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Luxury 2-Bedroom Villa Details",
    link: "/details-1",
  },
  {
    label: "Luxury 3-Bedroom Villa Details",
    link: "/details-2",
  },
];

export const RULES = [
  {
    icon: <Waves />,
    title: "Authorized Guests Only",
    text: "Only individuals listed on the booking reservation are allowed on the property. Unauthorized visitors are not permitted",
  },
  {
    icon: <Waves />,
    title: "Visitors Requests",
    text: "If you wish to invite additional visitors, please send us a request in advance on the property. Unauthorized visitors are not permitted",
  },
  {
    icon: <Waves />,
    title: "Non-Compliance",
    text: "Hosting unauthorized guests may result in additional charges or termination of your stay",
  },
  {
    icon: <Waves />,
    title: "Check-in",
    text: "From 3:00 PM. You need to let the property know what time you will be arriving in advance.",
  },
  { icon: <CarFront />, title: "Check-out", text: "From 10:00 AM to 11:00 AM" },
  {
    icon: <Dog />,
    title: "Cancellation/ prepayment",
    text: "Cancelation and prepayment policies vary according to accommodation type. Check what conditions apply to each option when making your selection.",
  },
  {
    icon: <Fence />,
    title: "Damage policy",
    text: "If you cause damage to the property during your stay, you could be asked to pay up to € 250 after check-out, according to this property's Damage Policy.",
  },
  {
    icon: <Utensils />,
    title: "Children & Beds Child policies",
    text: "Children of all ages are welcome. To see correct prices and occupancy info, add the number and ages of children in your group to your search.",
  },
  {
    icon: <LampDesk />,
    title: "No age restriction",
    text: "There's no age requirement for check-in",
  },
  { icon: <Bath />, title: "Smoking", text: "Smoking is not allowed." },
  { icon: <Tv />, title: "Parties", text: "Parties/events are not allowed" },
  {
    icon: <Refrigerator />,
    title: "Quiet hours",
    text: "Guests need be quiet between 11:00 PM and 8:00 AM.",
  },
  { icon: <Dog />, title: "Pets", text: "Pets are not allowed." },
];

export const mostPopularAmenities = [
  {
    icon: <Image src={HomeIcon} alt="home" width={20} height={20} />,
    label: "The entire place is yours",
  },
  {
    icon: <Image src={SizeIcon} alt="size" width={20} height={20} />,
    label: "170 m2 Size",
  },
  { icon: <Bath />, label: "Outdoor hot tub" },
  { icon: <CarFront />, label: "Free parking on premises" },
  { icon: <Utensils />, label: "Kitchen" },

  {
    icon: <Image src={SeaViewIcon} alt="sea view" width={20} height={20} />,
    label: "Sea view",
  },
  {
    icon: (
      <Image
        src={SwimmingPoolIcon}
        alt="swimming pool"
        width={20}
        height={20}
      />
    ),
    label: "Swimming pool",
  },
  {
    icon: <Image src={SaunaIcon} alt="sauna" width={20} height={20} />,
    label: "Sauna",
  },
  { icon: <Coffee />, label: "Breakfast" },
  {
    icon: <Image src={SpaIcon} alt="spa" width={20} height={20} />,
    label: "Spa & Wellness",
  },
];

export const PROPERTY_DETAILS = [
  { title: "Property Size", text: "170 m²" },
  { title: "Bedrooms", text: "3" },
  { title: "Bathrooms", text: "2" },
  {
    title: "Outdoor Facilities",
    text: "Pool, Outdoor Hot Tub, Sauna, BBQ Area, Seating Areas, Outdoor Dining",
  },
  {
    title: "Optional Services",
    text: "Breakfast, Electric Scooters, Bicycles, Jet Ski , Wakeboard , Guid Tours, Airport Transfer, Private Chef, Private Driver, Private Security, Private Yoga Instructor, Private Massage",
  },
];

export const GALLERY_IMAGES = [
  {
    name: "Bedroom 1",
    images: [
      bedroom1_1,
      bedroom1_2,
      bedroom1_3,
      bedroom1_4,
      bedroom1_5,
      bedroom1_6,
      bedroom1_7,
      bedroom1_8,
      bedroom1_9,
      bedroom1_10,
      bedroom1_11,
      bedroom1_12,
      bedroom1_13,
      bedroom1_14,
      bedroom1_15,
      bedroom1_16,
      bedroom1_17,
      bedroom1_18,
      bedroom1_19,
      bedroom1_20,
      bedroom1_21,
    ],
  },
  {
    name: "Bedroom 2",
    images: [
      bedroom2_1,
      bedroom2_2,
      bedroom2_3,
      bedroom2_4,
      bedroom2_5,
      bedroom2_6,
      bedroom2_7,
      bedroom2_8,
      bedroom2_9,
      bedroom2_10,
    ],
  },
  {
    name: "Bedroom 3",
    images: [
      bedroom3_1,
      bedroom3_2,
      bedroom3_3,
      bedroom3_4,
      bedroom3_5,
      bedroom3_6,
      bedroom3_7,
      bedroom3_8,
      bedroom3_9,
      bedroom3_10,
      bedroom3_11,
      bedroom3_12,
      bedroom3_13,
      bedroom3_14,
    ],
  },
  {
    name: "Kitchen",
    images: [
      kitchen_1,
      kitchen_2,
      kitchen_3,
      kitchen_4,
      kitchen_5,
      kitchen_6,
      kitchen_7,
      kitchen_8,
      // kitchen_9,
      // kitchen_10,
      // kitchen_11,
    ],
  },
  {
    name: "Living Room",
    images: [
      living_room_1,
      living_room_2,
      living_room_3,
      living_room_4,
      living_room_5,
      living_room_6,
      living_room_7,
      living_room_8,
      living_room_9,
      living_room_10,
      living_room_11,
      living_room_12,
      living_room_13,
      living_room_14,
      living_room_15,
      living_room_16,
    ],
  },
  {
    name: "Terrace",
    images: [
      terrace_1,
      terrace_2,
      terrace_3,
      terrace_4,
      terrace_5,
      terrace_6,
      terrace_7,
      terrace_8,
      terrace_9,
      terrace_10,
      terrace_11,
      terrace_12,
      terrace_13,
      terrace_14,
    ],
  },
  {
    name: "Toilet & Shower",
    images: [
      toilet_shower_1,
      toilet_shower_2,
      toilet_shower_3,
      toilet_shower_4,
    ],
  },
  {
    name: "Pool & Garden",
    images: [
      pool_garden_1,
      pool_garden_2,
      pool_garden_3,
      pool_garden_4,
      pool_garden_5,
      pool_garden_6,
      pool_garden_7,
      pool_garden_8,
      pool_garden_9,
      pool_garden_10,
      pool_garden_11,
      pool_garden_12,
      pool_garden_13,
      pool_garden_14,
      pool_garden_15,
      pool_garden_16,
      pool_garden_17,
      pool_garden_18,
      pool_garden_19,
      pool_garden_20,
      pool_garden_21,
      pool_garden_22,
      pool_garden_23,
    ],
  },
];

export const MAIN_GALLERY = {
  name: "3 Bedroom Villa",
  images: [
    pool_garden_1,
    pool_garden_2,
    pool_garden_3,
    pool_garden_4,
    pool_garden_5,
    pool_garden_6,
    pool_garden_7,
    pool_garden_8,
    pool_garden_9,
    pool_garden_10,
    pool_garden_11,
    pool_garden_12,
    pool_garden_13,
    pool_garden_14,
    pool_garden_15,
    // pool_garden_16,
    // pool_garden_17,
    // pool_garden_18,
    // pool_garden_19,
    // pool_garden_20,
    // pool_garden_21,
    // pool_garden_22,
    // pool_garden_23,
    // living_room_1,
    // living_room_2,
    // living_room_3,
    // living_room_4,
    // living_room_5,
    // living_room_6,
    // living_room_7,
    // living_room_8,
    // living_room_9,
    // living_room_10,
    // living_room_11,
    // living_room_12,
    // living_room_13,
    // living_room_14,
    // living_room_15,
    // living_room_16,
    // terrace_1,
    // terrace_2,
    // terrace_3,
    // terrace_4,
    // terrace_5,
    // terrace_6,
    // terrace_7,
    // terrace_8,
    // terrace_9,
    // terrace_10,
    // terrace_11,
    // terrace_12,
    // terrace_13,
    // terrace_14,
    // bedroom1_1,
    // bedroom1_2,
    // bedroom1_3,
    // bedroom1_4,
    // bedroom1_5,
    // bedroom1_6,
    // bedroom1_7,
    // bedroom1_8,
    // bedroom1_9,
    // bedroom1_10,
    // bedroom1_11,
    // bedroom1_12,
    // bedroom1_13,
    // bedroom1_14,
    // bedroom1_15,
    // bedroom1_16,
    // bedroom1_17,
    // bedroom1_18,
    // bedroom1_19,
    // bedroom1_20,
    // bedroom1_21,
    // bedroom2_1,
    // bedroom2_2,
    // bedroom2_3,
    // bedroom2_4,
    // bedroom2_5,
    // bedroom2_6,
    // bedroom2_7,
    // bedroom2_8,
    // bedroom2_9,
    // bedroom2_10,
    // bedroom3_1,
    // bedroom3_2,
    // bedroom3_3,
    // bedroom3_4,
    // bedroom3_5,
    // bedroom3_6,
    // bedroom3_7,
    // bedroom3_8,
    // bedroom3_9,
    // bedroom3_10,
    // bedroom3_11,
    // bedroom3_12,
    // bedroom3_13,
    // bedroom3_14,
    // kitchen_1,
    // kitchen_2,
    // kitchen_3,
    // kitchen_4,
    // kitchen_5,
    // kitchen_6,
    // kitchen_7,
    // kitchen_8,
  ],
};

export const SLEEPING_SITUATIONS = [
  {
    title: "Bedroom 1",
    description: "1 Queen-size bed",
    images: [bedroom1_1, bedroom1_2, bedroom1_3, bedroom1_4, bedroom1_5],
  },
  {
    title: "Bedroom 2",
    description: "1 Queen-size bed",
    images: [bedroom2_1, bedroom2_2, bedroom2_3, bedroom2_4, bedroom2_5],
  },
  {
    title: "Bedroom 3",
    description: "1 Queen-size bed",
    images: [bedroom3_1, bedroom3_2, bedroom3_3, bedroom3_4, bedroom3_5],
  },
  {
    title: "Sofa bed",
    description: "1 Sofa bed",
    images: [
      living_room_3,
      living_room_13,
      living_room_14,
      living_room_15,
      living_room_16,
    ],
  },
];
