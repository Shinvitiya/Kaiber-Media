"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

import { buttonVariants } from '@/utils/utilities';
import { footerTabs } from '@/utils/utilities';


const Footer = () => {
  return (
    <footer className='px-7 rounded-2xl bg-black-alt text-white w-full'>
        <div className='w-full flex flex-col'>
            <div className='flex flex-col items-center justify-center gap-y-5 py-4'>
                <p className='font-semibold text-2xl'>Get your Design today!!</p>
                <Link href="https://calendly.com/" target='_blank'>
                    <motion.button
                        className='py-4 px-2 w-[300px] rounded-lg border-2 border-white-alt bg-black-alt text-3xl font-bold'
                        variants={buttonVariants}
                        initial="initial"
                        whileHover="hover"
                    >
                        Get Started
                    </motion.button>
                </Link>
            </div>
            <div className='flex sm:flex-row flex-col gap-6 p-3 mt-24'>
                <div className='w-full'>
                    {/* <Image 
                        src="/logoipsum.svg"
                        width={150}
                        height={200}
                        alt="logo"
                    /> */}
                    <p className='text-[40px]'>Kaiber Media</p>
                </div>
                {footerTabs.map((tab) =>(
                    <div className='w-full' key={tab.tabName}>
                        <div>
                            <p className='font-semibold text-xl'>{tab.tabName}</p>
                        </div>
                        <div>
                            <ul>
                                {tab.linkName.map((link, index)=>(
                                    <li key={index} className=''>
                                        <Link href={link.link}>{link.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer