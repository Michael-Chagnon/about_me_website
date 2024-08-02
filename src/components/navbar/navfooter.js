"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import shape2 from "../../../public/images/UTalent1.png";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";



function NavigationMenuDemoFooter(props) {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full h-full">
      <div className="grid grid-cols-2 w-full h-full">
        <Image className="rounded-l-lg w-full h-full object-cover" src={props.imageSrc} alt="" />
        <div className="flex flex-col justify-between p-4 w-full h-full leading-normal">
          <h5 className="mb-3 mx-8 font-bold font-fair tracking-tight text-5xl text-gray-900 dark:text-white">{props.title}</h5>
          <p className=" mx-8 tracking-wider leading-2 font-normal font-nunito text-error-A4 text-base dark:text-gray-400">{props.description}</p>
          <div className="mx-8 mt-">
            <h6 className="mt-1 font-bold font-nunito text-error-beautifulGreen">Highlights:</h6>
            <ul className="list-disc list-inside text-base font-nunito font-semibold text-error-A4">
              {props.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-left ml-8 mt-3">
            <a href={props.link} target="_blank" legacyBehavior passHref>
              <Button className="font-roboto font-medium text-sm bg-transparent text-error-buttonBlue py-2 px-4 border rounded-full border-error-buttonBlue">
                View Project
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { NavigationMenuDemoFooter };
