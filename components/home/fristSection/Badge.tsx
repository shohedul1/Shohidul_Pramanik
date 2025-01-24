'use client';

import React from 'react';
import CountUp from 'react-countup';

interface BadgeProps {
  containerStyle?: string;
  icon: React.ReactNode;
  endCountNum: number;
  badgeText: string;
  endCountText: string; // Define the new prop
}

const Badge: React.FC<BadgeProps> = ({ containerStyle, icon, endCountNum, badgeText, endCountText }) => {
  return (
    <div className={`badge ${containerStyle} `}>
      <div className='text-3xl text-white'>{icon}</div>
      <div className='flex items-center gap-x-2'>
        <div className='text-4xl leading-none font-bold text-white'>
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className='text-4xl leading-none font-bold text-white'>{badgeText}</div>
      </div>
    </div>
  );
};

export default Badge;
