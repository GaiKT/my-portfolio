import React from 'react'
import Showpeofile from '../../component/Showpeofile'
import { Link } from 'react-router-dom'
import Navbar from '../../component/Navbar'
import { motion } from 'framer-motion'

export default function WorkExp() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-950 flex relative max-md:hidden">
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
        className='w-4/6 bg-gradient-to-br from-blue-600 to-blue-900 shadow-lg rounded-s-xl border-none flex items-center justify-around p-10'>
            <div className='w-5/6 border p-5 rounded-tl-xl rounded-br-xl'>
                <div className='flex flex-col items-center text-white text-lg gap-4 mb-8 relative'>
                    <h1 className=' text-2xl absolute top-[-40px] bg-[#2254C7] px-2 rounded-full'>
                        WORK EXPERIENCE
                    </h1>
                    <div className='flex gap-2 flex-col'>
                        <p><span className='font-bold text-lg mr-5'>Data Center Staff</span><span className='text-sm'>2020 - Now (4 Years)</span></p>
                        <p>Internet Thailand Public Company Limited</p>
                        <div className='flex flex-col gap-4 text-blue-200 text-sm pl-4'>
                            <li><span className='font-semibold'>Ensured 24/7 Uptime :</span> Successfully maintained various data center systems to operate at all times, preventing downtime and ensuring reliability. follow ISO 27001</li>
                            <li><span className='font-semibold'>Customer Support :</span> Provided support to customers, addressing their needs promptly and efficiently, including hardware replacements and technical inspections.</li>
                            <li><span className='font-semibold'>Report Preparation : </span>Compiled comprehensive weekly, monthly, and yearly internal summary reports to track performance and identify areas for improvement.</li>
                        </div>
                        <p className='text-sm text-blue-200'>
                            <span className='mr-5'></span>With a strong background in data center management and a passion for technology, I am eager to transition into a fullstack developer role. My experience in maintaining critical systems and providing exceptional customer service, combined with my dedication to continuous learning and skill development, positions me as a versatile and motivated candidate. I am excited to contribute to innovative projects and grow within a dynamic development team.
                        </p>
                    </div>
                </div>
                    <Link to={'/'}>
                        <button className='p-2 bg-slate-400 rounded-lg hover:bg-blue-500 transition-all shadow-xl'>
                            Home
                        </button>
                    </Link>
            </div>
        </motion.div>
    </div>

    {/* respornsive mobile */}
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-950 flex relative md:hidden">
        <Navbar/>
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
        className='w-full bg-gradient-to-br from-blue-600 to-blue-900 shadow-lg rounded-s-xl border-none flex items-center justify-around mt-20'>
            <div className='w-5/6 border p-5 rounded-tl-xl rounded-br-xl'>
                <div className='flex flex-col items-center text-white text-lg gap-4 mb-8 relative'>
                    <h1 className=' text-2xl absolute top-[-40px] bg-[#2254C7] px-2 rounded-full'>
                        WORK EXPERIENCE
                    </h1>
                    <div className='flex gap-2 flex-col'>
                        <p><span className='font-bold text-lg mr-5'>Data Center Staff</span><span className='text-sm'>2020 - Now (4 Years)</span></p>
                        <p>Internet Thailand Public Company Limited</p>
                        <div className='flex flex-col gap-4 text-blue-200 text-sm pl-4'>
                            <li>Control and maintain various systems in the data center to work at all times. </li>
                            <li>Take care of and facilitate customers who come to use the data center services.</li>
                            <li>Carry out requests from customers, replace disks, take pictures of equipment, Wiring LAN cables.</li>
                            <li>Prepare weekly, monthly, yearly internal summary reports.</li>
                        </div>
                    </div>
                </div>
                    <Link to={'/'}>
                        <button className='p-2 bg-slate-400 rounded-lg hover:bg-blue-500 transition-all shadow-xl'>
                            Home
                        </button>
                    </Link>
            </div>
        </motion.div>
    </div>
    </>
  )
}
