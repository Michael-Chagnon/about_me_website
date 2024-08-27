"use client";

import React, { useEffect, useState, useRef } from "react";
import { NavigationMenuDemo } from "@/components/navbar/navhomepage";
import { NavigationMenuDemoFooter } from "@/components/navbar/navfooter";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import shape2 from "../../../public/images/page1_bg_image.png";
import UTalent_homepage from "../../../public/images/home_page_ss.png";
import UTalent_bidspage from "../../../public/images/bids_page_ss.png";
import group_picture from "../../../public/images/group_picture_ss.jpeg";
import me_and_aman from "../../../public/images/me_and_aman.jpeg";
import utal_poster from "../../../public/images/UTalent_poster.jpeg";
import tech_stack from "../../../public/images/Tech Stack.png";
import bg_img_2 from "../../../public/images/bg-img-2.png";
import git_image from "../../../public/images/github-mark/github-mark-white.png";
import globe from "../../../public/images/globe-02.png";
import envelope from "../../../public/images/bi_envelope-fill.png";
import linkedin from "../../../public/images/bi_linkedin.png";
import git_image_dark from "../../../public/images/github-mark/github-mark.png";
import example from "../../../public/images/example.png";
import encode from "../../../public/images/Encode.png";
import decode from "../../../public/images/Decode.png";
import shape6 from "../../../public/images/shape6.png";
import shape7 from "../../../public/images/shape7.png";
import shape8 from "../../../public/images/shape8.png";








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
      <Image className="absolute" src={shape6} alt="Shape 2" ref={addToRefs}></Image>
      <Image className="absolute mt-999 left-0 z-0 fade-in" src={shape7} alt="Shape 2" ref={addToRefs}></Image>
      <Image className="absolute mt-100 right-0 z-0 fade-in" src={shape8} alt="Shape 2" ref={addToRefs}></Image>


      <div className="flex flex-col min-h-screen fade-in" ref={addToRefs}>
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


        <div className="relative ml-24 mr-52 mt-16">
        <nav className="fixed right-0 mx-2 z-50 fade-in" ref={addToRefs}>
            <div className="font-nunito border-x border-y border-error-A4 shadow-custom rounded px-4 py-4 bg-error-white">
            <Link href="" legacyBehavior passHref>
              <p className=" cursor-pointer text-error-A4 text-xl hover:underline font-bold">Image Encoder</p>
            </Link>
            <Link href="" legacyBehavior passHref>
              <p className="cursor-pointer text-error-A4 hover:underline mt-2">Fibonacci’s Sequence</p>
            </Link>
            <Link href="" legacyBehavior passHref>
              <p className="cursor-pointer text-error-A4 hover:underline mt-2">Implementation</p>
            </Link>
            <Link href="" legacyBehavior passHref>
              <p className="cursor-pointer text-error-A4 hover:underline mt-2">SFML</p>
            </Link>
            <Link href="" legacyBehavior passHref>
              <p className="cursor-pointer text-error-A4 hover:underline mt-2">Links</p>
            </Link>
            </div>
          </nav>

          <div>
          <a
            href="https://u-talent.vercel.app/"
            target="_blank"
            legacyBehavior
            passHref
          >
            <h1 className="font-fair text-left text-6xl font-bold text-error-black fade-in hover:underline" ref={addToRefs}>SFML Image Encoder</h1>
          </a>
            <p className="font-nunito text-lg mt-6 font-normal text-error-A4 fade-in" ref={addToRefs}>This program for me was an early introduction to one of the uses of algorithms. Using Fibonacci’s sequence and a linear feedback shift register I was able to encode and decode images with a users desired 15 digit code.</p>
            <div className="h-0.5 bg-error-A470 mt-6 mx-full rounded fade-in" ref={addToRefs}></div>
          </div>

          <div className="mt-12 flex">
            <div className="flex-1">
              <h2 id="How" className="font-nunito text-4xl font-normal text-error-A4 fade-in" ref={addToRefs}>Fibonacci&apos;s Sequence</h2>
              <p className="font-nunito mt-4 text-xl font-normal text-error-A4 fade-in" ref={addToRefs}>
              Fibonacci&apos;s sequence is a series of numbers in which each number is the sum of the two preceding ones, starting from 0 and 1. The sequence typically begins as follows:
<br/><br/>0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
<br/><br/>The sequence can be defined by the recurrence relation:
<br/><br/>F(n) = F(n−1) + F(n−2)
<br/><br/>With the initial conditions:
<br/><br/>F(0) = 0, F(1) = 1
<br/><br/>Where F(n) represents the nth Fibonacci number.
              </p>
            </div>
            <div className="ml-12 my-auto">
              <Image className=" pt-12 rounded-xl border-x border-y border-error-A4 shadow-custom z-11 fade-in" src={example} alt="Fibonacci's Sequence Example" ref={addToRefs}/>
            </div>
          </div>

          <div id="Why" className="h-0.5 bg-error-A470 my-12 mx-full rounded fade-in" ref={addToRefs}></div>
          


          <div className="z-10">
            <h2 className="font-nunito text-4xl font-normal text-error-A4 fade-in" ref={addToRefs}>Implementation</h2>
            <p className="z-10 font-nunito mt-4 text-xl font-normal text-error-A4 fade-in" ref={addToRefs}>
            The code implements a Fibonacci LFSR by following a process similar to generating Fibonacci numbers, but instead of adding the numbers, it uses XOR operations on selected &quot;tap&quot; bits of the seed to generate a new bit. This new bit is then added to the sequence, and the seed is shifted, similar to how Fibonacci&apos;s sequence progresses by shifting and summing the last two numbers. Simulating a pseudo-random number sequence that uses the same iterative feedback principles as Fibonacci&apos;s sequence.
            </p>
          </div>

          <div id="Solution" className="my-16 mx-full rounded"></div>


          <div className="">
            <h2 className="font-nunito text-4xl font-normal text-error-A4">SFML</h2>
            <p className="font-nunito mt-4 text-xl font-normal text-error-A4">
            SFML is a C++ library that provides a simple interface for building multimedia applications. In my case it was used to manipulate a users provided image and display it after encoding and decoding. Using the previously described algorithm a pseudo-random RGB value is decided for each pixel in the image and reassigned to a new color based on the users given 15-digit input.
            </p>

            <div className="ml-12 my-8">
              <Image className=" z-11 fade-in" src={encode} alt="Fibonacci's Sequence Example" ref={addToRefs}/>
              <p className="text-xs mt-2 font-nunito text-error-A4 fade-in" ref={addToRefs}>Encoding</p>
            </div>

            <p className="font-nunito mt-4 text-xl font-normal text-error-A4">
            Once the image is encoded, decoding it is just as simple. To unscramble the image, the user only needs to input the encoded image back into the program with the same 15-digit code used during encoding. The program then reverses the encoding process, using the same Fibonacci sequence algorithm and seed, to restore the image to its original state. Interestingly, the same image can be encoded multiple times with different keys, making it exponentially harder for anyone to decode the image through brute force.
            </p>

            <div className="ml-12 my-8">
              <Image className=" z-11 fade-in" src={decode} alt="Fibonacci's Sequence Example" ref={addToRefs}/>
              <p className="text-xs mt-2 font-nunito text-error-A4 fade-in" ref={addToRefs}>Decoding</p>
            </div>
          </div>
          <div id="Links" className="h-0.5 bg-error-A4 my-12 mx-full rounded"></div>

        </div>

        <div className="flex flex-col items-center">
  <div className="flex space-x-28">
    <div className="flex flex-col items-center">
      <a href="https://github.com/Michael-Chagnon/SFML-Image-Encoder-and-Decoder-main/tree/main" target="_blank" legacyBehavior passHref>
        <Button className="font-roboto font-medium border rounded-lg bg-error-gitPurple h-12 hover:bg-error-gitPurple text-lg text-error-white flex items-center justify-center space-x-2">
          <Image className="w-6 h-6" src={git_image} alt="Icon" />
          <span>Image Encoder Repository</span>
        </Button>
      </a>
      <p className="mt-2 text-3xl font-nunito text-error-4A text-center">Visit the repository here!</p>
    </div>
  </div>
  <footer className="bg-gray-800 py-6 mt-8">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Michael-Chagnon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={git_image_dark}
                alt="GitHub"
                width={40}
                height={40}
                className="hover:opacity-75"
              />
            </a>
            <a
              href="mailto:michaelchagnon12@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={envelope}
                alt="Email"
                width={40}
                height={40}
                className="hover:opacity-75"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/michael-chagnon-24514a254/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={linkedin}
                alt="LinkedIn"
                width={40}
                height={40}
                className="hover:opacity-75"
              />
            </a>
          </div>
        </div>
      </footer>

</div>

      </div>
  </div>
  );
}
