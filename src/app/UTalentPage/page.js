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


export default function Page() {
  return (
    <div className="scroll-smooth">
      <div className="absolute grid grid-cols-3">
          <Image className="" src={shape2} alt="Shape 2"></Image>
          <div></div>
          <div></div>
      </div>

      <div className="flex flex-col min-h-screen">
        <nav className="h-20 relative top-0 z-40">
          <div className="flex items-center justify-between">
          <a href="/page" legacyBehavior passHref>
            <div className="ml-24 font-comfortaa">Michael Chagnon</div>
          </a>
            <div className="font-comfortaa flex justify-end flex-grow">
              <NavigationMenuDemo />
            </div>
          </div>
        </nav>

        <div className="relative mx-40 my-16">
          <div>
          <a
            href="https://u-talent.vercel.app/"
            target="_blank"
            legacyBehavior
            passHref
          >
            <h1 className=" font-fair text-left text-6xl font-bold text-error-black">UTalent</h1>
          </a>
            <p className="font-nunito text-lg mt-4 font-normal text-error-A4">A web app helping college students gain experience through freelance work, avoiding traditional internships and benefiting employers by allowing candidate assessment without long-term commitments. Developed for the UML Rist Difference Maker Challenge, UTalent addresses key social, environmental, and economic issues.</p>
            <div className="h-0.5 bg-error-A470 mt-2 mx-full rounded"></div>
          </div>

          <div className="mt-7">
            <h2 className="font-nunito text-4xl font-normal text-error-A4">Why?</h2>
            <p className="font-nunito mt-4 text-xl font-normal text-error-A4">This project was initiated to address the pressing need for college students to acquire relevant experience in their respective fields. Traditional avenues such as internships and co-ops are not only highly competitive but also demanding in terms of time. From the perspective of employers, selecting a suitable intern or co-op student can be a complex, time-intensive, and risky undertaking. The recruitment process itself is resource-heavy, and choosing an unsuitable candidate can further escalate costs for the company. Consequently, there is a clear need for an alternative pathway that allows students to gain pertinent experience before graduation, enhancing their employability. Moreover, companies would benefit from a service that facilitates connections with high-quality students in a way that minimizes risk, ultimately saving time, resources, and money.</p>
          </div>

        <div className="mt-6 grid grid-cols-2">
          <div>
            <h2 className="font-nunito mt-20 text-4xl font-normal text-error-A4">Solution?</h2>
            <p className="font-nunito mt-4 text-xl font-normal text-error-A4">To address this challenge, we developed a web application designed to facilitate freelance work arrangements between college students and companies. This solution offers several advantages. Firstly, it allows students to gain valuable experience without compromising their full-time student status or delaying their graduation. Secondly, it relieves companies of the burden of committing to a selected candidate for an extended period (typically 3 to 6 months) without the assurance of satisfaction. Instead, they have the flexibility to engage someone for a specific task, assess their skills, and determine whether further investment is warranted. This model creates mutually beneficial outcomes for both students and employers.</p>
          </div>

          <div className="w-[90%] ml-10">
            <Image className="border-x border-y border-error-black" src={UTalent_homepage} alt="Shape 2"></Image>
            <p className="text-xs font-nunito text-error-A4 mb-4">Landing Page</p>

            <Image className="border-x border-y border-error-black" src={UTalent_bidspage} alt="Shape 2"></Image>
            <p className="text-xs font-nunito text-error-A4 mb-4">Active Bids Page</p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2">
          <div className="mt-7">
              <a href="https://www.uml.edu/differencemaker/">
                <h2 className="font-nunito text-4xl font-normal text-error-A4">DifferenceMaker!</h2>
              </a>
              <p className="font-nunito mt-4 text-xl font-normal text-error-A4">In the process of developing this application our team decided to enter the UMl Rist Different Maker Challenge, a competition where students are tasked with creating a new innovation and solution to a problem in order to address social, environmental and economic problems in the community. We were required to flesh out our idea and consider the market opportunity associated with our product. We made our problem and solution clear and presented it to a panel of judges along with a breakdown of the resources necessary moving forward. Along side the development of our concept, our team worked diligently to develop the product  creating what is now UTalent.</p>
          </div>

          <div className="w-[90%] mt-7 ml-10">
            <Image className="mt-8 border-x border-y border-error-black" src={group_picture} alt="Shape 2"></Image>
            <p className="text-xs font-nunito text-error-A4 mb-4">Team Photo on Presentation Night</p>
          </div>
        </div>

        <div className="mt- grid grid-cols-7">
          <div className="col-span-4 w-[100%] mt-7">
            <Image className="border-x border-y border-error-black" src={utal_poster} alt="Shape 2"></Image>
            <p className="text-xs font-nunito text-error-A4 mb-4">Our Poster Describing Our Problem and Solution</p>
          </div>
          <div className="col-span-3 mt-7 ml-10">
            <Image className="w-[74%] border-x border-y border-error-black" src={me_and_aman} alt="Shape 2"></Image>
            <p className="text-xs font-nunito text-error-A4 mb-4">Aman and Myself</p>
          </div>
        </div>
        
        <div className="flex justify-center pt-6 ml-2">
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
