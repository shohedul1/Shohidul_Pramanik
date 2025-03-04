import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import Link from 'next/link';
import Sebscribe from "./Sebscribe";
import Button from "@/components/button/Button";

const FirstDesing = () => {
    return (
        <>
            <div className="w-full mx-auto xl:mx-0 text-center">
                <div className="flex flex-col gap-5">
                    <Fade direction="up" delay={420} cascade damping={0.1} triggerOnce>
                        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl uppercase font-semibold mb-4 tracking-[4px] bg-gradient-to-r text-center from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                            Web Coder
                        </div>
                    </Fade>
                    <Fade direction="up" delay={620} cascade damping={0.1} triggerOnce>
                        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-center bg-gradient-to-r from-blue-600 via-red-500 to-indigo-400 inline-block text-transparent bg-clip-text">Let&apos;s make web Application!</h1>
                    </Fade>

                    <Fade direction="up" delay={800} cascade damping={0.1} triggerOnce>
                        <div className="flex flex-col gap-10">
                            <p className="text-base text-black font-bold sm:text-lg md:text-xl lg:text-2xl text-center">
                                Get a Live Preview Before Delivery. Order Now and Grow Your Business!
                            </p>

                            <div className="flex justify-center gap-8 sm:gap-10">


                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                                >
                                    <Button text="Contact Now" href="/contact" />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                                >
                                    <Link
                                        href="/portfolio"
                                        className="hover:bg-black hover:text-white dark:hover:bg-lime-500 dark:hover:text-white dark:bg-blue-600 px-4 py-2 bg-red-300 rounded-md"
                                    >
                                        Vist Now
                                    </Link>
                                </motion.button>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
            {/* Right Side (Banner Video) */}
            <div className="flex flex-col items-center md:gap-10 gap-2">
                <Fade direction="right" delay={600} cascade damping={0.1} triggerOnce>
                    <div className="flex justify-center w-full">
                        <video
                            src="/about/Shohidul_Pramanick.mp4"
                            className="rounded-xl w-full max-w-[500px] h-auto"
                            loop
                            controls
                        />
                    </div>
                </Fade>
                <Sebscribe />

            </div>
        </>
    );
};

export default FirstDesing;


