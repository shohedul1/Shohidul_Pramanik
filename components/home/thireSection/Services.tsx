'use client';
//react awesome reveal animation
import { Fade } from "react-awesome-reveal";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smile, Scan, Bird } from "lucide-react";
const servicesData = [
    {
        icon: <Smile />,
        title: 'Web Developmen',
        description: 'Build responsive, scalable, and modern websites using the latest technologies like React, Next.js, and TailwindCSS'
    },
    {
        icon: <Scan />,
        title: 'Backend Developmen',
        description: 'Develop robust APIs and backend systems using Node.js, Express.js, and MongoDB for seamless data managemen'
    },
    {
        icon: <Bird />,
        title: 'UI/UX Design',
        description: 'Create user-friendly and visually appealing designs that ensure great user experiences.'
    },
]
const Services = () => {
    const ourDiv = "section-title mb-6 xl:mb-24 text-center mx-auto";
    const gridDiv = "grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8";
    const card = "relative w-full max-w-[425px] h-[450px] flex flex-col pb-10 justify-center items-center cursor-pointer hover:bg-tertiary dark:hover:bg-white/10 transition-all duration-700";
    const iconDiv = "w-[80px] h-[80px] bg-primary text-white  rounded-full flex justify-center items-center absolute -bottom-6 right-6";


    return (
        <section className="mb-12 xl:mb-36">
            <div className="container mx-auto">
                <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                    <h2 className={ourDiv}>Our Services</h2>
                </Fade>
                {/* category Items */}
                <div className={gridDiv}>
                    <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce={true}>
                        {
                            servicesData.map((item, index) => {
                                return (
                                    <Card key={index} className={card}>
                                        <CardHeader className="text-primary">
                                            <div className={iconDiv}>
                                                {item.icon}
                                            </div>
                                        </CardHeader>
                                        <CardContent className="text-center ">
                                            <CardTitle className="mb-4">
                                                {item.title}
                                            </CardTitle>
                                            <CardDescription className="text-lg">
                                                {item.description}
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                )
                            })
                        }
                    </Fade>

                </div>
            </div>
        </section>
    )
}

export default Services