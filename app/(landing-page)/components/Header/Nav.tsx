'use client';
import React, { FC, useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import AboutButton from './buttonComponents/AboutButton/AboutButton';
import { ServiceButton } from './buttonComponents/ServiceButton/ServiceButton';
import LoginButton from './buttonComponents/LoginButton/LoginButton';
import LogoutButton from './buttonComponents/LogoutButton/LogoutButton';

interface NavProps {
  className?: string;
  closeSheet?: () => void;
}

const Nav: FC<NavProps> = ({ className }) => {
  

  

  return (
    <nav className={`${className}`}>
      <div className='flex gap-2'>
        <Fade direction="left" delay={100} cascade damping={0.9} triggerOnce>
          <ServiceButton />
        </Fade>
        <Fade direction="right" delay={300} cascade damping={0.2} triggerOnce>
          <AboutButton />
        </Fade>


        <Fade direction="left" delay={900} cascade damping={0.5} triggerOnce>
          <LogoutButton />
        </Fade>

      </div>
    </nav>
  );
};

export default Nav;
