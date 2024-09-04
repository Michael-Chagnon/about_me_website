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
import bg_img_4 from "../../../public/images/shape4.png";
import shape11 from "../../../public/images/shape11.png";
import git_image from "../../../public/images/github-mark/github-mark-white.png";
import globe from "../../../public/images/globe-02.png";
import envelope from "../../../public/images/bi_envelope-fill.png";
import linkedin from "../../../public/images/bi_linkedin.png";
import git_image_dark from "../../../public/images/github-mark/github-mark.png";




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
      <Image className="absolute left-0" src={shape11} alt="Shape 2" ref={addToRefs}></Image>
      <Image className="absolute mt-999 right-0 z-0 fade-in" src={bg_img_2} alt="Shape 2" ref={addToRefs}></Image>

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


        <div className="relative ml-24 mr-52 mt-16">
          <nav className="fixed right-0 mx-2 z-50 fade-in" ref={addToRefs}>
            <div className="font-nunito border-x border-y border-error-A4 shadow-custom rounded px-4 py-4 bg-error-white">
            <Link href="#Header" legacyBehavior passHref>
              <p className=" cursor-pointer text-error-A4 text-xl hover:underline font-bold">Secure Drop</p>
            </Link>
            <Link href="#What" legacyBehavior passHref>
              <p className="cursor-pointer text-error-A4 hover:underline mt-2">What?</p>
            </Link>
            <Link href="#How" legacyBehavior passHref>
              <p className="cursor-pointer text-error-A4 hover:underline mt-2">How?</p>
            </Link>
            <Link href="#UserExperience" legacyBehavior passHref>
              <p className="cursor-pointer text-error-A4 hover:underline mt-2">User Experience</p>
            </Link>
            <Link href="#Learned" legacyBehavior passHref>
              <p className="cursor-pointer text-error-A4 hover:underline mt-2">Learned</p>
            </Link>
            <Link href="#Links" legacyBehavior passHref>
              <p className="cursor-pointer text-error-A4 hover:underline mt-2">Links</p>
            </Link>
            </div>
          </nav>

          <div>
          <a
            href="https://github.com/Michael-Chagnon/secure_drop"
            target="_blank"
            legacyBehavior
            passHref
          >
            <h1 className="font-fair text-left text-6xl font-bold text-error-black fade-in hover:underline" ref={addToRefs}>Secure Drop File Transfer</h1>
          </a>
            <p className="font-nunito text-lg mt-6 font-normal text-error-A4 fade-in" ref={addToRefs}>Secure Drop was the product of a semester long project where I learned how to create a connection between a server and client. The principle element in this assignment revolved around security, making sure the client-server communications were encrypted as well as the file contents sent between users. This was achieved through the use of SSL certificates to encrypt and TCP sockets and threading to establish a connection.</p>
            <div className="h-0.5 bg-error-A470 mt-6 mx-full rounded fade-in" ref={addToRefs}></div>
          </div>

          <div id="What" className="mt-12">
            <h2 className="font-nunito text-4xl font-normal text-error-A4 fade-in" ref={addToRefs}>What?</h2>
            <p className="z-10 font-nunito mt-4 text-xl font-normal text-error-A4 fade-in" ref={addToRefs}>
            Secure drop is a project created with Python that uses SSL, TCP sockets and threading to establish encrypted communication from the client to the server and the server to the client to send file contents. Users have the option to add contacts, see who’s online and send and receive files.
            </p>
            <div className="h-0.5 bg-error-A470 mt-6 mx-full rounded fade-in" ref={addToRefs}></div>
          </div>

          <div className="mt-12 flex">
            <div className="flex-1">
              <h2 id="How" className="font-nunito text-4xl font-normal text-error-A4 fade-in" ref={addToRefs}>How?</h2>
              <div className="font-nunito mt-4 text-xl font-normal text-error-A4 fade-in" ref={addToRefs}>
                <p className="mt-4">
                  <span className="font-bold">Server and Client:</span> Users must start a server to host the session. The server manages communication between clients, while each client communicates with the server to request specific functions or actions.
                </p>
                <p className="mt-4">
                  <span className="font-bold">SSL:</span> SSL, or Secure Sockets Layer, is a protocol that encrypts and authenticates data transmitted across a server, ensuring secure communication. On the client side, SSL employs salted hashing, which adds a random string of characters to a password before hashing it, significantly enhancing security.
                </p>
                <ul className="list-disc list-inside ml-6">
                  <li className="mt-2"><span className="font-bold">Dictionary attacks:</span> Salting prevents attackers from using precomputed tables to crack hashes.</li>
                  <li className="mt-2"><span className="font-bold">Rainbow table attacks:</span> Even if two users have the same password, salting ensures their hashed values will be unique, making it difficult for attackers to exploit.</li>
                  <li className="mt-2"><span className="font-bold">Brute force attacks:</span> Salting complicates the process for hackers attempting to crack passwords at scale.</li>
                  <li className="mt-2"><span className="font-bold">Hash table attacks:</span> By requiring attackers to recompute hashes for each user, salting adds an additional layer of protection.</li>
                </ul>
                <p className="mt-4">
                  <span className="font-bold">Sockets and Threading:</span> Threading facilitates the connection between the server and clients, while sockets handle the communication of requests between them. When a client wants to send a file to another client, it initiates a request via sockets to the server. The server then relays this request to the recipient client, asking whether they wish to accept or decline the file. The recipient’s response is sent back through the server, which in turn informs the sender client whether the file transfer has been approved or denied.
                </p>
              </div>
            </div>
          </div>

          <div id="UserExperience" className="h-0.5 bg-error-A470 my-12 mx-full rounded fade-in" ref={addToRefs}></div>
          
          <div className="mt-12">
            <h2 className="font-nunito text-4xl font-normal text-error-A4 fade-in" ref={addToRefs}>User Experience</h2>
            <div className="font-nunito mt-4 text-xl font-normal text-error-A4 fade-in" ref={addToRefs}>
              <p className="mt-4">
                First, start the server. Once it's running, you can launch the program, which will prompt you to either log in or sign up.
              </p>
              <p className="mt-4">
                After logging in or signing up, you'll be taken to the main page. From there, type <span className="font-bold">help</span> to view the available commands:
              </p>
              <ul className="list-disc list-inside ml-6">
                <li className="mt-2"><span className="font-bold">add:</span> Add contacts to your list, enabling you to send files to them.</li>
                <li className="mt-2"><span className="font-bold">list:</span> Display all your friends who are currently online.</li>
                <li className="mt-2"><span className="font-bold">send:</span> Send a file to one of your contacts.</li>
                <li className="mt-2"><span className="font-bold">recv:</span> Receive a file that has been sent to you.</li>
              </ul>
              <p className="mt-4">
                To transfer a file, the recipient types the <span className="font-bold">recv</span> command, and the sender types <span className="font-bold">send</span>. The sender will then enter the file path, and the recipient can choose to accept or decline the transfer. If accepted, the file is sent over.
              </p>
            </div>

            <div className="h-0.5 bg-error-A470 mt-6 mx-full rounded fade-in" ref={addToRefs}></div>

            <div id="Learned" className="mt-12">
              <h2 className="font-nunito text-4xl font-normal text-error-A4 fade-in" ref={addToRefs}>Learned</h2>
              <p className="z-10 font-nunito mt-4 text-xl font-normal text-error-A4 fade-in" ref={addToRefs}>
              Through this project, I gained a deeper understanding of encryption, specifically using SSL certificates to ensure secure communication between servers and clients. I also learned how to set up both servers and clients effectively, managing the secure exchange of data between them. This experience developed my knowledge of the importance of security protocols in network communication and advanced my skills in implementing these protocols to protect sensitive information during data transmission.              </p>
              <div className="h-0.5 bg-error-A470 mt-6 mx-full rounded fade-in" ref={addToRefs}></div>
            </div>

          </div>
        </div>

        <div className="flex flex-col items-center" id="Links">
  <div className="flex space-x-28 mt-16">
    <div className="flex flex-col items-center fade-in" ref={addToRefs}>
      <a href="https://github.com/Michael-Chagnon/secure_drop" target="_blank" legacyBehavior passHref>
        <Button className="font-roboto font-medium border rounded-lg bg-error-gitPurple h-12 hover:bg-error-gitPurple text-lg text-error-white flex items-center justify-center space-x-2">
          <Image className="w-6 h-6" src={git_image} alt="Icon" />
          <span>Secure Drop Repository</span>
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
  );
}
