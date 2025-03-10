// AccordionMenu.tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { serviceLinks } from '@/lib/data';
import Link from 'next/link';
import React from 'react';

interface AccordionMenuProps {
    closeSheet?: () => void; // Accept closeSheet as a prop
}

const AccordionMenu: React.FC<AccordionMenuProps> = ({ closeSheet }) => {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="service">
                <AccordionTrigger className="text-lg px-4 bg-red-50 py-1 font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-indigo-600 dark:text-indigo-300 dark:border-indigo-500 dark:hover:text-white dark:hover:bg-indigo-600">
                    Service
                </AccordionTrigger>
                <AccordionContent>
                    <div className="flex flex-col bg-green-50 text-black font-bold px-2 mt-2 py-2 dark:bg-gray-800 rounded-md">
                        {serviceLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block py-2 px-2.5 hover:bg-red-500 rounded-full dark:hover:bg-indigo-500 dark:text-white"
                                onClick={closeSheet} // Call closeSheet when a link is clicked
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

// Setting display name for the memoized component
AccordionMenu.displayName = 'AccordionMenu';

export default AccordionMenu;
