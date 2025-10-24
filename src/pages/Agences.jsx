import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

function Agences(){
    
    gsap.registerPlugin(ScrollTrigger)

 const imageDivRef = useRef(null)
 const imageRef = useRef(null)
  
 const ImageArray =[
     'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
     'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
     'https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007',
     'https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3',
     'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
     'https://k72.ca/images/teamMembers/MyleneS_480x640.jpg?w=480&h=640&fit=crop&s=55944189ac2aa83e83e2ef8125e4809e',
     'https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac',
     'https://k72.ca/images/teamMembers/Claire_480x640.jpg?w=480&h=640&fit=crop&s=2a5f6181f85b2d13f7fb30c5555835aa',
     'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
     'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
     'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
     'https://k72.ca/images/teamMembers/MAXIME_480X640_2.jpg?w=480&h=640&fit=crop&s=fa729ef392c1761aa156d9aea9ab41e3',
     'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
     'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6',    
]


useGSAP(function(){
    gsap.to(imageDivRef.current,{
        scrollTrigger:{
            trigger:imageDivRef.current,
            markers:true,
            start:'top 20.5%',
            end:'top -99%',
            scrub:true,
            pin:true,
            onUpdate: (self)=>{

                let imageIndex;


            if (self.progress < 1 ){
                imageIndex = Math.floor(self.progress * ImageArray.length)

            }   else{
                imageIndex = ImageArray.length-1
            }

            imageRef.current.src = ImageArray[imageIndex]
         
            }
        }

    })
})

return(

       <div>
         <div className='section1'>
            <div ref={imageDivRef} className=' overflow-hidden rounded-2xl h-[20vw] w-[15vw] absolute top-31 left-[30vw]  '>
                <img ref={imageRef} className='object-cover h-full w-full' src='https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7'></img>

            </div>

            <div className=' relative font-[font2]'>
            <div className=' mt-[54vh]'>
            <h1 className='text-[19.5vw] text-center leading-[18vw] uppercase'>SEVEN7Y <br/>TWO</h1>
                 </div>
            <div className='pl-[40%] mt-20'>
    <p className='text-3xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
                 </div>
            </div>
   

   
        </div>

        <div className='section2 h-screen'>
        </div>
       </div>



    )
}
export default Agences;