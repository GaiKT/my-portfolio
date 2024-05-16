import React from 'react'

export default function MenuLists() {
  return (
        <div className='w-2/6 bg-gradient-to-br from-blue-600 to-blue-900 shadow-lg rounded-s-xl border-none flex flex-col items-center justify-center'>
            <p className='font-bold text-xl text-white text-center mb-2'>Menu Lists</p>
            <ul className='flex flex-col gap-3 text-gray-300 font-semibold p-5 rounded-lg bg-blue-700 shadow-lg w-2/5'>
            <li className='hover:cursor-pointer hover:ml-2 hover:text-white transition-all'>
                <a href="/aboutme">ABOUT ME</a>
            </li>
            <li className='hover:cursor-pointer hover:ml-2 hover:text-white transition-all'>
                <a href="#">MY PROJECT</a>
            </li>
            <li className='hover:cursor-pointer hover:ml-2 hover:text-white transition-all'>
                <a href="/workexp">WORK EXP</a>
            </li>
            <li className='hover:cursor-pointer hover:ml-2 hover:text-white transition-all'>
                <a href="#">PERSONAL SKILLS</a>
            </li>
            <li className='hover:cursor-pointer hover:ml-2 hover:text-white transition-all'>
                <a href="#">CERTIFICATE</a>
            </li>
            <li className='hover:cursor-pointer hover:ml-2 hover:text-white transition-all'>
                <a href="#">CONTACT DETAILS</a>
            </li>
            </ul>
        </div>
    )
}
