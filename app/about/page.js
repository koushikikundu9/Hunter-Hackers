"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";


const content = [
  {
    title: "ABOUT US",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image 
            src="/codeimg.jfif" 
            alt="inline" 
            className=""  
            width={400} 
            height={100} 
          />
      </div>
    ),
  },
  {
    title: "Services Offered",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div
        className="flex h-full w-full items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Contact Us",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div
        className="flex h-full w-full items-center justify-center  text-white">
        Running out of content
      </div>
    ),
  },
];
export default function About() {
  return (
    <div className="w-full bg-gradient-to-r from-gray-300 via-blue-200 to-blue-400 ">
      <StickyScroll content={content} />
    </div>
  );
}
