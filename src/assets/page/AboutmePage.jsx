import React from 'react'
import Showpeofile from '../../component/Showpeofile'
import { Link } from 'react-router-dom'
import Navbar from '../../component/Navbar'
import {motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import ButtonDownload from '../../component/ButtonDownload';

export default function AboutmePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-950 flex relative">  
        <Navbar/>
        <Showpeofile text={false} position={{start:'40vw'}}/>
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
            <div className='w-5/6 border p-10 rounded-tl-xl rounded-br-xl'>
                <div className='flex flex-col items-center text-white text-lg gap-4 mb-10 relative'>
                    <h1 className=' text-2xl absolute top-[-60px] bg-[#2252C3] px-2 rounded-full'>
                        ABOUT ME
                    </h1>
                    <div className='flex flex-col gap-5 text-sm font-extralight'>
                        <p className='indent-5'>
                            I am passionate about technology and aspire to excel as a <span className='font-bold'>Full-Stack Developer</span>. I am a quick learner and dedicated to continuous self-improvement and lifelong learning.
                        </p>
                        <p className='indent-5'>
                            My career goal is to become a proficient programmer, capable of developing applications that serve a large user base and embracing challenges along the way.
                        </p>
                        <p className='indent-5'>
                            My professional journey began in electrical engineering, where I developed a strong interest in technology and computers. Driven by this passion, I taught myself programming, starting with Python and PHP, and discovered a love for coding and problem-solving. This enthusiasm led me to transition careers, and I attended a Programmer Boot Camp to formalize my skills. There, I focused on learning <span className='font-bold'>JavaScript </span>and quickly became proficient, gaining confidence in using frameworks like <span className='font-bold'>React</span> to build high-quality web applications.
                        </p>
                        <p className='indent-5'>
                            I am excited about the opportunity to bring my skills, passion, and dedication to your team and contribute to creating innovative solutions.
                        </p>
                    </div>
                </div>
                <div className='flex w-full justify-around text-white'>
                    <Link to={'/'}>
                        <button className='p-2 bg-slate-400 rounded-lg hover:bg-blue-500 transition-all shadow-xl'>
                            Home
                        </button>
                    </Link>
                    <button  className='p-2 bg-green-700 rounded-lg hover:bg-green-600 transition-all shadow-xl'>
                        <FontAwesomeIcon icon={faFileArrowDown} className='mr-2'/> <ButtonDownload/>
                    </button>
                </div>
            </div>
        </motion.div>
    </div>
  )
}
