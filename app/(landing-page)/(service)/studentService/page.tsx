"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ApplyFormModal from "./components/ApplyFormModal/ApplyFormModal";

const StudentPage = () => {
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const plans = [
        { duration: "3 Months", price: "12,000 TK", languages: ["HTML", "CSS", "JavaScript"] },
        { duration: "6 Months", price: "24,000 TK", languages: ["React.js", "Node.js", "MongoDB"] },
        { duration: "1 Year", price: "40,000 TK", languages: ["React", "Node.js", "TypeScript", "Next.js"] },
    ];

    const handleApplyClick = (duration: string) => {
        setSelectedPlan(duration);
        setIsModalOpen(true);
    };

    return (
        <div className="container bg-gray-100 dark:bg-gray-900 p-6">
            {/* Header */}
            <motion.header
                className="text-center text-white bg-blue-600 py-6 rounded-md shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl font-bold">Join SIT DevAcademy</h1>
                <p className="text-lg mt-2">Grow Your Full Stack Career with Us</p>
            </motion.header>

            {/* Course Plans */}
            <section className="max-w-6xl mx-auto mt-12">
                <motion.h2
                    className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Choose Your Enrollment Plan
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <Card className="shadow-md hover:shadow-xl transition-all py-5 px-5">
                                <CardHeader>
                                    <CardTitle className="text-xl">{plan.duration}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg font-bold text-gray-700 dark:text-gray-300">{plan.price}</p>
                                    <ul className=" text-gray-600 dark:text-gray-400">
                                        {plan.languages.map((lang, idx) => (
                                            <li key={idx}>✅ {lang}</li>
                                        ))}
                                    </ul>

                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                                        className="w-full  flex items-center justify-center flex-col"

                                    >
                                        <Button
                                            onClick={() => handleApplyClick(plan.duration)}
                                            className="mt-4 w-full py-2 font-bold text-xl"
                                        >
                                            Apply Now
                                        </Button>
                                        {/* <MainButton text="Submit Application" type="submit" className="w-full" /> */}
                                    </motion.div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Apply Form Modal */}
            <ApplyFormModal open={isModalOpen} setOpen={setIsModalOpen} selectedPlan={selectedPlan} />
        </div>
    );
};

export default StudentPage;