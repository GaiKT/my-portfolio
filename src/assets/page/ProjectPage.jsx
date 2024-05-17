import React from 'react'
import Showpeofile from '../../component/Showpeofile'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import SQLCer from '../img/SQLcer.png'
import TipCalculator from '../img/tipcalculator-page-1.png'
import TouristYourTrips from '../img/touristyourtrips-page-1.png'
import TravelCompany from '../img/travelcompany-page-1.png'

export default function ProjectPage() {
  return (
    <>
        <Showpeofile width={'2'} text={false}/>
        <div className='w-5/6 bg-gradient-to-br from-blue-600 to-blue-900 shadow-lg rounded-s-xl border-none flex items-center justify-around p-20'>
            <div className='w-full border p-10 rounded-tl-xl rounded-br-xl mt-20'>
                <div className='flex flex-col items-center text-white text-lg gap-4 mb-10 relative'>
                    <h1 className='text-2xl absolute top-[-60px] bg-[#2252C3] px-2 rounded-full'>
                        SELECT PROJECT
                    </h1>
                    <h1 className='border border-b w-full text-center'>
                        MAIN PROJECT
                    </h1>
                    <div className='flex justify-center'>
                        <div className='flex-1'>
                            <img src={SQLCer} width={300} className='rounded-lg hover:scale-105 hover:shadow-2xl cursor-pointer transition-all'/>
                        </div> 
                        <div className='flex-1'>
                            <h1 className='text-xl font-extrabold'>DATACENTER ASSISTANCE APP</h1>
                            <p className='flex flex-col text-xs my-5 text-start gap-3'>
                                <li>Collect information about members and company who enter the information center.</li>
                                <li>Server data storage ,serial number ,device location.</li>
                                <li>Send and store reports can be downloaded at any time.</li>
                                <li>Username password authentication login with token can expire.</li>
                            </p>
                            <a href="https://github.com/GaiKT/IDC-Assitance-app-frontend" className='text-xs'> <FontAwesomeIcon icon={faGithub}/> View on Github repository</a>
                        </div>  
                    </div>
                    <h1 className='border border-b w-full text-center'>
                        SIDE PROJECT
                    </h1>
                    <div className='grid grid-cols-3 gap-5'>
                        <div className='p-2 rounded-lg text-center hover:shadow-lg  cursor-pointer hover:scale-105 transition-all'>
                            <div>
                                <img src={TipCalculator} className='w-full h-48 object-cover rounded-md mb-2' />
                            </div>
                            <p className='border'>Tip Calculator</p>
                            <p className='text-xs bg-blue-200 rounded-b-md text-blue-900 p-1'>Webapp for calculate tip price uses react tailwindCSS</p>
                        </div>   
                        <div className='p-2 rounded-lg text-center hover:shadow-lg  cursor-pointer hover:scale-105 transition-all'>
                            <div>
                                <img src={TravelCompany} className='w-full h-48 object-cover rounded-md mb-2'/>
                            </div>
                            <p className='border'>Travel Company</p>
                            <p className='text-xs bg-blue-200 rounded-b-md text-blue-900 p-1'>Landing page reference to figma uses tailwind css.</p>
                        </div>   
                        <div className='p-2 rounded-lg text-center hover:shadow-lg cursor-pointer hover:scale-105 transition-all'>
                            <div>
                                <img src={TouristYourTrips} className='w-full h-48 object-cover rounded-md mb-2'/>
                            </div>
                            <p className='border'>Tourist search your trips</p>
                            <p className='text-xs bg-blue-200 rounded-b-md text-blue-900 p-1'>Get data from mockup API database fetch data to landing page and search keywords </p>
                        </div>   
                        <div className='p-2 rounded-lg text-center hover:shadow-lg  cursor-pointer hover:scale-105 transition-all'>
                            <div>
                                <img src={SQLCer} className='w-full h-48 object-cover rounded-md mb-2' />
                            </div>
                            <p className='border'>Todo list app</p>
                            <p className='text-xs bg-blue-200 rounded-b-md text-blue-900 p-1'>Webapp creates new to-dos and completes to-dos that you can drag and drop to assign importance.</p>
                        </div>  
                    </div>
                    <h1 className='border border-b w-full text-center'>
                        Decorative components
                    </h1>
                    <div className='grid grid-cols-4 gap-5 text-xs'>
                        <div className='p-2 rounded-lg text-center hover:shadow-lg  cursor-pointer hover:scale-105 transition-all'>
                            <img src={SQLCer} width={300} className='rounded-lg mb-2'/>
                            <p>QRcord Page</p>
                        </div>  
                        <div className='p-2 rounded-lg text-center hover:shadow-lg  cursor-pointer hover:scale-105 transition-all'>
                            <img src={SQLCer} width={300} className='rounded-lg mb-2'/>
                            <p>Responsive Page</p>
                        </div>  
                        <div className='p-2 rounded-lg text-center hover:shadow-lg  cursor-pointer hover:scale-105 transition-all'>
                            <img src={SQLCer} width={300} className='rounded-lg mb-2'/>
                            <p>Cardmusic Page</p>
                        </div>  
                        <div className='p-2 rounded-lg text-center hover:shadow-lg  cursor-pointer hover:scale-105 transition-all'>
                            <img src={SQLCer} width={300} className='rounded-lg mb-2'/>
                            <p>NFTcard</p>
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
