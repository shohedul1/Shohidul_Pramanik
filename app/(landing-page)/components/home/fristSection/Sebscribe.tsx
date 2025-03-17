'use client';
import React, { useState } from 'react'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Fade } from "react-awesome-reveal";
import SubscriptButton from '../../MainButton/SubscriptButton';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

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
                                className='dark:placeholder:text-white outline-none border border-red-400'
                                placeholder='Enter Your Email ...'
                                value={email}
                                onChange={(e) => {
                                    console.log('Current Email:', e.target.value);
                                    setEmail(e.target.value);
                                }}
                            />
                            
                            <SubscriptButton type={"submit"} text='Subscribe'/>

                        </div>
                        {/* socials icons */}
                    </div>
                </form>
            </Fade>
        </>
    )
}

export default Sebscribe; 