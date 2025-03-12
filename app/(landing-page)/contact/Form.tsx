'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRightIcon, Building, MessageSquare, UserCheck } from 'lucide-react';
import { toast } from 'react-toastify';
import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { Fade } from 'react-awesome-reveal';
import Notification from '../components/Notification/Notification';

// Type for form values
interface FormValues {
    fristName: string;
    projectName: string;
    email: string;
    ApplicationMessage: string;
}

const initialValue: FormValues = {
    fristName: "",
    projectName: "",
    email: "",
    ApplicationMessage: ""
};

const Form: React.FC = () => {
    const [user, setUser] = useState<FormValues>(initialValue);
    const router = useRouter();
    const textAreaRef = useRef<HTMLTextAreaElement>(null);  // Ref for textarea to adjust height

    // Handle form submission
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user);

        try {
            const response = await fetch("/api/from", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    toast.success(data.message, {
                        position: 'top-right'
                    });
                    setUser(initialValue); // Reset form values
                    setTimeout(() => {
                        router.push('/'); // Redirect after 2 seconds
                    }, 2000);
                } else {
                    toast.error(data.message, {
                        position: 'top-right'
                    });
                    setUser(initialValue); // Reset form values on failure
                }
            } else {
                toast.error("There was a problem with your request.", {
                    position: 'top-right'
                });
            }
        } catch (error) {
            console.error(error);
            toast.error("An error occurred during submission.", {
                position: 'top-right'
            });
        }
    };

    // Handle input field changes
    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setUser((prevInfo) => ({ ...prevInfo, [name]: value }));
    };

    return (
        <>
            <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
                {/* First Name */}
                <Fade direction="right" delay={400} cascade damping={1e-1} triggerOnce={true}>
                    <div className="relative flex items-center">
                        <Input
                            type="text"
                            name="fristName"
                            value={user.fristName}
                            onChange={handleInputChange}
                            className="text-black dark:text-white font-semibold"
                            placeholder="Please Enter your Name"
                        />
                        <UserCheck className="absolute right-6" size={20} />
                    </div>
                </Fade>

                {/* Email */}
                <Fade direction="right" delay={400} cascade damping={1e-1} triggerOnce={true}>
                    <div className="relative flex items-center">
                        <Input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleInputChange}
                            className="text-black dark:text-white font-semibold w-full"
                            placeholder="Please Enter Your Email"
                        />
                        <Building className="absolute right-4 sm:right-6" size={20} />
                    </div>
                </Fade>

                {/* Textarea for Application Message */}
                <Fade direction="right" delay={1000} cascade damping={1e-1} triggerOnce={true}>
                    <div className="relative flex items-center w-full">
                        <Textarea
                            ref={textAreaRef}
                            name="ApplicationMessage"
                            value={user.ApplicationMessage}
                            onChange={handleInputChange}
                            className="pl-5 pr-10"
                            placeholder="Type Your Application Message Here..."
                            rows={1}
                        />
                        <MessageSquare className="absolute right-[20px] top-5" size={20} />
                    </div>
                </Fade>

                {/* Submit Button */}
                <Fade direction="right" delay={1200} cascade damping={1e-1} triggerOnce={true}>
                    <Button className="flex items-center gap-x-1 max-w-[165px]">
                        Let&copy;s Talk
                        <ArrowRightIcon size={20} />
                    </Button>
                </Fade>
            </form>

            <Notification />
        </>
    );
};

export default Form;
