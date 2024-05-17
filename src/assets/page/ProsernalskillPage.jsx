import React from 'react'
import Showpeofile from '../../component/Showpeofile'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
        <Showpeofile width={'2'} text={false}/>
        <div className='w-4/6 bg-gradient-to-br from-blue-600 to-blue-900 shadow-lg rounded-s-xl border-none flex items-center justify-around p-20'>
            <div className='w-4/6 border p-10 rounded-tl-xl rounded-br-xl'>
                <div className='flex flex-col items-center text-white text-lg gap-4 mb-10 relative'>
                    <h1 className='text-2xl absolute top-[-60px] bg-[#2254C9] rounded-full px-2'>
                        PROSERNAL SKILL
                    </h1>
                    <p className='text-xs text-center text-blue-200'>
                        I'm a pro at Javasript, I can use it to solve logic problems. And I can use any javascript based framework or library. This is my favorite tool. And I can learn other tools. Absolutely quickly 
                    </p>
                    <div className='grid grid-cols-2 gap-10'>     
                        <div>
                            <h1 className='bg-blue-950 shadow-lg rounded-md text-center'>Front-end</h1>
                            <div className='pl-3 mt-2 text-sm'>
                                <p>React.JS</p>
                                <p>Tailwind CSS</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='bg-blue-950 shadow-lg rounded-md text-center'>Back-end</h1>
                            <div className='pl-3 mt-2 text-sm'>
                                <p>Node.JS</p>
                                <p>Express.JS</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='bg-blue-950 shadow-lg rounded-md text-center'>Database</h1>
                            <div className='pl-3 mt-2 text-sm'>
                                <p>MongoDB</p>
                                <p>PostgreSQL</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='bg-blue-950 shadow-lg rounded-md text-center px-2'>Version Control</h1>
                            <div className='pl-3 mt-2 text-sm' >
                                <p>Git</p>
                                <p>GitHub</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Link to={'/'} className='p-2 bg-white rounded-lg hover:bg-blue-500 transition-all hover:shadow-xl'>
                        Comeback Home
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}
