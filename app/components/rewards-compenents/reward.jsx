"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Reward = ({image,name,level}) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const checkScreenSize = () => {
          setIsSmallScreen(window.innerWidth > 700);
        };
    
        // Initial check
        checkScreenSize();
    
        // Add event listener for screen resize
        window.addEventListener("resize", checkScreenSize);
    
        // Cleanup on unmount
        return () => window.removeEventListener("resize", checkScreenSize);
      }, []);
    
      // Optional: Log to verify screen size state
      useEffect(() => {
        console.log("isSmallScreen:", isSmallScreen);
      }, [isSmallScreen]);
      if (isSmallScreen) {
  return (
    <div className='w-fit h-fit flex flex-col space-y-6 px-10 py-6 rounded-3xl border border-white/10 rewards-box backdrop'>
        <Image
        src={image}
        width={199}
        height={196}
        className=' max-w-[199px] max-h-[196px]'
        />
        <div className='w-fit h-fit flex flex-col space-y-2'>
            <h1 className='w-full text-start h-fit text-black/65 p2'>
                {level}
            </h1>
            <h1 className='w-full text-start h-fit text-black p1'>
                {name}
            </h1>
            

        </div>
        <button className='w-fit h-fit py-3 px-6 bg-white rounded-xl'>
                <h1 className='text-start text-black Button'>
                CLAIM REWARD
                </h1>

            </button>

    </div>
  )} else {
    return(<div className='w-fit h-fit flex flex-col space-y-3 px-5 py-3 rounded-2xl border border-white/10 rewards-box backdrop'>
        <Image
        src={image}
        width={100}
        height={100}
        className=' max-w-[100px] max-h-[100px]'
        />
        <div className='w-fit h-fit flex flex-col space-y-1'>
            <h1 className='w-full text-start h-fit text-black/65 p2'>
                {level}
            </h1>
            <h1 className='w-full text-start h-fit text-black p1'>
                {name}
            </h1>
            

        </div>
        <button className='w-fit h-fit py-2 px-3 bg-white rounded-xl'>
                <h1 className='text-start text-black Button'>
                CLAIM REWARD
                </h1>

            </button>

    </div>)
  }
}

export default Reward