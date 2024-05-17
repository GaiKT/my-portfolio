import React from 'react'
import Showpeofile from '../../component/Showpeofile'
import { Link } from 'react-router-dom'

export default function AboutmePage() {
  return (
    <>
        <Showpeofile width={'2'} text={false}/>
        <div className='w-4/6 bg-gradient-to-br from-blue-600 to-blue-900 shadow-lg rounded-s-xl border-none flex items-center justify-around p-20'>
            <div className='w-4/6 border p-10 rounded-tl-xl rounded-br-xl'>
                <div className='flex flex-col items-center text-white text-lg gap-4 mb-10 relative'>
                    <h1 className=' text-2xl absolute top-[-60px] bg-[#2252C3] px-2 rounded-full'>
                        ABOUT ME
                    </h1>
                    <p>
                        <span className='ml-10'></span>I have a strong interested in technology. I am interested in <span className='font-bold text-blue-200'>Full-Stack Developer</span>.I am fast learning constantly improving myself and never stop learning new things.
                    </p>
                </div>
                <Link to={'/'} className='p-2 bg-white rounded-lg hover:bg-blue-500 transition-all hover:shadow-xl'>
                    Comeback Home
                </Link>
            </div>
        </div>
    </>
  )
}
