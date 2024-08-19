"use client";

import React, { useEffect, useState, useRef } from "react";
import { NavigationMenuDemo } from "@/components/navbar/navhomepage";
import { NavigationMenuDemoFooter } from "@/components/navbar/navfooter";
import { ProjectCardReverse } from "@/components/navbar/projectCardReverse";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import shape2 from "../../public/images/shape2.png";
import UTalent from "../../public/images/UTalent1.png";
import Secure_Drop from "../../public/images/secure-file-transfer.webp";
import Multiplication_Table from "../../public/images/mult_table.png";
import envelope from "../../public/images/bi_envelope-fill.png";
import linkedin from "../../public/images/bi_linkedin.png";
import git_image from "../../public/images/github-mark/github-mark.png";
import fib from "../../public/images/fib.png";

export default function Page() {
  const words = [
    "a team player.",
    "a problem solver.",
    "an avid learner.",
    "a programmer.",
  ];
  const [currentWord, setCurrentWord] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;

    const timeout = setTimeout(() => {
      if (charIndex < words[currentIndex].length) {
        setCurrentWord(currentWord + words[currentIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        if (currentIndex < words.length - 1) {
          setTimeout(() => {
            setCurrentWord("");
            setCharIndex(0);
            setCurrentIndex(currentIndex + 1);
          }, 1000); // Pause for 1 second before changing word
        } else {
          setIsTyping(false);
        }
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [charIndex, currentIndex, currentWord, isTyping, words]);

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
    <div className="scroll-smooth">
      <Image className="absolute right-0" src={shape2} alt="Shape 2" />
      <div className="flex flex-col min-h-screen">
        <nav className="h-20 relative top-0 z-40 fade-in" ref={addToRefs}>
          <div className="flex items-center justify-between">
            <a href="/" legacyBehavior passHref>
              <div className="ml-24 font-comfortaa hover:text-error-beautifulGreen">
                Michael Chagnon
              </div>
            </a>
            <div className="font-comfortaa flex justify-end flex-grow">
              <NavigationMenuDemo />
            </div>
          </div>
        </nav>
        {/* Main content container */}
        <div>
          <div className="justify-left ml-24 fade-in" ref={addToRefs}>
            <div className="mt-16 text-6xl w-1/3 font-fair  font-error-buttonBlue font-bold">
              Hello, my name is Michael!
            </div>
            <div
              id="demo"
              className="w-96 mt-10 font-nunito text-error-lightGray text-2xl not-italic font-normal leading-[150%]"
            >
              I am {currentWord}
              {isTyping && <span className="blinking-cursor">|</span>}
            </div>
            <div className="flex items-center justify-left">
              <div className="flex justify-center pt-6">
                <Link href="#projects" legacyBehavior passHref>
                  <Button className="font-roboto font-medium border rounded-lg bg-error-beautifulGreen w-24 hover:text-error-white hover:bg-error-brown text-error-black">
                    Projects
                  </Button>
                </Link>
              </div>
              <div className="flex justify-center pt-6 ml-2">
                <a
                  href="https://www.linkedin.com/in/michael-chagnon-24514a254/"
                  target="_blank"
                  legacyBehavior
                  passHref
                >
                  <Button className="font-roboto font-medium bg-transparent text-error-buttonBlue py-2 px-4 w-24 border rounded-lg border-error-A4">
                    LinkedIn
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 mt-24 fade-in" ref={addToRefs}>
            <div></div>
            <div
              id="projects"
              className="text-5xl text-center font-fair font-bold"
            >
              Projects
              <div className="h-1 bg-error-beautifulGreen mt-4 mx-48 rounded"></div>
            </div>
            <div></div>
          </div>
          <div
            className="mt-12 mx-auto flex justify-center items-center max-w-4xl p-6 fade-in transform transition-transform duration-300 hover:scale-110"
            ref={addToRefs}
          >
            <NavigationMenuDemoFooter
              className="w-full"
              title="UTalent"
              description="A web application revolutionizing the freelance market for college students by connecting them with companies seeking professional services."
              imageSrc={UTalent}
              link="/UTalentPage"
              highlights={[
                "React",
                "Tailwind",
                "Next.js",
                "Competition",
                "Collaborative team project",
                "Difference Maker",
              ]}
            />
          </div>
          <div
            className="mt-12 mx-auto flex justify-center items-center max-w-4xl p-6 fade-in transform transition-transform duration-300 hover:scale-105"
            ref={addToRefs}
          >
            <NavigationMenuDemoFooter
              className="w-full"
              title="Secure Drop File Transfer"
              description="Server and client communication for a secure file transfer program. Uses SSL, TCP sockets and threading to establish encrypted communication from the client to the server and the server to the client to send file contents."
              imageSrc={Secure_Drop}
              link="/SecureDropPage"
              highlights={["Python", "Encryption", "Sockets"]}
            />
          </div>
          <div
            className="mt-12 mx-auto flex justify-center items-center max-w-4xl p-6 fade-in transform transition-transform duration-300 hover:scale-105"
            ref={addToRefs}
          >
            <ProjectCardReverse
              className="w-full"
              title="Dynamic Multiplication Table"
              description="A dynamic multiplication table using jQuery sliders, form validation, and event handling. It dynamically creates and removes HTML elements for the table and user-created tabs for table documentation."
              imageSrc={Multiplication_Table}
              link="/DynamicMultiplicationTablePage"
              highlights={["JavaScript", "jQuery", "Form Validation"]}
            />
          </div>
          <div
            className="mt-12 mx-auto flex justify-center items-center max-w-4xl p-6 fade-in transform transition-transform duration-300 hover:scale-105"
            ref={addToRefs}
          >
            <NavigationMenuDemoFooter
              className="w-full"
              title="SFML Image Encoder and Decoder"
              description="A C++ program that can encode and decode a picture using Fibonacci’s sequence as a key. Uses SFML to process and display the images, as well as manipulate values each individual pixel."
              imageSrc={fib}
              link="/SFMLPage"
              highlights={["C++", "SFML", "Fibonacci Sequence"]}
            />
          </div>
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
                src={git_image}
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
  );
}

function BlinkingCursor() {
  return <span className="blinking-cursor">|</span>;
}
