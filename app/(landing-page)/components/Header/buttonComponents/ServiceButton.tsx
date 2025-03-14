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
import { TbBrandFiverr } from "react-icons/tb";
import { FaUpwork } from "react-icons/fa6";






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
                    <div className="relative w-full m-5 p-[2px]  rounded-full overflow-hidden
            before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,#88880c,#5550cc,#33cc33,#0099ff,#999,#fff)] 
            before:animate-custom-spin before:rounded-full before:z-0 before:will-change-transform"
                    >
                        <button className="relative w-full px-8 hover:bg-blue-600 dark:hover:bg-blue-600  bg-white dark:bg-gray-800 dark:text-white text-black   z-10 flex flex-col  items-center  transition-all  hover:text-white p-2 border rounded-full  ">
                            <div className="text-xl font-bold">Service</div>
                            <div>
                                <HandPlatter className="text-lime-500  w-8 h-8 rounded-md" />
                            </div>

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
