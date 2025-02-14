"use client"; // Ensure this is a Client Component

import { useParams } from "next/navigation";

const servicesData = {
    "web-development": {
        title: "Web Development",
        description: `Web development is the backbone of the modern digital world. It involves creating dynamic and interactive websites using technologies like HTML, CSS, JavaScript, React, and Next.js. 
        With the increasing demand for web applications, developers focus on responsive design, accessibility, and performance optimization. 
        The process includes front-end development (UI/UX), back-end development (server-side logic), and full-stack development (combining both). 
        Keeping up with trends such as serverless computing, JAMstack, and AI-driven interfaces is essential for modern web developers. 
        By leveraging frameworks like Next.js and TailwindCSS, developers can build fast, scalable, and SEO-friendly web applications that provide excellent user experiences.`
    },
    "backend-development": {
        title: "Backend Development",
        description: `Backend development focuses on building robust server-side applications that power the web. 
        Technologies like Node.js, Express.js, and MongoDB allow developers to create secure and scalable APIs that handle user authentication, database management, and real-time data processing. 
        A strong backend is crucial for ensuring seamless communication between the front end and databases. 
        Security best practices, such as hashing passwords, using JWT authentication, and preventing SQL injection, are essential for backend developers. 
        Microservices, GraphQL, and serverless functions are becoming popular choices for building efficient backend systems in modern web applications.`
    },
    "ui-ux-design": {
        title: "UI/UX Design",
        description: `UI/UX design plays a crucial role in creating engaging and user-friendly applications. 
        A well-designed user interface (UI) ensures smooth navigation, while a strong user experience (UX) keeps users engaged. 
        UI/UX designers use tools like Figma, Adobe XD, and Sketch to create wireframes and prototypes. 
        Design principles such as contrast, balance, and accessibility are key to ensuring inclusivity. 
        With the rise of dark mode, neumorphism, and micro-interactions, UI/UX design continues to evolve. 
        A focus on user research, A/B testing, and iterative design helps in crafting better digital experiences that enhance usability and conversion rates.`
    },
};

const ServiceDetails = () => {
    const { id } = useParams();
    const service = servicesData[id as keyof typeof servicesData];

    if (!service) {
        return <div className="text-center text-red-500">Service not found!</div>;
    }

    return (
        <div className="max-w-3xl mx-auto p-10">
            <h1 className="text-3xl font-bold">{service.title}</h1>
            <p className="mt-4 text-lg text-gray-600">{service.description}</p>
            <p className="mt-4 text-lg text-gray-600">
                {`In today's digital world, staying updated with the latest trends in ${service.title} is essential. Learning about new frameworks, tools, and best practices can help developers and designers create better experiences. Whether it's building a powerful backend system, designing an intuitive user interface, or developing a scalable web application, mastering ${service.title} opens doors to endless possibilities.`}
            </p>
        </div>
    );
};

export default ServiceDetails;
