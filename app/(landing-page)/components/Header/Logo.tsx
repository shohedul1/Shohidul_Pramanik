'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaHome } from "react-icons/fa";


const Logo = () => {
  return (
    <>
      <Link href={'/'}>
        <div className="relative w-full m-5 p-[2px]  rounded-full overflow-hidden
                before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,#88880c,#5550cc,#33cc33,#0099ff,#999,#fff)] 
                before:animate-custom-spin before:rounded-full before:z-0 before:will-change-transform"
        >
          <button className="relative w-full px-2 hover:bg-blue-600 dark:hover:bg-blue-600  bg-white dark:bg-gray-800 dark:text-white text-black   z-10 flex flex-col  items-center  transition-all  hover:text-white p-2 border rounded-full  ">
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.1 }}
              className='flex gap-1 text-red-300 font-bold'
            >
              SIT <span className='text-amber-400'>DevAcademy</span>
            </motion.p>
            <div>
              <FaHome className="text-lime-500  w-8 h-8 rounded-md" />
            </div>

          </button>

        </div>

      </Link>

    </>
  )
}

export default Logo
