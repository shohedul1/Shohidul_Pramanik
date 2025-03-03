// data.ts
import { Smile, Scan, Bird } from "lucide-react";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase,
    FaPython, FaCube, FaKey
} from "react-icons/fa";
import { SiClerk } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaAvianex } from "react-icons/fa6";


import { TbBrandNextjs, TbBrandRedux } from "react-icons/tb";
import { SiTailwindcss, SiTypescript, SiMongodb, SiExpress, SiFirebase, SiAuth0 } from "react-icons/si";
import { RiAtFill } from "react-icons/ri"; // Use RiAtFill instead of RiJwtFill


// Frontend Skills
export const languages = [
    { id: 1, name: 'HTML', bgColor: '#E34F26', icon: FaHtml5 },
    { id: 2, name: 'CSS', bgColor: '#1572B6', icon: FaCss3Alt },
    { id: 3, name: 'JavaScript', bgColor: '#F7DF1E', icon: FaJs },
    { id: 4, name: 'React', bgColor: '#61DAFB', icon: FaReact },
    { id: 5, name: 'vite', bgColor: '#61DAFB', icon: SiVite },
    { id: 6, name: 'Next.js', bgColor: '#000000', icon: TbBrandNextjs },
    { id: 7, name: 'TypeScript', bgColor: '#007ACC', icon: SiTypescript },
    { id: 8, name: 'TailwindCSS', bgColor: '#38BDF8', icon: SiTailwindcss },
    { id: 9, name: 'Bootstrap', bgColor: '#7952B3', icon: FaCube },
    { id: 10, name: 'Material-UI', bgColor: '#007FFF', icon: FaCube },
    { id: 11, name: 'ShadCN/UI', bgColor: '#1F2937', icon: FaCube },
    { id: 12, name: 'Redux', bgColor: '#764ABC', icon: TbBrandRedux },
    { id: 13, name: 'Zustand', bgColor: '#E44D26', icon: FaCube },
    { id: 14, name: 'Sass', bgColor: '#CC6699', icon: FaSass },
];

// Backend Skills
export const backend = [
    { id: 1, name: 'Node.js', bgColor: '#339933', icon: FaNodeJs },
    { id: 2, name: 'Express.js', bgColor: '#000000', icon: SiExpress },
    { id: 3, name: 'MongoDB', bgColor: '#47A248', icon: SiMongodb },
    { id: 4, name: 'SQL', bgColor: '#003B57', icon: FaDatabase },
    { id: 5, name: 'Python', bgColor: '#3776AB', icon: FaPython },
];

// Authentication Skills
export const authentication = [
    { id: 1, name: 'JWT', bgColor: '#F7DF1E', icon: RiAtFill },
    { id: 2, name: 'Firebase Auth', bgColor: '#FFCA28', icon: SiFirebase },
    { id: 3, name: 'OAuth', bgColor: '#4285F4', icon: SiAuth0 },
    { id: 4, name: 'Session Auth', bgColor: '#0081CB', icon: FaKey },
    { id: 5, name: 'NextAuth.js', bgColor: '#0080CB', icon: FaAvianex },
    { id: 5, name: 'Clerk', bgColor: '#0080CB', icon: SiClerk },

    

];


export const servicesData = [
    {
        id: "1",
        title: "Web Development",
        slug: "Build responsive, scalable, and modern websites using the latest technologies like React, Next.js, and TailwindCSS",
        description: `Web development is the backbone of the modern digital world. It involves creating dynamic and interactive websites using technologies like HTML, CSS, JavaScript, React, and Next.js. 
        With the increasing demand for web applications, developers focus on responsive design, accessibility, and performance optimization. 
        The process includes front-end development (UI/UX), back-end development (server-side logic), and full-stack development (combining both). 
        Keeping up with trends such as serverless computing, JAMstack, and AI-driven interfaces is essential for modern web developers. 
        By leveraging frameworks like Next.js and TailwindCSS, developers can build fast, scalable, and SEO-friendly web applications that provide excellent user experiences.`,
        icon: Bird,
    },
    {
        id: "2",
        title: "Backend Development",
        slug: "Develop robust APIs and backend systems using Node.js, Express.js, and MongoDB for seamless data management",
        description: `Backend development focuses on building robust server-side applications that power the web. 
        Technologies like Node.js, Express.js, and MongoDB allow developers to create secure and scalable APIs that handle user authentication, database management, and real-time data processing. 
        A strong backend is crucial for ensuring seamless communication between the front end and databases. 
        Security best practices, such as hashing passwords, using JWT authentication, and preventing SQL injection, are essential for backend developers. 
        Microservices, GraphQL, and serverless functions are becoming popular choices for building efficient backend systems in modern web applications.`,
        icon: Smile,
    },
    {
        id: "3",
        slug: "Create user-friendly and visually appealing designs that ensure great user experiences.",
        title: "UI/UX Design",
        description: `UI/UX design plays a crucial role in creating engaging and user-friendly applications. 
        A well-designed user interface (UI) ensures smooth navigation, while a strong user experience (UX) keeps users engaged. 
        UI/UX designers use tools like Figma, Adobe XD, and Sketch to create wireframes and prototypes. 
        Design principles such as contrast, balance, and accessibility are key to ensuring inclusivity. 
        With the rise of dark mode, neumorphism, and micro-interactions, UI/UX design continues to evolve. 
        A focus on user research, A/B testing, and iterative design helps in crafting better digital experiences that enhance usability and conversion rates.`,
        icon: Scan,
    },

];






