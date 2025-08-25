import React from 'react'
import gsap from 'gsap/all'
import { useGSAP } from '@gsap/react'
import {ScrollSmoother} from 'gsap/ScrollSmoother'
const RollerHeading = () => {
  useGSAP(()=>{
      gsap.to('.aboutHeading',{
        opacity:0,
        duration:3,
        ease:'power2.out',
        scrollTrigger:{
          trigger:'.stick',
          start:'top center',
          end:'center center ',
          scrub:1,

        }
      })
      gsap.to('.rolling-box-center', {
        top:'50%',
        scrollTrigger: {
          trigger: '.stick', 
          start:'top center',
          end:'center center',
          scrub: true, 
      
        },
      });
    },[])
    return (
      <div className='center aboutHeadingContainer '>
        {/* <h1 className='text-white font-bold uppercase text-[17.3vw] aboutHeading'><span className='text-primary'>*</span></h1> */}
      </div>
    )
}

export default RollerHeading