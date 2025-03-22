'use client';
import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,

    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion } from 'framer-motion';
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { GrTechnology } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";





const LogoutButton = () => {

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <DropdownMenuTrigger asChild>
                        <div className="relative w-[75px] h-[75px] justify-center flex items-center rounded-full overflow-hidden
                before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,#88880c,#5550cc,#33cc33,#0099ff,#999,#fff)] 
                before:animate-custom-spin before:rounded-full hover:text-white before:z-0 before:will-change-transform"
                        >
                            <button className="relative w-[70px]   h-[70px] hover:bg-blue-900 dark:hover:bg-white dark:hover:text-black  bg-white dark:bg-gray-800 dark:text-white text-black z-10 flex flex-col justify-center  items-center  transition-all  hover:text-white border rounded-full  ">
                                <div>
                                    <CgProfile className="text-sky-500   w-8 h-8 rounded-md" />
                                </div>
                                <motion.p
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                    whileHover={{ scale: 1.1 }}
                                    className="font-bold"
                                >
                                    Profile
                                </motion.p>

                            </button>

                        </div>

                    </DropdownMenuTrigger>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel className="flex items-center justify-center">My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <Link href={"/about"}>
                            <DropdownMenuItem>
                                <User className="text-sky-600" />
                                <span>Profile</span>
                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </Link>
                        <Link href={"/technology"}>
                            <DropdownMenuItem>
                                <GrTechnology className="text-orange-600" />
                                <span>
                                    My Technology
                                </span>
                            </DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem>
                            <Settings className="text-lime-500" />
                            <span>
                                <ModeToggle />
                            </span>
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Keyboard />
                            <span>Keyboard shortcuts</span>
                            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>

                    <Link href={"https://github.com/shohedul1?tab=repositories"} target="_blank" rel="noopener noreferrer">
                        <DropdownMenuItem>
                            <Github className="text-black bg-white rounded-full" />
                            <span>GitHub</span>
                        </DropdownMenuItem>
                    </Link>
                    <Link href={"https://www.facebook.com/sshohedul.islam"} target="_blank" rel="noopener noreferrer">
                        <DropdownMenuItem>
                            <FaFacebookSquare className=" bg-blue-500 text-white rounded-full" />
                            <span>Facebook</span>
                        </DropdownMenuItem>
                    </Link>
                    

                    <Link href={"/contact"}>
                        <DropdownMenuItem>
                            <LifeBuoy className="text-yellow-600" />
                            <span>Support</span>
                        </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem disabled>
                        <Cloud />
                        <span>API</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />

                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default LogoutButton



