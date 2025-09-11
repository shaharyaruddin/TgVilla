import BannerSection from "@/components/Detail-2/BannerSection";
import BedroomSection from "@/components/Detail-2/BedroomSection";
import DetailTopSection from "@/components/Detail-2/DetailTopSection";
import HouseRuleSection from "@/components/Detail-2/HouseRuleSection";
import IconSection from "@/components/Detail-2/IconSection";
import ImageSection from "@/components/Detail-2/ImageSection";
import PropertyDetail from "@/components/Detail-2/PropertyDetail";
import VillaDetails from "@/components/Detail-2/VillaDetails";
import ResortTestimonials from "@/components/resort/ResortTestimonials";

const Page = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/get-villa/1`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div>Error loading villa data. Please try again.</div>;
  }

  const data = await res.json();
  const villa = data?.villa;

  if (!villa) {
    return <div>No villa data found.</div>;
  }

  console.log("villa 1 =========>", villa);

  return (
    <>
      <DetailTopSection />
      <BannerSection villa={villa} />
      <a
        className="relative px-6 py-3 rounded-2xl bg-gradient-to-r from-black via-gray-800 to-black text-white font-semibold text-base shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-gray-900 hover:to-black"
        href="#calender"
      >
        <span className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
        Book Now
      </a>
      <ImageSection />
      <IconSection />
      <ResortTestimonials bgColor="#F4F4EA" showButton={false} />
      <VillaDetails />
      <BedroomSection />
      <PropertyDetail />
      <HouseRuleSection />
    </>
  );
};

export default Page;