"use client";
import { useState } from "react";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import ScrollArea from "@/components/scroll-area";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AIRBNB_REVIEWS, BOOKING_REVIEWS, TG_REVIEWS } from "@/data/constants";
import { getCountryNameByCode } from "@/data/countries";
import { getColorForName } from "@/lib/colors";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { BedDouble, Calendar, UsersRound } from "lucide-react";
import DynamicContent from "../ui/dynamic-content";

function AvatarComponent({ src, alt, fallbackText, isBooking }) {
  const [imageError, setImageError] = useState(false);
  const bgColor = getColorForName(fallbackText);
  return (
    <div className="size-10 rounded-full overflow-hidden">
      {isBooking ? (
        // <Avatar>
        //   <AvatarImage src={src} alt={alt} />
        //   <AvatarFallback style={{ backgroundColor: bgColor, color: "white" }}>
        //     {fallbackText}
        //   </AvatarFallback>
        // </Avatar>
        <div
          className="flex items-center justify-center text-lg font-bold text-white rounded-full size-10"
          style={{ backgroundColor: bgColor }}
        >
          {fallbackText}
        </div>
      ) : (
        <AspectRatio ratio={1 / 1}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover rounded-full"
            onError={() => setImageError(true)}
          />
        </AspectRatio>
      )}
    </div>
    // <div className="size-10 rounded-full overflow-hidden">
    //   {isBooking ? (
    //     <Avatar>
    //       <AvatarImage src={src} alt={alt} />
    //       <AvatarFallback style={{ backgroundColor: bgColor, color: "white" }}>
    //         {fallbackText}
    //       </AvatarFallback>
    //     </Avatar>
    //   ) : (
    //     <AspectRatio ratio={1 / 1}>
    //       {!imageError ? (
    //         <Image
    //           src={src}
    //           alt={alt}
    //           fill
    //           className="object-cover rounded-full"
    //           onError={() => setImageError(true)}
    //         />
    //       ) : (
    //         <Avatar>
    //           <AvatarFallback style={{ backgroundColor: bgColor, color: "white" }}>
    //             {fallbackText}
    //           </AvatarFallback>
    //         </Avatar>
    //       )}
    //     </AspectRatio>
    //   )}
    // </div>
  );
}
function ReviewDetails({ review, isBooking }) {
  return (
    <div className="flex md:flex-row flex-col gap-4">
      <div className="flex flex-col gap-2 w-[200px]">
        <div className="flex flex-row items-center gap-2">
          <AvatarComponent
            src={isBooking ? review.img : `/avatars/airbnb/${review.name}.avif`}
            alt={review.name}
            fallbackText={review.name.charAt(0)}
            isBooking={isBooking}
          />
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium">{review.name}</p>
            {isBooking && (
              <div className="flex flex-row items-center gap-2">
                <ReactCountryFlag
                  countryCode={review.country}
                  svg
                  title={getCountryNameByCode(review.country)}
                />
                <p className="text-xs font-extralight text-gray-500">
                  {getCountryNameByCode(review.country)}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <BedDouble className="size-4" />
          <p className="text-xs font-extralight">2 Bedrooms</p>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="size-4" />
          <p className="text-xs font-extralight">{review.nights} nights</p>
          {review.date && (
            <>
              <p>·</p>
              <p className="text-xs font-extralight text-gray-500">
                {format(review.date, "MMMM yyyy")}
              </p>
            </>
          )}
        </div>
        {isBooking && (
          <div className="flex items-center gap-2">
            <UsersRound className="size-4" />
            <p className="text-xs font-extralight">{review.group}</p>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-row items-center justify-between gap-2">
          <div className="flex flex-1 flex-col gap-1">
            <p className="text-xs font-extralight text-gray-500">
              {review.date
                ? `Reviewed on ${format(review.date, "MMMM yyyy")}`
                : "Reviewed on October 2024"}
            </p>
            {isBooking ? (
              <p className="text-xl font-semibold">{review.title}</p>
            ) : (
              <div className="flex flex-row items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarFilledIcon key={i} className="size-4 text-yellow-500" />
                ))}
              </div>
            )}
          </div>
          {isBooking && (
            <div className="flex items-center justify-center bg-cyan-500 rounded-sm size-10">
              <p className="text-lg text-white font-bold">10</p>
            </div>
          )}
        </div>
        <DynamicContent content={review.body} />
      </div>
    </div>
  );
}

export default function ReviewsModal({ open, setOpen }) {
  const [activeTab, setActiveTab] = useState("booking");

  const renderReviews = (reviews, isBooking) => (
    <ScrollArea>
      <div className="h-full p-4">
        <div className="flex flex-col gap-10 h-full">
          {reviews.map((review, i) => (
            <ReviewDetails key={i} review={review} isBooking={isBooking} />
          ))}
        </div>
      </div>
    </ScrollArea>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="flex flex-col max-w-[calc(100vw-40px)] w-[1000px] max-h-[calc(100vh-40px)] h-[90vh] pr-1">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Guest reviews for our villas
          </DialogTitle>
          <DialogDescription>
            See why our guests love staying with us.
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 w-full overflow-hidden pr-4">
          <Tabs
            defaultValue="standard"
            className="h-full flex flex-col"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-3 h-16 mb-5">
              {["Airbnb", "Booking", "TGLuxury"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className={`h-12 text-lg ${
                    activeTab === tab
                      ? `data-[state=active]:${
                          tab === "Booking"
                            ? "bg-blue-500"
                            : tab === "Airbnb"
                            ? "bg-pink-500"
                            : "bg-green-500"
                        } data-[state=active]:text-white data-[state=active]:shadow`
                      : ""
                  }`}
                >
                  {tab}
                  <span className="hidden md:inline">.com</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {/* <TabsList className="grid w-full grid-cols-3 h-16 mb-5">
              <TabsTrigger
                value="booking"
                className={`h-12 text-lg ${
                  activeTab === "booking"
                    ? "data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow"
                    : ""
                }`}
              >
                Booking<span className="hidden md:inline">.com</span>
              </TabsTrigger>

              <TabsTrigger
                value="airbnb"
                className={`h-12 text-lg  ${
                  activeTab === "airbnb"
                    ? "data-[state=active]:bg-pink-500 data-[state=active]:text-white data-[state=active]:shadow"
                    : ""
                }`}
              >
                Airbnb<span className="hidden md:inline">.com</span>
              </TabsTrigger>
              <TabsTrigger
                value="ours"
                className={`h-12 text-lg ${
                  activeTab === "ours"
                    ? "data-[state=active]:bg-green-500 data-[state=active]:text-white data-[state=active]:shadow"
                    : ""
                }`}
              >
                TG
              </TabsTrigger>
            </TabsList> */}
            <TabsContent value="TGLuxury" className="flex-1 overflow-y-auto">
              {renderReviews(TG_REVIEWS, true)}
            </TabsContent>
            <TabsContent value="Booking" className="flex-1 overflow-y-auto">
              {renderReviews(BOOKING_REVIEWS, true)}
            </TabsContent>
            <TabsContent value="Airbnb" className="flex-1 overflow-y-auto">
              {renderReviews(AIRBNB_REVIEWS, false)}
            </TabsContent>
          </Tabs>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
