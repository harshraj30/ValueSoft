import React, { useState } from 'react'
import { FeaturesData, FrequentData, ItemData } from '../data/data'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const Landingpage = () => {

    const Item = ({ value }) => {
        return (
            <div className="w-full justify-center flex">
                <div className={`w-[80%] py-10 justify-between flex ${value.imgLeft ? "flex-row-reverse" : ""}`}>
                    <div className="w-[30vw] items-center flex ">
                        <div className="flex flex-col gap-3 text-xl">
                            <span className='flex gap-3 items-center'>
                                <p className='text-blue-600 font-bold text-3xl'>{value.title}</p>
                            </span>
                            <div className="pl-2 flex flex-col gap-0.5">
                                {value.features.map((curElem, index) => (
                                    <div key={index} className='relative flex gap-3 items-center'>
                                        <p className='absolute top-0 text-sm'>➤</p>
                                        <p className='pl-8 text-sm'>{curElem}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        {value.img ?
                            <img className='w-[25vw]' src={value.img} alt="" />
                            :
                            <video width="500" height="400" src={value.video} autoplay>
                            </video>}
                    </div>
                </div>
            </div>
        )
    }

    const FeatureItem = ({ value }) => (
        <div className="w-[28vw] shadow-xl border hover:border-sky-300 duration-500 hover:bg-sky-100 rounded-tl-3xl rounded-br-3xl p-8">
            <p className='text-2xl opacity-70 pb-2 font-bold'>{value.title}</p>
            <p className='text-sm'>{value.desc}</p>
        </div>
    )


    const FreqItem = ({ value }) => {

        const [hidden, setHidden] = useState(false)

        return (
            <div className="w-[60vw]">
                <div className="flex items-center py-2 pl-5 justify-between gap-5 bg-blue-400">
                    <p className='text-lg font-bold text-white'>{value.title}</p>
                    <button onClick={() => { hidden ? setHidden(false) : setHidden(true) }} className='text-5xl text-white w-12'>-</button>
                </div>
                {hidden ? <div className="p-3">
                    <p className='border-l border-sky-500 pl-5'>{value.desc}</p>
                </div> : ""}
            </div>
        )
    }


    return (
        <Navbar>
            <div className="">
                <div className="mt-[13vh] w-screen ">
                    <div className="w-full bg-sky-400 flex justify-center">
                        <div className=" w-[80%]">
                            <h1 className='text-5xl font-semibold text-white py-4 text-center'>A Billing, Inventory and Accounting Software With All GST facility</h1>
                        </div>
                    </div>

                    <div className="w-full justify-center flex">
                        <div className="w-[80%] py-5 justify-center flex">
                            <div className="w-[50%] items-center flex ">
                                <div className="flex flex-col gap-3 text-xl">
                                    <span className='flex gap-3 items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="font-bold w-5 h-5">
                                            <path fill-rule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                            <path fill-rule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                        </svg>
                                        <p className=''>Valuesoft is one of the best e-invoicing and GST Return filing software</p>
                                    </span>
                                    <span className='flex gap-3 items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="font-bold w-5 h-5">
                                            <path fill-rule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                            <path fill-rule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                        </svg>
                                        <p className=''>Generates e-Invoice of single or multiple invoices in seconds.</p>
                                    </span>
                                    <span className='flex gap-3 items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="font-bold w-5 h-5">
                                            <path fill-rule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                            <path fill-rule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                        </svg>
                                        <p className=''>Generates E-Way Bill along with e-Invoice.</p>
                                    </span>
                                    <span className='flex gap-3 items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="font-bold w-5 h-5">
                                            <path fill-rule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                            <path fill-rule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                        </svg>
                                        <p className=''>Saves GSTR1 to GST Portal and validates data for GSTIN/HSN mismatch</p>
                                    </span>
                                    <span className='flex gap-3 items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="font-bold w-5 h-5">
                                            <path fill-rule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                            <path fill-rule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                        </svg>
                                        <p className=''>Reconcile GSTR2A/GSTR2B with purchase data of multiple months without going to GST portal.</p>
                                    </span>
                                    <span className='flex gap-3 items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="font-bold w-5 h-5">
                                            <path fill-rule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                            <path fill-rule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                        </svg>
                                        <p className=''>Audit Trail Facility.</p>
                                    </span>
                                    <div className="flex justify-center py-3">
                                        <button className='px-8 text-lg py-2 rounded-full duration-300 text-white hover:bg-sky-700 w-fit bg-sky-900'>Download demo Version</button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[50%] flex justify-end">
                                <img src="https://static7.depositphotos.com/1010683/702/i/450/depositphotos_7025209-stock-photo-cement-factory-at-night.jpg" alt="" />
                            </div>
                        </div>
                    </div>



                    {/* Easy & Fast billing Software */}

                    <div className="w-full bg-sky-500 flex py-7 justify-center">
                        <div className=" w-[80%] flex flex-col gap-4 text-center">
                            <h1 className='text-4xl font-semibold text-sky-950 text-center'>Easy & Fast billing Software</h1>
                            <p className='text-xl'>Manage your complete business with ValueSoft. Best software for billing, inventory & accounting with GST return filling and reconcilliation facility. Most simple, secure & easy Software. Download for Now!   <span className='text-gray-300 cursor-pointer'>Read More...</span></p>
                        </div>
                    </div>

                    {ItemData.map((curElem, index) => (
                        <Item key={index} value={curElem} />
                    ))}

                    <div className="flex justify-center bg-gradient-to-b from-blue-400 to-white">
                        <div className="w-[80%] flex flex-col pt-20  items-center ">
                            <p className='text-4xl opacity-60 font-bold pb-5'>Grow and Manage Your Business from Anywhere With Our Mobile App</p>
                            <p className='text-lg opacity-70 text-center font-semibold w-[65%]'>The mobile revolution has changed the way you do your business. You don't need to ask telephonically about business from your staff rather you can check each and every entry and report on ValueSoft eOwner Mobile App. Taking order telephonically from your customers is a cumbersome process now your Customers can use eRetailer Order App without any charge. A notification will come on your mobile and in software and will be downloaded as soon as you get an order. In simple words, manage and carry your business on Mobile. A best mobile App for small and medium business in its class.</p>
                            <div className="flex justify-center pt-12">
                                <img className='w-[70%] animate-bounce' src="https://kalasoftech.com/img/lydown_mobile.webp" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center ">
                        <div className="w-[80%] flex flex-col py-10  items-center ">
                            <p className='text-4xl font-bold pb-5'>Why ValueSoft?</p>
                            <p className='text-lg text-center '>ValueSoft is a Billing, Inventory Accounting Software in India. It has all MIS reports. GST Return Filing and GSTR2A,2B Reconciliation is very easy from this software. It is one of the best and easy billing software for GST purpose. Demo Download is available.</p>
                        </div>
                        <div className="grid grid-cols-4 gap-5 pb-20 px-10">
                            <div className="flex group w-[22vw] h-80 duration-500 flex-col items-center  justify-center py-10 bg-blue-500 text-white px-4 rounded text-center">
                                <div className="">
                                    <img src="https://kalasoftech.com/img/easytouse.webp" alt="" />
                                </div>
                                <p className='text-2xl font-bold pb-2'>Easy To Use, Simple To Learn</p>
                                <p className='hidden group-hover:block text-base'>Using ValueSoft is extremely simple. There is no need of technical knowledge or Accounting knowledge. There are many settings available which you can use according to your business.</p>
                            </div>
                            <div className="flex group w-[22vw] h-80 duration-500 flex-col items-center  justify-center py-10 bg-blue-500 text-white px-4 rounded text-center">
                                <div className="">
                                    <img src="https://kalasoftech.com/img/easytouse.webp" alt="" />
                                </div>
                                <p className='text-2xl font-bold pb-2'>Easy To Use, Simple To Learn</p>
                                <p className='hidden group-hover:block text-base'>Using ValueSoft is extremely simple. There is no need of technical knowledge or Accounting knowledge. There are many settings available which you can use according to your business.</p>
                            </div>
                            <div className="flex group w-[22vw] h-80 duration-500 flex-col items-center  justify-center py-10 bg-blue-500 text-white px-4 rounded text-center">
                                <div className="">
                                    <img src="https://kalasoftech.com/img/easytouse.webp" alt="" />
                                </div>
                                <p className='text-2xl font-bold pb-2'>Easy To Use, Simple To Learn</p>
                                <p className='hidden group-hover:block text-base'>Using ValueSoft is extremely simple. There is no need of technical knowledge or Accounting knowledge. There are many settings available which you can use according to your business.</p>
                            </div>
                            <div className="flex group w-[22vw] h-80 duration-500 flex-col items-center  justify-center py-10 bg-blue-500 text-white px-4 rounded text-center">
                                <div className="">
                                    <img src="https://kalasoftech.com/img/easytouse.webp" alt="" />
                                </div>
                                <p className='text-2xl font-bold pb-2'>Easy To Use, Simple To Learn</p>
                                <p className='hidden group-hover:block text-base'>Using ValueSoft is extremely simple. There is no need of technical knowledge or Accounting knowledge. There are many settings available which you can use according to your business.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center ">
                        <div className="w-[80%] flex flex-col py-10  items-center ">
                            <p className='text-4xl pb-5 font-serif'>Features you need to run your Business</p>
                        </div>

                        <div className="grid grid-cols-3 gap-5">
                            {FeaturesData.map((curElem, index) => (
                                <FeatureItem value={curElem} key={index} />
                            ))}
                        </div>


                    </div>

                    <div className="flex flex-col items-center ">
                        <div className="w-[80%] flex flex-col py-10  items-center ">
                            <p className='text-4xl pb-5 font-serif'>"ValueSoft Product Experience: A User's Perspective"</p>
                        </div>

                        <div className="grid grid-cols-3 gap-5">
                            <div className="bg-gray-200 w-[28vw] h-[300px] flex flex-col gap-2">
                                <p className='text-xl font-bold bg-blue-500 text-center py-1 text-white rounded-xl w-full'>Jeewan Jyoti Agancies</p>
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/gk__UaYFnK0?si=26QfLoN0Wg41QIPQ&amp;modestbranding=1" title="YouTube video player" frameborder="0" allowfullscreen=""></iframe>
                            </div>
                            <div className="bg-gray-200 w-[28vw] h-[300px] flex flex-col gap-2">
                                <p className='text-xl font-bold bg-blue-500 text-center py-1 text-white rounded-xl w-full'>Kunal Medical Agency</p>
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/g40ioBRMNbo?si=G3o8vs7Ed35lG57r&amp;modestbranding=1" title="YouTube video player" frameborder="0" allowfullscreen=""></iframe>
                            </div>
                            <div className="bg-gray-200 w-[28vw] h-[300px] flex flex-col gap-2">
                                <p className='text-xl font-bold bg-blue-500 text-center py-1 text-white rounded-xl w-full'>Sati Traders</p>
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/3Hqkd1Lv4lc?si=0RooLqmB_4lo8ICf&amp;modestbranding=1" title="YouTube video player" frameborder="0" allowfullscreen=""></iframe>
                            </div>
                        </div>

                    </div>


                    <div className="flex flex-col items-center ">
                        <div className="w-[80%] flex flex-col pt-10  items-center ">
                            <p className='text-4xl pb-5 font-serif'>Effortless Quick Invoicing ValueSoft Simple Pricing</p>
                        </div>
                        <div className="grid grid-cols-4 gap-5 justify-between">
                            <div className="bg-sky-200 text-center w-[21vw]">
                                <h1 className='text-xl font-bold py-2'>Free Version</h1>
                                <p className='bg-blue-700 text-white text-md py-5'>(Limited edition with limited features)</p>
                                <div className="flex flex-col items-center py-5 gap-7">
                                    <div className="h-20">
                                        <h2>With Limited Features</h2>
                                    </div>
                                    <button className='px-4 w-fit text-lg py-1.5 rounded-lg duration-300 text-white hover:bg-sky-700 bg-sky-900'>Read more</button>
                                </div>
                            </div>
                            <div className="bg-sky-200 text-center">
                                <h1 className='text-xl font-bold py-2'>Basic Version</h1>
                                <p className='bg-blue-700 text-white text-md h-[70px] flex items-center justify-center'>
                                    ₹ 9500 only <br />(Limited edition)
                                </p>
                                <div className="flex flex-col items-center py-5 gap-7">
                                    <div className="h-20">
                                        <h2>₹ 3000 per extra user</h2>
                                        <h2>With Basic Features</h2>
                                    </div>
                                    <button className='px-4 w-fit text-lg py-1.5 rounded-lg duration-300 text-white hover:bg-sky-700 bg-sky-900'>Read more</button>
                                </div>
                            </div>
                            <div className="bg-sky-200 text-center">
                                <h1 className='text-xl font-bold py-2'>Standard Version</h1>
                                <p className='bg-blue-700 text-white text-md h-[70px] flex items-center justify-center'>
                                    ₹ 12500 only <br />(single user)
                                </p>
                                <div className="flex flex-col items-center py-5 gap-7">
                                    <div className="h-20">
                                        <h2>₹ 3000 per extra user</h2>
                                        <h2>₹ 24000 (unlimited user)</h2>
                                        <h2>With all Features</h2>
                                    </div>
                                    <button className='px-4 w-fit text-lg py-1.5 rounded-lg duration-300 text-white hover:bg-sky-700 bg-sky-900'>Read more</button>
                                </div>
                            </div>
                            <div className="bg-sky-200 text-center">
                                <h1 className='text-xl font-bold py-2'>ValueSoft eOwner App</h1>
                                <p className='bg-blue-700 text-white text-md h-[70px] flex items-center justify-center'>
                                    ₹ 1600 per year <br />(single user)
                                </p>
                                <div className="flex flex-col items-center py-5 gap-7">
                                    <div className="h-20">
                                        <h2>₹ 1200 per year for extra user</h2>
                                        <h2>ValueSoft CSR App - ₹ 0</h2>
                                        <h2>ValueSoft Retailer App - ₹ 0</h2>
                                    </div>
                                    <button className='px-4 w-fit text-lg py-1.5 rounded-lg duration-300 text-white hover:bg-sky-700 bg-sky-900'>Read more</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="w-full flex flex-col items-center">
                        <div className="py-2">
                            <p className='text-center text-sm'> *All the prices mentioned above are GST included.  <span className='text-indigo-500 hover:underline duration-500 hover:text-indigo-800 cursor-pointer'>Terms and conditions apply</span></p>
                        </div>
                        <div className="py-10">
                            <iframe class="border-2 rounded overflow-hidden video-card-top" width={700} height={400} src="https://www.youtube.com/embed/1pEBeQhxqd8?modestbranding=1&amp;controls=0"></iframe>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-full">
                        <div className="w-[80%] flex flex-col pt-10  items-center ">
                            <p className='text-4xl pb-5 font-serif'>Frequently Asked Questions</p>
                        </div>
                        <div className="flex flex-col items-center gap-5 pb-10">
                            {FrequentData.map((curElem, index) => (
                                <FreqItem key={index} value={curElem} />
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </Navbar>
    )
}

export default Landingpage