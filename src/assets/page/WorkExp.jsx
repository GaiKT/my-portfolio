import React from 'react'
import Showpeofile from '../../component/Showpeofile'
import { Link } from 'react-router-dom'

export default function WorkExp() {
  return (
    <>
    <Showpeofile width={'2'} text={false}/>
    <div className='w-4/6 bg-gradient-to-br from-blue-600 to-blue-900 shadow-lg rounded-s-xl border-none flex items-center justify-around p-10'>
        <div className='w-4/6 border p-5 rounded-tl-xl rounded-br-xl'>
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
            <Link to={'/'} className='p-2 bg-white rounded-lg hover:bg-blue-500 transition-all hover:shadow-xl'>
                Comeback Home
            </Link>
        </div>
    </div>
</>
  )
}
