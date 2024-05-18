import React from 'react'
import Showpeofile from '../../component/Showpeofile'
import { Link } from 'react-router-dom'
import Navbar from '../../component/Navbar'
import {motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function AboutmePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-950 flex relative">  
        <Navbar/>
        <Showpeofile value={2} text={false} position={{start:'40vw'}}/>
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
        className='w-4/6 bg-gradient-to-br from-blue-600 to-blue-900 shadow-lg rounded-s-xl border-none flex items-center justify-around p-20'>
            <div className='w-4/6 border p-10 rounded-tl-xl rounded-br-xl'>
                <div className='flex flex-col items-center text-white text-lg gap-4 mb-10 relative'>
                    <h1 className=' text-2xl absolute top-[-60px] bg-[#2252C3] px-2 rounded-full'>
                        ABOUT ME
                    </h1>
                    <p>
                        <span className='ml-10'></span>I have a strong interested in technology. I am interested in <span className='font-bold text-blue-200'>Full-Stack Developer</span>.I am fast learning constantly improving myself and never stop learning new things.
                    </p>
                </div>
                <div className='flex w-full justify-around text-white'>
                    <Link to={'/'}>
                        <button className='p-2 bg-slate-400 rounded-lg hover:bg-blue-500 transition-all shadow-xl'>
                            Home
                        </button>
                    </Link>
                    <Link to={'#'}>
                        <button  className='p-2 bg-green-700 rounded-lg hover:bg-green-600 transition-all shadow-xl'>
                            <FontAwesomeIcon icon={faFileArrowDown} className='mr-2'/> Download Resume
                        </button>
                    </Link>
                </div>
            </div>
        </motion.div>
    </div>
  )
}
