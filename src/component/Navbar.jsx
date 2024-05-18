import React from 'react'
import ContactMe from './ContactMe'

export default function Navbar() {
  return (
    <nav className='absolute top-0 w-full flex text-white text-2xl pl-20 py-10 justify-between items-center z-50'>
        <a href='/' className='font-bold'>PORTFOLIO.</a>
        <ContactMe/>
    </nav>
  )
}
