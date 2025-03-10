"use client";

import { useParams } from "next/navigation";
import { servicesData } from "@/lib/data";

const ServiceDetails = () => {
    const { id } = useParams();

    // Find the service by slug (or ID if using numeric paths)
    const service = servicesData.find((service) => service.id === id || service.slug === id);

    if (!service) {
        return <div className="text-center text-red-500">Service not found!</div>;
    }

    return (
        <div className="max-w-3xl mx-auto p-10">
            <div className="text-3xl font-bold   uppercase   bg-gradient-to-r  from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                {service.title}
            </div>
            <p className="mt-4 text-lg text-gray-600">{service.description}</p>
            <p className="mt-4 text-lg text-gray-600">
                {`In today's digital world, staying updated with the latest trends in ${service.title} is essential. Learning about new frameworks, tools, and best practices can help developers and designers create better experiences.`}
            </p>
        </div>
    );
};

export default ServiceDetails;
