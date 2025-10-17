import Link from 'next/link';
import React from 'react';

import { CarouselOrientation } from './components/CarouselOrientation';
import { servicesData } from '@/lib/data';


const Page = () => {
    return (
        <div className="mb-5">
            <div className="mx-auto container flex flex-col  px-4 md:px-10">

                {/* Hero Section */}
                <div className="flex flex-col gap-4 text-center">
                    <h1 className="text-xl md:text-5xl uppercase font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                        Welcome to SIT DevAcademy Client Services
                    </h1>
                    <p className="text-sm md:text-2xl text-black font-bold">
                        🚀 Grow Your Business with Expert Web Development!
                    </p>
                    <p className="text-black text-sm md:text-lg font-medium">
                        📌 We build high-quality, modern, and scalable web applications. Check out our services & portfolio!
                    </p>
                </div>

                {/* Why Choose Us Section */}
                <div className="grid grid-cols-1  ">
                    {/* Swiper Slider */}
                    <div className="flex flex-col  gap-10 py-14 items-center w-full justify-center">
                        <h2 className="text-xl md:text-4xl uppercase font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                            Why Choose Us?
                        </h2>
                        <CarouselOrientation />
                    </div>

                    {/* Services Section */}
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
                        {servicesData.map((item, index) => (
                            <Link href={`/details/${item.id}`} key={index}>
                                <div className="p-5 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                                    <item.icon className="text-3xl text-indigo-500 dark:text-indigo-400" />
                                    <h3 className="font-semibold text-lg mt-2 text-black dark:text-white">{item.title}</h3>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">{item.slug}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="text-center flex flex-col gap-5 py-10">
                    <h2 className="text-xl md:text-3xl font-semibold text-indigo-600 dark:text-indigo-400">
                        Ready to Get Started?
                    </h2>
                    <p className="text-sm md:text-lg text-gray-700 dark:text-black  ">
                        Let&copy;s build something amazing together! Click below to place an order.
                    </p>
                    <div>
                        <Link href={"/contact"} className=" bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:scale-105 transition">
                            🚀 Order Now
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Page;
