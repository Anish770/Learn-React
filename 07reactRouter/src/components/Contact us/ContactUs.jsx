import React from 'react'

function ContactUs() {
  return (
    <div className='relative flex items-center justify-center border-2 min-h-[700px] sm:items-center sm:pt-0 border-black'>
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 border-2 border-black flex justify-center">
            <div className="mt-8 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-black">
                    <div className="p-6 mr-2 bg-gray-200 sm:rounded-lg border-2 border-black">
                        <h1 className="text-3xl  sm:text-4xl text-gray-800 font-extrabold tracking-tight"
                        >hi
                        </h1>
                        <p className='text-lg sm:text-xl font-medium text-gray-600 mt-2'>Fill the form to start a conversation</p>
                        <div className="flex items-center mt-8 text-gray-600">
                         <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40 border-2 border-black">
                                    Area,Street,State,Postal Code
                                </div>
                        </div>
                        <div className="flex items-center mt-4 text-gray-600">
                         <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40 border-2 border-black">+919064736591</div>
                        </div>
                        <div className="flex items-center mt-4 text-gray-600">
                        <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40 border-2 border-black">info@zenCafe.org</div>
                        </div>
                    </div>
                    <form action="p-6 flex flex-col justify-center border-2 border-black">
                        <div className="flex flex-col">
                            <label htmlFor="name" className='hidden'>Full Name</label>
                            <input className='w-100 mt-2 py-2 ml-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 focus:border-orange-500 outline-none' type="text" name="name" id="name" placeholder='Full Name'/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className='hidden'>Full Name</label>
                            <input className='w-100 mt-4 py-2 ml-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 focus:border-orange-500 outline-none' type="email" name="email" id="email" placeholder='Email'/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="tel"className='hidden'>Number</label>
                            <input className=' w-100 mt-4 py-2 ml-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 focus:border-orange-500 outline-none' type="tel" name="tel" id="tel" placeholder='Number'/>
                        </div>
                        <button type='submit' className='md:w-32 bg-orange-500 rounded-lg hover:bg-black hover:text-white transition ease-in-out duration-300 mt-5 font-bold px-6 py-2'>Sumbit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs