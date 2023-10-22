import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const Accordions = ({question, answer}) => {
  return (
    <Accordion type="single" collapsible className="border-b-2 border-black-alt sm:p-4 w-[300px] sm:w-[600px] md:w-[700px] 2xl:w-[700px]">
    <AccordionItem value="item-1">
        <AccordionTrigger 
          className="text-xl font-semibold text-left">
            {question}
        </AccordionTrigger>
        <AccordionContent className="2xl:text-lg">
        {answer}
        </AccordionContent>
    </AccordionItem>
    </Accordion>
  )
}

export default Accordions