'use client';

import React from 'react';
import CountUp from 'react-countup';

interface BadgeProps {
  icon: React.ReactNode;
  endCountNum: number;
  badgeText: string;
  endCountText: string;
}

const Badge: React.FC<BadgeProps> = ({ icon, endCountNum, badgeText, endCountText }) => {
  return (
    <div className="flex items-center justify-center gap-2 px-4 py-4 rounded-full bg-primary shadow-lg 
                    dark:bg-gray-900 dark:shadow-xl dark:border dark:border-gray-700 transition-all duration-300">
      <div className="text-3xl text-white dark:text-gray-300">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-white dark:text-gray-100">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="text-4xl leading-none font-bold text-white dark:text-gray-400">{badgeText}</div>
      </div>
    </div>
  );
};

export default Badge;
