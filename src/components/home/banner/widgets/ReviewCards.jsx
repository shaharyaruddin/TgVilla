import React from 'react'
import ReviewCard from './ReviewCard/ReviewCard'

const ReviewCards = () => {
  return (
    <div className="flex justify-between  px-[3rem] max-lg:justify-center p-2 items-center    w-full min-h-[13rem] ">
        {/* card */}
        <div className="reviewCardleft ">
          <ReviewCard
            comment={`NEW Luxury 2-Bedroom House-Heated Salty Swimming Pool, Sauna and Garden`}
            heading="Booking.com"
            title="Awarded to"
            description="Traveller Review Awards 2025"
            percent="9.9"
            outOf="Out of 10"
          />
        </div>
        <div className="reviewCardRight max-lg:hidden">
          <ReviewCard
            comment={`This home is in the top 5% of eligible listings based on ratings, reviews, and reliability`}
            heading="Airbnb.com"
            title="Guest Favourite"
            description="According to guests"
            percent={"5%"}
            outOf="Top"

          />
        </div>
        
        {/* card */}
      </div>
  )
}

export default ReviewCards