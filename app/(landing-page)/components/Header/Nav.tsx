'use client';
import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import { Fade } from 'react-awesome-reveal';
import AboutButton from './buttonComponents/AboutButton/AboutButton';
import { ServiceButton } from './buttonComponents/ServiceButton/ServiceButton';
import LoginButton from './buttonComponents/LoginButton/LoginButton';
import { userAuthStore } from '@/app/store/useAuthStore';

interface NavProps {
  className?: string;
  closeSheet?: () => void;
}

const Nav: FC<NavProps> = ({ className, closeSheet }) => {
  const router = useRouter();
  const token = localStorage.getItem("token");

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    window.location.reload()// Redirect to home page
  };

  return (
    <nav className={`${className}`}>
      <div className='flex gap-2'>
        <Fade direction="left" delay={100} cascade damping={0.9} triggerOnce>
          <ServiceButton />
        </Fade>
        <Fade direction="right" delay={300} cascade damping={0.2} triggerOnce>
          <AboutButton />
        </Fade>

        {token ? (
          <Fade direction="left" delay={900} cascade damping={0.5} triggerOnce>
            <button onClick={handleLogout} className='py-2 px-4 bg-red-500 text-white rounded-md'>
              Logout
            </button>
          </Fade>
        ) : (
          <Fade direction="left" delay={900} cascade damping={0.5} triggerOnce>
            <LoginButton />
          </Fade>
        )}
      </div>
    </nav>
  );
};

export default Nav;
