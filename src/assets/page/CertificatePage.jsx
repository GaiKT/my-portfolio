import React from 'react'
import Showpeofile from '../../component/Showpeofile'
import { Link } from 'react-router-dom'
import SQLCer from '../img/SQLcer.png'
import NTDBCer from '../img/NotionDBcer.png'
import Navbar from '../../component/Navbar'
import { motion } from 'framer-motion'

export default function CertificatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-950 flex relative">
        <Navbar/>
        <Showpeofile width={2} text={false} position={{start:'40vw'}}/>
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
        className='w-5/6 bg-gradient-to-br from-blue-600 to-blue-900 shadow-lg rounded-s-xl flex items-center justify-around p-20'>
            <div className='w-full border p-10 rounded-tl-xl rounded-br-xl mt-14'>
                <div className='flex flex-col items-center text-white text-lg gap-4 mb-10 relative'>
                    <h1 className='text-2xl absolute top-[-60px] bg-[#2252C3] px-2 rounded-full'>
                        CETIFICATE
                    </h1>
                    <div className='grid grid-cols-3 gap-5'>
                        <div className='p-2 border rounded-lg text-center hover:shadow-lg hover:bg-blue-400 hover:text-blue-950 cursor-pointer hover:scale-105 transition-all'>
                            <img src={SQLCer} width={300} className='rounded-lg mb-2'/>
                            <p>Basic Programming</p>
                        </div>
                        <div className='p-2 border rounded-lg text-center hover:shadow-lg hover:bg-blue-400 hover:text-blue-950 cursor-pointer hover:scale-105 transition-all'>
                            <img src={SQLCer} width={300} className='rounded-lg mb-2'/>
                            <p>Front-end Developer</p>
                        </div>   
                        <div className='p-2 border rounded-lg text-center hover:shadow-lg hover:bg-blue-400 hover:text-blue-950 cursor-pointer hover:scale-105 transition-all'>
                            <img src={NTDBCer} width={300} className='rounded-lg mb-2'/>
                            <p>Notion Database</p>
                        </div>   
                        <div className='p-2 border rounded-lg text-center hover:shadow-lg hover:bg-blue-400 hover:text-blue-950 cursor-pointer hover:scale-105 transition-all'>
                            <img src={SQLCer} width={300} className='rounded-lg mb-2'/>
                            <p>Essential SQL</p>
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
  )
}
