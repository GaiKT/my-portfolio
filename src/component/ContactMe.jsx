import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export default function ContactMe() {
  return (
    <div className='flex flex-col font-semibold justify-center items-center text-white w-1/3 max-md:hidden'>
    Contact Me
    <ul className='text-lg flex w-40 justify-around mt-2'>
        <li className='hover:text-xl transition-all w-5'>
            <a href="#" className='hover:text-xl transition-all w-5'><FontAwesomeIcon icon={faGithub}/></a>
        </li>
        <li className='hover:text-xl transition-all w-5'>
            <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
        </li>
        <li className='hover:text-xl transition-all w-5'>
            <a href="#"><FontAwesomeIcon icon={faPhone}/></a>
        </li>
        <li className='hover:text-xl transition-all w-5'>
            <a href="#"><FontAwesomeIcon icon={faEnvelope}/></a>
        </li>
    </ul>
</div>
  )
}
