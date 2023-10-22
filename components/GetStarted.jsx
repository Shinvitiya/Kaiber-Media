"use client";
import React from 'react';
import { motion } from 'framer-motion';

import GetStartedAnimation from './AnimatedComponents/GetStartedAnimation';
import SectionTitle from './AnimatedComponents/SectionTitle';

const hoverVariants = {
    hover:{
        boxShadow: ["none", 
                "5px 5px 0px 0px #16FF00, 9px 10px 0px 0px #FDFF00 ,13px 15px 0px 0px #FF6464"],
        transition: {duration: 0.4},
        y: -10,
    },
    initial:{
        boxShadow:"0px 0px 0px 0px rgba(0, 0, 0, 0)",
    }
}

const GetStarted = () => {
  return (
    <motion.section 
        className='w-full flex  items-center justify-center border-2 border-black rounded-2xl p-2'
        initial={{y:100, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.5, type:"easeInOut"}}
        viewport={{once:true}}
    >
        <div className='pt-3 flex flex-col space-y-28 3xl:max-w-[1600px]'>
            <div className='flex flex-col gap-y-3 items-center justify-center'>
                <SectionTitle 
                    title="Get Started in a Snap"
                    className="mt-8"    
                    />
                <p className='text-center md:text-2xl text-xl'>Get your website in 4 easy steps. It's that simple</p>
            </div>
            <div className='w-full pb-20'>
                <div className=''>
                    <GetStartedAnimation />
                </div>
            </div>

        </div>
    </motion.section>
  )
}

export default GetStarted