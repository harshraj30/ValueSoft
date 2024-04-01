import React from 'react'
import Navbar from '../Components/Navbar'
import { AboutUsData } from '../data/data'

const AboutUs = () => {
    return (
        <Navbar>
            <div className="w-screen mt-28  ">
                {AboutUsData.map((e, index) => (
                    <div className="flex justify-center">
                        <div className="w-[90%] my-16">
                            <div className="flex flex-col  gap-10">
                                <div className="w-full flex justify-end">
                                    <div className="w-[90%] flex flex-col gap-2">
                                        <h1 className='text-3xl text-blue-900 font-bold'>{e.heading}</h1>
                                        <p className='font-semibold'>{e.title}</p>
                                    </div>
                                </div>
                                <div className="">
                                    <img className='w-full' src={e.url} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Navbar>
    )
}

export default AboutUs