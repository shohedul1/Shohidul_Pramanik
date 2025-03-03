"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-cards";
import { EffectCards } from 'swiper/modules';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { authentication, backend, languages } from '@/lib/data';


const SwiperSlider = () => {
    return (
        <div className="p-6 lg:p-10 w-full mx-auto relative">
            <Tabs defaultValue="frontend">
                <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl mb-6 font-bold">My Programming Skills</h1>
                <div className='flex flex-col gap-8'>

                    {/* Tabs Navigation */}
                    <div className="flex justify-center">
                        <TabsList className="flex bg-gray-100 p-2 rounded-xl shadow-md">
                            <TabsTrigger value="frontend" className="text-sm sm:text-lg px-4 py-2 rounded-lg font-medium">Front-end</TabsTrigger>
                            <TabsTrigger value="backend" className="text-sm sm:text-lg px-4 py-2 rounded-lg font-medium">Backend</TabsTrigger>
                            <TabsTrigger value="authentication" className="text-sm sm:text-lg px-4 py-2 rounded-lg font-medium">Authentication</TabsTrigger>
                        </TabsList>
                    </div>

                    {/* Frontend Skills */}
                    <TabsContent value="frontend">
                        <div className="flex justify-center">
                            <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                modules={[EffectCards]}
                                className="w-[300px] sm:w-[350px] md:w-[400px]"
                            >
                                {languages.map((language) => (
                                    <SwiperSlide
                                        key={language.id}
                                        className="swiper_slider flex flex-col items-center justify-center text-white text-lg sm:text-2xl font-semibold p-6 rounded-full shadow-lg"
                                        style={{ backgroundColor: language.bgColor }}
                                    >
                                        <div className='flex items-center justify-center'>
                                            <div className="text-4xl sm:text-5xl mb-2">
                                                <language.icon />
                                            </div>
                                            <span>{language.name}</span>
                                        </div>

                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </TabsContent>

                    {/* Backend Skills */}
                    <TabsContent value="backend">
                        <div className="flex justify-center items-center">
                            <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                modules={[EffectCards]}
                                className="w-[300px] sm:w-[350px] md:w-[400px]"
                            >
                                {backend.map((tech) => (
                                    <SwiperSlide
                                        key={tech.id}
                                        className="swiper_slider flex flex-col items-center justify-center text-white text-lg sm:text-2xl font-semibold p-6 rounded-full shadow-lg"
                                        style={{ backgroundColor: tech.bgColor }}
                                    >
                                        <div className='flex items-center justify-center'>
                                            <div className="text-4xl sm:text-5xl mb-2">
                                                <tech.icon />
                                            </div>
                                            <span>{tech.name}</span>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </TabsContent>

                    {/* Authentication Skills */}
                    <TabsContent value="authentication">
                        <div className="flex justify-center">
                            <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                modules={[EffectCards]}
                                className="w-[300px] sm:w-[350px] md:w-[400px]"
                            >
                                {authentication.map((auth) => (
                                    <SwiperSlide
                                        key={auth.id}
                                        className="swiper_slider flex flex-col items-center justify-center text-white text-lg sm:text-2xl font-semibold p-6 rounded-full shadow-lg"
                                        style={{ backgroundColor: auth.bgColor }}
                                    >
                                        <div className='flex items-center justify-center'>
                                            <div className="text-4xl sm:text-5xl mb-2">
                                                <auth.icon />
                                            </div>
                                            <span>{auth.name}</span>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    );
};

export default SwiperSlider;