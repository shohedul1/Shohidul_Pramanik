

'use client';
import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Socials from "./Socials";
import Nav from "./Nav";
import { AlignJustify } from "lucide-react";
import Logo from "./Logo";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              className="flex flex-col items-center gap-y-6"
              linkStyle="text-xl"
              onClick={closeSheet} // Pass the closeSheet function to Nav
            />
          </div>
          <div>
            <Socials containerStyle="flex gap-x-4" iconsStyles="text-2xl" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;