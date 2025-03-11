'use client';

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRightIcon, Building, MessageSquare, UserCheck, UserRoundCheck } from 'lucide-react';
import { toast } from 'react-toastify';
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { Fade } from 'react-awesome-reveal';
import Notification from '../components/Notification/Notification';


const intialValue = {
    fristName: "",
    projectName: "",
    email: "",
    ApplicationMessage: ""
}

const Form = () => {
    const [user, setUser] = useState(intialValue);
    const router = useRouter();

    const handleSubmit = async (e: any) => {
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
                    setUser(intialValue);
                    setTimeout(() => {
                        router.push('/');
                    }, 5000);
                } else {
                    toast.error(data.message, {
                        position: 'top-right'
                    });
                    setUser(intialValue);
                }
            } else {
                toast.error("There was a problem with your request.", {
                    position: 'top-right'
                });
            }

        } catch (error) {
            console.log(error);
        }
    };


    const handleInputChange = (event: any) => {
        const { name, value } = event.target;

        return setUser((prevInfo) => ({ ...prevInfo, [name]: value }));
    };
    return (
        <>
            <form className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
                {/* First Name */}
                <Fade direction='right' delay={400} cascade damping={1e-1} triggerOnce={true}>
                    <div className='relative flex items-center'>
                        <Input
                            type='text'
                            name='fristName'
                            value={user.fristName}
                            onChange={handleInputChange}
                            className='text-black dark:text-white font-semibold'
                            placeholder='Please Enter you Name' />
                        <UserCheck className='absolute right-6' size={20} />
                    </div>
                </Fade>
                {/* Last Name */}
                <Fade direction='right' delay={600} cascade damping={1e-1} triggerOnce={true}>
                    <div className='relative flex items-center'>
                        <Input
                            type='text'
                            value={user.projectName}
                            name='projectName'
                            onChange={handleInputChange}
                            className='text-black dark:text-white font-semibold'
                            placeholder='Please Enter your project Name' />
                        <UserRoundCheck className='absolute right-6' size={20} />
                    </div>
                </Fade>
                {/* Email */}
                <Fade direction='right' delay={800} cascade damping={1e-1} triggerOnce={true}>
                    <div className='relative flex items-center'>
                        <Input
                            type='email'
                            value={user.email}
                            name='email'
                            onChange={handleInputChange}
                            className='text-black dark:text-white font-semibold'
                            placeholder='Please Enter Your Email' />
                        <Building className='absolute right-6' size={20} />
                    </div>
                </Fade>
                {/* Textarea */}
                <Fade direction='right' delay={1000} cascade damping={1e-1} triggerOnce={true}>
                    <div className='relative flex items-center'>
                        <Textarea
                            name='ApplicationMessage'
                            value={user.ApplicationMessage}
                            onChange={handleInputChange}
                            className='text-black dark:text-white font-semibold'
                            placeholder='Type Your Application Message Herr...' />
                        <MessageSquare className='absolute right-6' size={20} />
                    </div>
                </Fade>
                <Fade direction='right' delay={1200} cascade damping={1e-1} triggerOnce={true}>
                    <Button className='flex items-center gap-x-1 max-w-[165px]' >
                        Let&copy;s Talk
                        <ArrowRightIcon size={20} />
                    </Button>
                </Fade>


            </form>
            <Notification />
        </>
    )
}

export default Form

