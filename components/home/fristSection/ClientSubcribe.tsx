'use client';

import Badge from './Badge'
import 'react-toastify/dist/ReactToastify.css'
//react awesome reveal animation
import { Fade } from "react-awesome-reveal";
import { RiBookmark3Fill, RiBodyScanFill, RiServiceFill } from 'react-icons/ri'


const ClientSubcribe = () => {
    return (
        <>

            <div className='flex items-center justify-center'>
                <div className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
                    <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>
                        {/* badge 1 */}
                        <div className='mx-auto flex max-w-xs flex-col gap-y-4'>
                            <dt className='text-base leading-7 text-muted-foreground'>Years of Experience</dt>
                            <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                                <Badge icon={<RiBookmark3Fill />}
                                    endCountNum={12}
                                    endCountText='+'
                                    badgeText=''
                                />
                            </dd>
                        </div>
                        {/* badge 2 */}
                        <div className='mx-auto flex max-w-xs flex-col gap-y-4'>
                            <dt className='text-base leading-7 text-muted-foreground'>Followers</dt>
                            <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                                <Badge icon={<RiBodyScanFill />}
                                    endCountNum={976}
                                    endCountText=''
                                    badgeText='k'
                                />
                            </dd>
                        </div>
                        {/* badge 3 */}
                        <div className='mx-auto flex max-w-xs flex-col gap-y-4'>
                            <dt className='text-base leading-7 text-muted-foreground'>Project</dt>
                            <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                                <Badge icon={<RiServiceFill />}
                                    endCountNum={79}
                                    endCountText='+'
                                    badgeText=''
                                />
                            </dd>
                        </div>
                    </Fade>
                </div>
            </div>
        </>
    )
}

export default ClientSubcribe