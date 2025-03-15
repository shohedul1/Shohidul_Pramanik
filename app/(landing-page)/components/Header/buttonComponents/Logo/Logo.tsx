'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaHome } from "react-icons/fa";


const Logo = () => {
  return (
    <>
      <Link href={'/'}>
        <div className="relative w-[70px] h-[70px] justify-center flex items-center rounded-full overflow-hidden
                before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,#88880c,#5550cc,#33cc33,#0099ff,#999,#fff)] 
                before:animate-custom-spin before:rounded-full before:z-0 before:will-change-transform"
        >
          <button className="relative w-[60px] h-[60px] hover:bg-blue-600 dark:hover:bg-blue-600  bg-white dark:bg-gray-800 dark:text-white text-black z-10 flex flex-col justify-center  items-center  transition-all  hover:text-white border rounded-full  ">
            <div>
              <FaHome className="text-lime-500  w-8 h-8 rounded-md" />
            </div>
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.1 }}
              className='flex gap-1 text-red-300 font-bold'
            >
              SIT
            </motion.p>

          </button>

        </div>

      </Link>

    </>
  )
}

export default Logo
