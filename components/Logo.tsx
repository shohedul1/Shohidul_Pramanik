import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'}>
        <Image 
        src={'/logo.svg'}
        alt='logo'
        priority
        width={55}
        height={55}
        />
    </Link>
  )
}

export default Logo