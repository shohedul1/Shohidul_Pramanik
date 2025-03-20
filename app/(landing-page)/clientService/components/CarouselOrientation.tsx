import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { FaCheckCircle } from "react-icons/fa";

// Grouped data for the carousel
const groupedWhyChooseUsData = [
    {
        id: 1, items: [
            { id: 1, text: "4+ Years of Experience" },
            { id: 2, text: "Modern & Responsive Design" },
            { id: 3, text: "Fast & Secure Web Applications" },
            { id: 4, text: "Client Satisfaction Guaranteed" },
        ]
    },
    {
        id: 2, items: [
            { id: 5, text: "Cutting-Edge Technologies" },
            { id: 6, text: "24/7 Support & Maintenance" },
            { id: 7, text: "SEO Optimized Websites" },
            { id: 8, text: "Custom Feature Development" },
        ]
    },
    {
        id: 3, items: [
            { id: 9, text: "Dedicated Client Support & Communication" },
            { id: 10, text: "Flexible Pricing & Packages" },
            { id: 11, text: "On-Time Delivery with Quality Assurance" },
            { id: 12, text: "Freelance & Long-Term Contract Options" },
        ]
    },
    {
        id: 4, items: [
            { id: 13, text: "Expertise in MERN Stack Development" },
            { id: 14, text: "Optimized Code for Performance & Scalability" },
            { id: 15, text: "Cloud Integration (AWS, Firebase, Cloudinary)" },
            { id: 16, text: "Cross-Browser & Mobile-Friendly Compatibility" },
        ]
    },
    {
        id: 5, items: [
            { id: 17, text: "Proficiency in Next.js for SSR & SEO" },
            { id: 18, text: "Version Control & CI/CD Integration (Git, GitHub, Vercel)" },
            { id: 19, text: "AI & Chatbot Integration for Smart Solutions" },
            { id: 20, text: "Strong Problem-Solving & Debugging Skills" },
        ]
    },
];

export function CarouselOrientation() {
    return (
        <div className="py-10 md:w-1/2 w-full flex items-center justify-center">
            <Carousel
                opts={{
                    align: "start",
                    loop: true, // Enables infinite scrolling
                }}
                orientation="vertical"
                className="w-full  "
            >
                <CarouselContent className="h-[200px] -mt-1  ">
                    {groupedWhyChooseUsData.map((group) => (
                        <CarouselItem key={group.id} className="pt-1 basis-full relative">
                            {/* basis-full ensures only one item is shown at a time */}
                            <Card className="py-6 px-2 md:px-10 hover:scale-110 duration-500 transition-all ">
                                <CardContent className="flex items-start justify-center flex-col gap-2">
                                    {group.items.map((item) => (
                                        <div key={item.id} className="flex items-center gap-3">
                                            <FaCheckCircle size={20} className="text-green-600" />
                                            <h1 className="text-sm md:text-xl">{item.text}</h1>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
