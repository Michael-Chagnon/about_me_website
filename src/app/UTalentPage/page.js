import React from "react";
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



export default function Page() {
  return (
    <div className="scroll-smooth">
      {/* <div className="absolute grid grid-cols-3 w-full">
          <Image className="" src={shape2} alt="Shape 2"></Image>
          <div></div>
          <div></div>
      </div> */}
      <Image className="absolute left-0" src={shape2} alt="Shape 2"></Image>
      <Image className="absolute mt-999 right-0 z-0" src={bg_img_2} alt="Shape 2"></Image>


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


        <div className="relative ml-24 mr-52 my-16">
          <nav className="fixed right-0 mx-2 z-40">
            <div className="font-nunito border-x border-y border-error-A4 shadow-custom rounded px-4 py-4 bg-error-white">
            <Link href="#UTalent" legacyBehavior passHref>
              <p className=" cursor-pointer text-error-A4 text-xl font-bold">UTalent</p>
            </Link>
            <Link href="#UTalent" legacyBehavior passHref>
              <p className="cursor-pointer text-error-A4 underline mt-2">How?</p>
            </Link>
            <Link href="#Why" legacyBehavior passHref>
              <p className="cursor-pointer text-error-A4 underline mt-2">Why?</p>
            </Link>
            <Link href="#Solution" legacyBehavior passHref>
              <p className="cursor-pointer text-error-A4 underline mt-2">Solution!</p>
            </Link>
            <Link href="#DifferenceMaker" legacyBehavior passHref>
              <p className="cursor-pointer text-error-A4 underline mt-2">DifferenceMaker!</p>
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
            <h1 id="UTalent" className="font-fair text-left text-6xl font-bold text-error-black">UTalent</h1>
          </a>
            <p className="font-nunito text-lg mt-6 font-normal text-error-A4">This project was developed for the UML Rist Difference Maker Challenge to addresses key social, environmental, and economic issues. Our team worked on development of a web app that aimed at helping college students gain experience through freelance work, avoiding traditional internships and benefiting employers by allowing low risk candidate assessment without long-term commitments.</p>
            <div className="h-0.5 bg-error-A470 mt-6 mx-full rounded"></div>
          </div>

          <div className="mt-12 flex">
            <div className="flex-1">
              <h2 id="How" className="font-nunito text-4xl font-normal text-error-A4">How?</h2>
              <p className="font-nunito mt-4 text-xl font-normal text-error-A4">
                When deciding what tech stack to use, we opted for some of the most significant tools in modern web development. These tools are widely recognized in the software development market for their efficiency, flexibility, and ability to streamline the development process, making them ideal when constructing our own web app. These include:
              </p>
              <ul className="list-disc list-inside font-nunito ml-6 text-xl font-normal text-error-A4">
                <li className="mt-4"><span className="font-bold">React:</span> Combined HTML and JS into one framework along with reusable components, allowing concise and easy programming.</li>
                <li className="mt-2"><span className="font-bold">Tailwind CSS:</span> Sped up the design process and ensured a consistent theming.</li>
                <li className="mt-2"><span className="font-bold">Next.js:</span> Used for file-based routing between different pages on the app.</li>
                <li className="mt-2"><span className="font-bold">Google Firebase:</span> Provided back-end services, including real-time databases and authentication, allowing us to build a robust and scalable application.</li>
              </ul>
            </div>
            <div className="ml-12">
              <Image className="" src={tech_stack} alt="Tech Stack" />
            </div>
          </div>

          <div id="Why" className="h-0.5 bg-error-A470 my-12 mx-full rounded"></div>
          


          <div className="z-10">
            <h2 className="font-nunito text-4xl font-normal text-error-A4">Why?</h2>
            <p className="z-10 font-nunito mt-4 text-xl font-normal text-error-A4">
              As we sat together brainstorming ideas for a new service we considered our own personal struggles entering the job market as college students. We needed a way to acquire relevant experience in our respective fields but faced issues. Traditional avenues such as internships and co-ops are not only highly competitive but also demanding in terms of time. From the perspective of employers, selecting a suitable intern or co-op student can be a complex, time-intensive, and risky undertaking.
            </p>
            
            <div className="grid grid-cols-2 mt-">
              <div>
                <h3 className="font-nunito mt-6 text-xl font-bold text-error-A4">Student Issues:</h3>
                <ul className="list-disc list-inside font-nunito ml-6 text-xl font-normal text-error-A4">
                  <li>Issues with competition and time demands of traditional internships</li>
                  <li>Need for alternative pathways to gain experience for students</li>
                </ul>
                
                <h3 className="font-nunito mt-6 text-xl font-bold text-error-A4">Employer Issues:</h3>
                <ul className="list-disc list-inside font-nunito ml-6 text-xl font-normal text-error-A4">
                  <li>Complex and risky recruitment process</li>
                  <li>Resource-heavy recruitment process</li>
                  <li>High costs of choosing unsuitable candidates</li>
                </ul>
              </div>
              <Image className="z-10 ml-24 mt-2 rounded-xl shadow-custom w-4/5" src={group_picture} alt="Shape 2"></Image>
            </div>
            
              
            <p className="font-nunito mt-6 text-xl font-normal text-error-A4">
              Consequently, there is a clear need for an alternative pathway that allows students to gain pertinent experience before graduation, enhancing their employability. Additionally, companies would benefit from a service that facilitates connections with high-quality students in a way that minimizes risk, ultimately saving time, resources, and money.
            </p>
          </div>

          <div className="h-0.5 bg-error-A470 my-16 mx-full rounded"></div>


          <div className="">
            <h2  id="Solution" className="font-nunito text-4xl font-normal text-error-A4">Solution!</h2>
            <p className="font-nunito mt-4 text-xl font-normal text-error-A4">
              To tackle this issue, we developed UTalent, a web application designed to streamline freelance work arrangements between college students and companies. UTalent offers several key benefits:
            </p>
            
            <p className="font-nunito mt-4 text-xl font-bold text-error-A4">For Students:</p>
            <ul className="list-disc list-inside font-nunito ml-6 text-xl font-normal text-error-A4">
              <li>Gain valuable experience without affecting your full-time student status or delaying graduation.</li>
            </ul>
            
            <p className="font-nunito mt-4 text-xl font-bold text-error-A4">For Companies:</p>
            <ul className="list-disc list-inside font-nunito ml-6 text-xl font-normal text-error-A4">
              <li>Avoid the long-term commitment of traditional internships.</li>
              <li>Flexibility to hire for specific tasks.</li>
              <li>Assess skills before deciding on further investment.</li>
            </ul>
            
            <p className="font-nunito mt-4 text-xl font-normal text-error-A4">
              This innovative model creates a win-win situation, providing students with essential experience while offering companies a risk-minimized, efficient way to connect with high-quality talent.
            </p>
          </div>

          <div className="grid grid-cols-12 mt-16">
            <p className="col-span-2 mr-4 text-lg h-fit shadow-custom rounded-xl border-x border-y border-error-A4 p-2 font-nunito text-error-A4 mb-4">Landing page showcasing our mission and key message. It features job listings to capture user interest and provides clear options to begin using our service.</p>
            <div className="col-span-10">
              <Image className="rounded-xl border-x border-y border-error-A4 shadow-custom" src={UTalent_homepage} alt="Shape 2"></Image>
              <p className="text-xs mt-2 font-nunito text-error-A4">UTalent Landing Page</p>
            </div>
            <div/>
          </div>

          <div className="h-0.5 bg-error-A4 my-12 mx-full rounded"></div>


          


          <div className="mt-6">
            <h2 className="text-4xl font-nunito font-semibold text-error-A4 mb-4">
              UML Rist Difference Maker Challenge
            </h2>
            <p className="font-nunito text-xl font-normal text-error-A4 mb-6">
              In the process of developing this application, our team decided to enter the UML Rist Difference Maker Challenge. This competition tasks students with creating new innovations and solutions to address social, environmental, and economic problems in the community. It provided a unique platform for us to refine our concept and present it to a panel of judges.
            </p>
          </div>
          
          <div className="m-6 flex items-start">
            <ul className="list-disc list-inside font-nunito text-xl text-error-A4">
              <li className="mb-4">Required to flesh out our idea and consider the market opportunity associated with our product.</li>
              <li className="mb-4">Made our problem and solution clear and presented it to a panel of judges.</li>
              <li className="mb-4">Provided a breakdown of the resources necessary for moving forward.</li>
              <li className="mb-4">Worked diligently alongside the development of our concept to create what is now UTalent.</li>
            </ul>
            <Image
              src={utal_poster}
              alt="Competition Image"
              className="ml-24 mt- rounded-xl shadow-custom w-4/5"
            />
          </div>
          
          <p className="font-nunito text-xl font-normal text-error-A4">
            Participating in the UML Rist Difference Maker Challenge significantly impacted our project. It pushed us to thoroughly develop and validate our idea, ultimately leading to the successful creation and launch of UTalent.
          </p>

            <div className="flex justify-center pt-6 mt-24 ml-2">
              <a
                href="https://u-talent.vercel.app/"
                target="_blank"
                legacyBehavior
                passHref
              >
                <Button className="font-roboto font-medium border rounded-lg bg-error-beautifulGreen h-12 w-36 hover:bg-error-beautifulGreen text-lg text-error-white">
                  Go To UTalent
                </Button>
              </a>
        </div>
        <div className="flex justify-center mt-6"><p className="text-error-A4 font-nunito text-3xl font-normal ">Visit The Site Here!</p></div>

        </div>
      </div>
  </div>
  );
}
