'use client';

import Badge from './Badge';
import 'react-toastify/dist/ReactToastify.css';
import { Fade } from "react-awesome-reveal";
import { RiBookmark3Fill, RiBodyScanFill, RiServiceFill } from 'react-icons/ri';
import { memo } from 'react';

// Move badgeData outside the component to prevent unnecessary re-creation
const badgeData = [
    {
        icon: <RiBookmark3Fill />,
        endCountNum: 4,
        endCountText: '+',
        badgeText: '',
        label: 'Years of Experience',
    },
    {
        icon: <RiBodyScanFill />,
        endCountNum: 30, 
        endCountText: '',
        badgeText: 'k',
        label: 'Followers',
    },
    {
        icon: <RiServiceFill />,
        endCountNum: 79,
        endCountText: '+',
        badgeText: '',
        label: 'Completed Projects',
    },
];

const ClientSubscribe = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Fade direction="up" delay={900} cascade damping={0.1} triggerOnce>
                <p className="text-center text-xl md:text-2xl bg-gradient-to-r from-blue-600 via-red-500 to-indigo-400 
                              inline-block text-transparent bg-clip-text sm:text-lg lg:text-2xl xl:text-3xl font-semibold mt-6 mb-8">
                    All Client Subscription Review
                </p>
            </Fade>

            <div className="grid grid-cols-2 gap-x-8 gap-y-12 text-center lg:grid-cols-3">
                <Fade direction="up" delay={800} cascade damping={0.1} triggerOnce>
                    {badgeData.map(({ icon, endCountNum, endCountText, badgeText, label }, index) => (
                        <div key={index} className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">{label}</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
                                <Badge
                                    icon={icon}
                                    endCountNum={endCountNum}
                                    endCountText={endCountText}
                                    badgeText={badgeText}
                                />
                            </dd>
                        </div>
                    ))}
                </Fade>
            </div>
        </div>
    );
};

// Memoize the component to avoid unnecessary re-renders
export default memo(ClientSubscribe);
