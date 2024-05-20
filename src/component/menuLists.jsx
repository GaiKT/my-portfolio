import React from 'react'

export default function MenuLists() {
  return (
            <>
                <p className='font-light text-xl text-white text-center mb-2'>Menu Lists</p>
                <ul className='flex flex-col gap-3 text-gray-300 font-semibold p-5 rounded-lg bg-blue-700 shadow-lg w-4/6'>
                    <li className='hover:cursor-pointer hover:ml-2 hover:text-white transition-all'>
                        <a href="/aboutme">ABOUT ME</a>
                    </li>
                    <li className='hover:cursor-pointer hover:ml-2 hover:text-white transition-all'>
                        <a href="/project">MY PROJECT</a>
                    </li>
                    <li className='hover:cursor-pointer hover:ml-2 hover:text-white transition-all'>
                        <a href="/workexp">WORK EXP</a>
                    </li>
                    <li className='hover:cursor-pointer hover:ml-2 hover:text-white transition-all'>
                        <a href="/skill">PERSONAL SKILLS</a>
                    </li>
                    <li className='hover:cursor-pointer hover:ml-2 hover:text-white transition-all'>
                        <a href="/certificate">CERTIFICATE</a>
                    </li>
                    <li className='hover:cursor-pointer hover:ml-2 hover:text-white transition-all'>
                        <a href="/contactme">CONTACT DETAILS</a>
                    </li>
                </ul>
            </>
    )
}
