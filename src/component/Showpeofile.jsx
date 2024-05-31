import React from 'react'
import myProFile from '../assets/img/myprofile-cutouts.png'
import { motion } from 'framer-motion';


export default function Showpeofile({text,position}) {
  return (
    <>
    <div className={`flex justify-start items-center relative text-white pl-20 ${ text === true ? 'w-4/6' : 'w-2/6'} max-md:hidden`}>
      { text && 
        <motion.div 
          initial={{
            opacity : 0,
            x: 0 ,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            type: 'tween',
            ease: 'anticipate',
            duration: 1
          }}
        className='h-52'>
          <p className='text-blue-600 font-semibold mb-2'>Hello Everyone.</p>
          <p className='text-4xl font-extrabold'>I'M NATTHAPONG</p>
          <p className='text-4xl font-extrabold'>KAMTONG</p>
          <button className='mt-10 p-3 bg-blue-600 rounded-sm hover:scale-110 transition-all'>
              <span className='p-2 bg-black rounded-sm'>FULL-STACK DEVELOPER</span>
          </button>
        </motion.div>    
      }
      <motion.img 
        initial={{
          x: position.start ,
        }}
        animate={{
          opacity: 1,
          x: position.end ? position.end : 0,
        }}
        transition={{
          type: 'tween',
          ease: 'anticipate',
          duration: 0.85
        }}
      src={myProFile} className='absolute bottom-0 right-0 w-96 opacity-60'/>
    </div>

    {/* respornsive mobile */}

    <div className={`mt-24 md:hidden flex flex-col gap-5 w-full justify-center pl-14`}>
      { text && 
        <motion.div 
          initial={{
            opacity : 0,
            x: 0 ,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            type: 'tween',
            ease: 'anticipate',
            duration: 1
          }}
        className='h-52 text-white'>
          <p className='text-blue-600 font-semibold mb-2'>Hello Everyone.</p>
          <p className='text-4xl font-extrabold'>I'M NATTHAPONG</p>
          <p className='text-4xl font-extrabold'>KAMTONG</p>
          <button className='mt-10 p-3 bg-blue-600 rounded-sm hover:scale-110 transition-all'>
              <span className='p-2 bg-black rounded-sm'>FULL-STACK DEVELOPER</span>
          </button>
        </motion.div>    
      }
      <motion.img 
        initial={{
          x: position.start ,
        }}
        animate={{
          opacity: 1,
          x: position.end ? position.end : 0,
        }}
        transition={{
          type: 'tween',
          ease: 'anticipate',
          duration: 0.84
        }}
      src={myProFile} className='opacity-10 w-72 ml-2'/>
    </div>
    </>
    
  )
}
