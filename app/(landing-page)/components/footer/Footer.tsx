'use client';

import { Fade } from "react-awesome-reveal";
import Socials from "../Header/Socials";
import Link from "next/link";

const linkPath = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/about", name: "About" },
  { id: 3, path: "/portfolio", name: "Portfolio" },
  { id: 4, path: "/pricing", name: "Pricing" },
  { id: 5, path: "/contact", name: "Contact" },
  { id: 6, path: "/about", name: "About" }, // Duplicate 'About', if intentional keep, otherwise remove.
];

const Footer = () => {
  const iconsStyles = 'hover:text-white hover:bg-blue-500 p-2 rounded-full scale-105';


  return (
    <footer className="container mx-auto w-full relative overflow-hidden px-2 mt-5 rounded-tl-[100px] rounded-tr-[100px] ">
      <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce={true}>
        <div className="relative w-full  overflow-hidden
            before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,#483D8B,#DCDCDC,#808080,#70ab00)] 
            before:animate-custom-spin before:rounded-xl before:z-0 before:will-change-transform"
        >
          <div className="bg-white dark:bg-black  dark:text-white w-full pt-8 px-4 ">
            {/* Footer Content */}
            <div className="flex flex-col lg:flex-row justify-center gap-2 lg:gap-5 ">
              {/* Left Section */}
              <Fade direction="left" delay={400} cascade damping={0.1} triggerOnce={true}>
                <div className="flex flex-col gap-4 justify-center">
                  <span className="bg-gradient-to-r from-blue-500 to-green-500 text-4xl md:text-6xl text-transparent bg-clip-text">
                    Web Developer
                  </span>
                  <p className="md:text-2xl dark:text-red-100 max-w-xl text-xl font-bold">
                    Crafting responsive and functional websites to bring your ideas to life.
                  </p>
                  <span className="font-bold text-black bg-gradient-to-r from-lime-500 to-green-400 text-transparent bg-clip-text">
                    Let&apos;s build something amazing together!
                  </span>
                  <Socials iconsStyles={iconsStyles} containerStyle="md:flex hidden gap-x-6 mb-4" />
                </div>
              </Fade>

              {/* Right Section */}
              <Fade direction="up" delay={600} cascade damping={0.1} triggerOnce={true}>
                <div className="flex items-center w-full relative flex-col gap-5">
                  <div className="grid grid-cols-2 md:grid-cols-1 gap-x-20 gap-y-2">
                    {linkPath.map((item) => (
                      <Link
                        key={item.id}
                        href={item.path}
                        className="text-xl text-blue-500 font-bold hover:text-red-500 "
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </Fade>
              {/* Social Icons */}
              <Socials iconsStyles={iconsStyles} containerStyle="flex items-center mt-10 justify-center md:hidden gap-x-6 mb-4" />
            </div>

            <Fade direction="right" delay={600} cascade damping={0.1} triggerOnce={true}>
              <div className="relative w-full p-1 rounded-xl overflow-hidden
            before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,#ff9900,#FFFF00,#FF0000)] 
            before:animate-custom-spin before:rounded-xl before:z-0 before:will-change-transform"
              >
                <div className="bg-slate-50  relative rounded-tl-[50px] rounded-tr-[50px] dark:bg-gray-900 text-gray-700 dark:text-gray-300 w-full text-center py-4">
                  <p className="text-lg md:text-xl">&copy; 2025 Your Name. All rights reserved.</p>
                </div>

              </div>
            </Fade>
          </div>
        </div>

      </Fade>
    </footer>
  );
};

export default Footer;





