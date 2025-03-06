'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const Logo = () => {
  return (
    <Link href={'/'}>
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        whileHover={{ scale: 1.1 }}
        className='flex gap-1 text-red-300 font-bold'
      >
        SIT <span className='text-amber-400'>DevAcademy</span>
      </motion.p>
    </Link>
  )
}

export default Logo
