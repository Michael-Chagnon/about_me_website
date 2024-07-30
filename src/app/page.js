import React from "react";
import { NavigationMenuDemo } from "@/components/navbar/navhomepage";
import { NavigationMenuDemoFooter } from "@/components/navbar/navfooter";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import shape2 from "../../public/images/shape2.png";

var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

export default function Page() {
  return (
    <div className="scroll-smooth">
      <div className="absolute grid grid-cols-3">
        <div></div>
        <div></div>
        <Image className="" src={shape2} alt="Shape 2"></Image>
      </div>

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

        {/* Main content container */}
        <div className="">
          <div className="justify-left ml-24">
            <div className="mt-16 text-6xl w-1/3 font-fair font-error-buttonBlue font-bold">
              Hello, my name is Michael!
            </div>
            <div id="demo" className="w-96 mt-10 font-nunito text-error-lightGray text-2xl not-italic font-normal leading-[150%]">
              I am a front end developer eiwhnberjogb kfneibkv dbng orne. gioinvcewrg, oinreoigbnowineg oienrgionopoejrg!
            </div>
            <div className="flex items-center justify-left">
              <div className="flex justify-center pt-6">
                <Link href="#projects" legacyBehavior passHref>
                  <Button className="font-roboto font-medium border rounded-lg bg-error-beautifulGreen w-24 hover:bg-error-beautifulGreen text-error-buttonBlue">
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
                  <Button className="font-roboto font-medium bg-transparent text-error-buttonBlue py-2 px-4 w-24 border rounded-lg border-error-buttonBlue">
                    LinkedIn
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 mt-24">
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


          <div className="mt-12 mx-auto flex justify-center items-center max-w-3xl p-6">
            <NavigationMenuDemoFooter
              className="w-full"
              title="UTalent"
              description="A web application that looks to revolutionize the freelance market for college students, facilitating the exchange of student provided services and the professional work needs of companies."
            />
          </div>
          <div className="mt-12 mx-auto flex justify-center items-center max-w-3xl p-6">
            <NavigationMenuDemoFooter
              className="w-full"
              title="Secure Drop File Transfer"
              description="Server and client communication for a secure file transfer program. Uses SSL, TCP sockets and threading to establish encrypted communication from the client to the server and the server to the client to send file contents."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function typeWriter() {
  alert();
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
