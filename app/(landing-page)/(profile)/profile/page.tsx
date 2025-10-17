'use client';

import { Fade } from "react-awesome-reveal";
import { RiUserHeartFill, RiStarHalfSLine, Ri24HoursFill } from "react-icons/ri";
import Image from "next/image";

// User Information
const infoData = [
  { icon: <RiUserHeartFill size={20} />, text: 'MD. Shohidul Pramanik', name: 'Name:' },
  { icon: <RiStarHalfSLine size={20} />, text: 'shohidulpramanik94@gmail.com', name: 'Email: ' },
  { icon: <Ri24HoursFill size={20} />, text: 'Mirpur, Dhaka-1216', name: 'Present Address: ' },
  { icon: <RiUserHeartFill size={20} />, text: '01758225368', name: 'Contact: ' }
];

// Skills
const skills = {
  Frontend: ["React.js", "JavaScript", "Next.js", "(ES6+)", "TailwindCSS", "TypeScript", "Material UI", "Redux", "Bootstrap", "Framer Motion"],
  Backend: ["Node.js", "express.js", "MongoDB", "Firebase", "REST APIs", "NextAuth"],
  VersionControl: ["Git", "GitHub", "Vercel", "Netlify"],
  "UI/UX/Design": ["Figma", "Canva", "Framer", "Microsoft Office", "(Word, Excel, PowerPoint)"],
  Other: ["JWT Authentication", "Payment Integration (Stripe)", "Performance Optimization", "Debugging & Problem Solving"]
};

//edicatoin data 
const educationData = [
  {
    title: "Secondary School Certificate (S.S.C)",
    institute: "Gossain Bari A.A High School",
    group: "Science",
    board: "Rajshahi",
  },
  {
    title: "Higher Secondary Certificate (H.S.C)",
    institute: "Gosaibari College, Bogura",
    group: "Science",
    board: "Rajshahi",
  },
  {
    title: "BSc Honours (Ongoing)",
    institute: "Government Shariakandi Degree College, Bogura",
    group: "Science",
    department: "Zoology",
  },
  {
    title: "Language Proficiency",
    bangla: "Bangla – Native",
    english: "English – Proficient",
  },
];

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
            <h1 className="text-2xl md:text-5xl text-center mb-6 uppercase font-semibold bg-gradient-to-r from-yellow-200 via-black-500 to-pink-600 inline-block text-transparent bg-clip-text">
              Md.SHOHEDUL PRAMANIK
            </h1>
          </div>

          <h2 className="md:text-3xl text-xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-400 text-transparent bg-clip-text">
            MERN Stack Developer | NSDA Certified
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
                  className="rounded-full w-full h-full bg-white object-fill"
                  alt="Shohidul Pramanik"
                  src="https://res.cloudinary.com/djhjt07rh/image/upload/v1760685084/Gemini_Generated_Image_d1jrand1jrand1jr_2_zbz2an.jpg"
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
            <div className=" md:text-3xl text-2xl text-center uppercase font-semibold bg-gradient-to-r from-green-600 via-black-500 to-red-400 inline-block text-transparent bg-clip-text">
              Technical Skills
            </div>
          </Fade>
          {Object.entries(skills).map(([title, data], index) => (
            <SkillSection key={index} title={title} data={data} />
          ))}
        </div>

        {/* Experience & Education , Certifications, PROFILE SUMMARY */}
        <Fade direction="down" delay={700} triggerOnce>
          {/* PROFILE SUMMARY */}
          <div className="shadow-md  bg-red-200 my-2 relative overflow-hidden rounded-md ">
            <div className="flex items-center justify-center">
              <div
                className="shadow-md  mx-2 my-1 p-8 rounded-md bg-white w-full  flex flex-col items-center
      text-black transition-all duration-500 hover:bg-black hover:text-white hover:scale-105"
              >
                <h3 className=" text-center md:text-3xl text-2xl flex items-center justify-center uppercase font-semibold bg-gradient-to-r from-green-600 via-black-500 to-red-400 text-transparent bg-clip-text">
                  Profile Summary
                </h3>

                <div className="leading-relaxed space-y-2">
                  <p className="font-semibold">
                    A highly skilled MERN Stack Developer with 4+ years of experience in building scalable and responsive web applications. Proficient in React.js, Next.js, Node.js, and MongoDB, with expertise in authentication, API integration, and performance optimization. Government Certified (NSDA – Level 3, Bangladesh) in Web Design & Development. Open to both on-site and remote opportunities.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>


        {/* Experience */}
        <Fade direction="right" delay={600} triggerOnce>
          <div className="shadow-md  bg-red-200 my-2 relative overflow-hidden rounded-md ">
            <div className="flex items-center justify-center">
              <div
                className="shadow-md mx-2 my-2 p-5 rounded-md bg-white w-full  flex flex-col items-center
      text-black transition-all duration-500 hover:bg-black hover:text-white hover:scale-105"
              >
                <h3 className=" text-center md:text-3xl text-2xl flex items-center justify-center uppercase font-semibold bg-gradient-to-r from-green-600 via-black-500 to-red-400 text-transparent bg-clip-text">
                  Professional Experience
                </h3>

                <div className="leading-relaxed space-y-2">
                  <p className="font-semibold">
                    MERN Stack Developer (Freelance & Team Projects) — 2021–Present

                  </p>

                  <ul className="list-disc list-inside flex flex-col gap-1 pl-2 text-start">
                    <li>Developed full-stack web applications using React.js, Next.js, Node.js, and MongoDB.</li>
                    <li>Designed responsive, mobile-first UIs with Tailwind CSS, Material UI, and Framer Motion.</li>
                    <li>Implemented authentication systems (JWT, NextAuth) and integrated third-party APIs.</li>
                    <li>Boosted app performance by 30% through caching, lazy loading, and code optimization.</li>
                    <li>Integrated payment gateways like Stripe for secure transactions.</li>
                    <li>Collaborated with designers and developers in agile teams to deliver projects on time.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Fade>


        {/* Certifications */}
        <Fade direction="up" delay={500} triggerOnce>
          <div className="shadow-md  bg-red-200 my-2 relative overflow-hidden rounded-md ">
            <div className="flex items-center justify-center">
              <div
                className="shadow-md mx-2 my-2 p-5 rounded-md bg-white w-full  flex flex-col items-center
      text-black transition-all duration-500 hover:bg-black hover:text-white hover:scale-105"
              >
                <h3 className=" text-center md:text-3xl text-2xl flex items-center justify-center uppercase font-semibold bg-gradient-to-r from-green-600 via-black-500 to-red-400 text-transparent bg-clip-text">
                  Certifications
                </h3>

                <div className="leading-relaxed space-y-2">
                  <p className="font-semibold">
                    National Skills Development Authority (NSDA) Level-3 Web Design & Development

                    (Govt. of Bangladesh)
                  </p>

                  <ul className="list-disc list-inside flex flex-col gap-1 pl-2">
                    <li>Ethical Standards in ICT Workplace</li>
                    <li>Website Creation (HTML, CSS, JS, Frameworks)</li>
                    <li>Web Design Environment Setup</li>
                    <li>Image Editing Software</li>
                    <li>Office Application Software</li>
                    <li>Team Collaboration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        {/* Education */}
        <Fade direction="left" delay={400} triggerOnce>
          <div className="shadow-md  bg-red-200 my-2 relative overflow-hidden rounded-md ">
            <div className="flex items-center justify-center">
              <div
                className="shadow-md mx-2 my-1 p-8 rounded-md bg-white w-full  flex flex-col items-center
      text-black transition-all duration-500 hover:bg-black hover:text-white hover:scale-105" >
                <h3 className=" text-center md:text-3xl text-2xl flex items-center justify-center uppercase font-semibold bg-gradient-to-r from-green-600 via-black-500 to-red-400 text-transparent bg-clip-text">
                  Education
                </h3>
                <div className="flex flex-col md:flex-row items-center gap-5 flex-wrap justify-center">
                  {educationData.map((edu, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-1 hover:bg-gray-500 hover:text-white p-3 rounded-2xl shadow-sm transition-all duration-300 w-full md:w-1/3"
                    >
                      <strong>{edu.title}</strong>
                      {edu.institute && <p>Institute Name: {edu.institute}</p>}
                      {edu.group && <p>Group: {edu.group}</p>}
                      {edu.board && <p>Board: {edu.board}</p>}
                      {edu.department && <p>Department: {edu.department}</p>}
                      {edu.bangla && <p>{edu.bangla}</p>}
                      {edu.english && <p>{edu.english}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Fade>



        {/* Contact Information */}
        <div className="pt-5">
          <Fade direction="right" delay={1000} cascade damping={0.1} triggerOnce>
            {infoData.map((item, index) => (
              <div key={index} className="flex mb-3 items-center justify-center">
                <div className="flex gap-1 justify-start items-start text-start">
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
