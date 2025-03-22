import {
    CreditCard,
    Plus,
    PlusCircle,
    User,
    UserPlus,
} from "lucide-react";
import { HandPlatter } from 'lucide-react';
import { LaptopMinimal } from "lucide-react";
import { GrTechnology } from "react-icons/gr";
import { TbBrandFiverr } from "react-icons/tb";
import { FaUpwork } from "react-icons/fa6";
import { motion } from 'framer-motion'






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


export function ServiceButton() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <DropdownMenuTrigger asChild>
                    <div className="relative w-[75px] h-[75px] justify-center flex items-center rounded-full overflow-hidden
                before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,#88880c,#5550cc,#33cc33,#0099ff,#999,#fff)] 
                before:animate-custom-spin before:rounded-full hover:text-white before:z-0 before:will-change-transform"
                    >
                        <button className="relative w-[70px]   h-[70px] hover:bg-blue-900 dark:hover:bg-white dark:hover:text-black  bg-white dark:bg-gray-800 dark:text-white text-black z-10 flex flex-col justify-center  items-center  transition-all  hover:text-white border rounded-full  ">
                            <div>
                                <HandPlatter className="text-sky-200   w-8 h-8 rounded-md" />
                            </div>
                            <motion.p
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                whileHover={{ scale: 1.1 }}
                                className="font-bold"
                            >
                                Service
                            </motion.p>

                        </button>

                    </div>

                </DropdownMenuTrigger>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="text-center">Welcome My Service</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <Link href={"/clientService"}>
                        <DropdownMenuItem>
                            <User className="text-amber-200" />
                            <span>Client Service</span>
                            <DropdownMenuShortcut>⇧⌘C</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </Link>
                    <Link href={"/studentService"}>
                        <DropdownMenuItem>
                            <CreditCard className="text-yellow-600 " />
                            <span>Student Service</span>
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </Link>
                    <Link href={"/portfolio"}>
                        <DropdownMenuItem>
                            <LaptopMinimal className=" text-red-500" />

                            <span>Complete Project</span>
                            <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </Link>
                    <Link href={"/pricing"}>
                        <DropdownMenuItem>
                            <IoIosPricetag className="text-teal-400" />
                            <span>Pricing</span>
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
                            <span>Market place orders</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>
                                    <TbBrandFiverr className="text-white bg-lime-400 rounded-t-full" />
                                    <Link href={"https://www.fiverr.com/s/wkZWPrw"}>
                                        Fiverr
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <FaUpwork className="rounded-full" />
                                    <Link href={"https://www.upwork.com/services/product/development-it-mern-stack-developer-next-js-tailwind-css-material-ui-expert-1891134148701822595?ref=project_share"}>
                                        Upwork
                                    </Link>
                                </DropdownMenuItem>

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
        </DropdownMenu>
    )
}
