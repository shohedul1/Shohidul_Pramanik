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
    <>
      <div className='flex items-center xl:hidden'>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button aria-label="Open menu">
              <AlignJustify className="cursor-pointer dark:text-white text-white w-[37px] h-[37px] rounded-full p-2 bg-black dark:bg-amber-300" />
            </button>
          </SheetTrigger>

          <SheetContent className="h-full min-h-screen flex flex-col justify-between overflow-y-auto px-6">
            {/* Header with Logo */}
            <SheetHeader className="flex items-center justify-between pt-4">
              <SheetTitle>
                <button onClick={closeSheet} aria-label="Close menu">
                  <Logo />
                </button>
              </SheetTitle>
            </SheetHeader>

            {/* Navigation Links */}
            <div className="flex flex-col flex-grow items-center justify-center gap-6">
              <Nav
                className="flex flex-col items-center gap-y-6"
                linkStyle="text-xl"
                onClick={closeSheet}
              />
            </div>

            {/* Social Links */}
            <div className="flex justify-center pb-6">
              <Socials containerStyle="flex gap-x-4 items-center" iconsStyles="text-2xl" />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default React.memo(MobileNav);
