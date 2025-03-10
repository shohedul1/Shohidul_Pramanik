"use client";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import SwiperSlider from "./SwiperSlider";
import { servicesData } from "@/lib/data";
import Tilt from "react-parallax-tilt";
import React, { useMemo } from "react";

const Services = () => {
    // If servicesData is static, you can memoize it to avoid unnecessary recalculations.
    const services = useMemo(() => servicesData, []);

    return (
        <section className="my-10 px-4">
            <div className="container mx-auto flex flex-col gap-10 overflow-hidden">
                <SwiperSlider />

                <Fade direction="up" delay={420} cascade damping={0.1} triggerOnce>
                    <div className="flex items-center justify-center">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl uppercase font-semibold mb-4 tracking-[4px] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-center">
                            My Services
                        </h2>
                    </div>
                </Fade>

                <div className="flex flex-col gap-10 relative">
                    {/* Services Grid */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center py-10">
                        <Fade direction="up" delay={600} cascade damping={0.1} triggerOnce>
                            {services.map((item) => (
                                // Use a unique key if available (e.g., item.id)
                                <Link key={item.id} href={`/details/${item.id}`} passHref>
                                    <Tilt className="parallax-effect" perspective={600}>
                                        <div className="bg-gray-200 dark:bg-black dark:text-white rounded-lg h-full p-6 w-full relative">
                                            {/* Image Icon */}
                                            <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] bg-primary dark:text-white  text-white rounded-full flex justify-center items-center absolute -bottom-6 right-6">
                                                <item.icon />
                                            </div>
                                            <h1 className="text-center text-[#232c45] font-semibold capitalize text-xl dark:text-white">
                                                {item.title}
                                            </h1>
                                            <button className="px-6 py-2 rounded-lg hover:text-white dark:text-white font-semibold text-blue-950 hover:bg-blue-700 transition-all duration-200 mx-auto border-[1.2px] border-gray-400 border-opacity-25 mt-8 flex items-center space-x-2">
                                                {item.slug}
                                            </button>
                                        </div>
                                    </Tilt>
                                </Link>
                            ))}
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
