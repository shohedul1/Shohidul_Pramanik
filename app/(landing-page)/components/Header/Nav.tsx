'use client';
import React, { FC } from 'react';
import { Fade } from 'react-awesome-reveal';
import { ServiceButton } from './buttonComponents/ServiceButton';
import AboutButton from './buttonComponents/AboutButton';



interface NavProps {
  className?: string;
}

const Nav: FC<NavProps> = ({ className }) => {
  return (
    <nav className={`${className}`}>

      <Fade direction="left" delay={100} cascade damping={0.1} triggerOnce>
        <ServiceButton />
      </Fade>
      <Fade direction="left" delay={700} cascade damping={0.1} triggerOnce>
        <AboutButton />
      </Fade>

    </nav>
  );
};

export default Nav;
