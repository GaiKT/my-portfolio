import React from 'react'
import myProFile from '../assets/img/myprofile-cutouts.png'

export default function Showpeofile({width,text}) {
  return (
    <div className={`flex justify-start items-center text-white relative pl-20 w-${width}/6`}>
      { text && 
        <div className='h-52'>
          <p className='text-blue-600 font-semibold mb-2'>Hello Everyone.</p>
          <p className='text-4xl font-extrabold'>I'M NATTHAPONG</p>
          <p className='text-4xl font-extrabold'>KAMTONG</p>
          <button className='mt-10 p-3 bg-blue-600 rounded-sm transition-all'>
              <span className='p-2 bg-black rounded-sm hover:text-xl transition-all'>FULL-STACK DEVELOPER</span>
          </button>
        </div>       
      }

        <img src={myProFile} width={400} className='absolute bottom-0 right-0 opacity-60'/>
    </div>
  )
}
