'use client';
import React, { useState } from 'react'
import { Input } from '../../ui/input'
import { Label } from '../../ui/label'
import { RiMenFill } from 'react-icons/ri'
import { Button } from '../../ui/button'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
//react awesome reveal animation
import { Fade } from "react-awesome-reveal";

const Sebscribe = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.trim()) {
            toast.error('Please enter an email address.', {
                position: 'top-right',
            });
            return;
        }

        // If email is provided, show success toast
        toast.success('Subscription successful!', {
            position: 'top-right',
        });

        // Clear input after successful submission
        setEmail('');
    };


    const subcribeButtonDiv = 'flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12 mt-4';
    return (
        <>
            <Fade direction='up' delay={1000} cascade damping={1e-1} triggerOnce={true}>
                <form onSubmit={handleSubmit}>
                    <div className={subcribeButtonDiv}>
                        <div className='flex w-full gap-x-4'>
                            <Label className='sr-only'>Email Address</Label>
                            <Input
                                type='email'
                                name='email'
                                className='dark:placeholder:text-white'
                                placeholder='Enter Your Email ...'
                                value={email}
                                onChange={(e) => {
                                    console.log('Current Email:', e.target.value);
                                    setEmail(e.target.value);
                                }}
                            />
                            <Button type='submit' className='gap-x-2 bg-black'>
                                Subscribe <RiMenFill size={18} />
                            </Button>

                        </div>
                        {/* socials icons */}
                    </div>
                </form>
            </Fade>
        </>
    )
}

export default Sebscribe; 