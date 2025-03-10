'use client';
import * as React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import Accourding from './Accourding';
import { serviceLinks } from '@/lib/data';

const Service = () => {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    // Function to close the dropdown
    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };
    return (
        <>
            {/* Mobile View: Accordion */}
            <div className="xl:hidden">
                <Accourding />
            </div>

            {/* Desktop View: Dropdown */}

            <div className="hidden xl:flex">
                <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
                    <DropdownMenuTrigger>
                        <div className="bg-red-50 relative inline-flex items-center px-10 py-2 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                            {/* Background transition on hover */}
                            <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>

                            {/* Right arrow icon */}
                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </span>

                            {/* Link Text */}
                            <span className="relative text-sm">Service</span>
                        </div>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                        {serviceLinks.map((link, index) => (
                            <DropdownMenuItem
                                key={index}  // ✅ Add key here
                                className="hover:bg-gray-400 dark:hover:bg-blue-500 !important"
                                onClick={closeDropdown} // Close dropdown on click
                            >
                                <Link href={link.href}>
                                    {link.label}
                                </Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>

                </DropdownMenu>
            </div>
        </>
    );
};

export default Service;
