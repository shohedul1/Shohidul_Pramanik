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
import { FaStripe, FaPaypal, FaCcVisa, FaCreditCard } from "react-icons/fa"; // Use FaCreditCard for Razorpay
import { FaCheckCircle, FaRocket, FaStar, FaHeadset, FaClipboardList, FaRegHandshake } from 'react-icons/fa';


import { TbBrandNextjs, TbBrandRedux } from "react-icons/tb";
import { SiTailwindcss, SiTypescript, SiMongodb, SiExpress, SiFirebase, SiAuth0 } from "react-icons/si";
import { RiAtFill } from "react-icons/ri"; // Use RiAtFill instead of RiJwtFill




export const mySkills = {
    languages: [
        { id: 1, name: 'HTML', bgColor: '#E34F26', icon: FaHtml5 },
        { id: 2, name: 'CSS', bgColor: '#1572B6', icon: FaCss3Alt },
        { id: 3, name: 'JavaScript', bgColor: '#F7DF1E', icon: FaJs },
        { id: 4, name: 'React', bgColor: '#61DAFB', icon: FaReact },
        { id: 5, name: 'Vite', bgColor: '#61DAFB', icon: SiVite },
        { id: 6, name: 'Next.js', bgColor: '#000000', icon: TbBrandNextjs },
        { id: 7, name: 'TypeScript', bgColor: '#007ACC', icon: SiTypescript },
        { id: 8, name: 'TailwindCSS', bgColor: '#38BDF8', icon: SiTailwindcss },
        { id: 9, name: 'Bootstrap', bgColor: '#7952B3', icon: FaCube },
        { id: 10, name: 'Material-UI', bgColor: '#007FFF', icon: FaCube },
        { id: 11, name: 'ShadCN/UI', bgColor: '#1F2937', icon: FaCube },
        { id: 12, name: 'Redux', bgColor: '#764ABC', icon: TbBrandRedux },
        { id: 13, name: 'Zustand', bgColor: '#E44D26', icon: FaCube },
        { id: 14, name: 'Sass', bgColor: '#CC6699', icon: FaSass },
    ],
    backend: [
        { id: 1, name: 'Node.js', bgColor: '#339933', icon: FaNodeJs },
        { id: 2, name: 'Express.js', bgColor: '#000000', icon: SiExpress },
        { id: 3, name: 'MongoDB', bgColor: '#47A248', icon: SiMongodb },
        { id: 4, name: 'SQL', bgColor: '#003B57', icon: FaDatabase },
        { id: 5, name: 'Python', bgColor: '#3776AB', icon: FaPython },
    ],
    authentication: [
        { id: 1, name: 'JWT', bgColor: '#F7DF1E', icon: RiAtFill },
        { id: 2, name: 'Firebase Auth', bgColor: '#FFCA28', icon: SiFirebase },
        { id: 3, name: 'OAuth', bgColor: '#4285F4', icon: SiAuth0 },
        { id: 4, name: 'Session Auth', bgColor: '#0081CB', icon: FaKey },
        { id: 5, name: 'NextAuth.js', bgColor: '#0080CB', icon: FaAvianex },
        { id: 6, name: 'Clerk', bgColor: '#0080CB', icon: SiClerk },
    ],
    paymentGateways: [
        { id: 1, name: 'Stripe', bgColor: '#F7DF1E', icon: FaStripe },
        { id: 2, name: 'PayPal', bgColor: '#003087', icon: FaPaypal },
        { id: 3, name: 'Visa', bgColor: '#1A1F71', icon: FaCcVisa },
        { id: 4, name: 'Razorpay', bgColor: '#5461FF', icon: FaCreditCard },
    ]
};


export const servicesData = [
    {
        id: "1",
        title: "Web Development",
        slug: "Build responsive, scalable, and modern websites using the latest technologies like React, Next.js, and TailwindCSS",
        description: `We specialize in building high-performance websites using modern technologies such as React, Next.js, and TailwindCSS. Our focus is on creating fast, responsive, and SEO-friendly websites that provide an excellent user experience.`,
        icon: Bird,
    },
    {
        id: "2",
        title: "Custom Web Applications",
        slug: "Business management tools, Custom dashboards & CRM, AI-powered automation",
        description: `We develop tailored web applications to meet your business needs, from custom dashboards and CRM systems to AI-powered automation tools. Our solutions improve efficiency and enhance user engagement.`,
        icon: FaRocket,
    },
    {
        id: "3",
        title: "API Development & Integration",
        slug: "Secure API connections, Payment gateway integration, Third-party API implementation",
        description: `We build and integrate secure APIs to enable seamless communication between your applications. Whether it's payment gateways, third-party services, or internal API solutions, we ensure smooth and efficient connectivity.`,
        icon: FaClipboardList,
    },
    {
        id: "4",
        title: "Performance Optimization",
        slug: "Speed optimization, Security enhancement, SEO improvements",
        description: `We enhance website speed, security, and search engine performance. Our optimization techniques include code splitting, lazy loading, caching strategies, and security best practices to ensure a seamless experience.`,
        icon: Bird,
    },
    {
        id: "5",
        title: "Backend Development",
        slug: "Develop robust APIs and backend systems using Node.js, Express.js, and MongoDB for seamless data management",
        description: `We build powerful backend systems using Node.js, Express.js, and MongoDB. Our backend solutions ensure efficient data management, authentication, and real-time functionality for web applications.`,
        icon: Smile,
    },
    {
        id: "6",
        title: "UI/UX Design",
        slug: "Create user-friendly and visually appealing designs that ensure great user experiences.",
        description: `We create visually appealing and user-friendly designs that enhance the overall experience. Using tools like Figma and Adobe XD, we focus on usability, accessibility, and modern design trends.`,
        icon: Scan,
    },
    {
        id: "7",
        title: "E-commerce Solutions",
        slug: "Custom online stores, Secure payment gateways, Scalable e-commerce platforms",
        description: `We develop powerful and secure e-commerce platforms tailored to your business needs. From custom online stores to seamless payment gateway integration, we ensure a smooth and scalable shopping experience for your customers.`,
        icon: FaRegHandshake,
    },
    {
        id: "8",
        title: "24/7 Client Support",
        slug: "Dedicated customer service, Real-time issue resolution, Ongoing maintenance and updates",
        description: `Our dedicated support team is available 24/7 to assist you with any technical issues, updates, or maintenance. We prioritize client satisfaction by ensuring seamless operations and immediate solutions whenever you need them.`,
        icon: FaHeadset,
    }

];



export const serviceLinks = [
    { href: '/clientService', label: 'Client Service' },
    { href: '/studentService', label: 'Student Service' },
    { href: '/teacherService', label: 'Teacher Service' },
    { href: '/adminService', label: 'Admin Service' }
];










