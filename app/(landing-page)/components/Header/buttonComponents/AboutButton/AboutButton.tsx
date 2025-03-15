import {
  Cloud,
  CreditCard,
  LifeBuoy,
  Github,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  User,
  UserPlus,
} from "lucide-react";
import { HandPlatter } from 'lucide-react';
import { LaptopMinimal } from "lucide-react";
import { GrTechnology } from "react-icons/gr";





import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { IoIosPricetag } from "react-icons/io";
import { MdRoundaboutRight } from "react-icons/md";
import { motion } from "framer-motion"



const AboutButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <DropdownMenuTrigger asChild>
          <div className="relative w-[75px] h-[75px] flex items-center justify-center  rounded-full overflow-hidden
                before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,#fff550,#3cb371,#33cc33,#0099ff,#ff0000,#fff)] 
                before:animate-custom-spin before:rounded-full before:z-0 before:will-change-transform"
          >
            <button className="relative w-[70px]   h-[70px] hover:bg-blue-900 dark:hover:bg-white dark:hover:text-black  bg-white dark:bg-gray-800 dark:text-white text-black z-10 flex flex-col justify-center  items-center  transition-all  hover:text-white border rounded-full  ">
              <div>
                <MdRoundaboutRight className="text-pink-500  w-8 h-8 rounded-md" />
              </div>
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                whileHover={{ scale: 1.1 }}
                className="font-bold"
              >
                About
              </motion.p>

            </button>

          </div>

        </DropdownMenuTrigger>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="text-center">Welcome My About</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={"/about"}>
            <DropdownMenuItem>
              <User className="text-amber-200" />
              <span>My Description</span>
              <DropdownMenuShortcut>⇧⌘C</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link href={"/studentReview"}>
            <DropdownMenuItem>
              <CreditCard className="text-yellow-600 " />
              <span>Student Review</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link href={"/clientReview"}>
            <DropdownMenuItem>
              <LaptopMinimal className=" text-red-500" />

              <span>Client Review</span>
              <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link href={"/pricing"}>
            <DropdownMenuItem>
              <IoIosPricetag className="text-teal-400" />
              <span>Visitor Subscript</span>
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <Link href={"/technology"}>
            <DropdownMenuItem>
              <GrTechnology className="text-orange-600" />
              <span>
                My technology
              </span>
            </DropdownMenuItem>
          </Link>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Mail />
                  <span>Email</span>
                </DropdownMenuItem>
                <Link href={"/contact"}>
                  <DropdownMenuItem>
                    <MessageSquare />
                    <span>Message</span>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusCircle />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <Plus />
            <span>New Team</span>
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

      </DropdownMenuContent>
    </DropdownMenu >
  )
}

export default AboutButton