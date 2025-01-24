// 'use client';

// import { Fade } from "react-awesome-reveal";
// import Socials from "../Socials"
// import Link from "next/link";
// const linkPath = [
//   { id: 1, path: "/", name: "Home" },
//   { id: 2, path: "/about", name: "About" },
//   { id: 3, path: "/portfolio", name: "Portfolio" },
//   { id: 4, path: "/pricing", name: "Pricing" },
//   { id: 5, path: "/contact", name: "Contact" },
//   { id: 6, path: "/about", name: "About" }



// ]

// const Footer = () => {
//   const iconsStyles = "dark:hover:text-red-500 hover:text-blue-500";

//   return (
//     <footer className="dark:bg-black bg-slate-400 dark:text-white pt-8 rounded-tr-[100px] rounded-tl-[100px]">
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row justify-center gap-2 lg:gap-5">
//           <Fade direction='left' delay={400} cascade damping={1e-1} triggerOnce={true}>
//             <div className="flex flex-col gap-4 justify-center">
//               <span className="bg-gradient-to-r from-blue-500 to-green-500 text-6xl text-transparent bg-clip-text">
//                 Web Developer
//               </span>
//               <p className="text-4xl font-bold hover:text-white">
//                 Crafting responsive and functional websites to bring your ideas to life.
//               </p>
//               <span className="font-bold bg-gradient-to-r from-zinc-100 to-green-400 text-transparent bg-clip-text ">
//                 Let&apos;s build something amazing together!
//               </span>
//               <Socials
//                 iconsStyles={iconsStyles}
//                 containerStyle="flex gap-x-6  mb-4" />
//             </div>
//           </Fade>

//           <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce={true}>
//             <div className="flex flex-col gap-1">
//               {
//                 linkPath.map((item) => (
//                   <>
//                     <Link key={item.id} href={item.path} className="text-xl hover:text-white dark:hover:text-red-500">
//                       {item.name}
//                     </Link>
//                   </>
//                 ))
//               }
//             </div>
//           </Fade>
//         </div>
//         <Fade direction='right' delay={600} cascade damping={1e-1} triggerOnce={true}>
//         <div className="p-5 dark:bg-red-300 bg-blue-300 rounded-tr-full rounded-tl-full">
//           <p className="text-xl text-center">&copy; 2025 Your Name. All rights reserved.</p>
//         </div>

//           </Fade>
//       </div>
//     </footer>
//   )
// }

// export default Footer

'use client';

import { Fade } from "react-awesome-reveal";
import Socials from "../Socials";
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
  const iconsStyles = "dark:hover:text-red-500 hover:text-blue-500";

  return (
    <footer className="dark:bg-black bg-slate-400 dark:text-white pt-8 rounded-tr-[100px] rounded-tl-[100px]">
      <div className="container mx-auto">
        {/* Footer Content */}
        <div className="flex flex-col lg:flex-row justify-center gap-2 lg:gap-5">
          {/* Left Section */}
          <Fade direction="left" delay={400} cascade damping={0.1} triggerOnce={true}>
            <div className="flex flex-col gap-4 justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-green-500 text-6xl text-transparent bg-clip-text">
                Web Developer
              </span>
              <p className="text-4xl font-bold hover:text-white">
                Crafting responsive and functional websites to bring your ideas to life.
              </p>
              <span className="font-bold bg-gradient-to-r from-zinc-100 to-green-400 text-transparent bg-clip-text">
                Let&apos;s build something amazing together!
              </span>
              {/* Social Icons */}
              <Socials iconsStyles={iconsStyles} containerStyle="flex gap-x-6 mb-4" />
            </div>
          </Fade>

          {/* Right Section */}
          <Fade direction="up" delay={600} cascade damping={0.1} triggerOnce={true}>
            <div className="flex flex-col gap-1">
              {linkPath.map((item) => (
                <Link
                  key={item.id}
                  href={item.path}
                  className="text-xl hover:text-white dark:hover:text-red-500"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Fade>
        </div>

        {/* Footer Bottom */}
        <Fade direction="right" delay={600} cascade damping={0.1} triggerOnce={true}>
          <div className="p-5 dark:bg-red-300 bg-blue-300 rounded-tr-full rounded-tl-full">
            <p className="text-xl text-center">&copy; 2025 Your Name. All rights reserved.</p>
          </div>
        </Fade>
      </div>
    </footer>
  );
};

export default Footer;

