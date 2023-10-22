"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import CallButton from './AnimatedComponents/CallButton';


const BookUs = () => {
  return (
    <motion.section 
        className='w-full flex md:flex-row flex-col border-2 border-black rounded-2xl'
        id="book-us"
        initial={{y:200, opacity:0}}
        whileInView={{y:0, opacity:200}}
        transition={{duration:0.5, type: "spring"}}
        viewport={{once:true}}
    >
        <div className='w-full flex flex-col gap-4 p-8'>
            <div>
                <h5 className='text-4xl font-bold'>Want to Get Started?</h5>
                <p className='lg:text-lg'>Schedule a 15-minute call with us at your convenience to get started. </p>
            </div>
            <div className=''>
                <Link
                    href="https://calendly.com/"
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    <CallButton/>
                </Link>
            </div>
            
        </div>
        <div className='w-full flex flex-col gap-y-3 justify-center p-4 text-lg'>
            <p>We turn visions into stunning visuals. Our creative prowess and professionalism shine through in every project.</p>
            <p>Elevate your brand with us. Our strategic approach and exceptional design team consistently exceed expectations.</p>
        </div>
    </motion.section>
  )
}

export default BookUs