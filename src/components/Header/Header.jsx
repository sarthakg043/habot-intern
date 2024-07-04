import React, { useState } from 'react'
import HabotLogo from '/Habot-logo.jpg'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className='w-full text-white flex justify-between py-4 px-4'>
        <div className='logo box-border relative overflow-hidden py-2 my-auto ml-2 lg:ml-8 sm:ml-5'>
          <NavLink to='/'>
          <img className='w-full absolute' src={HabotLogo} alt="Habot Logo" />
          </NavLink>
        </div>
        <div className='hidden justify-end w-3/5 items-center sm:hidden lg:flex'>
          <div className=' w-3/12 max-w-[204px] text-center text-gray-600 hover:text-gray-900 mr-6 cursor-pointer'>
            <p>Find Suppliers</p>
          </div>
          <div className='w-4/12 max-w-[204px] text-center text-gray-600 hover:text-gray-900 mr-6 cursor-pointer'>
            <p>Find Service Tags <FontAwesomeIcon icon={faChevronDown} /></p>
          </div>
          <button 
            className='w-3/12 max-w-44 text-center rounded-md text-green-800 border-green-800 py-2 px-3 mr-6 hover:bg-green-800 hover:text-white' 
            style={{border: "1px solid", transition: "all 0.3s ease-in-out"}}
          >
            Login / Signup
          </button>
        </div>
        <div className='block lg:hidden'>
          <button onClick={toggleMenu} className='text-black text-2xl'>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        
      </div>

      {/* Pop up Menu */}
      {isOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <div className='logo box-border relative overflow-hidden py-2 my-auto ml-2 lg:ml-8 sm:ml-5'>
                      <NavLink to='/' onClick={toggleMenu}>
                        <img className='w-full absolute' src={HabotLogo} alt="Habot Logo" />
                      </NavLink>
                    </div>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <FontAwesomeIcon icon={faXmark} className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                      <div className='max-w-[204px] text-gray-600 hover:text-gray-900 mr-6 cursor-pointer' onClick={toggleMenu}>
                        <p>Find Suppliers</p>
                      </div>
                      <div className=' max-w-[204px] text-gray-600 hover:text-gray-900 mr-6 cursor-pointer' onClick={toggleMenu}>
                        <p>Find Service Tags <FontAwesomeIcon icon={faChevronDown} /></p>
                      </div>
                      <button className=' max-w-44 text-center rounded-md text-green-800 border-green-800 py-2 px-3 mr-6 hover:bg-green-800 hover:text-white transition' style={{border: "1px solid"}} onClick={toggleMenu}>
                        Login / Signup
                      </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
    </nav>
  )
}

export default Header