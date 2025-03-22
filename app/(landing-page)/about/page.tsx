// 'use client';
// import { Fade } from "react-awesome-reveal";
// import { RiRidingFill, RiUserHeartFill, RiStarHalfSLine, RiVidiconFill, RiVipCrown2Fill, Ri24HoursFill } from "react-icons/ri";
// import Image from "next/image";
// const infoData = [

//   {
//     icon: <RiRidingFill size={20} />,
//     text: 'MD:SHOHIDUL PRAMANIK',
//     name: 'Name:'
//   },
//   {
//     icon: <RiUserHeartFill size={20} />,
//     text: '01758225368',
//     name: 'Contact:'

//   },
//   {
//     icon: <RiStarHalfSLine size={20} />,
//     text: 'shohidulpramanik94@gmail.com',
//     name: 'Email:'
//   },
//   {
//     icon: <RiVidiconFill size={20} />,
//     text: 'Bath on 02 jan, 2003',
//     name: 'Date of Birth:'
//   },
//   {
//     icon: <RiVipCrown2Fill size={20} />,
//     text: '1.Higher Secondary Certificate (HSC) Institution: Gosaibri College, Bogura',
//     education: "2.Honours in Zoology",
//     name: 'Education:'

//   },

//   {
//     icon: <Ri24HoursFill size={20} />,
//     text: 'Sherpur,Dhunat,Bogra',
//     name: 'Location:'
//   },
// ]


// const About = () => {
//   return (
//     <section className="container mx-auto">
//       <div className="py-5 px-4  mb-2 border-b-2 border-red-400 shadow-xl  overflow-hidden  shadow-blue-600 text-black  rounded-t-[25px] rounded-b-[50px]">
//         <Fade direction="up" delay={420} cascade damping={0.1} triggerOnce>
//           <div className="flex items-center justify-center">
//             <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl uppercase font-semibold mb-4 tracking-[4px] bg-gradient-to-r text-center from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
//               About Me
//             </div>
//           </div>
//         </Fade>
//         <div className="flex flex-col gap-20 xl:flex-row">
//           {/* image */}
//           <div className='relative flex-1 md:flex  justify-center'>
//             <Fade direction='left' delay={600} cascade damping={1e-1} triggerOnce={true}>
//               <Image width={500} alt="Shohidul Pramanik"

//                 height={500} src={"https://res.cloudinary.com/djhjt07rh/image/upload/v1741590989/shoihid_xejbaq.png"} />
//             </Fade>
//           </div>
//           <div className="flex-1">
//             <div className="text-xl mt-12 xl:mt-3">
//               <div className="">
//                 <Fade direction='right' delay={400} cascade damping={1e-1} triggerOnce={true}>
//                   <h3 className="text-3xl mb-4 text-start">
//                     Let&copy;s Build Your Perfect Web Project
//                   </h3>
//                 </Fade>
//                 <Fade direction='right' delay={600} cascade damping={1e-1} triggerOnce={true}>
//                   <p className=" text-start">
//                     I am MD. Shohidul Pramanik, a passionate web developer dedicated to creating high-performance, user-centric applications. My expertise lies in designing and developing modern, scalable, and responsive web solutions that ensure a seamless user experience.
//                   </p>
//                 </Fade>
//                 <Fade direction='right' delay={800} cascade damping={1e-1} triggerOnce={true}>
//                   <p className="text-lg text-blue-400  text-start">
//                     By blending traditional web development best practices with modern design trends and cutting-edge technologies, I build dynamic, engaging user experiences that elevate your brand and business.
//                   </p>
//                 </Fade>
//                 {/* icons */}
//                 <div className="pt-5">
//                   <Fade direction='right' delay={1000} cascade damping={1e-1} triggerOnce={true}>
//                     {
//                       infoData.map((item, index) => {
//                         return (
//                           <div key={index} className="flex mb-3">
//                             <div className="flex gap-1">
//                               <div className="text-primary">{item.icon}</div>
//                               <div className="text-sm">{item.name}</div>
//                             </div>
//                             <div className="text-start text-sm flex flex-col gap-1">
//                               <div>{item.text}</div>
//                               <div>{item.education}</div>
//                             </div>
//                           </div>
//                         )
//                       })
//                     }
//                   </Fade>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default About
'use client';

import { Fade } from "react-awesome-reveal";
import { RiUserHeartFill, RiStarHalfSLine, RiVidiconFill, RiVipCrown2Fill, Ri24HoursFill} from "react-icons/ri";
import Image from "next/image";

const infoData = [
  { icon: <RiUserHeartFill size={20} />, text: 'MD. Shohidul Pramanik', name: 'Name:' },
  { icon: <RiStarHalfSLine size={20} />, text: 'shohidulpramanik94@gmail.com', name: 'Email:' },
  { icon: <RiVidiconFill size={20} />, text: 'Born on Jan 02, 2003', name: 'Date of Birth:' },
  { icon: <RiVipCrown2Fill size={20} />, text: 'HSC from Gosaibri College, Bogura | BSc in Zoology', name: 'Education:' },
  { icon: <Ri24HoursFill size={20} />, text: 'Sherpur, Dhunat, Bogura', name: 'Location:' },
];

const Frontend = ["React.js", "JavaScript", "Next.js", "(ES6+)", "TailwindCSS", "TypeScript", "Material UI", "Redux", "Bootstrap", "Framer Motion"];
const Backend = ["Node.js", "express.js", "MongoDB", "Firebase", "REST APIs", "NextAuth"];
const Version = ["Git", "GitHub", "Vercel", "Netlify"];
const Other = ["JWT Authentication", "Payment Integration (Stripe)", "Performance Optimization", "Debugging & Problem Solving"]

// const experience = [
//   {
//     title: "MERN Stack Developer",
//     company: "Freelance",
//     duration: "2021 - Present",
//     description: "Developing high-performance full-stack applications using the MERN stack, including real-time features, authentication, and optimized UI/UX."
//   },
// ];

// const projects = [
//   {
//     name: "JobFinder App",
//     description: "A job listing platform with user authentication, job postings, and real-time chat using WebSockets.",
//     link: "#"
//   },
//   {
//     name: "LinkedIn Clone",
//     description: "A professional networking platform with user profiles, posts, and follow features.",
//     link: "#"
//   },
// ];

const About = () => {
  return (
    <section className="container w-full -translate-y-8 relative overflow-hidden">
      <div className="border-b-2 border-red-400 shadow-lg text-black rounded-lg p-6">
        <Fade direction="up" delay={250} cascade damping={0.1} triggerOnce>
          <h2 className="text-3xl md:text-4xl pb-5 flex items-center justify-center font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-400 text-transparent bg-clip-text">
            Shohidul Pramanik
          </h2>
        </Fade>
        <Fade direction="up" delay={250} cascade damping={0.1} triggerOnce>
          <h2 className="md:text-3xl text-xl flex items-center justify-center font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-400 text-transparent bg-clip-text">
            MERN Stack Developer | Frontend & Backend Expert
          </h2>
        </Fade>
        {/* 60% - 40% Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-6">
          {/* Image (40%) */}
          <div className="flex items-center justify-center md:col-span-1 order-first">
            <Fade direction="right" delay={400} triggerOnce>
              <div className="relative w-52 h-52 md:w-64 md:h-64 flex items-center justify-center border-4 border-blue-400 rounded-full overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  className="rounded-full w-full h-full bg-white object-cover"
                  alt="Shohidul Pramanik"
                  src="https://res.cloudinary.com/djhjt07rh/image/upload/v1741590989/shoihid_xejbaq.png"
                  priority
                />
              </div>
            </Fade>
          </div>
          {/* About Text (60%) */}
          <div className="md:col-span-2 flex items-center">
            <Fade direction="left" delay={350} triggerOnce>
              <p className="text-lg   leading-relaxed text-black">
                I am a passionate <span className="font-bold text-blue-500">MERN Stack Developer</span>,A highly skilled MERN Stack Developer with 4 years of experience in building scalable web applications. Proficient in
                React.js, Next.js, Node.js, and MongoDB. Passionate about developing high-performance, user-friendly, and visually
                appealing applications. Experienced in API integration, authentication systems, and performance optimization. Always
                eager to take on new challenges and contribute to dynamic teams.
              </p>
            </Fade>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-5">
          {/* Skills */}
          <div className="text-4xl font-bold">
            Technical Skills

          </div>
          {/* frontend */}
          <div className="">
            <Fade direction="up" delay={700} triggerOnce>
              <h3 className="text-2xl font-semibold mb-2">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {Frontend.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-500 text-white rounded-md shadow-md">
                    {skill}
                  </span>
                ))}
              </div>
            </Fade>
          </div>
          <div className="">
            <Fade direction="up" delay={700} triggerOnce>
              <h3 className="text-2xl font-semibold mb-2">Backend</h3>
              <div className="flex flex-wrap gap-3">
                {Backend.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-500 text-white rounded-md shadow-md">
                    {skill}
                  </span>
                ))}
              </div>
            </Fade>
          </div>
          <div className="">
            <Fade direction="up" delay={700} triggerOnce>
              <h3 className="text-2xl font-semibold mb-2">Version Control & Deployment:</h3>
              <div className="flex flex-wrap gap-3">
                {Version.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-500 text-white rounded-md shadow-md">
                    {skill}
                  </span>
                ))}
              </div>
            </Fade>
          </div>
          <div className="">
            <Fade direction="up" delay={700} triggerOnce>
              <h3 className="text-2xl font-semibold mb-2">Other:</h3>
              <div className="flex flex-wrap gap-3">
                {Other.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-500 text-white rounded-md shadow-md">
                    {skill}
                  </span>
                ))}
              </div>
            </Fade>
          </div>
          <div className="">
            <Fade direction="up" delay={700} triggerOnce>
              <h3 className="text-2xl font-semibold mb-2">Professional Experience:</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-500 text-white rounded-md shadow-md">
                  MERN Stack Development: Designed and developed multiple full-stack applications using React.js, Next.js, and
                  MongoDB, ensuring scalability and high performance.
                  Responsive UI/UX Development: Created mobile-first and pixel-perfect web applications using Tailwind CSS, Material
                  UI, and Framer Motion.
                  API Integration & Backend Development: Implemented REST APIs, user authentication (JWT, NextAuth), and third-party
                  API integrations.
                  Performance Optimization & Debugging: Improved application performance by 30% using caching, lazy loading, and
                  optimized API calls.
                </span>

              </div>
            </Fade>
          </div>

          <div className="">
            <Fade direction="up" delay={700} triggerOnce>
              <h3 className="text-2xl font-semibold mb-2">Education:</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-500 text-white rounded-md shadow-md">
                Bachelor of Science (Honours) in Zoology (Ongoing, Gov. Shariakandi Degree College, Bogura, 2023 - Present)
                Higher Secondary Certificate (HSC) - Science (Sherpur College, Bogura, 2022)
                </span>

              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>






  );
};

export default About;





{/* Experience */ }
{/* <div className="mt-6">
          <Fade direction="up" delay={800} triggerOnce>
            <h3 className="text-2xl font-semibold mb-2">Experience</h3>
            {experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-400 ">
                <h4 className="text-xl font-semibold">{exp.title} - {exp.company}</h4>
                <span className="text-gray-600 dark:text-gray-400">{exp.duration}</span>
                <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
              </div>
            ))}
          </Fade>
        </div> */}

{/* Projects */ }
{/* <div className="mt-6">
          <Fade direction="up" delay={900} triggerOnce>
            <h3 className="text-2xl font-semibold mb-2">Projects</h3>
            {projects.map((project, index) => (
              <div key={index} className="border-l-4 border-green-400 ">
                <h4 className="text-xl font-semibold">{project.name}</h4>
                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                <a href={project.link} className="text-blue-500 underline">View Project</a>
              </div>
            ))}
          </Fade>
        </div> */}
