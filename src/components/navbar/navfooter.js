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
  <div href="#" class="w-[992px] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className="grid grid-cols-2">
      <Image className="rounded-l-lg h-full w-full" src={shape2} alt=""></Image>
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-3 mx-8 font-bold font-fair tracking-tight text-4xl text-gray-900 dark:text-white">{props.title}</h5>
        <p class="mb-3 mx-8 tracking-wider leading-2 font-normal font-nunito text-error-lightGray text-sm dark:text-gray-400">{props.description}</p>
        <div className="flex justify-left ml-8" >
          <a href="/UTalentPage" target="_blank" legacyBehavior passHref>
            <Button className="font-roboto w-full h-3/4 font-medium text-xs bg-transparent text-error-buttonBlue py-2 px-4 w-24 border rounded-full border-error-buttonBlue">
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
