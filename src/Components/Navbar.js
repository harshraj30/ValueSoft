import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="w-screen py-4 fixed top-0 z-50  bg-gray-100 shadow-lg shadow-gray-500 flex justify-center">
            <div className="w-[90%] items-center flex justify-between">
                <div className="">
                    <img className='w-44' src="https://kalasoftech.com/img/value4.jpg" alt="" />
                </div>
                <div className="flex items-center gap-24">
                    <span className='flex gap-5 text-xl'>
                        <Link>About Us</Link>
                        <Link>Price</Link>
                        <Link>
                            <div className="group">
                                <div className="flex items-center">
                                    <h1>Product</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="group-hover:-rotate-180 duration-500 w-5 h-5" viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                    </svg>
                                </div>

                                <div className="absolute z-20 hidden group-hover:block -ml-16">
                                    <div className="relative mt-12">
                                        <div className=" shadow-xl flex -mt-[10px] border bg-white flex-col text-md font-semibold">
                                            <Link className='hover:bg-sky-100 p-5 ' >Pharma WholeSale Software</Link>
                                            <Link className='hover:bg-sky-100 p-5 ' >Pharma Retail Software</Link>
                                            <Link className='hover:bg-sky-100 p-5 ' >FMCG Software</Link>
                                            <Link className='hover:bg-sky-100 p-5 ' >POS Software</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link>
                            <div className="group">
                                <div className="flex items-center">
                                    <h1>Downloads</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="group-hover:-rotate-180 duration-500 w-5 h-5" viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                    </svg>
                                </div>

                                <div className="absolute z-20 hidden group-hover:block -ml-16">
                                    <div className="relative mt-12">
                                        <div className=" shadow-xl flex -mt-[10px] border bg-white flex-col text-md font-semibold">
                                            <Link className='hover:bg-sky-100 p-5 ' >Customer Support</Link>
                                            <Link className='hover:bg-sky-100 p-5 ' >Download setup</Link>
                                            <Link className='hover:bg-sky-100 p-5 ' >Pharma Products</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link>Partner</Link>
                        <Link>Contact Us</Link>
                        <Link>GST Info</Link>
                        <Link>
                            <div className="group">
                                <div className="flex items-center">
                                    <h1>Login</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="group-hover:-rotate-180 duration-500 w-5 h-5" viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                    </svg>
                                </div>

                                <div className="absolute z-20 hidden group-hover:block -ml-16">
                                    <div className="relative mt-12">
                                        <div className=" shadow-xl flex -mt-[10px] border bg-white flex-col text-md font-semibold">
                                            <Link className='hover:bg-sky-100 p-5 ' >Partner Login</Link>
                                            <Link className='hover:bg-sky-100 p-5 ' >Client Login</Link>
                                            <Link className='hover:bg-sky-100 p-5 ' >Employee Login</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </span>
                    <button className='px-4 text-lg py-1.5 rounded-lg duration-300 text-white hover:bg-sky-700 bg-sky-900'>Want to buy</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar