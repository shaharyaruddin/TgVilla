import {
  Poppins,
  Crimson_Text,
  Cormorant,
  Playfair,
  Outfit,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

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
  title: "Villa frontend",
  description: "Villa frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${crimsonText.variable} ${cormorant.variable} ${playFair.variable} ${outfit.variable} antialiased relative `}
      >
        {/* <SmoothScrollProvider> */}
        <Navbar />
        {children}
        <Footer />
        {/* </SmoothScrollProvider> */}
      </body>
    </html>
  );
}
