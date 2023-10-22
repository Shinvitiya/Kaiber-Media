"use client";
import React, {useState} from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';

import { navbarItems } from '@/utils/utilities';


const Navbar = () => {
    const [activeTab, setActiveTab] = useState(navbarItems[0].tabName)
    const [hidden, setHidden] = useState(false);

    const {scrollY} = useScroll();
    useMotionValueEvent(scrollY, "change", (latest)=>{
        const previous = scrollY.getPrevious();
        if(latest > previous && latest >150){
            setHidden(true);
        }else {
            setHidden(false);
        }
    });

  return (
    <motion.nav
        className='fixed z-10 flex items-center justify-center w-full px-4 py-5'
        variants={{
            visible: {y:0},
            hidden: {y: "-100%"},
        }}
        animate = {hidden? "hidden" : "visible"}
        transition={{duration:0.3, ease:"easeInOut"}}
    >
        <div className='flex items-center justify-center rounded-full space-x-1 bg-white-alt border-2 border-black select-none'>
            {navbarItems.map((item) =>(
                <Link
                    href={item.link}
                    key={item.tabName}
                    onClick={() => setActiveTab(item.tabName)}
                    className='relative px-3 py-2'
                >
                    <span className='capitalize font-semibold 3xl:text-2xl 4xl:text-3xl sm:text-base text-sm'>{item.tabName}</span>

                    {activeTab === item.tabName && (
                    <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 bg-white mix-blend-difference"
                    style={{ borderRadius: 9999 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                    )}

                </Link>
            ))}
            </div>
    </motion.nav>
  )
}

export default Navbar