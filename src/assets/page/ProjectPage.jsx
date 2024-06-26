import React from 'react'
import { Link } from 'react-router-dom'


//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faTarp } from '@fortawesome/free-solid-svg-icons'


//image
import TipCalculator from '../img/tipcalculator-page-1.png'
import TouristYourTrips from '../img/touristyourtrips-page-1.png'
import TravelCompany from '../img/travelcompany-page-1.png'
import Todolist from '../img/todolist.png'
import DatacenterApp from '../img/idcapp2.png'
import Portfolio from '../img/portfolio.png'
import Qrcode from '../img/qrcodecard.jpg'
import Product from '../img/product card.jpg'
import Nftcard from '../img/nftcard.jpg'
import Music from '../img/musiccard.jpg'
import Ecommerce from '../img/ecommerce.png'
import Ecommerce1 from '../img/ecommerce1.png'
import Ecommerce2 from '../img/ecommerce2.png'
import Ecommerce3 from '../img/ecommerce3.png'
import Webblog1 from '../img/webblog1.png'
import Webblog2 from '../img/webblog2.png'
import Webblog3 from '../img/webblog3.png'
import Webblog4 from '../img/webblog4.png'
import Webblog5 from '../img/webblog5.png'


import Navbar from '../../component/Navbar'
import { motion } from 'framer-motion'
import { Carousel } from "flowbite-react";

const dataCenter = [DatacenterApp]

const ecommerce = [Ecommerce , Ecommerce1 , Ecommerce2 , Ecommerce3]

const webblogImg = [Webblog1,Webblog2,Webblog3,Webblog4,Webblog5]

const miniProject = [
    {
        name : 'Tip Calculator',
        discription : 'Developed a web application that calculates the tip amount based on the total bill and desired tip percentage.',
        img : TipCalculator,
        url : 'https://boisterous-sorbet-91202f.netlify.app/'
    },
    {
        name : 'Travel Company',
        discription : 'Landing page reference to figma uses tailwindCSS.',
        img : TravelCompany,
        url : 'https://friendly-griffin-324215.netlify.app/ '
    },
    {
        name : 'Tourist search your trips',
        discription : 'Created a global tour search site that lists tourist attractions and allows users to search for tours using query parameters. The website features a carousel image display.',
        img : TouristYourTrips,
        url : 'https://melodious-sherbet-47d28e.netlify.app/'
    },
    {
        name : 'Todo list app',
        discription : 'Created a web application for managing tasks with CRUD (Create, Read, Update, Delete) functionality and the ability to switch between dark and light modes.',
        img : Todolist,
        url : 'https://eclectic-macaron-cce88d.netlify.app/'
    },
    {
        name : 'Web portfolio',
        discription : 'Developed a personal portfolio website to showcase my work, skills, and projects.',
        img : Portfolio,
        url : 'https://gai-protfolio.netlify.app/'
    },
]

const styleSideProject = [
    {
        name : 'QRcord Page',
        img : Qrcode,
        url : 'https://github.com/GaiKT/sideproject-Style-QRcode-page'
    },
    {
        name : 'Product Page',
        img : Product,
        url : 'https://github.com/GaiKT/sideproject-Style-product-page'
    },
    {
        name : 'Cardmusic Page',
        img : Music,
        url : 'https://github.com/GaiKT/sideproject-style-card-music'
    },
    {
        name : 'NFTcard',
        img : Nftcard,
        url : 'https://github.com/GaiKT/sideproject-style-NFTcard'
    },
]

export default function ProjectPage() {
  return (
    <div className="min-h-screen relative">
        <Navbar/>
        <div className='bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-around md:p-20'>
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
            className='bg-gradient-to-br from-blue-600 to-blue-900 p-5 max-md:p-2 rounded-xl rounded-br-xl mt-20'>
                <div className='flex flex-col items-center text-white text-lg gap-4 my-10 relative'>
                    <h1 className='text-2xl absolute top-[-40px] bg-[#2358D2] px-2 rounded-md'>
                        SELECT PROJECT
                    </h1>
                    <h1 className='bg-blue-950 w-full text-center p-2 mt-4 rounded'>
                        MAIN PROJECT
                    </h1>
                    <div className='flex justify-center my-10 gap-4 md:px-10 max-md:flex-col max-md:text-sm'>
                        <div className='flex-1 flex justify-center md:px-10 min-h-96'>
                            <div className="w-full rounded-lg hover:scale-105 hover:shadow-2xl transition-all max-md:p-2">
                                <Carousel draggable={false} pauseOnHover>
                                    {dataCenter.map((img, index) => (
                                        <img src={img} alt={`datacenter ${index + 1}`}/>
                                    ))}
                                </Carousel>
                            </div>
                        </div> 
                        <div className='flex-1'>
                            <h1 className='font-extrabold'>Datacenter Assistance Application</h1>
                            <p>
                                <span className='mr-7'></span>Developed a web application designed to help data center staff manage customer information and create daily hardware checklists. The application stores data in a database, enabling easy search and retrieval of information.
                            </p>
                            <p className='flex flex-col my-5 text-start gap-3 font-extralight'>
                                <li><span className='font-semibold mr-2'>Customer Information Management</span> Allows staff to input and access customer visit details quickly and efficiently.</li>
                                <li><span className='font-semibold mr-2'>Daily Hardware Checklists</span> Facilitates the creation and storage of daily hardware checklists, ensuring thorough and consistent checks.</li>
                                <li><span className='font-semibold mr-2'>Database Search Functionality</span> Enables easy and quick retrieval of information through a robust search feature.</li>
                            </p>
                            <div className='flex w-full justify-around'>
                                <a href="https://github.com/GaiKT/IDC-Assitance-app-frontend" target='blank' className='text-xs'> <FontAwesomeIcon icon={faGithub}/> Front-end Github repository</a>
                                <a href="https://github.com/GaiKT/BackEnd-idc-assitance-app" target='blank' className='text-xs'> <FontAwesomeIcon icon={faGithub}/> Back-end Github repository</a>
                            </div>
                        </div>  
                    </div>
                    <div className='w-full flex justify-center my-10 gap-4 md:px-10 max-md:flex-col max-md:text-sm'>
                        <div className='flex-1 flex justify-center md:px-10 min-h-96'>
                            <div className="w-full rounded-lg hover:scale-105 hover:shadow-2xl transition-all max-md:p-2">
                                <Carousel draggable={false} pauseOnHover>
                                    {webblogImg.map((img, index) => (
                                        <img src={img} alt={`Webblog ${index + 1}`}/>
                                    ))}
                                </Carousel>
                            </div>
                        </div> 
                        <div className='flex-1'>
                            <h1 className='font-extrabold'>Blog Communication Platform</h1>
                            <p>
                                <span className='mr-7'></span>Developed a blog platform designed for users to communicate, share their favorite things, and join communities. The platform encourages interaction and engagement among users.
                            </p>
                            <p className='flex flex-col my-5 text-start gap-3 font-extralight'>
                                <li><span className='font-semibold mr-2'>Community</span>Allows users to join communities and discuss their favorite topics with friends.</li>
                                <li><span className='font-semibold mr-2'>User-Friendly Interface</span>Built with Next.js and styled using TailwindCSS and DaisyUI for a modern and responsive design.</li>
                                <li><span className='font-semibold mr-2'>Strong Backend</span>Strong Backend: Utilizes NestJS and MongoDB to handle data management and email or username authentication.</li>
                            </p>
                            <div className='flex w-full justify-around'>
                                <a href="https://github.com/GaiKT/Blogpost-next-nest" target='blank' className='text-xs'> <FontAwesomeIcon icon={faGithub}/> Github repository</a>
                            </div>
                        </div>  
                    </div>
                    <div className='flex justify-center my-10 gap-4 md:px-10 max-md:flex-col max-md:text-sm'>
                        <div className='flex-1 flex justify-center md:px-10 min-h-96'>
                            <div className="w-full rounded-lg hover:scale-105 hover:shadow-2xl transition-all max-md:p-2">
                                <Carousel draggable={false} pauseOnHover>
                                    {ecommerce.map((img, index) => (
                                        <img src={img} alt={`Webblog ${index + 1}`}/>
                                    ))}
                                </Carousel>
                            </div>
                        </div> 
                        <div className='flex-1'>
                            <h1 className='font-extrabold'>E-commerce Website</h1>
                            <p>
                                <span className='mr-7'></span>Developed a web application designed to help data center staff manage customer information and create daily hardware checklists. The application stores data in a database, enabling easy search and retrieval of information.
                            </p>
                            <p className='flex flex-col my-5 text-start gap-3 font-extralight'>
                                <li><span className='font-semibold mr-2'>User Authentication</span> Implemented mock-up login functionality for user authentication.</li>
                                <li><span className='font-semibold mr-2'>Product Search</span> Allowed users to add products to their cart and calculate the total price.</li>
                                <li><span className='font-semibold mr-2'>Responsive Design</span> Styled the application using TailwindCSS and MUI for a modern and responsive user interface.</li>
                            </p>
                            <div className='flex w-full justify-around'>
                                <a href="https://github.com/GaiKT/E-commerce-react-ts" target='blank' className='text-xs'> <FontAwesomeIcon icon={faGithub}/> Github repository</a>
                                <a href="https://e-commerce-react-ts-frontend-with-api.netlify.app" target='blank' className='text-xs'> <FontAwesomeIcon icon={faTarp}/> Live Demo</a>
                            </div>
                        </div>  
                    </div>
                    <h1 className='bg-blue-950 w-full text-center p-2 mt-4 rounded'>
                        SIDE PROJECT
                    </h1>
                    <div className='grid grid-cols-3 gap-5 px-10 max-md:grid-cols-1'>
                        {miniProject.map((project , index) => {
                            return (
                                <Link to={project.url} target='blank'>
                                    <div key={index} className='p-2 rounded-lg text-center cursor-pointer hover:scale-105 transition-all'>
                                        <div>
                                            <img src={project.img} className='w-full object-cover rounded-md mb-2 h-52' />
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
                    <div className='grid grid-cols-4 gap-5 text-xs md:px-10 max-md:grid-cols-1'>
                        {
                            styleSideProject.map((project , index) => {
                                return(
                                    <Link to={project.url} target='blank'>
                                        <div key={index} className='p-2 rounded-lg text-center hover:shadow-lg  cursor-pointer hover:scale-105 transition-all'>
                                            <img src={project.img} className='rounded-lg mb-2 h-52'/>
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
