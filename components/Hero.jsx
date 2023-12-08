import React from 'react';
import Image from 'next/image';

import CustomersCard from './AnimatedComponents/CustomersCard';

const Hero = () => {
  return (
    <main className='flex flex-col lg:h-fit bg-black-alt gap-3 px-3 py-4 border-2 border-black rounded-2xl'>
        <div className='h-[300px] 2xl:h-[400px] 3xl:h-[500px] w-full bg-bg-img-1 rounded-2xl flex justify-start items-end'>
            <p className='text-[150px] text-white-alt leading-none'>Kaiber Media </p>
        </div>

        <div className='2xl:h-[300px] 3xl:h-[350px] w-full flex md:flex-row flex-col gap-3'>

            <div className='w-full rounded-2xl flex flex-col justify-center items-start p-3 4xl:p-6 gap-3 relative overflow-hidden border-2 border-black bg-white-alt'>
                <Image 
                src="/scribbles/scribble01.svg"
                width={100}
                height={100}
                className='absolute z-0 right-0 top-4 over'
                alt="scribble"
                />
                <div className='bg-gray-200 rounded-2xl px-2 py-1 border border-black'>
                    <span className='text-base 3xl:text-lg font-semibold'>Welcome</span>
                </div>
                <h1 className='font-bold capitalize text-5xl lg:text-6xl xl:7xl relative shadow-white'>Designing your Creative Vision</h1>
            </div>

            <div className='w-full h-full bg-pastel-blue rounded-2xl gap-3 p-3 flex  flex-col justify-center border-2 border-black bg-white-alt'>

                <div className='p-4'>
                    <h2 className='text-lg xl:text-xl font-medium'>
                    We transform ideas into captivating visual experiences, offering innovative design solutions that elevate your brand.
                    </h2>
                    
                </div>
                <div className='md:px-4 px-2 flex lg:gap-x-4'>
                    <CustomersCard />
                    
                </div>
            </div>
        </div>
    </main>
  )
}

export default Hero