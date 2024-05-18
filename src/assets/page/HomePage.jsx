import React from 'react'
import Showpeofile from '../../component/Showpeofile'
import MenuLists from '../../component/menuLists'
import Navbar from '../../component/Navbar'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-950 flex relative overflow-hidden">
        <Navbar />
        <Showpeofile value={4} text={true} position={{start: '0' , end : '30vw'}}/>
        <motion.div 
          initial={{
            opacity : 0.5,
            x: 0,
          }}
          animate={{
            opacity: 1,
            x: '30vw',
          }}
          transition={{
              type: 'tween',
              ease: 'anticipate',
              duration: 0.85
          }}        
          className='w-full bg-gradient-to-br from-blue-600 to-blue-900 shadow-lg rounded-s-xl border-none flex'>
          <div className='flex-1 flex flex-col justify-center items-center'>
            <MenuLists/>
          </div>
          <div className='flex-1'></div>
        </motion.div>

    </div>
  )
}
