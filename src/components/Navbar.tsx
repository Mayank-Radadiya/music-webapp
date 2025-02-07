"use client"

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from '@/utils/lib/utils';
import Link from 'next/link';

function Navbar({ className }: { className?: string }) {
   const [active, setActive] = useState<string | null>(null);
  return (
    <div className= {cn("fixed top-5 inset-x-0 max-w-[500px] mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link className="mr-7" href={"/"}>
          <MenuItem  setActive={setActive} active={active} item="Home">
          </MenuItem>
        </Link>

         <MenuItem setActive={setActive} active={active} item= " Our Courses">
        <div className=" flex flex-col gap-4 ">
          <HoveredLink href="/courses"> All Courses</HoveredLink>
        <HoveredLink href="/courses"> Basic Music Theory</HoveredLink>
        <HoveredLink href="/courses"> Advance Composition</HoveredLink>
        <HoveredLink href="/courses"> Songwriting</HoveredLink>
        <HoveredLink href="/courses"> Music Production</HoveredLink>
        </div>
        </MenuItem>
       

      <Link className="pl-5"  href={"/contact"}>
        <MenuItem  setActive={setActive} active={active} item="Contact us">
        </MenuItem>
        </Link>

        </Menu>
    </div>
  )
}

export default Navbar
