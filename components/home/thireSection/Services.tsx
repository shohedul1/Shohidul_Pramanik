'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smile, Scan, Bird } from "lucide-react";
const servicesData = [
    {
        icon: <Smile />,
        title: 'Portraiture',
        description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain and I give a complete account of the system'
    },
    {
        icon: <Scan />,
        title: 'Landscapes',
        description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain and I give a complete account of the system'
    },
    {
        icon: <Bird />,
        title: 'Lifestyle',
        description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain and I give a complete account of the system'
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
                <h2 className={ourDiv}>Our Services</h2>
                {/* category Items */}
                <div className={gridDiv}>
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

                </div>
            </div>
        </section>
    )
}

export default Services