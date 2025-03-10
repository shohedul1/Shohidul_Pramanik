'use client';

// React Awesome Reveal animation
import { Fade } from "react-awesome-reveal";
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/solid'

const features = [
  {
    name: 'Photography',
    description: 'Studio comes with elements mode specifically for photographers, including the client list, password-protected pages, and the proofing gallery.',
    icon: ArrowPathIcon
  },
  {
    name: 'Portfolio List',
    description: 'Use our portfolio list to create galleries of your work. It is easy, intuitive, and most importantly, ensures your work commands attention.',
    icon: CloudArrowUpIcon
  },
  {
    name: 'Fully Customizable',
    description: 'It is a fully flexible theme. All elements, pages, and every other aspect of your website can be effortlessly adapted to fit your specific needs.',
    icon: FingerPrintIcon
  },
  {
    name: 'Free Plugins',
    description: 'Studio includes essential plugins for photographers, including the client list, password-protected pages, and a proofing gallery.',
    icon: LockClosedIcon
  }
];

const Features = () => {
  return (
    <section className="pb-12 xl:py-12">
      <div className="container mx-auto">

        {/* Title Section */}
        <Fade direction="up" delay={420} cascade damping={0.1} triggerOnce>
          <div className="flex items-center justify-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl uppercase font-semibold mb-4 tracking-[4px] bg-gradient-to-r text-center from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Key Features
            </h2>
          </div>
        </Fade>

        {/* Subtitle */}
        <Fade direction="up" delay={600} cascade damping={0.1} triggerOnce>
          <div className="text-center mx-auto max-w-4xl">
            <p className="text-black font-bold text-xl md:text-5xl">
              Everything you need, faster.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-700">
              A wide array of user-friendly elements and features turn website creation into a seamless process. Get started now &amp; build the website you&apos;ve always wanted.
            </p>

          </div>
        </Fade>

        {/* Feature List */}
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 w-full">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none md:grid-cols-2 lg:gap-y-16">
            <Fade direction="up" delay={800} cascade damping={0.1} triggerOnce>
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative p-6 bg-white shadow-md rounded-lg hover:bg-black transition duration-500 group"
                >
                  <dt className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="w-[80px] h-[80px] flex items-center justify-center bg-primary rounded-full mb-4 transition-all duration-500 group-hover:bg-white">
                      <feature.icon className="h-[36px] w-[36px] text-black group-hover:text-black transition duration-500" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-black group-hover:text-white transition duration-500">
                      {feature.name}
                    </h3>
                  </dt>

                  {/* Description */}
                  <dd className="mt-2 text-base text-gray-700 text-center group-hover:text-white transition duration-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </Fade>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Features;
