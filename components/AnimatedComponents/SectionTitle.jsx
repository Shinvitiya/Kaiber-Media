"use client";
import React from 'react';
import { motion } from 'framer-motion';

import { hoverVariants } from '@/utils/utilities';

const SectionTitle = ({title, className}) => {
  return (
    <motion.h3 
        className={` ${className} font-bold md:text-5xl text-2xl text-center capitalize text-white bg-black-alt w-fit p-3 rounded-lg select-none`}
        variants={hoverVariants}
        initial="initial"
        whileHover="hover"
        whileInView={{scale:[0.2, 1]}}
    >   
        {title}
    </motion.h3>
  )
}

export default SectionTitle