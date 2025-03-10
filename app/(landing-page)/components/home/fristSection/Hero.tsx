'use client';

import FirstDesing from "./FirstDesing";
import TypeWriter from "./TypeWriter";
import ClientSubcribe from "./ClientSubcribe";
import Notification from "../../Notification/Notification";

const Hero = () => {
  return (
    <>
      <section className="h-auto bg-bottom  md:mb-20">
        <div className="container mx-auto flex flex-col gap-10">
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
