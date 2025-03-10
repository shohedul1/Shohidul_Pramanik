import { servicesData } from '@/lib/data';
import Link from 'next/link';
import React from 'react';
import { FaCheckCircle, FaStar } from 'react-icons/fa';

const whyChooseUsData = [
    { id: 1, text: "4+ Years of Experience" },
    { id: 2, text: "Modern & Responsive Design" },
    { id: 3, text: "Fast & Secure Web Applications" },
    { id: 4, text: "Client Satisfaction Guaranteed" },
    { id: 5, text: "Cutting-Edge Technologies" },
    { id: 6, text: "24/7 Support & Maintenance" },
    { id: 7, text: "SEO Optimized Websites" },
    { id: 8, text: "Custom Feature Development" },
    { id: 9, text: "Dedicated Client Support & Communication" },
    { id: 10, text: "Flexible Pricing & Packages" },
    { id: 11, text: "On-Time Delivery with Quality Assurance" },
    { id: 12, text: "Freelance & Long-Term Contract Options" },
    { id: 13, text: "Expertise in MERN Stack Development" },
    { id: 14, text: "Optimized Code for Performance & Scalability" },
    { id: 15, text: "Cloud Integration (AWS, Firebase, Cloudinary)" },
    { id: 16, text: "Cross-Browser & Mobile-Friendly Compatibility" },
    { id: 17, text: "Proficiency in Next.js for SSR & SEO" },
    { id: 18, text: "Version Control & CI/CD Integration (Git, GitHub, Vercel)" },
    { id: 19, text: "AI & Chatbot Integration for Smart Solutions" },
    { id: 20, text: "Strong Problem-Solving & Debugging Skills" },
];

const testimonials = [
    { id: 1, text: "SIT DevAcademy transformed our business with a sleek, modern website. Highly recommend!", name: "John Doe", title: "CEO", rating: 5 },
    { id: 2, text: "Their API integration was seamless and improved our workflow significantly.", name: "Jane Smith", title: "CTO", rating: 4 },
    { id: 3, text: "The team delivered a top-notch product with exceptional customer support.", name: "Sarah Lee", title: "Marketing Manager", rating: 4 },
    { id: 4, text: "Their attention to detail and fast response time was amazing.", name: "Michael Brown", title: "Product Manager", rating: 3 },
    { id: 5, text: "Highly skilled team! The project was completed on time and exceeded expectations.", name: "Emily Davis", title: "Operations Head", rating: 5 },
    { id: 6, text: "Great experience working with SIT DevAcademy. Highly recommended for custom web solutions.", name: "Chris Johnson", title: "Founder", rating: 4 },
    // Add more testimonials if needed
];

const Page = () => {
    return (
        <div className="mb-10">
            <div className="mx-auto container flex flex-col gap-10 px-4 md:px-10">

                {/* Hero Section */}
                <div className="flex flex-col gap-4 text-center">
                    <h1 className="text-xl md:text-5xl uppercase font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                        Welcome to SIT DevAcademy Client Services
                    </h1>
                    <p className="text-sm md:text-2xl text-black font-bold">
                        🚀 Grow Your Business with Expert Web Development!
                    </p>
                    <p className="text-black text-sm md:text-lg font-medium">
                        📌 We build high-quality, modern, and scalable web applications. Check out our services & portfolio!
                    </p>
                </div>

                {/* Why Choose Us Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-xl md:text-4xl uppercase font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                            Why Choose Us?
                        </h2>
                        <div className="flex flex-col gap-3 text-black text-lg font-medium">
                            {whyChooseUsData.map((item) => (
                                <div key={item.id} className="flex items-center gap-3">
                                    <FaCheckCircle className="text-green-600" />
                                    {item.text}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {servicesData.map((item, index) => (
                            <Link href={`/details/${item.id}`} key={index}>
                                <div className="p-5 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                                    <item.icon className="text-3xl text-indigo-500 dark:text-indigo-400" />
                                    <h3 className="font-semibold text-lg mt-2 text-black dark:text-white">{item.title}</h3>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">{item.slug}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Map only first 5 testimonials */}
                    {testimonials.slice(0, 5).map((testimonial) => (
                        <div key={testimonial.id} className="p-5 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                            {/* Display rating */}
                            <div className="flex justify-center mb-3">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar
                                        key={index}
                                        className={`text-yellow-500 text-3xl ${index < testimonial.rating ? 'filled' : 'empty'}`}
                                    />
                                ))}
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                                "{testimonial.text}"
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-100 font-semibold mt-2">
                                — {testimonial.name}, {testimonial.title}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call to Action Section */}
                <div className="text-center flex flex-col gap-5">
                    <h2 className="text-xl md:text-3xl font-semibold text-indigo-600 dark:text-indigo-400">
                        Ready to Get Started?
                    </h2>
                    <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 ">
                        Let&copy;s build something amazing together! Click below to place an order.
                    </p>
                   <div>
                   <Link href={"/contact"} className=" bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:scale-105 transition">
                        🚀 Order Now
                    </Link>
                   </div>
                </div>

            </div>
        </div>
    );
};

export default Page;
