'use client';

import Badge from './Badge';
import 'react-toastify/dist/ReactToastify.css';
// React awesome reveal animation
import { Fade } from "react-awesome-reveal";
import { RiBookmark3Fill, RiBodyScanFill, RiServiceFill } from 'react-icons/ri';
import { memo } from 'react';

const ClientSubcribe = () => {
    const Foller = 30;

    // Memoize the badge data
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
            endCountNum: Foller,
            endCountText: '',
            badgeText: 'k',
            label: 'Followers',
        },
        {
            icon: <RiServiceFill />,
            endCountNum: 79,
            endCountText: '+',
            badgeText: '',
            label: 'My Complete Project',
        },
    ];

    return (
        <div className='flex flex-col items-center justify-center'>
            <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mt-6 mb-8">
                All Client Subscription Review
            </p>
            <div className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
                <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>
                    {badgeData.map((badge, index) => (
                        <div key={index} className='mx-auto flex max-w-xs flex-col gap-y-4'>
                            <dt className='text-base leading-7 text-muted-foreground'>{badge.label}</dt>
                            <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                                <Badge
                                    icon={badge.icon}
                                    endCountNum={badge.endCountNum}
                                    endCountText={badge.endCountText}
                                    badgeText={badge.badgeText}
                                />
                            </dd>
                        </div>
                    ))}
                </Fade>
            </div>
        </div>
    );
};

// Memoize the component to avoid re-renders when the data doesn't change
export default memo(ClientSubcribe);

