import {
  Poppins,
  Crimson_Text,
  Cormorant,
  Playfair,
  Outfit,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar/Navbar";
// import Footer from "@/components/Footer/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import AppProviders from "@/contexts/app-providers";
import localFont from "next/font/local";

import Footer from "@/components/Footer-2/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});
const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson-text",
});
const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});
const playFair = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "TG Luxury Stay",
  description: "",
};

// const estancia = localFont({
//   src: "/assets/fonts/Estancia.otf",
//   variable: "--font-estancia",
// });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${crimsonText.variable} ${cormorant.variable} ${playFair.variable} ${outfit.variable} antialiased relative `}
      >
        <AppProviders>
          {/* <SmoothScrollProvider> */}
          <Navbar />
          {children}
          <Footer />
          {/* </SmoothScrollProvider> */}
        </AppProviders>
      </body>
    </html>
  );
}
