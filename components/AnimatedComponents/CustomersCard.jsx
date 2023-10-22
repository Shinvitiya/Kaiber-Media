"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { people } from '@/utils/utilities';

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

const CustomersCard = () => {
  return (
    <div className='flex flex-col flex-grow rounded-2xl bg-pastel-purple p-4 lg:gap-y-3'>
        <div className='flex flex-col lg:flex-row gap-x-3'>
            <div className='flex -space-x-3'>
            {people.map((item, index) =>(
                <motion.div
                    variants={staggerAnimation}
                    initial= "initial"
                    whileInView="animate"
                    custom={index}
                    key={index}
                    viewport={{once : true}}
                >
                    <Image 
                        src={item}
                        width={50}
                        height={50}
                        alt="customer avatar"
                        className='rounded-full aspect-square object-cover 2xl:w-[120px] bg-white border  border-black-alt'
                    />
                </motion.div>
            ))}
            </div>
            <div className='flex w-full'> 
                <p className='text-3xl font-semibold uppercase'>100+ clients</p>
            </div>
        </div>
        <div>
            <p className='text-lg 3xl:text-3xl capitalize font-semibold'>Creating designs you'll love with love</p>
            
        </div>       
    </div>
  )
}

export default CustomersCard