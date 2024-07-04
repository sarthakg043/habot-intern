import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faCircleCheck, faL, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './Home.css'

import {CardPencil, DocumentCheck, DocumentPencil, DucumentSearch, HandshakeCheck, UserPlus} from '../../assets/'

const countries = [
    'Abu Dhabi','Dubai','Sharjah and Ajman','Fujairah', 'Ras Al Khaimah', 'Umm Al Quwain'
]

const workItems = [
    {
        url: UserPlus,
        text: "Select Your Role and Sign Up"
    },
    {
        url: DocumentCheck,
        text: "Buyers Post Your Requirements"
    },
    {
        url: DucumentSearch,
        text: "Review, Select, and Contact the Best Suppliers"
    },
    {
        url: CardPencil,
        text: "Suppliers Complete your profile and get notified for opportunities"
    },
    {
        url: DocumentPencil,
        text: "Contact to Buyers and Share your Quote for the service"
    },
    {
        url: HandshakeCheck,
        text: "Both the Parties can Connect and Make Business Leave a Feedback"
    },
]

function Home() {
    const [isBuyerClicked, setIsBuyerClicked] = React.useState(true)
  return (
    <div className='relative'>
        <div className='jumbotorn' >
            <div className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-14'>
                <div className='font-bold py-3'>Are You a Supplier?</div>
                Explore Matching Opportunities.
            </div>
            <div className='flex flex-wrap justify-around items-center'>
                <div className="w-full lg:w-96 relative mr-3 my-1"> 
                    <input 
                        type="text"
                        className="text-black pl-10 pr-4 py-3 border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
                        placeholder="Search your Required Service here" /> 
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> 
                        {/* Suitcase Icon */}
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_126)">
                                <path d="M13.125 5.6875C12.642 5.6875 12.25 5.2955 12.25 4.8125V3.5H8.75V4.8125C8.75 5.2955 8.358 5.6875 7.875 5.6875C7.392 5.6875 7 5.2955 7 4.8125V3.5C7 2.53487 7.78488 1.75 8.75 1.75H12.25C13.2151 1.75 14 2.53487 14 3.5V4.8125C14 5.2955 13.608 5.6875 13.125 5.6875Z" fill="#E7760D"/>
                                <path d="M11.1213 13.4575C10.9637 13.5187 10.7362 13.5625 10.5 13.5625C10.2638 13.5625 10.0362 13.5187 9.82625 13.44L0 10.1675V16.8437C0 18.1737 1.07625 19.25 2.40625 19.25H18.5938C19.9237 19.25 21 18.1737 21 16.8437V10.1675L11.1213 13.4575Z" fill="#E7760D"/>
                                <path d="M21 6.78125V8.785L10.71 12.215C10.64 12.2413 10.57 12.25 10.5 12.25C10.43 12.25 10.36 12.2413 10.29 12.215L0 8.785V6.78125C0 5.45125 1.07625 4.375 2.40625 4.375H18.5938C19.9237 4.375 21 5.45125 21 6.78125Z" fill="#E7760D"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1_126">
                                    <rect width="21" height="21" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div> 
                </div>
                <div className="relative mr-3 w-full lg:w-96 mb-2 lg:mb-0"> 
                    <input 
                        type="text"
                        className="text-black pl-10 pr-4 py-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
                        placeholder="Search your Desired Location here" /> 
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> 
                        <FontAwesomeIcon className='text-orange-500 text-xl' icon={faLocationDot} />
                    </div> 
                </div>
                <div>
                    <button className='max-w-44 text-center rounded-md text-white py-3 px-5 mr-6 bg-green-700 transition hover:bg-green-600'>Search</button>
                </div>
            </div>
            <div className='mt-6 font-light'>
                <span className='font-bold mr-4 block md:inline'>Are you a buyer?</span>
                <Link className=' underline cursor-pointer' to={'/fds'}>Click here if you are looking to post a requirements</Link>
            </div>
        </div>
        <div className='relative w-full p-4 lg:p-20'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <h1 className='text-3xl font-bold mb-6'>Ready to dive into HABOT?</h1>
                    <p className='font-light text-justify mb-6'>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
                    <button className='mb-6 border border-green-800 bg-green-800 text-white font-bold hover:bg-green-700 px-10 py-4 rounded'>
                        Sign up Today 
                        <FontAwesomeIcon className='ml-4' icon={faArrowRightLong} />
                    </button>
                </div>
                <div className='w-full lg:w-1/2 flex flex-1 flex-wrap justify-center lg:justify-end'>
                {countries.map((country, index) => (
                    <div key={index} className='relative w-full max-w-[300px] lg:w-5/12 h-16 flex flex-row ml-3 mb-3 items-center text-xl sm:text-xl md:text-xl lg:text-sm xl:text-xl border border-orange-500 hover:text-white hover:bg-orange-500 rounded-md'  style={{transition: "0.3s ease-in-out", transitionProperty: "color, background-color"}}>
                        <p className='w-full text-center'>{country}</p>
                        <div className=' absolute w-1/5 ml-auto ' style={{left:'85%'}}>
                            <FontAwesomeIcon className=' text-white font-light' icon={faArrowRightLong} />
                        </div>
                    </div>
                ))}
                    
                </div>

            </div>
            <div className='relative w-full bg-primary-blue text-white p-0 sm:p-16 md:p-24 rounded-lg'>
                <div className='w-full flex flex-wrap justify-center xl:justify-between'>
                    <div className='w-full xl:w-7/12 flex justify-center pt-4'>
                        <iframe className='youtube-frame' src="https://www.youtube.com/embed/IZLp-TZyDkQ?si=gCCNRby09dWzgPSS" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className='w-full xl:w-5/12 flex justify-between p-5 lg:p-10'>
                        <ul className='flex w-full justify-evenly'>
                            <li className='w-1/2'>
                                <button className={`${(isBuyerClicked) ? "border-b-2 border-secondary-orange text-secondary-orange" : ""} font-bold w-2/3 xl:text-xl text-center mb-5 pb-2`} onClick={() => setIsBuyerClicked(true)}>Buyer</button>
                                <ul className={`w-[200%] ${(isBuyerClicked) ? "": "hidden"} text-base transition-all`}>
                                    <li className='py-2 flex justify-start items-center'>
                                        <FontAwesomeIcon className='text-green-600 text-lg border-none outline-none inline-block bg-white rounded-full' icon={faCircleCheck} />
                                        <div className='inline-block ml-2 w-11/12'>Post your requirements.</div>
                                    </li>
                                    <li className='py-2 flex justify-start items-center'>
                                        <FontAwesomeIcon className='text-green-600 text-lg border-none outline-none inline-block bg-white rounded-full' icon={faCircleCheck} />
                                        <div className='inline-block ml-2 w-11/12'>Sit back for multiple suppliers to contact you.</div>
                                    </li>
                                    <li className='py-2 flex justify-start items-center'>
                                        <FontAwesomeIcon className='text-green-600 text-lg border-none outline-none inline-block bg-white rounded-full' icon={faCircleCheck} />
                                        <div className='inline-block ml-2 w-11/12'>Choose among the suppliers based on the ratings and reviews.</div>
                                    </li>
                                </ul>
                            </li>
                            <li className='w-1/2'>
                                <button className={`${(isBuyerClicked) ? "" : "border-b-2 border-secondary-orange text-secondary-orange"} font-bold w-2/3 xl:text-xl text-center mb-5 pb-2`} onClick={() => setIsBuyerClicked(false)}>Supplier</button>
                                <ul className={`${(isBuyerClicked) ? "hidden" : ""} w-[200%] text-base -translate-x-1/2 transition-all`}>
                                    <li className='py-2 flex justify-start items-center'>
                                        <FontAwesomeIcon className='text-green-600 text-lg border-none outline-none inline-block bg-white rounded-full' icon={faCircleCheck} />
                                        <div className='inline-block ml-2 w-11/12'>Get a preffered location.</div>
                                    </li>
                                    <li className='py-2 flex justify-start items-center'>
                                        <FontAwesomeIcon className='text-green-600 text-lg border-none outline-none inline-block bg-white rounded-full' icon={faCircleCheck} />
                                        <div className='inline-block ml-2 w-11/12'>Contact with multiple Buyers.</div>
                                    </li>
                                    <li className='py-2 flex justify-start items-center'>
                                        <FontAwesomeIcon className='text-green-600 text-lg border-none outline-none inline-block bg-white rounded-full' icon={faCircleCheck} />
                                        <div className='inline-block ml-2 w-11/12'>List you products and wait for orders.</div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full bg-secondary-cyan h-44 py-4 lg:pb-28 lg:pt-16 px-8 lg:px-44 flex flex-wrap justify-between items-center">
            <h1 className='w-full lg:w-1/2 text-2xl lg:text-3xl font-semibold'>
                Let Suppliers <span className='border-b-4 border-secondary-orange'>Find You</span>
            </h1>
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
                <button className=' text-sm py-3 px-12 rounded-md text-white font-bold bg-secondary-orange hover:bg-primary-orange'>Get Verified</button>
            </div>
        </div>
        <div className='w-full py-16 px-2 lg:px-20'>
            <div className='w-full text-center px-10 xl:px-36'>
                <div className='mb-10'>
                    <h1 className='text-3xl mb-4 font-bold'>How it works?</h1>
                    <p className='font-light w-full md:w-3/4 mx-auto'>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
                </div>
                <div className='w-full h-33 flex flex-wrap'>
                    {workItems.map((item, index) => (
                        <div key={index} className='w-full sm:w-1/2 md:w-1/3 work-items min-h-44 text-center p-10'>
                            <div className='mb-4 w-full'>
                                <img src={item.url} alt="Card Pencil" className='mx-auto' />
                            </div>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
  
}

export default Home