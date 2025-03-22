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
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Ensure this runs only on the client side
    const storedToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    setToken(storedToken);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    window.location.reload(); // Refresh the page after logout
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
            <LogoutButton handleLogout={handleLogout} />
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
