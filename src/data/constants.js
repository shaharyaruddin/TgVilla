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

// Dynamic imports for images
const importImages = (path, count) => {
  return Array.from({ length: count }, (_, i) =>
    require(`${path} (${i + 1}).jpeg`)
  );
};

import bedroom1_1 from "../../public/assets/images/bedroomVilla/bedroom29.jpg";
import bedroom1_10 from "../../public/images/villa/bedroom1/bedroom1 (10).jpeg";
import bedroom1_11 from "../../public/images/villa/bedroom1/bedroom1 (11).jpeg";
import bedroom1_12 from "../../public/images/villa/bedroom1/bedroom1 (12).jpeg";
import bedroom1_13 from "../../public/images/villa/bedroom1/bedroom1 (13).jpeg";
import bedroom1_14 from "../../public/images/villa/bedroom1/bedroom1 (14).jpeg";
import bedroom1_2 from "../../public/images/villa/bedroom1/bedroom1 (2).jpeg";
import bedroom1_3 from "../../public/images/villa/bedroom1/bedroom1 (3).jpeg";
import bedroom1_4 from "../../public/images/villa/bedroom1/bedroom1 (4).jpeg";
import bedroom1_5 from "../../public/images/villa/bedroom1/bedroom1 (5).jpeg";
import bedroom1_6 from "../../public/images/villa/bedroom1/bedroom1 (6).jpeg";
import bedroom1_7 from "../../public/images/villa/bedroom1/bedroom1 (7).jpeg";
import bedroom1_8 from "../../public/images/villa/bedroom1/bedroom1 (8).jpeg";
import bedroom1_9 from "../../public/images/villa/bedroom1/bedroom1 (9).jpeg";
import bedroom1_15 from "../../public/images/villa/bedroom1/bedroom1 (15).jpeg";

import bedroom2_1 from "../../public/images/villa/bedroom2/bedroom2 (1).jpeg";
import bedroom2_2 from "../../public/images/villa/bedroom2/bedroom2 (2).jpeg";
import bedroom2_3 from "../../public/images/villa/bedroom2/bedroom2 (3).jpeg";
import bedroom2_4 from "../../public/images/villa/bedroom2/bedroom2 (4).jpeg";
import bedroom2_5 from "../../public/images/villa/bedroom2/bedroom2 (5).jpeg";
import bedroom2_6 from "../../public/images/villa/bedroom2/bedroom2 (6).jpeg";
import bedroom2_7 from "../../public/images/villa/bedroom2/bedroom2 (7).jpeg";
import bedroom2_8 from "../../public/images/villa/bedroom2/bedroom2 (8).jpeg";
import bedroom2_9 from "../../public/images/villa/bedroom2/bedroom2 (9).jpeg";
import bedroom2_10 from "../../public/images/villa/bedroom2/bedroom2 (10).jpeg";

// import kitchen_1 from "../../public/images/villa/kitchen/kitchen (1).jpeg";
// import kitchen_10 from "../../public/images/villa/kitchen/kitchen (10).jpeg";
// import kitchen_2 from "../../public/images/villa/kitchen/kitchen (2).jpeg";
// import kitchen_3 from "../../public/images/villa/kitchen/kitchen (3).jpeg";
// import kitchen_4 from "../../public/images/villa/kitchen/kitchen (4).jpeg";
// import kitchen_5 from "../../public/images/villa/kitchen/kitchen (5).jpeg";
// import kitchen_6 from "../../public/images/villa/kitchen/kitchen (6).jpeg";
// import kitchen_7 from "../../public/images/villa/kitchen/kitchen (7).jpeg";
// import kitchen_8 from "../../public/images/villa/kitchen/kitchen (8).jpeg";
// import kitchen_9 from "../../public/images/villa/kitchen/kitchen (9).jpeg";
// import kitchen_11 from "../../public/images/villa/kitchen/kitchen (11).jpeg";

import living_room_1 from "../../public/images/villa/living-room/living-room (1).jpeg";
import living_room_2 from "../../public/images/villa/living-room/living-room (2).jpeg";
import living_room_3 from "../../public/images/villa/living-room/living-room (3).jpeg";
import living_room_4 from "../../public/images/villa/living-room/living-room (4).jpeg";
import living_room_5 from "../../public/images/villa/living-room/living-room (5).jpeg";
import living_room_6 from "../../public/images/villa/living-room/living-room (6).jpeg";
import living_room_7 from "../../public/images/villa/living-room/living-room (7).jpeg";
import living_room_8 from "../../public/images/villa/living-room/living-room (8).jpeg";
import living_room_9 from "../../public/images/villa/living-room/living-room (9).jpeg";
import living_room_10 from "../../public/images/villa/living-room/living-room (10).jpeg";

import terrace_1 from "../../public/images/villa/terrace/terrace (1).jpeg";
import terrace_10 from "../../public/images/villa/terrace/terrace (10).jpeg";
import terrace_11 from "../../public/images/villa/terrace/terrace (11).jpeg";
import terrace_12 from "../../public/images/villa/terrace/terrace (12).jpeg";
import terrace_13 from "../../public/images/villa/terrace/terrace (13).jpeg";
// import terrace_14 from "../../public/images/villa/terrace/terrace (14).jpeg";
// import terrace_15 from "../../public/images/villa/terrace/terrace (15).jpeg";
// import terrace_2 from "../../public/images/villa/terrace/terrace (2).jpeg";
// import terrace_3 from "../../public/images/villa/terrace/terrace (3).jpeg";
// import terrace_4 from "../../public/images/villa/terrace/terrace (4).jpeg";
// import terrace_5 from "../../public/images/villa/terrace/terrace (5).jpeg";
// import terrace_6 from "../../public/images/villa/terrace/terrace (6).jpeg";
// import terrace_7 from "../../public/images/villa/terrace/terrace (7).jpeg";
// import terrace_8 from "../../public/images/villa/terrace/terrace (8).jpeg";
// import terrace_9 from "../../public/images/villa/terrace/terrace (9).jpeg";

import toilet_shower_1 from "../../public/images/villa/toilet-shower/toilet-shower (1).jpeg";
import toilet_shower_2 from "../../public/images/villa/toilet-shower/toilet-shower (2).jpeg";
import toilet_shower_3 from "../../public/images/villa/toilet-shower/toilet-shower (3).jpeg";
import toilet_shower_4 from "../../public/images/villa/toilet-shower/toilet-shower (4).jpeg";
import toilet_shower_5 from "../../public/images/villa/toilet-shower/toilet-shower (5).jpeg";
import toilet_shower_6 from "../../public/images/villa/toilet-shower/toilet-shower (6).jpeg";
import toilet_shower_7 from "../../public/images/villa/toilet-shower/toilet-shower (7).jpeg";
import toilet_shower_8 from "../../public/images/villa/toilet-shower/toilet-shower (8).jpeg";

import pool_garden_1 from "../../public/assets/images/bedroomVilla/bedroom29.jpg";
import pool_garden_2 from "../../public/assets/images/bedroomVilla/bedroom32.jpg";
import pool_garden_3 from "../../public/assets/images/bedroomVilla/bedroom33.jpg";
import pool_garden_4 from "../../public/assets/images/bedroomVilla/bedroom4.webp";
import pool_garden_5 from "../../public/assets/images/bedroomVilla/bedroom35.jpg";
import pool_garden_6 from "../../public/assets/images/bedroomVilla/bedroom10.jpg";
import pool_garden_7 from "../../public/assets/images/bedroomVilla/bedroom12.jpg";
import pool_garden_8 from "../../public/assets/images/bedroomVilla/bedroom14.jpg";
import pool_garden_9 from "../../public/assets/images/bedroomVilla/bedroom28.webp";
import pool_garden_10 from "../../public/assets/images/bedroomVilla/bedroom33.jpg";
import pool_garden_11 from "../../public/assets/images/bedroomVilla/bedroom34.jpg";
import pool_garden_12 from "../../public/assets/images/bedroomVilla/bedroom35.jpg";
import pool_garden_13 from "../../public/assets/images/bedroomVilla/bedroom28.webp";
// import pool_garden_14 from "../../public/images/villa/pool-garden/pool-garden (14).jpg";
// import pool_garden_15 from "../../public/images/villa/pool-garden/pool-garden (15).jpg";
// import pool_garden_16 from "../../public/images/villa/pool-garden/pool-garden (16).jpg";
// import pool_garden_17 from "../../public/images/villa/pool-garden/pool-garden (17).jpg";
// import pool_garden_18 from "../../public/images/villa/pool-garden/pool-garden (18).jpg";
// import pool_garden_19 from "../../public/images/villa/pool-garden/pool-garden (19).jpg";
// import pool_garden_20 from "../../public/images/villa/pool-garden/pool-garden (20).jpg";
// import pool_garden_21 from "../../public/images/villa/pool-garden/pool-garden (21).jpg";
// import pool_garden_22 from "../../public/images/villa/pool-garden/pool-garden (22).jpg";
// import pool_garden_23 from "../../public/images/villa/pool-garden/pool-garden (23).jpg";
// import pool_garden_24 from "../../public/images/villa/pool-garden/pool-garden (24).jpg";
// import pool_garden_25 from "../../public/images/villa/pool-garden/pool-garden (25).jpg";

import HomeIcon from "../../public/icons/amenities/home.svg";
import SaunaIcon from "../../public/icons/amenities/sauna.svg";
import SeaViewIcon from "../../public/icons/amenities/sea-view.svg";
import SizeIcon from "../../public/icons/amenities/size.svg";
import SpaIcon from "../../public/icons/amenities/spa.svg";
import SwimmingPoolIcon from "../../public/icons/amenities/swimming-pool.svg";

export const hero = [
  "Welcome to Paradise",
  "The best resort",
  "of Limassol",
  "In Cyprus",
];

export const NAVBAR_LINKS = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "TG Resort",
    link: "/resort",
    items: [
      {
        label: "Luxury 2-Bedroom Villa Details",
        description:
          "Luxury 2-Bedroom Villa contains SPA, Swimming Pool, Garden, Terrace, etc. Can book up to 6 adults and 2 children.",
        link: "/details-1",
        image: "/images/villa/3.jpg",
      },
      {
        label: "Luxury 3-Bedroom Villa Details",
        description:
          "Luxury 3-Bedroom Villa contains SPA, Swimming Pool, Garden, Terrace, etc. Can book up to 8 adults and 3 children.",
        link: "/details-2",
        image: "/images/villa2/card.jpg",
      },
    ],
  },
  {
    label: "TG Residences",
    link: "/residence",
    items: [
      {
        label: "TG Residence by the Beach – Coming Soon",
        description:
          "Luxury Spa Apartments Just 30 Meters from the Sea in Germasogeia, Limassol’s Prime Tourist Area",
        link: "/residence",
        image: "/images/residence/1.jpg",
      },
    ],
  },
  {
    label: "Services",
    shortLabel: "Services",
    link: "/services",
  },
  {
    label: "About Us",
    shortLabel: "About",
    link: "/about-us",
  },
];

export const navbarLinks = [
  {
    label: "Home",
    shortLabel: "Home",
    link: "/",
  },
  {
    label: "Luxury 2-Bedroom Villa Details",
    shortLabel: "2BR Details",
    link: "/details-1",
  },
  {
    label: "Luxury 3-Bedroom Villa Details",
    shortLabel: "3BR Details",
    link: "/details-2",
  },
  {
    label: "Services",
    shortLabel: "Services",
    link: "/services",
  },
  {
    label: "About Us",
    shortLabel: "About",
    link: "/about-us",
  },
];

export const mostPopularAmenities = [
  {
    icon: <Image src={HomeIcon} alt="home" width={20} height={20} />,
    label: "The entire place is yours",
  },
  {
    icon: <Image src={SizeIcon} alt="size" width={20} height={20} />,
    label: "150 m2 Size",
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

export const premiumServices = [
  {
    icon: "/icons/towel.svg",
    label: "2hrs extra sauna",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: "/icons/bathroom.svg",
    label: "2hrs extra jacuzzi",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: "/icons/heater.svg",
    label: "More warm pool",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: "/icons/food.svg",
    label: "Fruit platters",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: "/icons/terrace.svg",
    label: "Breakfast in the terrace",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
];

export const PREMIUM_AMENITIES = [
  {
    icon: "/icons/premium/jacuzzi.png",
    label: "Private Spa & Wellness",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: "/icons/premium/swimmer.png",
    label: "Heated Saltwater Pool",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: "/icons/premium/garden.png",
    label: "Ultra-Luxurious Outdoor Living",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: "/icons/premium/smart-home.png",
    label: "High-Tech Smart Home & Entertainment",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: "/icons/premium/concierge.png",
    label: "Exclusive 5-Star Hotel Services",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: "/icons/premium/location.png",
    label: "Prime Location – Beach & City Access",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: "/icons/premium/kitchen.png",
    label: "Fully Equipped Gourmet Kitchen",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: "/icons/premium/security.png",
    label: "Private & Secure Stay",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
];

export const amenities = [
  {
    icon: <House />,
    label: "Great for your stay",
    items: [
      "Balcony",
      "Parking",
      "Private Bathroom",
      "Spa",
      "Free Wifi",
      "View",
      "Air conditioning",
      "Kitchen",
      "Terrace",
      "Airport shuttle",
    ],
  },
  {
    icon: <CircleParking />,
    label: "Parking",
    items: ["Accessible parking"],
  },
  {
    icon: <Utensils />,
    label: "Kitchen",
    items: [
      "Dining table",
      "Coffee machine",
      "Cleaning products",
      "Toaster",
      "Stovetop",
      "Oven",
      "Dryer",
      "Kitchenware",
      "Electric kettle",
      "Kitchen",
      "Washing machine",
      "Dishwasher",
      "Microwave",
      "Refrigerator",
    ],
  },
  {
    icon: <BedDouble />,
    label: "Bedroom",
    items: ["Linens", "Wardrobe or closet", "Walk-in closet"],
  },
  {
    icon: <Bath />,
    label: "Bathroom",
    items: [
      "Toilet paper",
      "Towels",
      "Bathtub or shower",
      "Private Bathroom",
      "Toilet",
      "Free toiletries",
      "Hairdryer",
      "Shower",
    ],
  },
  {
    icon: <Bath />,
    label: "Bathroom",
    items: [
      "Toilet paper",
      "Towels",
      "Bathtub or shower",
      "Private Bathroom",
      "Toilet",
      "Free toiletries",
      "Hairdryer",
      "Shower",
    ],
  },
  {
    icon: <School />,
    label: "Living Area",
    items: ["Dining area", "Sofa", "Sitting area", "Desk"],
  },
  {
    icon: <School />,
    label: "Media & Technology",
    items: [
      "Streaming service (like Netflix)",
      "Flat-screen TV",
      "Laptop safe",
      "Cable channels",
      "Satellite channels",
      "TV",
      "Pay-per-view channels",
    ],
  },
  {
    icon: <School />,
    label: "Room Amenities",
    items: [
      "Socket near the bed",
      "Drying rack for clothing",
      "Clothes rack",
      "Hypoallergenic",
      "Mosquito net",
      "Hardwood or parquet floors",
      "Tile/Marble floor",
      "Soundproof",
      "Private entrance",
      "Carpeted",
      "Fan",
      "Ironing facilities",
      "Iron",
    ],
  },
  {
    icon: <School />,
    label: "Accessibility",
    items: ["Hearing accessible", "Entire unit located on ground floor"],
  },
  {
    icon: <School />,
    label: "Outdoors",
    items: [
      "Picnic area",
      "Outdoor furniture",
      "Outdoor dining area",
      "Sun deck",
      "Barbecue",
      "Private pool",
      "BBQ facilities",
      "Patio",
      "Balcony",
      "Terrace",
      "Garden",
    ],
  },
  {
    icon: <School />,
    label: "Outdoor swimming pool",
    items: [
      "Opening times",
      "Open all year",
      "All ages welcome",
      "Heated pool",
      "Saltwater pool",
      "Swimming pool toys",
      "Pool/Beach towels",
      "Pool cover",
      "Beach chairs/Loungers",
      "Beach umbrellas",
    ],
  },
  {
    icon: <School />,
    label: "Spa",
    items: [
      "Yoga classes",
      "Spa facilities",
      "Beach umbrellas",
      "Beach chairs/Loungers",
      "Hot tub/Jacuzzi",
      "Spa",
      "Sauna",
    ],
  },
  {
    icon: <School />,
    label: "Food & Drink",
    items: [
      "Fruit",
      "Wine/Champagne",
      "Grocery deliveries",
      "Additional charge",
      "Breakfast in the room",
      "Room service",
      "Tea/Coffee maker",
    ],
  },
  {
    icon: <School />,
    label: "Activities",
    items: ["Beach", "Ping-pong"],
  },
  {
    icon: <School />,
    label: "Outdoor & View",
    items: [
      "Inner courtyard view",
      "Landmark view",
      "Pool view",
      "Garden view",
      "Sea view",
      "View",
    ],
  },
  {
    icon: <School />,
    label: "Building Characteristics",
    items: ["Private apartment in building", "Detached"],
  },
  {
    icon: <School />,
    label: "Front Desk Services",
    items: [
      "Invoice provided",
      "Lockers",
      "Private check-in/out",
      "Concierge",
      "Baggage storage",
      "Tour desk",
      "Express check-in/out",
    ],
  },
  {
    icon: <School />,
    label: "Entertainment & Family Services",
    items: [
      "Indoor play area",
      "Board games/Puzzles",
      "Board games/puzzles",
      "Child safety socket covers",
      "Babysitting/Child services",
      "Additional charge",
    ],
  },
  {
    icon: <School />,
    label: "Miscellaneous",
    items: [
      "Designated smoking area",
      "Air conditioning",
      "Smoke-free property",
      "Heating",
      "Soundproof rooms",
      "Family rooms",
      "Non-smoking rooms",
    ],
  },
];

export const testimonials = [
  {
    name: "John Doe",
    role: "CEO",
    country: "Cyprus",
    image: "/images/testimonials/1.jpg",
    rating: 5,
    date: "2024-01-01",
    review:
      "We stayed at Theofilos Georgiou's villa in Limassol, and it was absolutely outstanding! The villa is brand new, spotless, and fully equipped with...",
  },
  {
    name: "John Doe",
    role: "CEO",
    country: "Cyprus",
    image: "/images/testimonials/1.jpg",
    rating: 5,
    date: "2024-01-01",
    review:
      "The villa was absolutely beautiful, just as it appears in the photos. Our host, Theofilis met us on arrival, to show us around. He was very warm...",
  },
  {
    name: "John Doe",
    role: "CEO",
    country: "Cyprus",
    image: "/images/testimonials/1.jpg",
    rating: 5,
    date: "2024-01-01",
    review:
      "The villa was absolutely beautiful, just as it appears in the photos. Our host, Theofilis met us on arrival, to show us around. He was very warm...",
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

export const PROPERTY_DETAILS = [
  { title: "Property Size", text: "150 m²" },
  { title: "Bedrooms", text: "2" },
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
  // {
  //   name: "Kitchen",
  //   images: [
  //     kitchen_1,
  //     kitchen_2,
  //     kitchen_3,
  //     kitchen_4,
  //     kitchen_5,
  //     kitchen_6,
  //     kitchen_7,
  //     kitchen_8,
  //     kitchen_9,
  //     kitchen_10,
  //     kitchen_11,
  //   ],
  // },
  // {
  //   name: "Living Room",
  //   images: [
  //     living_room_1,
  //     living_room_2,
  //     living_room_3,
  //     living_room_4,
  //     living_room_5,
  //     living_room_6,
  //     living_room_7,
  //     living_room_8,
  //     living_room_9,
  //     living_room_10,
  //   ],
  // },
  // {
  //   name: "Terrace",
  //   images: [
  //     terrace_1,
  //     terrace_2,
  //     terrace_3,
  //     terrace_4,
  //     terrace_5,
  //     terrace_6,
  //     terrace_7,
  //     terrace_8,
  //     terrace_9,
  //     terrace_10,
  //     terrace_11,
  //     terrace_12,
  //     terrace_13,
  //     // terrace_14,
  //     // terrace_15,
  //   ],
  // },
  {
    name: "Toilet & Shower 1",
    images: [
      toilet_shower_1,
      toilet_shower_2,
      toilet_shower_3,
      toilet_shower_4,
      toilet_shower_5,
      toilet_shower_6,
      toilet_shower_7,
      toilet_shower_8,
    ],
  },
  {
    name: "Toilet & Shower 2",
    images: [
      toilet_shower_1,
      toilet_shower_2,
      toilet_shower_3,
      toilet_shower_4,
      toilet_shower_5,
      toilet_shower_6,
      toilet_shower_7,
      toilet_shower_8,
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
      // pool_garden_14,
      // pool_garden_15,
      // pool_garden_16,
      // pool_garden_17,
      // pool_garden_18,
      // pool_garden_19,
      // pool_garden_20,
      // pool_garden_21,
      // pool_garden_22,
      // pool_garden_23,
      // pool_garden_24,
      // pool_garden_25,
    ],
  },
];

export const MAIN_GALLERY = {
  name: "2 Bedroom Villa",
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
    // kitchen_1,
    // kitchen_2,
    // kitchen_3,
    // kitchen_4,
    // kitchen_5,
    // kitchen_6,
    // kitchen_7,
    // kitchen_8,
    // kitchen_9,
    // kitchen_10,
    // kitchen_11,
  ],
};

// export const SLEEPING_SITUATIONS = [
//   {
//     title: "Bedroom 1",
//     description: "1 Queen-size bed",
//     images: [bedroom1_1, bedroom1_2, bedroom1_3, bedroom1_4, bedroom1_5],
//   },
//   {
//     title: "Bedroom 2",
//     description: "1 Queen-size bed",
//     images: [bedroom2_1, bedroom2_2, bedroom2_3, bedroom2_4, bedroom2_5],
//   },
//   {
//     title: "Sofa bed",
//     description: "1 Sofa bed",
//     images: [
//       living_room_1,
//       living_room_2,
//       living_room_3,
//       living_room_4,
//       living_room_5,
//     ],
//   },
// ];

export const BOOKING_REVIEWS = [
  {
    name: "Sagi",
    title: "Exceptional",
    body: "We had a fantastic stay at the villa! It’s beautifully equipped with everything you could possibly need for a comfortable and relaxing vacation. The space was spotless, well-maintained, and felt like a true home away from home. Theo was an incredible host—he met us right on time, gave us a warm welcome, and made sure we had all the information we needed. His hospitality really made a difference. Highly recommended!",
    country: "IL",
    platform: "booking",
    date: "2025-06-03",
    nights: 4,
    group: "Group",
  },
  {
    name: "David",
    title: "Truly Exceptional—From Start to Finish",
    body: "Theofilos’ place is truly exceptional.\n\nThe villa is brand new, beautifully furnished, fully equipped, and impeccably clean. Every detail reflects comfort and style. The heated pool is a fantastic bonus, and the hot tub and sauna add a luxurious, relaxing touch.\n\nThe location is perfect—situated on the east side of Limassol, just 40 minutes from Larnaca Airport, 10 minutes from the beach, 15 minutes to downtown, and 20 minutes to the City of Dreams Resort & Casino.\n\nWhat truly sets this place apart is the host. Hospitality runs in his veins—he goes above and beyond to ensure every need is met and every request is handled with care and genuine warmth.\n\nHighly recommended—I can’t wait to come back!",
    country: "US",
    platform: "booking",
    date: "2025-05-31",
    nights: 5,
    group: "Group",
  },
  {
    name: "Ivanov",
    title: "Exceptional",
    body: "The place is located in the city which make it very easy to access not only just for us but also to get some delivery if needed. But what's better, apart from sauna, jacuzzi, pool and table tennis, were many 'tiny' things that you normally won't think about before coming to leisure and start to think only after. Acoustic system is great and covering the whole outside area, very cool bbq, you have games, toothbrushes, a cleaning lady to help in the morning and breakfast. The host was super welcoming and super nice and ready to help with any question. Best for family visit!",
    country: "CY",
    platform: "booking",
    date: "2025-05-13",
    nights: 3,
    group: "Group",
  },
  {
    name: "Marina",
    title: "Wonderful place! Highly recommend!",
    body: "This is an amazing place with a fantastic villa — everything is thoughtfully designed and super convenient. It feels like they have literally everything you might need. Everything is new, clean, and very comfortable.\n\nThe territory was cleaned daily, which made it a real pleasure to use all the spa facilities. Despite being located just off the highway, deliveries arrived easily and without any issues.\n\nSpecial thanks to the staff — they were outstanding. The owner was incredibly helpful, kind, and welcoming. He arranged extra house cleaning for us on request, and greeted us with a bottle of wine and fresh fruit at check in. Later during our stay, he even brought us a full plate of delicious fruits. He was always ready and open for any our request!\n\nWe also received tasty, ready-to-eat breakfasts every morning — a lovely touch!\n\nAll in all: a perfect place for a relaxing stay. Highly recommend!",
    country: "CY",
    platform: "booking",
    date: "2025-05-23",
    nights: 7,
    group: "Family",
  },
  {
    name: "Ricarda",
    title: "Exceptional",
    body: "The villa is wonderfully equipped and leaves nothing to be desired - heated saltwater pool, whirlpool, sauna, table tennis table, barbecue, very nice interior design and good kitchen equipment - everything is there. The host Theofilus is very nice and helpful and is always available to give tips and recommendations. He also always responds very quickly and communication is flawless.",
    country: "DE",
    platform: "booking",
    date: "2025-05-07",
    nights: 7,
    group: "Group",
  },
  {
    name: "Olivia",
    title: "Idyllic setting, a bubble of relaxation",
    body: "A perfect stay! The villa is magnificent, in an idyllic setting, perfectly maintained. We particularly appreciated the heated swimming pool, the jacuzzi, the superb terrace and the great cleanliness of the place. A huge thank you to Filio for his warm welcome and his availability throughout our stay. We will come back with great pleasure!",
    country: "CH",
    platform: "booking",
    date: "2025-04-29",
    nights: 7,
    group: "Family",
  },
  {
    name: "Helen",
    title:
      "The whole experience was amazing! We arrived at 3 to check in, the owner was waiting for us outside to show us inside an",
    body: "The whole experience was amazing! We arrived at 3 to check in, the owner was waiting for us outside to show us inside and explain to us how the jacuzzi works and the sauna as well. One thing that actually made us feel really comfortable was the kindness of the owner (Theofilos) he was really chill, understandable, supportive and kind. He was available for help all the time even at midnight. The house is great to spend your time there and I definitely recommend booking this house not only because of the amazing things that come with it but and the atmosphere and everything is all worth the price. Definitely looking forward in booking this villa again",
    country: "CY",
    platform: "booking",
    date: "2025-04-27",
    nights: 1,
    group: "Group",
  },
  {
    name: "Del giwta",
    title: "Exceptional",
    body: "The house is beautiful, amazing terrace with heated pool, jacuzzi, sauna!!! The service is top!!!!",
    country: "GR",
    platform: "booking",
    date: "2025-04-25",
    nights: 1,
    group: "Group",
  },
  {
    name: "Denis",
    title: "Exceptional",
    body: "There are no comments available for this review",
    country: "CY",
    platform: "booking",
    date: "2025-04-23",
    nights: 2,
    group: "Group",
  },
  {
    name: "Anastasiia",
    title: "Exceptional",
    body: "Our stay at the villa was wonderful. We were met by a kind owner who was happy to show us the house, told us where everything was and how everything worked. The house was clean and comfortable inside and out. This is a great place for dinner with friends or a vacation. Convenient location, quiet area, overall we liked everything very much. I highly recommend this place!",
    country: "CY",
    platform: "booking",
    date: "2025-04-21",
    nights: 1,
    group: "Group",
  },
  {
    name: "Yevgeny",
    title: "Exceptional",
    body: "We stayed at the villa for 7 unforgettable nights in April 2025 as a family of four (2 adults and 2 children). The villa is perfectly designed for a comfortable and relaxing long stay. It had everything we could possibly need: spacious rooms, brand-new and spotless interiors, regular cleaning service, fresh towels, bathrobes, and bed linens. Each room had a smart TV, a private toilet, and a shower. We were also pleasantly surprised to find a full set of toiletries: shower gels, shampoos, lotions, even toothbrushes and toothpaste Highlights of our stay: A clean, warm pool A modern sauna Jacuzzi!!!! Sun loungers, and umbrellas A lovely outdoor area with comfortable furniture, stereo system,a canopy for shade, and a gas heater for chilly evenings A ping-pong table A fully equipped outdoor kitchen with a barbecue grill — including charcoal, utensils, and even cleanup ash after use Delicious and varied breakfasts every morning A fully stocked indoor kitchen with all the dishes, a coffee machine, a dishwasher, a washing machine, and all necessary cleaning products We especially want to highlight is the host! Friendly, caring, and always available via phone or WhatsApp. Before our arrival, we received a complete guide about our stay, He personally welcomed us even though we arrived late at night, and patiently showed us everything. He also helped us with things not directly related to the property and our stay. He is made us feel completely at home. As a lovely welcome, we received fresh fruits and wine on arrival. We had a rental car, which made getting around very easy. If you're not planning to rent a car, it's a good idea to check public transportation options in advance We would absolutely love to come back again and can highly recommend this villa to families and groups. Everything is thoughtfully prepare down to the smallest detail — for a truly carefree vacation!",
    country: "IL",
    platform: "booking",
    date: "2025-04-19",
    nights: 7,
    group: "Family",
  },
  {
    name: "Daniel",
    title: "💯",
    body: "Perfect place to rest, we had a great time, the staff was impeccable and always very helpful, I appreciate the best stay 💪🏽 we will definitely be back several times!",
    country: "GR",
    platform: "booking",
    date: "2025-04-19",
    nights: 2,
    group: "Group",
  },
  {
    name: "Ginat",
    title: "Wonderful",
    body: "An excellent place, well-maintained and invested in, with a property owner who takes care of every detail and request.",
    country: "IL",
    platform: "booking",
    date: "2025-04-08",
    nights: 3,
    group: "Family",
  },
  {
    name: "Mirko",
    title: "Exceptional",
    body: "If you are travelling to Cyprus and are looking for a mix btw a place to wind-down and still experience city vibes, then Limassol should be your natural choice. Within that setting and located in one of the more prominent and developing neighbourhoods, TG Villa offers a true relaxation opportunity. You can choose to stay at the villa all day (as we often did) and fully immerse within the garden-pool-sauna-jacuzzi setting, or within a 5min ride be at the sea-front for a walk by the beach or enjoy a meal at one of the city's great restaurants. The host will do everything to make your stay as pleasant as possible in this secret and lush get-away.",
    country: "RS",
    platform: "booking",
    date: "2025-04-07",
    nights: 8,
    group: "Couple",
  },
  {
    name: "Olivia",
    title:
      "It was absolutely brilliant and we’d love to stay again. Amazing host!",
    body: "Loved the pool, hot tub and sauna. Beautiful villa",
    country: "GB",
    platform: "booking",
    date: "2025-03-21",
    nights: 2,
    group: "Family",
  },
  {
    name: "William",
    title: "Thank you for the wonderful stay! :)",
    body: "Entire villa and all facilites were immaculate; clean, modern, well presented and very comfortable. But the thing that really made our stay so outstanding was our attentive and generous host who made sure all of our needs were met and went the extra mile to provide an exceptional stay. Would return in a heartbeat and was very sad to leave.",
    country: "GB",
    platform: "booking",
    date: "2025-03-03",
    nights: 4,
    group: "Group",
  },
  {
    name: "Or",
    title: "The Ultimate Villa In Limassol!",
    body: "We stayed at Theofilos Georgiou's villa in Limassol, and it was absolutely outstanding! The villa is brand new, spotless, and fully equipped with everything you could need. It features a swimming pool, a sauna, and a lovely outdoor seating area, which made our stay extra enjoyable. The hospitality was perfect—Theofilos ensured that we were comfortable and satisfied throughout our stay. The location is excellent, with supermarkets, restaurants, and all essentials nearby. I highly recommend this villa for anyone looking for a perfect vacation spot. Thank you very much!",
    country: "IL",
    platform: "booking",
    date: "2024-10-22",
    nights: 7,
    group: "Family",
  },
  {
    name: "Anuradha",
    title: "A truly luxurious stay",
    body: "The villa was absolutely beautiful, just as it appears in the photos. Our host, Theofilis met us on arrival, to show us around. He was very warm and helpful, full of suggestions and made himself available to us during our entire stay. The place itself was spacious, clean, beautifully decorated, well equipped and comfortable. The outside area has a heater so we could sit outside even when it was chilly in the mornings and evenings. Having the sauna and swimming pool was a real bonus. We loved the area, which while outside central Limassol, had lots of options for restaurants, bars and beaches. We had a really lovely, relaxing stay in beautiful surroundings, and would love to go back. Thank you!",
    country: "GB",
    platform: "booking",
    date: "2024-12-14",
    nights: 5,
    group: "Couple",
  },
  {
    name: "Ian",
    title: "Great place to stay",
    body: "Lovely place with friendly host. Lots of wonderful things at the property - swimming pool, spa pool, sauna etc. Kitchen was fitted out well with high quality appliances. Well worth getting the breakfast too with local food. Internet was high speed and worked throughout the place.",
    country: "GB",
    platform: "booking",
    date: "2025-02-05",
    nights: 3,
    group: "Family",
  },
  {
    name: "Volodya",
    title:
      "Теофилос, прекрасный человек и профессионал своего дела! Давно не встречал такой сервис и отношения, не говоря о его щед",
    body: "Все было на высшем уровне",
    country: "UA",
    platform: "booking",
    date: "2025-02-07",
    nights: 2,
    group: "Family",
  },
  {
    name: "Moshe",
    title: "Exceptional",
    body: "it a new garden apartment , the pool is just outside the door. great beds and bathroom to each room. everything we needed was in the room , from soap and tooth brushes to dishwasher and laundry detergents, you don't need to bring anything. outside cleaning every day (to the pool and garden) , speakers with Bluetooth to connect your music on the outside. its a new neighborhood so its very quiet at night the host Theofilos was very nice and took care of all out needs. we will come back.. for sure",
    country: "IL",
    platform: "booking",
    date: "2024-11-25",
    nights: 8,
    group: "Couple",
  },
  {
    name: "Kyriakos",
    title: "Exceptional",
    body: "Amenities in the house rented.",
    country: "CY",
    platform: "booking",
    date: "2024-12-20",
    nights: 6,
    group: "Group",
  },
  {
    name: "Yossi",
    title: "Exceptional",
    body: "This apartment was a dream come true. Perfect for a family or a couple of friends. It came with all amenities that one needs and more.",
    country: "IL",
    platform: "booking",
    date: "2024-11-21",
    nights: 4,
    group: "Family",
  },
  {
    name: "Valeriia",
    title: "Wonderful",
    body: "It was clean! New! Very good quality of furniture, other facilities... everything like on the pictures! Beautiful!!! Very nice kind owner. We enjoyed the stay. Thanks a lot.",
    country: "CY",
    platform: "booking",
    date: "2024-11-20",
    nights: 9,
    group: "Family",
  },
  {
    name: "Juliana",
    title: "Lovely owner and great place to relax and enjoy the evening",
    body: "The owner met us in person and showed us around. He was extremely friendly and the house very well-organised. The pool was clean and warm as described in the offer. We had breakfast waiting for us on the next morning.",
    country: "BG",
    platform: "booking",
    date: "2024-11-06",
    nights: 2,
    group: "Couple",
  },
  // {
  //   name: "Moshe",
  //   title: "Exceptional",
  //   body: "Perfect. There is nothing to add... Everything is New, clean, the house is amazing. The pool is amazing, the sauna is amazing. just like the pictures. But the most important thing is the hospitality of Theofilos... Gave us the a feeling like we are family. We sure will come back🙏",
  //   country: "IL",
  //   platform: "booking",
  //   date: "2024-10-31",
  // },
  // {
  //   name: "Fares",
  //   title: "Best stay in Limassol",
  //   body: "Perfect Luxury Getaway in Limassol I recently stayed at this beautiful villa in Limassol and was blown away! The property is modern spacious, and immaculately clean. The outdoor area, complete with a private pool and lush surroundings is perfect for relaxing. Inside, the décor is stylish, and the bedrooms are incredibly comfortable It's in a quiet location but still close to Limassol's beaches and attractions. The sauna 🧖 OM The hosts were outstanding, offering great recommendations and ensuring everything was perfect.  highly recommend this villa for anyone seeking a luxurious and peaceful retreat!",
  //   country: "MT",
  //   platform: "booking",
  //   date: "2024-10-24",
  // },
  // {
  //   name: "Michael",
  //   title:
  //     "Amazing place we definitely be coming back to meet up with the host and stay in connect",
  //   body: "Firstly we was welcomed with such hospitality from the host waiting for us outside, after opening the gate for us to let us in we was just amazed how the whole property was put together looked beautiful! Everything Morden and up to date so clean! Showed us the guide he put together for us and anything we needed he was just a text away (respond's within minutes) First day of waking up we had a nice breakfast waiting for us on the terrace pool pre heated host me us later on to make sure we was happy and if we needed anything. And helped me with any question I had From that day we had a lovely maid who would come in the morning and evening just to clean up the plac a bit and make sure we had everything we needed It goes without saying the last day we didn't want to leave family nights (child friendly) was amazin we had music playing with the speaker systems board games and lovely food Great location and with a car you can get anywhere within 15 mins to old Limassol to villages jus outside of the city as it connects right on to A1 Theofilos is such a gentleman and a honest family man if you need anything he would go over and beyon for you 100% recommend this place for the location and the host",
  //   country: "GB",
  //   platform: "booking",
  //   date: "2024-10-17",
  // },
  // {
  //   name: "Anthony",
  //   title: "Greek efficiency and friendliness at its best.👍",
  //   body: "The owners Agness and Theo are the nicest, caring people you could meet. They could honestly not do enough to make our stay an absolute pleasure. The location is superb for anyone who is visiting Limassol for either business or pleasure. We loved the Sauna and salty swimming pool or just the relaxed breakfast on the patio. We highly recommend this place. Thank you for this break Agness and Theo, much appreciated 👏",
  //   country: "IE",
  //   platform: "booking",
  //   date: "2024-10-4",
  // },
  // {
  //   name: "Volodya",
  //   title:
  //     "Теофилос, прекрасный человек и профессионал своего дела! Давно не встречал такой сервис и отношения, не говоря о его щед",
  //   body: "Все было на высшем уровне",
  //   country: "UA",
  //   platform: "booking",
  //   date: "2025-02-07",
  // },
  // {
  //   name: "Ragne",
  //   title: "Suurepärane villa puhkuseks ja nautimiseks",
  //   body: "Villa oli suurepärane. Kõik on uus ja puhas. Kõige peale on mõeldud. Peremees on väga sõbralik. Mida iganes sa tema käest palud , ta leiab lahenduse. Peatusime seal jaanuaris ja nautisime suve sest meil oli soe bassein ja mullivann, ujusime hilisõhtul ja varahommikul. Millal iganes soovisime. Seal tuleb õhtul üks tüdrGB kes paneb basseinile kätte peale. See pole probleem, palusime et ta seda ei teeks ja ujusime hilisõhtul. Katsime basseini ise hiljem. Kõige parem majutus kus ma üldse kunagi olen peatunud",
  //   country: "EE",
  //   platform: "booking",
  //   date: "2025-01-23",
  // },
  // {
  //   name: "Claudiu",
  //   title: "Exceptional",
  //   body: "O cazare de top cu dotarile unui hotel de 5 stele. Interiorul este utilat si dotat cu tot ce este nevoie pentru un sejur perfect. La exterior este o terasa foarte mare dotata cu incalzitor pentru serile reci, piscina incalzita, sauna si jacuzzi si o gradina luxurianta foarte frumos luminata. Gazda este foarte primitoare si se asigura mereu ca totul este in cea mai buna conditie. Pe langa cazare am avut incluse si menajul casei si micul dejun ceea ce este o raritate la cazarile de acest fel. Este cu siguranta un loc in care am reveni cu drag.",
  //   country: "RO",
  //   platform: "booking",
  //   date: "2024-12-26",
  // },
  // {
  //   name: "Andrey",
  //   title: "Exceptional",
  //   body: "Отличная современная вилла где есть все необходимое для комфортного отдыха. Бассейн и сауна выше всяких похвал. Theofilos самый внимательный и гостеприимный человек из всех, которых я когда либо встречал. Любую просьбу и вопрос Theofilos решал мгновенно, чему могут позавидовать любые люксовые 5 звездочные отели. Он каждый день доказывал на деле, что для него действительно важно, чтобы его гости чувствовали себя как дома и наслаждались отдыхом. Обязательно вернемся еще",
  //   country: "RU",
  //   platform: "booking",
  //   date: "2024-11-10",
  // },
];

export const AIRBNB_REVIEWS = [
  {
    name: "Mel",
    country: "Switzerland",
    city: "Zürich",
    reviewDate: "3 weeks ago",
    stayDuration: "a few nights",
    rating: 5,
    title: "",
    body: "The home is very beautiful, we enjoyed using all the amazing facilities. Theo is a great host, even getting us surprise ice cream! Thank you so much for everything, we would love to come back!",
  },
  {
    name: "Yunus",
    body: "One of the best Airbnbs we have stayed in. Theofilos was very welcoming and ensured we were comfortable at all times. The pool, hot tub and sauna were incredible and the outdoor seating area was where we chilled out the most.\n\n100% recommend and 100% will stay again.",
    nights: 5,
    date: "2025-06-01",
  },
  {
    name: "Rasmus Gottlieb",
    body: "We had an absolutely amazing stay at this beautiful place. Everything was just as we imagined and as the pictures showed (It's even more beautiful in real life). Theofilos was an amazing host, super friendly, had great recommendations on restaurants and places to visit. Check in and checkout was as easy as it could be. We will for sure book this place next time we visit Limassol.",
    nights: 3,
    date: "2025-03-19",
  },
  {
    name: "Bassel",
    body: "Our stay at this villa was amazing! The place was clean, well-maintained, and had everything we needed, from the heated pool and jacuzzi to the relaxing sauna. The host was incredibly welcoming, always available, and made sure our stay was perfect. His hospitality truly stood out, and we felt at home. Highly recommend this villa for a great experience — thank you for everything!",
    nights: 4,
    date: "2025-03-04",
  },
  {
    name: "Matz",
    body: "Amazing stay at the Airbnb, very nice Host and everything was perfect and exactly Like the Pictures, will be Back !",
    nights: 7,
    date: "2025-01-10",
  },
  {
    name: "Yubin",
    body: "It was truly great time. Theofilos is amazing host, he gave all the info ! Me and my friends really enjoyed the whole time! Heated pool, sauna, jacuzzi and all systems are easy to use and so much pleasure. I would definitely want to come here again!",
    nights: 5,
    date: "2025-01-20",
  },
  {
    name: "Finn",
    body: "We had the pleasure to be stay for one whole month in this Villa. Everything looks exactly like the pictures and especially the outside area is breathtaking. We had daily cleaning outside and twice per week inside, so everything was always clean in the morning. Theofilos is without exaggeration one of the, if not the best host I had so far, because he was always friendly and offering his help proactively. On top of that he gave us a lot of good suggestions for the area. We are really happy, that we spent our time at this amazing place and that everything turned out, the way we hoped it would turn out. Clear recommendation and we will definitely be back if we return to Limassol.",
    nights: 9,
    date: "2024-09-10",
  },
  {
    name: "Gaizka",
    body: "We had an amazing stay at Theofilos' villa in Cyprus. Theofilos is one of the best hosts we've ever had – always friendly and ready to help. The villa is exactly as shown in the pictures. It's brand new and has everything you need for a luxury stay, including a heated saltwater pool, a beautiful outdoor sauna, and new luxury furniture. We also loved the daily cleaning of the outdoor areas and the delicious breakfast of the morning. Theofilos really provides 5-star service and facilities. We can't wait to visit again and will definitely stay more days at his villa when we come back to Cyprus.",
    nights: 8,
    date: "2024-12-10",
  },
  {
    name: "Ben",
    body: "Theofilos was very nice and help a lot. The house was perfect for this trip.",
    nights: 6,
    date: "2024-10-10",
  },
  {
    name: "Adriana",
    body: "Our stay at this place was truly wonderful! The host was fantastic—very welcoming and attentive, making sure we had everything we needed for a comfortable stay. The house itself was charming and well-maintained, providing a cozy atmosphere that felt like home. We enjoyed every moment of our time there especially having the chance to have a swim in the heated pool and straight after the hot cozy sauna that this stay has to offer, appreciated all the thoughtful touches. Thank you for an unforgettable experience! We can't wait to return.",
    nights: 7,
    date: "2024-11-10",
  },
  {
    name: "Sandra",
    body: "We had great days in this pretty house. Everything is as described in the pictures and in the advertisement. Theofilos was an outstanding host who was always there from start to finish. (In person as well as via message) During our stay we received a wonderful fruit basket and the temperature of the pool was immediately increased at my request. We did not test the new sauna because the weather was fantastic. Everything was sparkling clean and the cleaning girl was just incredible. The decor is very high quality and the beds super comfortable. By rental car you are quickly on the beach (5 min.) and have a few nice restaurants there. The only small drawback is the disturbing construction noise, as it is being built all around. Of course, Theofilos can't do anything about it, but I think you should know that before you book the place. Some of the compressor started at 7 o'clock in the morning and the whole house is also very clairaudient. (Chairs back etc...)",
    nights: 6,
    date: "2024-10-10",
  },
  {
    name: "Liat",
    body: "Lovely hosts. The egg is spotless, clean. Everything was perfect.",
    nights: 5,
    date: "2024-09-10",
  },

  {
    name: "Beth",
    body: "Thank you for the hospitality!!",
    nights: 4,
    date: "2025-01-10",
  },
  {
    name: "Amel",
    body: "Our range hood was a little thoughtful from our arrival to the departure. He was very involved, very responsive. She is a very welcoming family with a very warm heart. We've known human people. I would not know how to thank them for making me have this unforgettable stay which was so beautiful for my family and myself , I recommend it, I will come back to Limasol, Cyprus and it will be him and nothing else, the house is so beautiful and pleasant.",
    nights: 5,
    date: "2024-08-10",
  },

  {
    name: "Sagiv",
    body: "Theofilos and his Wife were very welcoming answer on all our needs and beyond. The apartment is new and beautiful very high-end well equipped and supper clean. Me and my family had a pleasant time we'll recommend it.",
    nights: 6,
    date: "2024-08-10",
  },
  {
    name: "Clayton",
    body: "Where do I begin! Our first visit to Larnaca as a family could not have possibly gone better, primarily because of the incredible stay at Theofilios's lovely home. From the moment we booked to when we left Cyprus Filios was extremely helpful and hospitable. We were his first guests and cannot stop raving about his beautiful villa on our return. The Villa itself is absolutely brand new with a beautiful and clean interior, comfortable beds and tastefully decorated. We arrived in Larnanca from London and had pre-booked a car for the week which I highly recommend as Cyprus is not generally pedestrian friendly except for the overbearing tourist hot spots which aren't where you want to stay with a family. It was only £90 for the week which is unbeatable and a 30 minute drive to the villa. I would suggest making a day trip to Nissi Beach and Potaras which is an hour away for nicer beaches, but I honestly preferred staying in Limassol.",
    nights: 7,
    date: "2024-08-10",
  },
  {
    name: "Anan",
    body: "Beautiful clean place The service we got 10 stars and the hosts are very nice equal for a price",
    nights: 5,
    date: "2024-08-10",
  },
];

export const TG_REVIEWS = [
  {
    name: "Emma",
    title: "Absolutely Stunning Villa!",
    body: "We had an incredible time at this villa! The place was spotless, beautifully decorated, and had everything we needed. The pool was perfect, and the host was very accommodating. Highly recommended!",
    country: "US",
    platform: "airbnb",
    date: "2025-03-15",
    nights: 5,
    group: "Group",
  },
  {
    name: "Liam",
    title: "Perfect Getaway!",
    body: "This villa exceeded our expectations! The location was amazing, just a short walk to the beach. The outdoor seating area was our favorite spot to relax in the evenings. Will definitely come back!",
    country: "GB",
    platform: "booking",
    date: "2025-02-22",
    nights: 3,
    group: "Group",
  },
  {
    name: "Sophie",
    title: "A Dream Vacation Home",
    body: "Everything about this villa was perfect—the views, the comfort, and the peace. The host was very friendly and made sure we had everything we needed. Highly recommend!",
    country: "DE",
    platform: "vrbo",
    date: "2025-04-10",
    nights: 4,
    group: "Couple",
  },
  {
    name: "Mateo",
    title: "Luxury and Comfort!",
    body: "From the moment we arrived, we felt at home. The villa was clean, well-equipped, and luxurious. The pool and garden area were stunning! We can't wait to return!",
    country: "ES",
    platform: "expedia",
    date: "2025-01-15",
    nights: 7,
    group: "Couple",
  },
  {
    name: "Olivia",
    title: "Highly Recommended!",
    body: "This villa was an absolute dream! The hospitality was top-notch, and the location was perfect. We especially enjoyed the private pool and BBQ area.",
    country: "FR",
    platform: "airbnb",
    date: "2025-05-01",
    nights: 5,
    group: "Family",
  },
  {
    name: "Noah",
    title: "Fantastic Stay!",
    body: "The villa was exactly as described, if not better! Super clean, spacious, and well-furnished. It was the perfect place to relax and unwind. 10/10!",
    country: "AU",
    platform: "booking",
    date: "2025-03-05",
    nights: 6,
    group: "Family",
  },
  {
    name: "Isabella",
    title: "Best Holiday Home Ever!",
    body: "The best villa we've ever stayed in! The pool was great, and the villa had all the amenities we needed. The host was very attentive and kind.",
    country: "IT",
    platform: "vrbo",
    date: "2025-02-12",
    nights: 7,
    group: "Family",
  },
  {
    name: "Mason",
    title: "Paradise!",
    body: "An absolute paradise! The villa was spacious and very well-maintained. We loved the large garden and modern interior. A must-visit!",
    country: "NL",
    platform: "airbnb",
    date: "2025-01-30",
    nights: 5,
    group: "Family",
  },
  {
    name: "Ava",
    title: "Beautiful Villa, Amazing Views",
    body: "The view from this villa is simply breathtaking! It's the perfect place to relax. The rooms were clean and well-furnished. Loved it!",
    country: "CA",
    platform: "booking",
    date: "2025-04-25",
    nights: 6,
    group: "Family",
  },
  {
    name: "Ethan",
    title: "The Perfect Vacation Spot!",
    body: "Our stay at this villa was beyond amazing. Everything was well-organized, and the host was super helpful. The pool area was incredible.",
    country: "GR",
    platform: "expedia",
    date: "2025-05-20",
    nights: 7,
    group: "Family",
  },
  {
    name: "Charlotte",
    title: "Luxury at Its Best",
    body: "If you're looking for a luxurious getaway, this is it! The villa is spacious, clean, and beautifully designed. Will definitely come back.",
    country: "SE",
    platform: "vrbo",
    date: "2025-03-15",
    nights: 5,
    group: "Group",
  },
  {
    name: "James",
    title: "A Magical Experience",
    body: "We loved our stay! The villa had everything we needed and more. The private beach access was a huge plus. Highly recommend!",
    country: "PT",
    platform: "airbnb",
    date: "2025-02-11",
    nights: 6,
    group: "Couple",
  },
  {
    name: "Luna",
    title: "Relaxing & Peaceful",
    body: "This villa was the perfect place to unwind. Quiet surroundings, modern decor, and great service. We felt right at home.",
    country: "NO",
    platform: "booking",
    date: "2025-04-17",
    nights: 5,
    group: "Family",
  },
  {
    name: "Benjamin",
    title: "Incredible Experience!",
    body: "One of the best trips we've had! The villa was spotless and well-maintained. The host went above and beyond to make our stay perfect.",
    country: "CH",
    platform: "expedia",
    date: "2025-01-06",
    nights: 7,
    group: "Family",
  },
  {
    name: "Sophia",
    title: "Beautiful & Comfortable",
    body: "This villa had everything we needed. The pool was great, and the beds were super comfortable. We didn't want to leave!",
    country: "DK",
    platform: "vrbo",
    date: "2025-05-19",
    nights: 5,
    group: "Couple",
  },
  {
    name: "Jack",
    title: "Perfect for Families",
    body: "We traveled with our kids, and this villa was perfect! It was safe, clean, and had a great play area for the little ones. Loved it!",
    country: "BE",
    platform: "airbnb",
    date: "2025-03-07",
    nights: 6,
    group: "Family",
  },
  {
    name: "Mia",
    title: "Idyllic Retreat",
    body: "The villa was even better than the pictures. Such a peaceful retreat with amazing views. Can't wait to visit again!",
    country: "FI",
    platform: "booking",
    date: "2025-02-28",
    nights: 5,
    group: "Group",
  },
  {
    name: "Daniel",
    title: "Private & Serene",
    body: "If you're looking for a quiet, private escape, this villa is perfect. Everything was top-notch and beautifully maintained.",
    country: "IE",
    platform: "expedia",
    date: "2025-04-14",
    nights: 7,
    group: "Group",
  },
  {
    name: "Elena",
    title: "Great Location & Host",
    body: "The villa was in the best location, close to restaurants and attractions. The host was so friendly and helpful. We had a fantastic time!",
    country: "AT",
    platform: "vrbo",
    date: "2025-01-22",
    nights: 5,
    group: "Couple",
  },
  {
    name: "Lucas",
    title: "Best Villa Stay Ever!",
    body: "From start to finish, this was a perfect experience. The villa was modern, clean, and had amazing facilities. Highly recommended!",
    country: "PL",
    platform: "airbnb",
    date: "2025-05-14",
    nights: 6,
    group: "Family",
  },
];
