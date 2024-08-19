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
import hap_face from "../../../public/images/hap-face.png";
import mult_ui from "../../../public/images/mult_ui.png";
import tabs from "../../../public/images/tabs.png";




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
    <div id="Header" className="scroll-smooth">
      <Image className="absolute left-0" src={shape2} alt="Shape 2" ref={addToRefs}></Image>
      <Image className="absolute mt-999 right-0 z-0 fade-in" src={bg_img_2} alt="Shape 2" ref={addToRefs}></Image>


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


        <div className="relative ml-24 mr-52 mt-16">
        <nav className="fixed right-0 mx-2 z-50 fade-in" ref={addToRefs}>
            <div className="font-nunito border-x border-y border-error-A4 shadow-custom rounded px-4 py-4 bg-error-white">
            <Link href="#Header" legacyBehavior passHref>
              <p className=" cursor-pointer text-error-A4 text-xl font-bold">Dynamic Table</p>
            </Link>
            <Link href="#What" legacyBehavior passHref>
              <p className="cursor-pointer text-error-A4 underline mt-2">What?</p>
            </Link>
            <Link href="#Tools" legacyBehavior passHref>
              <p className="cursor-pointer text-error-A4 underline mt-2">Tools</p>
            </Link>
            <Link href="#Links" legacyBehavior passHref>
              <p className="cursor-pointer text-error-A4 underline mt-2">Links</p>
            </Link>
            </div>
          </nav>

          <div>
          <a
            href="https://michael-chagnon.github.io/GUI_HW_4_Part_2/"
            target="_blank"
            legacyBehavior
            passHref
          >
            <h1 className="font-fair text-left text-6xl font-bold text-error-black fade-in" ref={addToRefs}>Dynamic Multiplication Table</h1>
          </a>
            <p className="font-nunito text-lg mt-6 font-normal text-error-A4 fade-in" ref={addToRefs}>This project was an early introduction to graphical user interfaces, getting me familiar with JavaScript, HTML and CSS basics while including important concepts like form validation, as well as dynamic and intractable web pages. </p>
            <div className="h-0.5 bg-error-A470 mt-6 mx-full rounded fade-in" ref={addToRefs}></div>
          </div>

          <div className="mt-12 flex">
          <div className="flex-1">
  <h2 id="What" className="font-nunito text-4xl font-normal text-error-A4 fade-in" ref={addToRefs}>What?</h2>
  <p className="font-nunito mt-4 text-xl font-normal text-error-A4 fade-in" ref={addToRefs}>
    The concept for the site is relatively simple, build a website that will create a multiplication table in real time based on the position of a slider in the range from -50 to 50, stopping users and providing a message when they go outside these bounds. Additionally, there should be a way for users to save the tables they create using tabs and a way for them to delete multiple or one tab at a time.
  </p>
  
  <div className="grid grid-cols-2">
    <div>
      <ul className="list-disc list-inside font-nunito ml-6 text-xl font-normal text-error-A4 fade-in" ref={addToRefs}>
      <h3 className="font-nunito mt-4 text-2xl font-normal text-error-A4 mb-1">Constraints:</h3>
        <li className="mt-1">Create a real-time multiplication table with a slider (-50 to 50).</li>
        <li className="mt-2">Display a message if users go outside bounds.</li>
        <li className="mt-2">Enable users to save tables using tabs.</li>
        <li className="mt-2">Allow deletion of multiple or single tabs.</li>
      </ul>
    </div>

    <div className="flex justify-end -mt-6">
      <Image className="fade-in w-1/2 min-w-1/2 min-h-1/2" src={hap_face} alt="Happy Little Guy" ref={addToRefs}/>
    </div>
  </div>
</div>
            <div className="ml-12">
            </div>
          </div>

          <div id="Tools" className="h-0.5 bg-error-A470 my-12 mx-full rounded fade-in" ref={addToRefs}></div>
          


          <div className="grid grid-cols-4 z-10">
            <div className="col-span-3 mr-8">
            <h2 className="font-nunito text-4xl font-normal text-error-A4 fade-in" ref={addToRefs}>Sliders</h2>
            <p className="z-10 font-nunito mt-4 text-xl font-normal text-error-A4 fade-in" ref={addToRefs}>
            I used jQuery for the sliders because it has easy plugins for this application. The text boxes and sliders sync up: typing a number moves the slider, and moving the slider updates the text box. This keeps everything consistent and user-friendly.
            </p>

            <h2 className="font-nunito text-4xl font-normal text-error-A4 fade-in mt-16" ref={addToRefs}>Form Validation</h2>
            <p className="z-10 font-nunito mt-4 text-xl font-normal text-error-A4 fade-in" ref={addToRefs}>
            I used jQuery and its plugins for form validation. Users get error messages if their number is out of range, not in the proper ratio, or if the field is left blank. The message explains the issue and how to fix it, and it appears right where the error happens.
            </p>

            <h2 className="font-nunito text-4xl font-normal text-error-A4 fade-in mt-16" ref={addToRefs}>Tabs</h2>
            <p className="z-10 font-nunito mt-4 text-xl font-normal text-error-A4 fade-in" ref={addToRefs}>
            I used jQuery's tabs plugin to store users' previously created tables. By clicking the "Add Tab" button, users can save their current table. This is done by copying the HTML elements of the table and recreating it in the jQuery tab. The saved tables retain full functionality and are scrollable. Tabs are named with the table values, and users can delete a table with an "x" icon or select multiple tables for deletion.
            </p>
            </div>
            <div>
              <Image className="fade-in w-5/6 rounded-xl border-x border-y border-error-A4 shadow-custom z-11" src={mult_ui} alt="Tech Stack" ref={addToRefs}/>
            </div>
          </div>
          <Image className="mx-auto mt-12 fade-in rounded-xl shadow-custom z-11" src={tabs} alt="Multiplication Table Tabs" ref={addToRefs}/>

          <h2 className="font-nunito text-4xl font-normal text-error-A4 fade-in mt-16" ref={addToRefs}>Dynamic Change</h2>
            <p className="z-10 font-nunito mt-4 text-xl font-normal text-error-A4 fade-in" ref={addToRefs}>
            The most crucial feature of this website was ensuring items update in real-time instantly when input parameters change. This was achieved using jQuery’s event handlers. When an input parameter changes, the form validation checks its validity. If valid, the old table is cleared, and a new one is created based on the updated inputs. Changes in either the text box or slider trigger this process immediately, ensuring no downtime between the user's input and the displayed result.
            </p>

            <div id="Sliders" className="h-0.5 bg-error-A470 my-12 mx-full rounded fade-in" ref={addToRefs}></div>



            <div className="flex flex-col items-center">
  <div id="Links" className="flex space-x-28">
    <div className="flex flex-col items-center fade-in" ref={addToRefs}>
      <a href="https://michael-chagnon.github.io/GUI_HW_4_Part_2/" target="_blank" legacyBehavior passHref>
        <Button className="font-roboto font-medium border rounded-lg bg-error-beautifulGreen h-12 hover:bg-error-beautifulGreen text-lg text-error-white flex items-center justify-center">
        <Image className="w-6 h-6 mr-2" src={globe} alt="Icon" />
        <span>Dynamic Multiplication Table</span>
        </Button>
      </a>
      <p className="mt-2 text-3xl font-nunito text-error-4A text-center">Visit the site here!</p>
    </div>
    <div className="flex flex-col items-center fade-in" ref={addToRefs}>
      <a href="https://github.com/Michael-Chagnon/GUI_HW_4_Part_2" target="_blank" legacyBehavior passHref>
        <Button className="font-roboto font-medium border rounded-lg bg-error-gitPurple h-12 hover:bg-error-beautifulGreen text-lg text-error-white flex items-center justify-center space-x-2">
          <Image className="w-6 h-6" src={git_image} alt="Icon" />
          <span>Dynamic Multiplication Table Repository</span>
        </Button>
      </a>
      <p className="mt-2 text-3xl font-nunito text-error-4A text-center">Visit the repository here!</p>
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
  </div>
  );
}
