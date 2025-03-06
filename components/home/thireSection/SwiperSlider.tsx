import { mySkills } from '@/lib/data'
import React from 'react'
import { Fade } from 'react-awesome-reveal';

const SwiperSlider = () => {
    return (
        <div>
            <Fade direction="up" delay={420} cascade damping={0.1} triggerOnce>
                <div className="flex items-center justify-center">
                    <div className="text-xl lg:text-5xl font-semibold mb-4 tracking-[4px] bg-gradient-to-r text-center from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text sm:text-5xl uppercase">
                        My Programming Skills
                    </div>
                </div>
            </Fade>
            <div className='flex flex-col gap-1'>
                <div className='grid grid-cols-4 gap-4'>
                    {
                        // Map through the skill categories and display them
                        Object.keys(mySkills).map((categoryKey) => {
                            // Assert that categoryKey is a key of mySkills
                            const category = categoryKey as keyof typeof mySkills;
                            return mySkills[category].map((skill) => (
                                <div key={skill.id} className="flex flex-col items-center">
                                    <div
                                        style={{ backgroundColor: skill.bgColor }}
                                        className="p-4 rounded-full mb-2"
                                    >
                                        <skill.icon size={40} color="white" />
                                    </div>
                                    <span className="font-medium text-center">{skill.name}</span>
                                </div>
                            ))
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SwiperSlider;
