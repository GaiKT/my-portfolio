import React from 'react'
import Showpeofile from '../../component/Showpeofile'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../../component/Navbar'
import { motion } from 'framer-motion'

export default function ContactmePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-950 flex relative">
        <Navbar />
        <Showpeofile width={'2'} text={false} position={{start:'40vw'}}/>
        <motion.div 
            initial={{
                opacity: 0.5,
                x: '40vw',
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            transition={{
                type: 'tween',
                ease: 'anticipate',
                duration: 0.85
            }}        
        className='w-5/6 bg-gradient-to-br from-blue-600 to-blue-900 shadow-lg rounded-s-xl border-none flex items-center justify-around p-20'>
            <div className='w-5/6 border p-10 rounded-tl-xl rounded-br-xl'>
                <div className='flex flex-col items-center text-white text-lg gap-4 mb-10 relative'>
                    <h1 className='text-2xl absolute top-[-60px] bg-[#2252C3] px-2 rounded-full'>
                        CONTACT DETAILS
                    </h1>
                    <div className='flex flex-col gap-4 w-full justify-center items-center'>
                        <p className='w-2/4 border py-1 rounded-md'>
                            <span className='py-2 px-3 rounded-md bg-blue-300'><FontAwesomeIcon icon={faEnvelope}/></span> natthapnggai4@gmail.com
                        </p>
                        <p className='w-2/4 border py-1 rounded-md'>
                            <span className='py-2 px-3 rounded-md bg-blue-300'><FontAwesomeIcon icon={faPhone}/></span> 061-404-1994
                        </p>
                        <p className='w-2/4 border py-1 rounded-md'>
                            <span className='py-2 px-3 rounded-md bg-blue-300'><FontAwesomeIcon icon={faGithub}/></span><a href="https://github.com/GaiKT" > GitHub Profile</a>
                        </p>
                        <p className='w-2/4 border py-1 rounded-md'>
                            <span className='py-2 px-3 rounded-md bg-blue-300'><FontAwesomeIcon icon={faLinkedin}/></span><a href="https://www.linkedin.com/in/natthapong-kamtong-235aa92a8/" > Linkedin Profile</a>
                        </p>
                    </div>
                </div>
                <Link to={'/'} className='p-2 bg-white rounded-lg hover:bg-blue-500 transition-all hover:shadow-xl'>
                    Comeback Home
                </Link>
            </div>
        </motion.div>
    </div>
  )
}
