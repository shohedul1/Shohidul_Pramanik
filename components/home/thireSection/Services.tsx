"use client";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import SwiperSlider from "./SwiperSlider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { servicesData } from "@/lib/data";


const Services = () => {
    return (
        <section className="my-10 px-4">
            <div className="container mx-auto flex flex-col gap-10 overflow-hidden">
                <SwiperSlider />

                <Fade direction="up" delay={420} cascade damping={0.1} triggerOnce>
                    <div className="flex items-center justify-center">
                        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl uppercase font-semibold mb-4 tracking-[4px] bg-gradient-to-r text-center from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">
                            My Services
                        </div>
                    </div>
                </Fade>
                <div className="flex flex-col gap-10 relative">
                    {/* Programming Languages Section */}
                    {/* Services Grid */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
                        <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
                            {servicesData.map((item, index) => (
                                <Link key={index} href={`/details/${item.id}`} passHref>
                                    <Card className="relative w-full max-w-[350px] sm:max-w-[400px] h-[400px] flex flex-col pb-10 justify-center items-center cursor-pointer hover:bg-tertiary dark:hover:bg-white/10 transition-all duration-700 mx-auto">
                                        <CardHeader className="text-primary">
                                            <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] bg-primary text-white rounded-full flex justify-center items-center absolute -bottom-6 right-6">
                                                {<item.icon />}
                                            </div>
                                        </CardHeader>
                                        <CardContent className="text-center px-4">
                                            <CardTitle className="mb-4 text-lg sm:text-xl">{item.title}</CardTitle>
                                            <CardDescription className="text-sm sm:text-lg">{item.slug}</CardDescription>
                                        </CardContent>
                                    </Card>
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
