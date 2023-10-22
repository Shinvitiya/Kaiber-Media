"use client"
import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

import SectionTitle from './AnimatedComponents/SectionTitle';
import { work } from '@/utils/utilities';


const Work = () => {
  return (
    <motion.section 
        className='3xl:min-h-fit  border-2 border-black rounded-2xl p-5 w-full flex flex-col py-10 relative' 
        id="work"
        initial={{y:200, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration: 0.8, type:"spring"}}
        viewport={{once: true}}    
    >
        <div className='bg-gray-200 border border-black w-fit px-2 py-1 rounded-2xl relative'>
            <span className='text-base 3xl:text-lg font-semibold'>Take a look</span>
        </div>
        <SectionTitle 
            title="Latest Work"
            className="mt-5 z-10"
            />
        <Image 
                src="/arrow.svg"
                width={200}
                height={200}
                alt="arrow"
                className='absolute md:left-1/4 left-1/3 top-4 scale-x-[-1] rotate-20'
        />
        <div className=' flex w-full gap-3 my-20'>
            <Marquee 
                autoFill={true}
                className="flex gap-4"
                direction="right"
            >
            {work.map((image, index)=>(
                <Image 
                key={index}
                src={image}
                width={500}
                height={500}
                alt="work"
                className='w-[300px] md:w-[500px]'
            />
            ))}
            
            </Marquee>
            
        </div>

    </motion.section>
  )
}

export default Work