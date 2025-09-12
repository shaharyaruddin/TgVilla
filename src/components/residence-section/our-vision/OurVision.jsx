import React from 'react'
import OurVisionLeft from './OurVisionLeft';
import OurVisionRight from './OurVisionRight';

const OurVision = () => {
  return (
    <div className="bg-[#E8E4D9] pt-10 grid grid-cols-2 welcomeSection max-width w-full max-lg:min-h-[30rem]  max-[51.25em]:grid-cols-1">
      {/* left */}
      <OurVisionLeft />
      {/* right */}
      <OurVisionRight />
    </div>
  );
}

export default OurVision