"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const reviews = [
    { id: 1, name: "John Doe", role: "CEO, TechCorp", rating: 5, review: "Amazing service! Highly recommend.", image: "https://res.cloudinary.com/djhjt07rh/image/upload/v1731684616/profile_pictures/sim74fyemvwylcfwz0ji.jpg" },
    { id: 2, name: "Sarah Lee", role: "Founder, AI Startups", rating: 4, review: "Great experience working with the team.", image: "https://res.cloudinary.com/djhjt07rh/image/upload/v1731684736/profile_pictures/wqhuy9ulv12vlvhgpk3t.jpg" },
    { id: 3, name: "Michael Johnson", role: "CTO, Web Solutions", rating: 5, review: "Their expertise helped scale our platform.", image: "https://res.cloudinary.com/djhjt07rh/image/upload/v1730634814/profile_pictures/ynqzx5ymox22ogcsaxcp.png" },
    { id: 4, name: "Emily Davis", role: "Marketing Head, E-commerce", rating: 4, review: "Professional and reliable.", image: "https://res.cloudinary.com/djhjt07rh/image/upload/v1742201892/istockphoto-1729587429-612x612_ukjlaz.jpg" },
    { id: 5, name: "David Kim", role: "Lead Developer, Fintech", rating: 5, review: "One of the best collaborations we've had!", image: "https://res.cloudinary.com/djhjt07rh/image/upload/v1742201892/portrait-smile-woman-british-flag-national-pride-support-union-jack-face-happy-girl-uk-portrait-smile-349512829_tykrkx.webp" },
    { id: 6, name: "Sophia Martinez", role: "Product Manager, SaaS", rating: 4, review: "Helped us improve our UX significantly.", image: "https://res.cloudinary.com/djhjt07rh/image/upload/v1742201892/images_vic3sg.jpg" },
    { id: 7, name: "James Anderson", role: "Director, CloudTech", rating: 5, review: "Fast, efficient, and super skilled.", image: "https://res.cloudinary.com/djhjt07rh/image/upload/v1737173194/profile_pictures/u5nnwqlybnrrskj36xam.png" },
    { id: 8, name: "Olivia Brown", role: "Startup Founder", rating: 4, review: "Very professional and friendly.", image: "https://res.cloudinary.com/djhjt07rh/image/upload/v1742201892/images_1_l7xgmk.jpg" },
    { id: 9, name: "Ethan Wilson", role: "Business Consultant", rating: 5, review: "Exceeded expectations in every way!", image: "https://res.cloudinary.com/djhjt07rh/image/upload/v1733643193/next.js_blog_images/bqfscdxxrd5trditmphi.jpg" },
    { id: 10, name: "Ava Thomas", role: "Operations Manager", rating: 4, review: "Would definitely work with them again.", image: "https://res.cloudinary.com/djhjt07rh/image/upload/v1733642499/next.js_blog_images/zwmbw5gwlf0amzwbkkor.png" },
];

const ClientReviews = () => {
    return (
        <section className="py-10 px-5 sm:px-10 bg-gray-100 container dark:bg-gray-900 transition-colors">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-900 dark:text-white mb-6">
                    What Our Clients Say
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((client, index) => (
                        <motion.div
                            key={client.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
                        >
                            <div className="flex items-center space-x-4">
                                <Image
                                    src={client.image}
                                    alt={client.name}
                                    width={60}
                                    height={60}
                                    className="rounded-full border-2 w-[40px] h-[40px] border-blue-500 object-cover"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{client.name}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{client.role}</p>
                                </div>
                            </div>

                            <p className="mt-4 text-gray-700 dark:text-gray-300">{client.review}</p>

                            <div className="mt-4 flex items-center">
                                {[...Array(client.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="text-yellow-500" />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientReviews;
