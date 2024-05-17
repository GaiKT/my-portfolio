import React from 'react'
import Showpeofile from '../../component/Showpeofile'
import { Link } from 'react-router-dom'
import SQLCer from '../img/SQLcer.png'
import NTDBCer from '../img/NotionDBcer.png'

export default function CertificatePage() {
  return (
    <>
        <Showpeofile width={'2'} text={false}/>
        <div className='w-5/6 bg-gradient-to-br from-blue-600 to-blue-900 shadow-lg rounded-s-xl border-none flex items-center justify-around p-20'>
            <div className='w-full border p-10 rounded-tl-xl rounded-br-xl'>
                <div className='flex flex-col items-center text-white text-lg gap-4 mb-10 relative'>
                    <h1 className='text-2xl absolute top-[-60px] bg-[#2252C3] px-2 rounded-full'>
                        CETIFICATE
                    </h1>
                    <div className='grid grid-cols-3 gap-5'>
                        <div className='p-2 border rounded-lg text-center hover:shadow-lg hover:bg-blue-400 hover:text-blue-950 cursor-pointer'>
                            <img src={SQLCer} width={300} className='rounded-lg mb-2'/>
                            <p>Basic Programming Certificate</p>
                        </div>   
                        <div className='p-2 border rounded-lg text-center hover:shadow-lg hover:bg-blue-400 hover:text-blue-950 cursor-pointer'>
                            <img src={NTDBCer} width={300} className='rounded-lg mb-2'/>
                            <p>Notion Database Certificate</p>
                        </div>   
                        <div className='p-2 border rounded-lg text-center hover:shadow-lg hover:bg-blue-400 hover:text-blue-950 cursor-pointer'>
                            <img src={SQLCer} width={300} className='rounded-lg mb-2'/>
                            <p>Essential SQL Certificate</p>
                        </div>   
                    </div>
                </div>
                <Link to={'/'} className='p-2 bg-white rounded-lg hover:bg-blue-500 transition-all hover:shadow-xl'>
                    Comeback Home
                </Link>
            </div>
        </div>
    </>
  )
}
