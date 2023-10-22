"use client";
import React from 'react';
import { motion } from 'framer-motion';

import SectionTitle from './AnimatedComponents/SectionTitle';
import TestimonialCard from './AnimatedComponents/TestimonialCard';

const Testimonial = () => {
  return (
    <motion.section
        className='border-2 border-black rounded-2xl py-10 w-full'
        initial={{y:200, opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:true}}
        transition={{duration:0.5, type: "easeIn"}}
    >
        <div className='w-full flex flex-col items-center justify-center p-6 gap-y-2'>
            <SectionTitle 
                title="For Small Businesses and Startups"
            />
            <p className='text-center text-lg 3xl:text-2xl sm:w-1/2'>As a startup overselves, we believe we can help other startups while sharing a couple things we've leart on the way with them.</p>
        </div>

        <div className='flex md:flex-row flex-col
        md:gap-28 gap-16  justify-center w-full p-8'>
            <TestimonialCard/>
        </div>
    </motion.section>
  )
}

export default Testimonial