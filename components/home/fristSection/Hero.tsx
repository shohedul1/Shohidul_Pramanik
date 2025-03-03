'use client';

import Notification from "@/components/Notification/Notification";
import FirstDesing from "./FirstDesing";
import TypeWriter from "./TypeWriter";
import ClientSubcribe from "./ClientSubcribe";

const Hero = () => {
  return (
    <>
      <section className="h-auto bg-bottom  md:mb-20">
        <div className="container mx-auto flex flex-col gap-10">
          <div className="my-5">
            <TypeWriter />
          </div>
          <div className="grid grid-cols-1  xl:grid-cols-2  gap-12 md:gap-5 ">
            <FirstDesing />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-10">
              All Client Subscription
            </h2>
          </div>
          <ClientSubcribe />

        </div>
      </section>
      <Notification />
    </>
  );
};

export default Hero;
