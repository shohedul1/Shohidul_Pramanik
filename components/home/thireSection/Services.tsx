"use client";
import { Fade } from "react-awesome-reveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smile, Scan, Bird } from "lucide-react";
import Link from "next/link";

const servicesData = [
    {
        slug: "web-development",
        icon: <Smile />,
        title: "Web Development",
        description:
            "Build responsive, scalable, and modern websites using the latest technologies like React, Next.js, and TailwindCSS",
    },
    {
        slug: "backend-development",
        icon: <Scan />,
        title: "Backend Development",
        description:
            "Develop robust APIs and backend systems using Node.js, Express.js, and MongoDB for seamless data management",
    },
    {
        slug: "ui-ux-design",
        icon: <Bird />,
        title: "UI/UX Design",
        description: "Create user-friendly and visually appealing designs that ensure great user experiences.",
    },
];

const Services = () => {
    return (
        <section className="mb-12 xl:mb-36">
            <div className="container mx-auto xl:translate-y-0 -translate-y-20">
                <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
                    <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">Our Services</h2>
                </Fade>

                {/* Services Grid */}
                <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
                    <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
                        {servicesData.map((item, index) => (
                            <Link key={index} href={`/deails/${item.slug}`} passHref>
                                <Card className="relative w-full max-w-[425px] h-[450px] flex flex-col pb-10 justify-center items-center cursor-pointer hover:bg-tertiary dark:hover:bg-white/10 transition-all duration-700">
                                    <CardHeader className="text-primary">
                                        <div className="w-[80px] h-[80px] bg-primary text-white rounded-full flex justify-center items-center absolute -bottom-6 right-6">
                                            {item.icon}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <CardTitle className="mb-4">{item.title}</CardTitle>
                                        <CardDescription className="text-lg">{item.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default Services;
