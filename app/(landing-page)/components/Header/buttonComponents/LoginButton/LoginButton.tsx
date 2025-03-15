import React from 'react'
import { motion } from "framer-motion"
import { FaSignInAlt } from "react-icons/fa";
import Link from 'next/link';


const LoginButton = () => {
    return (
        <Link href={"/loginSignup"}>
            <div className="relative w-[75px] h-[75px] flex items-center justify-center  rounded-full overflow-hidden
        before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,#fff550,#3cb371,#33cc33,#0099ff,#ff0000,#fff)] 
        before:animate-custom-spin before:rounded-full before:z-0 before:will-change-transform"
            >
                <button className="relative w-[70px]   h-[70px] hover:bg-blue-900 dark:hover:bg-white dark:hover:text-black  bg-white dark:bg-gray-800 dark:text-white text-black z-10 flex flex-col justify-center  items-center  transition-all  hover:text-white border rounded-full  ">
                    <div>
                        <FaSignInAlt className="text-yellow-500   w-8 h-8 rounded-md" />
                    </div>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        whileHover={{ scale: 1.1 }}
                        className="font-bold"
                    >
                        Sign in
                    </motion.p>

                </button>

            </div>
        </Link>
    )
}

export default LoginButton