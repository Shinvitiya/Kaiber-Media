"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { hoverVariants } from '@/utils/utilities';


const TestimonialCard = () => {
  return (
    <motion.div 
        className='w-fit p-8 flex flex-col items-start justify-center bg-black-alt text-white right-0 rounded-lg'
        variants={hoverVariants}
        initial="initial"
        whileHover="hover"
        >
        <p className='text-semibold text-2xl max-w-[500px]'>The graphic design agency exceeded our expectations, delivering stunning visuals that truly define our brand.</p>
        <div className='flex items-center gap-x-4'>
            <Image 
                src="/call.png"
                width={40}
                height={40}
                alt="testimonial"
                className='aspect-square object-contain rounded-full pointer-events-none bg-gray-100'
            />
            <p>
                Oliver Everhart, CEO of Cyber Brew
            </p>
        </div>
    </motion.div>
  )
}

export default TestimonialCard