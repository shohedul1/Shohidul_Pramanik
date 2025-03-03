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
                <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
                    <h2 className="section-title text-center mx-auto text-2xl sm:text-3xl md:text-4xl font-bold">My Services</h2>
                </Fade>
                <div className="flex flex-col gap-10 relative">
                    {/* Services Grid */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
                        <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
                            {servicesData.map((item, index) => (
                                <Link key={index} href={`/details/${item.slug}`} passHref>
                                    <Card className="relative w-full max-w-[350px] sm:max-w-[400px] h-[400px] flex flex-col pb-10 justify-center items-center cursor-pointer hover:bg-tertiary dark:hover:bg-white/10 transition-all duration-700 mx-auto">
                                        <CardHeader className="text-primary">
                                            <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] bg-primary text-white rounded-full flex justify-center items-center absolute -bottom-6 right-6">
                                                {<item.icon />}
                                            </div>
                                        </CardHeader>
                                        <CardContent className="text-center px-4">
                                            <CardTitle className="mb-4 text-lg sm:text-xl">{item.title}</CardTitle>
                                            <CardDescription className="text-sm sm:text-lg">{item.description}</CardDescription>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </Fade>
                    </div>
                    {/* Programming Languages Section */}
                    <SwiperSlider />
                </div>
            </div>
        </section>
    );
};

export default Services;

