"use client";

import React, { useEffect, useState, useRef } from "react";
import { NavigationMenuDemo } from "@/components/navbar/navhomepage";
import { NavigationMenuDemoFooter } from "@/components/navbar/navfooter";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import git_image from "../../../public/images/github-mark/github-mark-white.png";
import envelope from "../../../public/images/bi_envelope-fill.png";
import linkedin from "../../../public/images/bi_linkedin.png";
import git_image_dark from "../../../public/images/github-mark/github-mark.png";
import phone from "../../../public/images/phone.png";
import shape9 from "../../../public/images/shape9.png";
import shape10 from "../../../public/images/shape10.png";
import { link } from "@nextui-org/react";

export default function Page() {

  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div id="UTalent" className="scroll-smooth">
      <Image className="absolute" src={shape9} alt="Shape 9" ref={addToRefs}></Image>
      <Image className="absolute bottom-0 right-0" src={shape10} alt="Shape 10" ref={addToRefs}></Image>

      <div className="flex flex-col min-h-screen">
        <nav className="h-20 relative top-0 z-40">
          <div className="flex items-center justify-between">
          <a href="/" legacyBehavior passHref>
            <div className="ml-24 font-comfortaa hover:text-error-brown">Michael Chagnon</div>
          </a>
            <div className="font-comfortaa flex justify-end flex-grow">
              <NavigationMenuDemo />
            </div>
          </div>
        </nav>
      
        <div className="relative">
          <div>
          <h className="mt-20 text-8xl font-fair font-semibold justify-center flex text-error-buttonBlue fade-in"ref={addToRefs}>Contact Me</h>
          
          <div className="flex justify-center mx-24 mt-24">
            <div className="mx-12 text-center fade-in"ref={addToRefs}>
              <Image width={160} height={160} src={phone} />
              <h4 className="text-5xl mt-8 font-fair font-semibold text-error-buttonBlue whitespace-nowrap overflow-hidden text-ellipsis">Phone</h4>
              <a href="tel:978-995-9876" target="_blank" rel="noopener noreferrer">
                <p className="text-error-lightGray text-2xl mt-8 text-normal font-nunito whitespace-nowrap overflow-hidden text-ellipsis hover:underline">978-995-9876</p>
              </a>
            </div>
            <div className="mx-12 text-center flex flex-col items-center fade-in"ref={addToRefs}>
              <Image width={160} height={160} src={envelope} />
              <h4 className="text-5xl mt-8 font-fair font-semibold text-error-buttonBlue whitespace-nowrap overflow-hidden text-ellipsis">Email</h4>
              <a href="mailto: michaelchagnon12@gmail.com" target="_blank" rel="noopener noreferrer">
                <p className="text-error-lightGray text-2xl mt-8 text-normal font-nunito whitespace-nowrap overflow-hidden text-ellipsis hover:underline">michaelchagnon12@gmail.com</p>
              </a>
            </div>
            <div className="mx-12 text-center flex flex-col items-center fade-in"ref={addToRefs}>
              <Image width={160} height={160} src={git_image_dark} />
              <h4 className="text-5xl mt-8 font-fair font-semibold text-error-buttonBlue whitespace-nowrap overflow-hidden text-ellipsis">GitHub</h4>
              <a href="https://github.com/Michael-Chagnon" target="_blank" rel="noopener noreferrer">
                <p className="text-error-lightGray text-2xl mt-8 text-normal font-nunito whitespace-nowrap overflow-hidden text-ellipsis hover:underline">Michael-Chagnon</p>
              </a>
            </div>
            <div className="mx-12 text-center flex flex-col items-center fade-in"ref={addToRefs}>
              <Image width={160} height={160} src={linkedin}/>
              <h4 className="text-5xl mt-8 font-fair font-semibold text-error-buttonBlue whitespace-nowrap overflow-hidden text-ellipsis">LinkedIn</h4>
              <a href="https://www.linkedin.com/in/michael-chagnon-24514a254/" target="_blank" rel="noopener noreferrer">
                <p className="text-error-lightGray text-2xl mt-8 text-normal font-nunito whitespace-nowrap overflow-hidden text-ellipsis hover:underline">michael-chagnon</p>
              </a>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
  );
}
