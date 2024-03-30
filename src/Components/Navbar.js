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
                        <Link>Product</Link>
                        <Link>Downloads</Link>
                        <Link>Partner</Link>
                        <Link>Contact Us</Link>
                        <Link>GST Info</Link>
                        <Link>Login</Link>
                    </span>
                    <button className='px-4 text-lg py-1.5 rounded-lg duration-300 text-white hover:bg-sky-700 bg-sky-900'>Want to buy</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar