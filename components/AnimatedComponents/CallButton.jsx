"use client";
import React from 'react';
import { motion } from 'framer-motion';

import { hoverVariants } from '@/utils/utilities';

const CallButton = () => {
  return (
    <motion.button 
        className='w-[250px] bg-black text-white px-6 py-2 rounded-lg text-lg'
        variants={hoverVariants}
        initial="initial"
        whileHover="hover"
    >
        Book a Call
    </motion.button>
  )
}

export default CallButton