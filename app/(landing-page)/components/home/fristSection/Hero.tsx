// 'use client';

// import FirstDesing from "./FirstDesing";
// import TypeWriter from "./TypeWriter";
// import ClientSubcribe from "./ClientSubcribe";
// import Notification from "../../Notification/Notification";
// import { Fade } from "react-awesome-reveal";
// import { motion } from "framer-motion";
// import MainButton from "../../MainButton/MainButton";
// import Link from "next/link";

// const Hero = () => {
//   return (
//     <>
//       <section className="h-auto ">
//         <div className="container mx-auto flex flex-col gap-20">
//           <div className="grid grid-cols-1  md:grid-cols-2  gap-12 md:gap-5 ">
//             <div className="flex flex-col gap-2 items-center ">
//               <Fade direction="up" delay={420} cascade damping={0.1} triggerOnce>
//                 <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl uppercase font-semibold mb-4 tracking-[4px] bg-gradient-to-r text-center from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//                   Web Coder
//                 </div>
//               </Fade>
//               <TypeWriter />
//             </div>
//             <div className="w-full mx-auto xl:mx-0 text-center">
//               <div className="flex flex-col gap-5">
//                 <Fade direction="up" delay={620} cascade damping={0.1} triggerOnce>
//                   <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-center bg-gradient-to-r from-blue-600 via-red-500 to-indigo-400 inline-block text-transparent bg-clip-text">Let&apos;s make web Application!</h1>
//                 </Fade>
//                 <Fade direction="up" delay={800} cascade damping={0.1} triggerOnce>
//                   <div className="flex flex-col gap-10">
//                     <p className="text-base text-black font-bold sm:text-lg md:text-xl lg:text-2xl text-center">
//                       Get a Live Preview Before Delivery. Order Now and Grow Your Business!
//                     </p>

//                     <div className="flex justify-center gap-8 sm:gap-10">

//                       <motion.div
//                         whileHover={{ scale: 1.1 }}
//                         animate={{ y: [0, -5, 0] }}
//                         transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
//                       >
//                         <MainButton text="Contact Now" href="/contact" />
//                       </motion.div>

//                       <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         animate={{ y: [0, -5, 0] }}
//                         transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
//                       >
//                         <Link
//                           href="/portfolio"
//                           className="hover:bg-black hover:text-white dark:hover:bg-lime-500 dark:hover:text-white dark:bg-blue-600 px-4 py-2 bg-red-300 rounded-md"
//                         >
//                           Vist Now
//                         </Link>
//                       </motion.button>
//                     </div>
//                   </div>
//                 </Fade>
//               </div>
//             </div>
//           </div>
//           <div className="grid grid-cols-1  md:grid-cols-2  gap-12 md:gap-5 ">
//             <div className="order-1 md:order-1">
//               <ClientSubcribe />
//             </div>
//             <div className="order-2 md:order-2">
//               <FirstDesing />

//             </div>


//           </div>

//         </div>
//       </section>
//       <Notification />
//     </>
//   );
// };

// export default Hero;
'use client';

import FirstDesing from "./FirstDesing";
import TypeWriter from "./TypeWriter";
import ClientSubcribe from "./ClientSubcribe";
import Notification from "../../Notification/Notification";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import MainButton from "../../MainButton/MainButton";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="h-auto">
        <div className="container mx-auto flex flex-col gap-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
            <div className="flex flex-col gap-5 md:gap-10 items-center">
              <Fade direction="up" delay={420} cascade damping={0.1} triggerOnce>
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl uppercase font-semibold mb-4 tracking-[4px] bg-gradient-to-r text-center from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                  Web Coder
                </div>
              </Fade>
              <TypeWriter />
            </div>
            <div >
              <ClientSubcribe />
            </div>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 ">
            <div className="w-full mx-auto xl:mx-0 text-center order-2 md:order-1">
              <div className="flex flex-col gap-5">
                <Fade direction="up" delay={620} cascade damping={0.1} triggerOnce>
                  <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-center bg-gradient-to-r from-blue-600 via-red-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                    Let's make web Application!
                  </h1>
                </Fade>
                <Fade direction="up" delay={800} cascade damping={0.1} triggerOnce>
                  <div className="flex flex-col gap-10">
                    <p className="text-base text-black font-bold sm:text-lg md:text-xl lg:text-2xl text-center">
                      Get a Live Preview Before Delivery. Order Now and Grow Your Business!
                    </p>
                    <div className="flex justify-center gap-8 sm:gap-10">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                      >
                        <MainButton text="Contact Now" href="/contact" />
                      </motion.div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                      >
                        <Link
                          href="/portfolio"
                          className="hover:bg-black hover:text-white dark:hover:bg-lime-500 dark:hover:text-white dark:bg-blue-600 px-4 py-2 bg-red-300 rounded-md"
                        >
                          Vist Now
                        </Link>
                      </motion.button>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <FirstDesing />
            </div>
          </div>
        </div>
      </section>
      <Notification />
    </>
  );
};

export default Hero;
