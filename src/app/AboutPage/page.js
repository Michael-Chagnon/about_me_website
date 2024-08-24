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
import self_picture from "../../../public/images/self_picture.png";





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


      <div className="flex flex-col min-h-screen">
        <nav className="h-20 relative top-0 z-40">
          <div className="flex items-center justify-between">
          <a href="/" legacyBehavior passHref>
            <div className="ml-24 font-comfortaa">Michael Chagnon</div>
          </a>
            <div className="font-comfortaa flex justify-end flex-grow">
              <NavigationMenuDemo />
            </div>
          </div>
        </nav>
      


        <div className="relative ml-24">

        <div>
          <div className="clearfix mr-24 mt-16">
            <div className="float-right ml-24 -mt-20 mb-4 ">
            <Image
              src={self_picture}
              alt="Picture of me"
              className="fade-in" ref={addToRefs}
            />
            </div>
              <h className="text-6xl font-fair font-semibold fade-in" ref={addToRefs}>About Me</h>

            <p className="text-xl font-nunito text-error-A4 leading-8 mt-6 mb-12 fade-in" ref={addToRefs}>
              I am a software developer with a passion for creating applications that address difficult problems and provide meaningful solutions. My experiences programming have been fueled by a passion for learning and a commitment to understanding the details of each challenge I encounter, continuously learning and growing with every project.
            </p>

            <h className="text-4xl font-fair font-semibold fade-in" ref={addToRefs}>My Story</h>
            <p className="text-xl font-nunito text-error-A4 leading-8 mt-6 mb-12 fade-in" ref={addToRefs}>
              When I was introduced to the engineering design process as an adolescent, it shaped the way I would approach problem-solving for the rest of my life. From then on, I developed a love for programming and have learned a variety of skills along the way. These skills have allowed me to create a comprehensive understanding of foundational programming paradigms that I can apply to all projects I embark on in my future.
            </p>

            <h className="text-4xl font-fair font-semibold fade-in" ref={addToRefs}>My Philosophy</h>
            <p className="text-xl font-nunito text-error-A4 leading-8 mt-6 mb-12 fade-in" ref={addToRefs}>
              I believe that great software is built on a foundation of teamwork, continuous learning, and a dedication to quality. Whether I'm working on a solo project or collaborating with others, I always strive to write clean, efficient, and scalable code. My goal is to create a product that not only works but also makes a difference in people's lives.
            </p>

            <h className="text-4xl font-fair font-semibold fade-in" ref={addToRefs}>Let's Connect</h>
            <p className="text-xl font-nunito text-error-A4 leading-8 mt-6 mb-12 fade-in" ref={addToRefs}>
          When I'm not working on projects, I experiment with new technologies, staying updated on the latest industry trends, or working on my next project. I'm always eager to connect with others who share my enthusiasm, so feel free to reach out to me on 
          <a 
            href="https://www.linkedin.com/in/michael-chagnon-24514a254/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-error-LinkedinBlue hover:underline"
          >
          {" "}LinkedIn{" "}
          </a> 
          {" "}or explore my work on{" "}
          <a 
            href="https://github.com/Michael-Chagnon" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-error-gitPurple hover:underline"
          >
            GitHub
          </a>.
        </p>
      </div>

      <div className="flex justify-center pt-6 fade-in" ref={addToRefs}>
  <a
    href="images/chagnon_michael_resume.pdf"
    download="Michael_Chagnon_Resume.pdf"
  >
    <Button className="font-roboto font-medium border rounded-lg bg-error-beautifulGreen w-48 h-12 hover:text-error-white hover:bg-error-brown text-error-black">
      Resume
    </Button>
  </a>
</div>

</div>

        
          
  <footer className="bg-gray-800 py-6 mt-8 fade-in" ref={addToRefs}>
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
