import React, { useMemo } from "react";
import { mySkills } from "@/lib/data";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

const SwiperSlider = () => {
    // Memoize the flattened skills array with category info for performance.
    const skills = useMemo(() => {
        return Object.entries(mySkills).flatMap(([categoryKey, skillArray]) =>
            skillArray.map((skill) => ({ ...skill, categoryKey }))
        );
    }, []);

    // Animation configuration for the first slider (left-to-right).
    const leftToRight = {
        animate: { x: ["0%", "-100%"] },
        transition: { repeat: Infinity, duration: 20, ease: "linear" },
    };

    // Animation configuration for the second slider (right-to-left).
    const rightToLeft = {
        animate: { x: ["-100%", "0%"] },
        transition: { repeat: Infinity, duration: 20, ease: "linear" },
    };

    return (
        <div className="flex flex-col gap-10">
            <Fade
                direction="up"
                delay={420}
                cascade
                damping={0.1}
                triggerOnce
            >
                <div className="flex justify-center">
                    <h2 className="text-xl lg:text-5xl font-semibold mb-4 tracking-[4px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent uppercase text-center">
                        My Programming Skills
                    </h2>
                </div>
            </Fade>

            {/* First slider (left to right) */}
            <div className="w-full overflow-hidden  py-5">
                <motion.div
                    className="flex gap-10 min-w-max"
                    {...leftToRight}
                >
                    {skills.map((skill) => (
                        <div
                            key={`l-${skill.categoryKey}-${skill.id}`}
                            className="flex flex-col items-center"
                        >
                            <div
                                style={{ backgroundColor: skill.bgColor }}
                                className="p-4 rounded-full mb-2"
                            >
                                <skill.icon size={40} color="#fff" />
                            </div>
                            <span className="font-medium  text-black text-sm md:text-base text-center">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Second slider (right to left) */}
            <div className="w-full overflow-hidden  py-5">
                <motion.div
                    className="flex gap-10 min-w-max"
                    {...rightToLeft}
                >
                    {skills.map((skill) => (
                        <div
                            key={`r-${skill.categoryKey}-${skill.id}`}
                            className="flex flex-col items-center"
                        >
                            <div
                                style={{ backgroundColor: skill.bgColor }}
                                className="p-4 rounded-full mb-2"
                            >
                                <skill.icon size={40} color="#fff" />
                            </div>
                            <span className="font-medium  text-black text-sm md:text-base text-center">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Swiper slider for skills cards */}
            <div className="flex justify-center  overflow-hidden  py-5 ">
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="w-1/2 md:w-1/3"
                >
                    <div className="w-full">
                        {skills.map((skill) => (
                            <SwiperSlide key={`s-${skill.categoryKey}-${skill.id}`}>
                                <div
                                    className="flex flex-col items-center justify-center py-5  rounded-lg"
                                    style={{ backgroundColor: skill.bgColor }}  >
                                    <div
                                        className="rounded-full"
                                        style={{ backgroundColor: skill.bgColor }}
                                    >
                                        <skill.icon size={40} color="#fff" />
                                    </div>
                                    <span className="font-medium dark:text-white text-black text-sm md:text-base text-center">
                                        {skill.name}
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default SwiperSlider;
