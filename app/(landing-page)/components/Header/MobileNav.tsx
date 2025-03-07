'use client';
import React, { useState, useCallback } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Socials from "./Socials";
import Nav from "./Nav";
import { AlignJustify } from "lucide-react";
import Logo from "./Logo";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Optimized function reference to close menu
  const closeSheet = useCallback(() => setIsOpen(false), []);

  return (
    <div className="flex items-center xl:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button aria-label="Open menu">
            <AlignJustify className="cursor-pointer text-white w-[37px] h-[37px] rounded-full p-2 bg-black dark:bg-amber-300" />
          </button>
        </SheetTrigger>

        {/* Responsive Background for Light/Dark Mode */}
        <SheetContent className="bg-gray-500 dark:bg-gray-900 text-white transition-colors duration-300">
          <SheetHeader>
            <SheetTitle>
              <button onClick={closeSheet} aria-label="Close menu">
                <Logo />
              </button>
            </SheetTitle>
          </SheetHeader>

          {/* Social Links */}
          <div className="mt-8 flex items-center justify-center">
            <Socials containerStyle="flex gap-x-4 items-center" iconsStyles="text-2xl hover:bg-red-500 rounded-full" />
          </div>

          {/* Navigation Links */}
          <div className="mt-6">
            <Nav closeSheet={closeSheet} className="flex flex-col gap-4 text-white text-lg" />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default React.memo(MobileNav);
