'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import React from 'react';

const serviceLinks = [
    { href: '/clientService', label: 'Client Service' },
    { href: '/studentService', label: 'Student Service' },
    { href: '/teacherService', label: 'Teacher Service' },
    { href: '/adminService', label: 'Admin Service' }
];

const AccordionMenu = React.memo(() => {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="service">
                <AccordionTrigger className="text-lg px-4 py-1 font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-indigo-600 dark:text-indigo-300 dark:border-indigo-500 dark:hover:text-white dark:hover:bg-indigo-600">
                    Service
                </AccordionTrigger>
                <AccordionContent>
                    <div className="flex flex-col bg-red-50 px-2 mt-2 py-2 dark:bg-gray-800 rounded-md">
                        {serviceLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block py-2 px-2.5 hover:bg-red-100 rounded-full dark:hover:bg-indigo-500 dark:text-white"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
});

export default AccordionMenu;
