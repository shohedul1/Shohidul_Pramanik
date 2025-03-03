// data.ts
import { Smile, Scan, Bird } from "lucide-react";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase,
    FaPython, FaCube, FaKey
} from "react-icons/fa";
import { TbBrandNextjs, TbBrandRedux } from "react-icons/tb";
import { SiTailwindcss, SiTypescript, SiMongodb, SiExpress, SiFirebase, SiAuth0 } from "react-icons/si";
import { RiAtFill } from "react-icons/ri"; // Use RiAtFill instead of RiJwtFill


// Frontend Skills
export const languages = [
    { id: 1, name: 'HTML', bgColor: '#E34F26', icon: FaHtml5 },
    { id: 2, name: 'CSS', bgColor: '#1572B6', icon: FaCss3Alt },
    { id: 3, name: 'JavaScript', bgColor: '#F7DF1E', icon: FaJs },
    { id: 4, name: 'React', bgColor: '#61DAFB', icon: FaReact },
    { id: 5, name: 'Next.js', bgColor: '#000000', icon: TbBrandNextjs },
    { id: 6, name: 'TypeScript', bgColor: '#007ACC', icon: SiTypescript },
    { id: 7, name: 'TailwindCSS', bgColor: '#38BDF8', icon: SiTailwindcss },
    { id: 8, name: 'Bootstrap', bgColor: '#7952B3', icon: FaCube },
    { id: 9, name: 'Material-UI', bgColor: '#0081CB', icon: FaCube },
    { id: 10, name: 'ShadCN/UI', bgColor: '#111827', icon: FaCube },
    { id: 11, name: 'Redux', bgColor: '#764ABC', icon: TbBrandRedux },
    { id: 12, name: 'Zustand', bgColor: '#FFCA28', icon: FaCube },
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
];


export const servicesData = [
    {
        slug: "web-development",
        icon: Smile,  // Pass the component itself, not as JSX
        title: "Web Development",
        description:
            "Build responsive, scalable, and modern websites using the latest technologies like React, Next.js, and TailwindCSS",
    },
    {
        slug: "backend-development",
        icon: Scan,  // Pass the component itself, not as JSX
        title: "Backend Development",
        description:
            "Develop robust APIs and backend systems using Node.js, Express.js, and MongoDB for seamless data management",
    },
    {
        slug: "ui-ux-design",
        icon: Bird,  // Pass the component itself, not as JSX
        title: "UI/UX Design",
        description: "Create user-friendly and visually appealing designs that ensure great user experiences.",
    },
];
