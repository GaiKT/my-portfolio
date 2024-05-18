import React from 'react'
import { Link } from 'react-router-dom'

//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

//image
import TipCalculator from '../img/tipcalculator-page-1.png'
import TouristYourTrips from '../img/touristyourtrips-page-1.png'
import TravelCompany from '../img/travelcompany-page-1.png'
import Todolist from '../img/todolist.png'
import DatacenterApp from '../img/idcapp2.png'
import Portfolio from '../img/portfolio website.png'
import Qrcode from '../img/qrcode.jpg'
import MusicPage from '../img/musicpage.jpg'
import NftCard from '../img/nftcard.jpg'
import productCard from '../img/productcard.jpg'


import Navbar from '../../component/Navbar'
import { motion } from 'framer-motion'

const miniProject = [
    {
        name : 'Tip Calculator',
        discription : 'Webapp for calculate tip price uses react tailwindCSS',
        img : TipCalculator,
        url : 'https://boisterous-sorbet-91202f.netlify.app'
    },
    {
        name : 'Travel Company',
        discription : 'Landing page reference to figma uses tailwindCSS.',
        img : TravelCompany ,
        url : 'https://friendly-griffin-324215.netlify.app'
    },
    {
        name : 'Tourist search your trips',
        discription : 'Get data from mockup API database fetch data to landing page and search keywords',
        img : TouristYourTrips ,
        url : 'https://regal-mermaid-0a6221.netlify.app'
    },
    {
        name : 'Todo list app',
        discription : 'Webapp creates new to-dos and completes to-dos that you can drag and drop to assign importance.',
        img : Todolist ,
        url : 'https://eclectic-macaron-cce88d.netlify.app'
    },
    {
        name : 'Portfolio Website',
        discription : 'Webportfolio uses react.js tailwindCSS and framer-motion This is a smooth site.',
        img : Portfolio,
        url : 'https://gai-protfolio.netlify.app'
    },
]

const styleSideProject = [
    {
        name : 'QRcord card',
        img : Qrcode,
        url : 'https://github.com/GaiKT/sideproject-Style-QRcode-page'
    },
    {
        name : 'Product card',
        img : MusicPage,
        url : 'https://github.com/GaiKT/sideproject-style-respornsive-page'
    },
    {
        name : 'Music card',
        img : NftCard,
        url : 'https://github.com/GaiKT/sideproject-style-card-music'
    },
    {
        name : 'NFTcard',
        img : productCard,
        url : 'https://github.com/GaiKT/sideproject-style-NFTcard'
    },
]

export default function ProjectPage() {
  return (
    <div className="min-h-screen relative">
        <Navbar/>
        <div className='bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-around p-20'>
            <motion.div 
            initial={{
                opacity: 0.5,
                x: '100vw',
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            transition={{
                type: 'tween',
                ease: 'anticipate',
                duration: 0.5
            }}            
            className='w-full bg-gradient-to-br from-blue-600 to-blue-900 p-5 rounded-xl rounded-br-xl mt-20'>
                <div className='flex flex-col items-center text-white text-lg gap-4 mb-10 relative'>
                    <h1 className='text-2xl absolute top-[-40px] bg-[#2358D2] px-2 rounded-md'>
                        SELECT PROJECT
                    </h1>
                    <h1 className='bg-blue-950 w-full text-center p-2 mt-4 rounded'>
                        MAIN PROJECT
                    </h1>
                    <div className='flex justify-center my-10 gap-4'>
                        <div className='flex-1 flex justify-center px-5'>
                            <img src={DatacenterApp} className='rounded-lg hover:scale-105 hover:shadow-2xl cursor-pointer transition-all'/>
                        </div> 
                        <div className='flex-1'>
                            <h1 className='text-xl font-extrabold'>DATACENTER ASSISTANCE APP</h1>
                            <p className='flex flex-col text-md my-5 text-start gap-3'>
                                <li>Collect information about members and company who enter the information center.</li>
                                <li>Server data storage ,serial number ,device location.</li>
                                <li>Send and store reports can be downloaded at any time.</li>
                                <li>Username password authentication login with token can expire.</li>
                            </p>
                            <a href="https://github.com/GaiKT/IDC-Assitance-app-frontend" target='blank' className='text-xs mr-5'> <FontAwesomeIcon icon={faGithub}/> Github Front-end repository</a>
                            <a href="https://github.com/GaiKT/BackEnd-idc-assitance-app" target='blank' className='text-xs'> <FontAwesomeIcon icon={faGithub}/> Github Black-end repository</a>
                        </div>  
                    </div>
                    <h1 className='bg-blue-950 w-full text-center p-2 mt-4 rounded'>
                        SIDE PROJECT
                    </h1>
                    <div className='grid grid-cols-3 gap-5'>
                        
                        {miniProject.map((project , index) => {
                            return (
                                <Link to={project.url} target='blank' >
                                    <div key={index} 
                                    className='p-2 rounded-lg text-center cursor-pointer hover:scale-105 transition-all'>
                                        <div>
                                            <img src={project.img} className='w-full h-48 object-cover rounded-md mb-2' />
                                        </div>
                                        <p  className='bg-blue-500'>{project.name}</p>
                                        <p className='text-xs bg-blue-200 rounded-b-md text-blue-900 p-1'>{project.discription}</p>
                                    </div>
                                </Link>
                            );
                        })}     
                    </div>
                    <h1 className='bg-blue-950 w-full text-center p-2 mt-4 rounded'>
                        Decorative components
                    </h1>
                    <div className='grid grid-cols-4 gap-5 text-xs'>
                        {
                            styleSideProject.map((project , index) => {
                                return(
                                    <Link to={project.url} target='blank'>
                                        <div key={index} className='p-2 rounded-lg text-center hover:shadow-lg  cursor-pointer hover:scale-105 transition-all'>
                                            <img src={project.img} className='rounded-lg mb-2 h-40'/>
                                            <p>{project.name}</p>
                                        </div>
                                    </Link>
                                );
                            })
                        }
    
                    </div>
                </div>
                <Link to={'/'}>
                    <button className='p-2 bg-slate-400 rounded-lg hover:bg-blue-500 transition-all shadow-xl'>
                        Home
                    </button>
                </Link>
            </motion.div>
        </div>
    </div>
  )
}
