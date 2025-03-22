"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
    { id: 1, name: "John Doe", role: "Software Engineer", rating: 5, review: "The best platform to learn coding!", image: "https://res.cloudinary.com/djhjt07rh/image/upload/v1742201892/istockphoto-1729587429-612x612_ukjlaz.jpg" },
    { id: 2, name: "Sarah Lee", role: "Data Scientist", rating: 4, review: "The projects helped me land a job!", image: "https://res.cloudinary.com/djhjt07rh/image/upload/v1742201892/download_1_kcts8v.jpg" },
    { id: 3, name: "Michael Johnson", role: "Web Developer", rating: 5, review: "Excellent resources and mentorship.", image: "https://res.cloudinary.com/djhjt07rh/image/upload/v1742201892/download_1_kcts8v.jpg" },
    { id: 4, name: "Emily Davis", role: "AI Engineer", rating: 4, review: "Loved the AI modules and real-world projects.", image: "https://res.cloudinary.com/djhjt07rh/image/upload/v1742201892/portrait-smile-woman-british-flag-national-pride-support-union-jack-face-happy-girl-uk-portrait-smile-349512829_tykrkx.webp" },
    { id: 5, name: "David Kim", role: "Cybersecurity Expert", rating: 5, review: "Highly informative and engaging!", image: "https://res.cloudinary.com/djhjt07rh/image/upload/v1742201892/images_vic3sg.jpg" },
    { id: 6, name: "Sophia Martinez", role: "UI/UX Designer", rating: 4, review: "Helped me design better user experiences.", image: "https://res.cloudinary.com/djhjt07rh/image/upload/v1742201892/images_1_l7xgmk.jpg" },
    { id: 7, name: "James Anderson", role: "Cloud Engineer", rating: 5, review: "Great cloud computing courses!", image: "https://res.cloudinary.com/djhjt07rh/image/upload/v1733643193/next.js_blog_images/bqfscdxxrd5trditmphi.jpg" },
    { id: 8, name: "Olivia Brown", role: "Mobile Developer", rating: 4, review: "Helped me build my first app.", image: "https://res.cloudinary.com/djhjt07rh/image/upload/v1733644876/next.js_blog_images/dxbq1vlqhvfmrrmugura.png" },
    { id: 9, name: "Ethan Wilson", role: "Backend Developer", rating: 5, review: "Loved the in-depth backend tutorials.", image: "https://res.cloudinary.com/djhjt07rh/image/upload/v1733642496/next.js_blog_images/p2d4nlttat2q2dapf0cy.jpg" },
    { id: 10, name: "Ava Thomas", role: "Full Stack Dev", rating: 4, review: "Very helpful for beginners and experts!", image: "https://res.cloudinary.com/djhjt07rh/image/upload/v1731684736/profile_pictures/wqhuy9ulv12vlvhgpk3t.jpg" },
];

const StudentReview = () => {

    return (
        <div className={`container`}>
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-xl md:text-5xl text-center mb-6 uppercase font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                        Student Reviews
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: review.id * 0.1 }}
                            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
                        >
                            <div className="flex items-center space-x-4">
                                <img src={review.image} alt={review.name} className="w-14 h-14 rounded-full border border-gray-300 dark:border-gray-600" />
                                <div>
                                    <h3 className="font-semibold">{review.name}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{review.role}</p>
                                </div>
                            </div>

                            <div className="mt-3 flex items-center space-x-1">
                                {[...Array(review.rating)].map((_, index) => (
                                    <Star key={index} size={18} className="text-yellow-500" />
                                ))}
                            </div>

                            <p className="mt-2 text-gray-700 dark:text-gray-300">{review.review}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudentReview;