'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { authentication, backend, languages } from '@/lib/data';
import { Fade } from 'react-awesome-reveal';
import 'swiper/css';
import "swiper/css/effect-cards";
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SwiperSlider = () => {
    return (
        <div className="p-6 lg:p-10 w-full mx-auto relative">
            <Tabs defaultValue="frontend">
                <Fade direction="up" delay={420} cascade damping={0.1} triggerOnce>
                    <div className="flex items-center justify-center">
                        <div className="text-xl lg:text-5xl font-semibold mb-4 tracking-[4px] bg-gradient-to-r text-center from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text sm:text-5xl uppercase">
                            My Programming Skills
                        </div>
                    </div>
                </Fade>

                <div className='flex flex-col gap-8'>
                    {/* Tabs Navigation */}
                    <Fade duration={1000} delay={200} direction='up' triggerOnce>
                        <div className="flex justify-center">
                            <TabsList className="flex bg-gray-100 p-2 rounded-xl shadow-md">
                                <TabsTrigger value="frontend" className="text-sm sm:text-lg px-4 py-2 rounded-lg font-medium">Front-end</TabsTrigger>
                                <TabsTrigger value="backend" className="text-sm sm:text-lg px-4 py-2 rounded-lg font-medium">Backend</TabsTrigger>
                                <TabsTrigger value="authentication" className="text-sm sm:text-lg px-4 py-2 rounded-lg font-medium">Authentication</TabsTrigger>
                            </TabsList>
                        </div>
                    </Fade>

                    {/* Frontend Skills */}
                    <Fade duration={1000} delay={200} triggerOnce direction='up'>
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
                    </Fade>

                    {/* Backend Skills */}
                    <Fade duration={1000} delay={600} triggerOnce direction='up'>
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
                    </Fade>

                    {/* Authentication Skills */}
                    <Fade duration={1000} delay={800} triggerOnce direction='up'>
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
                    </Fade>
                </div>
            </Tabs>
        </div>
    );
};

export default SwiperSlider;
