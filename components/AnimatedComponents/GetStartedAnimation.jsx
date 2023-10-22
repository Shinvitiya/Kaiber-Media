"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { hoverVariants } from '@/utils/utilities';
import { steps } from '@/utils/utilities';

const staggerAnimation = {
  initial : {
      opacity: 0,
      x:100
  },
  animate : (index) =>({
      opacity: 1,
      transition: {
          delay : 0.05 * index,
      },
      x: 0
      
  })
}

const GetStartedAnimation = () => {
  
  return (
    <div className='flex md:flex-row flex-col w-full gap-12 items-center justify-center'>
      {steps.map((step, index) =>(
        <motion.div 
          key={index}
          variants={hoverVariants}
          initial="initial"
          whileHover="hover"
          className='border-2 border-black py-6 px-3 rounded-xl w-[250px] h-[250px] text-black select-none bg-white'
        >
          <div className='flex items-center justify-center'>
          <Image 
            src={step.image}
            width={150}
            height={150}
            className='bg-white-alt rounded-full'
            alt="steps to get started"
          />
          </div>
          <p className='text-center 2xl:text-lg font-semibold'>{step.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default GetStartedAnimation