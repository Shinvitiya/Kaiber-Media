"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Accordions from './AnimatedComponents/Accordion';

import { QA } from '@/utils/utilities';

const defaultAnimations = {
  hidden: {
      opacity: 0,
      y: 50
  },
  visible: {
      opacity: 1,
      y:0
  }
}

const FAQ = () => {
  return (
    <motion.section
      className='w-full border-2 border-black rounded-2xl p-4' 
      id="faq"
      initial={{y:200, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.5, type:"spring"}}
      viewport={{once:true}}
    >
      <h4 className='text-center font-bold text-5xl'>FAQs</h4>
      <motion.div 
        className='w-full flex flex-col items-center justify-center my-4'
        initial="hidden"
        animate="visible"
        transition={{staggerChildren: 0.6, type: "spring"}}
      >
        {QA.map((item, index) =>(
          <motion.div 
            variants={defaultAnimations}
            initial="hidden"
            whileInView="visible"
            key={index}

           >
          <Accordions
            question={item.question}
            answer={item.answer}
          />  
          </motion.div>
        ))}
      </motion.div>


    </motion.section>
  )
}

export default FAQ