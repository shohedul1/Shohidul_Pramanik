'use client';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Socials from "./Socials";
import Nav from "./Nav";
import { AlignJustify } from "lucide-react";
import Logo from "./Logo";

const MobileNav = () => {
  return (
    <Sheet>
    <SheetTrigger asChild>
      <AlignJustify  className="cursor-pointor"/>
    </SheetTrigger>
    <SheetContent>
      <div className="flex flex-col items-center justify-between h-full py-8">
        <div className="flex flex-col items-center gap-y-32">
          <Logo/>
          <Nav 
          className="flex flex-col items-center gap-y-6"
          linkSyle="text-xl"
          />
        </div>
        <div>
          <Socials containerStyle="flex gap-x-4" iconsStyles="text-2xl"/>
        </div>
      </div>
      
      
      
    </SheetContent>
  </Sheet>
  )
}

export default MobileNav