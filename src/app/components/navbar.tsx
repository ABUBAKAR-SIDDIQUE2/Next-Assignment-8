import { ModeToggle } from '@/components/ui/toogleMode'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='w-full max-w-4xl relative flex items-center justify-between mx-auto px-5 py-4 border-b border-x rounded-b-lg dark:border-primary border-gray-400 '>
        <Link href={'/'} className='font-extrabold text-3xl'>ABUBAKAR<span className='dark:text-primary text-gray-400'>Blog</span></Link>
        <ModeToggle/>
    </div>
  )
}

export default Navbar