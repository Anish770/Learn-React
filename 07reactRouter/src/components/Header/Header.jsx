import React from 'react'
import {Link,NavLink} from 'react-router-dom'
function Header() {
  return (
    <header className='shadow sticky z-50 top-0 border-black border-2'>
      <nav className='bg-white border-gray-600 border-2 px-4 lg:px-6 py-2.5'>
        <div className="flex flex-wrap justify-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
          <img src="https://png.pngtree.com/png-clipart/20220117/original/pngtree-cool-red-wings-logo-png-image_7129340.png" className='mr-3 h-12' alt="Logo"  />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link to='#' className='text-gray-800 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 text-sm px-4 py-1 font-medium rounded-lg lg:px-5 lg:py-2.5 mr-1 focus:outline-none border-black border-2'>Log In</Link>
            <Link to='#' className='text-gray-800 hover:bg-orange-400 focus:ring-4 focus:ring-orange-400 text-sm px-4 py-1 font-medium rounded-lg lg:px-5 lg:py-2.5 ml-2 focus:outline-none border-black border-2'>Get started</Link>
          </div>
          <div className="mr-2 justify-between items-center w-full lg:flex lg:w-auto lg:order-1 border-2 border-black" id="mobile-menu-2">
            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
              <li>
                <NavLink to='/' className={({isActive})=>`block py-2 px-3 duration-200 ${isActive?"text-orange-500":"text-gray-700"} border-b border-gray-400 hover:bg-gray-100
                  lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`}>
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="mr-2 justify-between items-center w-full lg:flex lg:w-auto lg:order-1 border-2 border-black" id="mobile-menu-2">
            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
              <li>
                <NavLink to='/about' className={({isActive})=>`block py-2 px-3 duration-200 ${isActive?"text-orange-500":"text-gray-700"} border-b border-gray-400 hover:bg-gray-100
                  lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`}>
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="mr-2 justify-between items-center w-full lg:flex lg:w-auto lg:order-1 border-2 border-black" id="mobile-menu-2">
            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
              <li>
                <NavLink to='/contact' className={({isActive})=>`block py-2 px-3 duration-200 ${isActive?"text-orange-500":"text-gray-700"} border-b border-gray-400 hover:bg-gray-100
                  lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="mr-2 justify-between items-center w-full lg:flex lg:w-auto lg:order-1 border-2 border-black" id="mobile-menu-2">
            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
              <li>
                <NavLink to='/github' className={({isActive})=>`block py-2 px-3 duration-200 ${isActive?"text-orange-500":"text-gray-700"} border-b border-gray-400 hover:bg-gray-100
                  lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`}>
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header