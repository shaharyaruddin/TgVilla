import clsx from 'clsx';
import React from 'react'

const StaticPosterCard = ({
    imgSrc,
  title,
  description,
  className = '',
  imageClassName = '',
}) => {
 return (
    <div className={clsx("w-full h-screen sticky top-0",className)}>
      <div className={clsx('w-full h-full relative  overflow-hidden ')}>
       {/* layer */}
       <div className="bg-black/30 w-full h-screen absolute left-0 top-0"></div>
       {/* image */}
       <img src={imgSrc} className={clsx('w-full h-full object-cover',imageClassName)} alt={title} />
       {/* content */}
       <div className="absolute bottom-10 left-10 text-white capitalize space-y-3">
         <h2 className='font-playfair text-4xl'>{title}</h2>
         <p className='w-[80%]'>{description}</p>
       </div>
     </div>
    </div>);
}

export default StaticPosterCard