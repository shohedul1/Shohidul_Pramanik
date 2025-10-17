import {
  CreditCard,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  UserPlus,
} from "lucide-react";
import { LaptopMinimal } from "lucide-react";





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
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="text-lime-500" />
              <span>English support</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>

                <Link href="/" className="w-full">
                  <DropdownMenuItem>
                    <Mail className="text-emerald-500" />
                    <span>Basic Vocabulary</span>
                  </DropdownMenuItem>
                </Link>
                <Link href="/" className="w-full">
                  <DropdownMenuItem>
                    <Mail className="text-emerald-500" />
                    <span>Basic Grammar</span>
                  </DropdownMenuItem>
                </Link>
                <Link href="/" className="w-full">
                  <DropdownMenuItem>
                    <Mail className="text-emerald-500" />
                    <span>listening Habit</span>
                  </DropdownMenuItem>
                </Link>
                <Link href="/" className="w-full">
                  <DropdownMenuItem>
                    <Mail className="text-emerald-500" />
                    <span>Developer English</span>
                  </DropdownMenuItem>
                </Link>
                <Link href="/'" className="w-full">
                  <DropdownMenuItem>
                    <Mail className="text-emerald-500" />
                    <span>Developer English</span>
                  </DropdownMenuItem>
                </Link>





                <a href="https://wa.me/8801758225368?text=Hello%20Support%2C%20I%20need%20help!" target="_blank" rel="noopener noreferrer" className="w-full">
                  <DropdownMenuItem>
                    <MessageSquare className="text-lime-600" />
                    <span>WhatsApp Support</span>
                  </DropdownMenuItem>
                </a>
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