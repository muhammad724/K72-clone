import React from "react";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

function Stairs(){

    const stairParentRef = useRef(null)

  const tl = gsap.timeline()

  useGSAP(() => {

    tl.to(stairParentRef.current,{
          display:'block'

        })
    tl.from('.stair', {
      height: 0,
      stagger: { 
        amount: -0.25
      }
    })
        tl.to('.stair', {
          y:'100%',
          stagger:{
            amount:-0.25
          }
        })
        tl.to(stairParentRef.current,{
          display:'none'

        })
         tl.to('.stair', {
          y:'0',
         
        })

})

    return(
         <div className=" text-white overflow-hidden">
      <div ref={stairParentRef} className=' h-screen w-full fixed top-0 left-0 z-20' >
      <div className=" h-full w-full flex">
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
      </div>
      </div>
      </div>
        
    )


}
export default Stairs;