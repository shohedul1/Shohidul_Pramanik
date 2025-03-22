'use client';

import { Fade } from "react-awesome-reveal";
import { RiUserHeartFill, RiStarHalfSLine, Ri24HoursFill } from "react-icons/ri";
import Image from "next/image";

// User Information
const infoData = [
  { icon: <RiUserHeartFill size={20} />, text: 'MD. Shohidul Pramanik', name: 'Name:' },
  { icon: <RiStarHalfSLine size={20} />, text: 'shohidulpramanik94@gmail.com', name: 'Email:' },
  { icon: <Ri24HoursFill size={20} />, text: 'Sherpur, Dhunat, Bogura', name: 'Location:' },
  { icon: <RiUserHeartFill size={20} />, text: '01758225368', name: 'Contact:' }
];

// Skills
const skills = {
  Frontend: ["React.js", "JavaScript", "Next.js", "(ES6+)", "TailwindCSS", "TypeScript", "Material UI", "Redux", "Bootstrap", "Framer Motion"],
  Backend: ["Node.js", "express.js", "MongoDB", "Firebase", "REST APIs", "NextAuth"],
  VersionControl: ["Git", "GitHub", "Vercel", "Netlify"],
  Other: ["JWT Authentication", "Payment Integration (Stripe)", "Performance Optimization", "Debugging & Problem Solving"]
};

// Skill Component
const SkillSection = ({ title, data }: { title: string; data: string[] }) => (
  <Fade direction="up" delay={700} triggerOnce>
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {data.map((skill, index) => (
        <span key={index} className="px-3 py-1 hover:bg-black hover:scale-110 transition-all duration-300 bg-blue-500 text-white rounded-md shadow-md">
          {skill}
        </span>
      ))}
    </div>
  </Fade>
);

const About = () => {
  return (
    <section className="container w-full -translate-y-8 relative overflow-hidden">
      <div className="border-b-2 border-red-400 shadow-lg text-black rounded-lg p-6">
        {/* Title & Name */}
        <Fade direction="up" delay={250} cascade damping={0.1} triggerOnce>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl md:text-5xl text-center mb-6 uppercase font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Shohidul Pramanik
            </h1>
          </div>
          
          <h2 className="md:text-3xl text-xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-400 text-transparent bg-clip-text">
            MERN Stack Developer | Frontend & Backend Expert
          </h2>
        </Fade>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-6">
          {/* Profile Image */}
          <div className="flex items-center justify-center md:col-span-1">
            <Fade direction="right" delay={400} triggerOnce>
              <div className="relative w-52 hover:scale-110 duration-500 transition-all h-52 md:w-64 md:h-64 flex items-center justify-center border-4 border-blue-400 rounded-full overflow-hidden">
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

          {/* About Description */}
          <div className="md:col-span-2 flex items-center">
            <Fade direction="left" delay={350} triggerOnce>
              <p className="text-lg leading-relaxed text-black">
                I am a passionate <span className="font-bold text-blue-500">MERN Stack Developer</span>, with 4 years of experience in building scalable web applications.
                Proficient in React.js, Next.js, Node.js, and MongoDB. I focus on high-performance, user-friendly applications, API integration, authentication, and performance optimization.
                I am always eager to take on new challenges and contribute to dynamic teams.
              </p>
            </Fade>
          </div>
        </div>

        {/* Skills Section */}
        <div className="flex flex-col gap-2 mt-5">
          <Fade direction="up" delay={700} triggerOnce>
            <div className="text-4xl font-bold">Technical Skills</div>
          </Fade>
          {Object.entries(skills).map(([title, data], index) => (
            <SkillSection key={index} title={title} data={data} />
          ))}
        </div>

        {/* Experience & Education */}
        <Fade direction="up" delay={700} triggerOnce>
          <div className="mt-5 shadow-md p-1">
            <h3 className="text-2xl font-semibold mb-2">Professional Experience</h3>
            <p className="text-black leading-relaxed">
              <strong>MERN Stack Development:</strong> Designed and developed full-stack applications using React.js, Next.js, and MongoDB.<br />
              <strong>Responsive UI/UX:</strong> Created pixel-perfect web applications using Tailwind CSS, Material UI, and Framer Motion.<br />
              <strong>API Integration & Backend:</strong> Implemented REST APIs, user authentication (JWT, NextAuth), and third-party API integrations.<br />
              <strong>Performance Optimization:</strong> Improved application performance by 30% using caching, lazy loading, and optimized API calls.
            </p>
          </div>

          <div className="mt-5 shadow-md p-1">
            <h3 className="text-2xl font-semibold mb-2">Education</h3>
            <p className="text-black leading-relaxed">
              <strong>Bachelor of Science (Honours) in Zoology</strong> - Ongoing, Gov. Shariakandi Degree College, Bogura (2023 - Present)<br />
              <strong>Higher Secondary Certificate (HSC) - Science</strong> - Sherpur College, Bogura (2022)
            </p>
          </div>
        </Fade>

        {/* Contact Information */}
        <div className="pt-5">
          <Fade direction="right" delay={1000} cascade damping={0.1} triggerOnce>
            {infoData.map((item, index) => (
              <div key={index} className="flex mb-3">
                <div className="flex gap-1">
                  <div className="text-primary">{item.icon}</div>
                  <div className="text-sm">{item.name}</div>
                </div>
                <div className="text-start text-sm">{item.text}</div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;
