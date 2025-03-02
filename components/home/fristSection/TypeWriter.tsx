import Typewriter from 'typewriter-effect';
import React, { useRef } from 'react';

const TypeWriter = () => {
    const typewriterRef = useRef<any>(null);

    return (
        <div
            className="text-lg font-bold mb-2 w-full h-[150px] border p-5"
            onMouseEnter={() => typewriterRef.current?.pause()}
            onMouseLeave={() => typewriterRef.current?.start()}
        >
            <Typewriter
                onInit={(typewriter) => {
                    typewriterRef.current = typewriter;
                    typewriter
                        .typeString('<span class="text-lime-700">Proficient in React.js, Next.js, TailwindCSS, shadcn/ui, Bootstrap, Material UI, and Framer Motion, ensuring highly interactive UI/UX design.</span>')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('<span class="text-blue-400">State Management: Experienced in Redux, Redux Toolkit, Zustand, and React Context API for efficient global state management.</span>')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('<span class="text-red-400">Backend Development: Skilled in Node.js, Express.js, and MongoDB, building secure and scalable applications.</span>')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('<span class="text-lime-400">API and Security: Expertise in RESTful APIs, authentication systems (JWT, OAuth), and web security best practices.</span>')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('<span class="text-yellow-400">Performance Optimization: Focused on fast loading speeds, SEO, and responsive design for an enhanced user experience.</span>')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('<span class="text-purple-400">Project Deployment: Familiar with Vercel, Render, and Firebase, ensuring efficient and reliable hosting solutions.</span>')
                        .pauseFor(2000)
                        .deleteAll()
                        .start();
                }}
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 10,
                    wrapperClassName: "custom-typewriter"
                }}
            />
        </div>
    );
};

export default TypeWriter;
