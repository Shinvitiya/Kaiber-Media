"use client";
import BookUs from "@/components/BookUs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import Work from "@/components/Work";

import Lenis from '@studio-freight/lenis'
import { useEffect } from "react";


export default function Home() {
  useEffect( () =>{
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])
  return (
    <>
    <div className="max-w-[1560px] flex flex-col items-center justify-center px-4 gap-y-3 md:gap-y-5 py-5">
      <Hero />
      <GetStarted/>
      <Work/>
      <Testimonial/>
      <BookUs/>
      <FAQ/>
      <Footer/>
    </div>
    </>
  )
}
