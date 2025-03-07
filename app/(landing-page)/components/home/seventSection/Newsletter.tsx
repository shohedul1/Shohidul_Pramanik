'use client';
import { Fade } from "react-awesome-reveal";
import { HandRaisedIcon } from '@heroicons/react/24/solid'
import { CalendarDaysIcon } from 'lucide-react'
import React from 'react'
import Sebscribe from "../fristSection/Sebscribe";

const Newsletter = () => {
    const grid = 'mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2';
    return (
        <section className="container">
            <div className='relative bg-tertiary overflow-hidden py-16 sm:py-24 lg:py-32'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>

                    <div className={grid}>
                        <div className='max-w-xl lg:max-w-lg'>
                            <Fade direction='left' delay={400} cascade damping={1e-1} triggerOnce={true}>
                                <h2 className="text-4xl" >
                                    Web Knowledge
                                </h2>
                            </Fade>

                            <Fade direction='left' delay={600} cascade damping={1e-1} triggerOnce={true}>
                                <p className='mt-4 text-lg leading-8 subtitle'>
                                    Want to master full-stack development? Get the latest insights on MERN stack, React best practices, and real-world projects delivered straight to your inbox.
                                </p>
                            </Fade>

                            <Fade direction='left' delay={800} cascade damping={1e-1} triggerOnce={true}>
                                <Sebscribe />
                            </Fade>

                        </div>
                        <dl className='grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2'>
                            <Fade direction='right' delay={1000} cascade damping={1e-1} triggerOnce={true}>
                                <div className='flex flex-col items-start'>
                                    <div className='bg-primary p-2 ring-1 ring-white/10 rounded-full'>
                                        <CalendarDaysIcon className='h-6 w-6 text-white' />
                                    </div>
                                    <dt className='mt-4 font-semibold text-muted-foreground'>Data Protection
                                    </dt>
                                    <dd className='mt-2 leading-7'>
                                        Learn about modern security practices, data privacy techniques, and strategies to keep your applications safe from cyber threats
                                    </dd>
                                </div>
                            </Fade>
                            <Fade direction='right' delay={1200} cascade damping={1e-1} triggerOnce={true}>
                                <div className='flex flex-col items-start'>
                                    <div className='bg-primary p-2 ring-1 ring-white/10 rounded-full'>
                                        <HandRaisedIcon className='h-6 w-6 text-white' />
                                    </div>
                                    <dt className='mt-4 font-semibold text-muted-foreground'>
                                        Tech Insights
                                    </dt>
                                    <dd className='mt-2 leading-7'>
                                        Stay updated with the latest trends in web development, programming languages, and emerging technologies to enhance your skills.
                                    </dd>
                                </div>

                            </Fade>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter