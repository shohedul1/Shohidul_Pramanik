'use client';

import FirstDesing from "./FirstDesing";
import TypeWriter from "./TypeWriter";
import ClientSubcribe from "./ClientSubcribe";
import Notification from "../../Notification/Notification";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <>
      <section className="h-auto bg-bottom  md:mb-20">
        <div className="container mx-auto flex flex-col gap-10">
          <div>
            <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
              <div className="flex items-center justify-center pb-2">
                <div className="text-3xl sm:text-5xl  md:text-6xl lg:text-6xl  uppercase font-semibold mb-4 tracking-[4px] bg-gradient-to-r text-center from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                 Welcome My Service platfrom
                </div>
              </div>
            </Fade>
          </div>
          <div className="my-5">
            <TypeWriter />
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2  gap-12 md:gap-5 ">
            <FirstDesing />
          </div>

          <ClientSubcribe />

        </div>
      </section>
      <Notification />
    </>
  );
};

export default Hero;
