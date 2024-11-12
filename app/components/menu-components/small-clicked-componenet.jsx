import React from 'react'
import IconComponent from '../foundation-components/icon';
import Link from 'next/link';
import Image from 'next/image';

const SmallClickedComponent = ({
    blackimage,
    h1,
    link
}) => {
          return (
            // <Link href={link2}>
            // <div className="w-full h-[70px] flex flex-col space-y-9  overflow-hidden rounded-md bg-[#FFFFFF]">
            //   <div className="flex flex-row space-x-4 w-full items-center h-full">
            //     <div className="w-[8px] h-full bg-[#FFFFFF]" />
            //     <IconComponent source={blackimage} theWidth="48" theHeight="48"/>; 
            //     <h1 className="text-black font-bold p2">{h1}</h1>
            //   </div>
            // </div>
            // </Link>
            <Link href={link}>
            <button className='w-fit h-fit flex flex-col space-y-[10px] items-center justify-center px-4'>
                  
              <Image
              src={blackimage}
              width={120}
              height={179}
              className="rounded-lg max-w-full max-h-full"
              />
              <h1 className='p1 text-black text-center w-[120px]'>{h1}</h1>
        
        
            </button>
            </Link>
          );
        }
      
  

export default SmallClickedComponent