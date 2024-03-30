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
        <div className="">
            <Navbar />
            <div className="mt-[9vh] w-screen ">
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

                <div className="bg-blue-500 w-full h-[50vh] flex flex-col items-center">
                    <div className="grid grid-cols-4 py-10 w-[70%] text-white">
                        <div className="w-[22vw]">
                            <p className='text-xl'>Quick Links</p>
                            <p className='text-sm'>Partnership</p>
                            <p className='text-sm'>Contact Us</p>
                            <p className='text-sm'>About Us</p>
                            <p className='text-sm'>Price</p>
                            <p className='text-sm'>GST Info</p>
                            <p className='text-sm'>Pharma</p>
                            <p className='text-sm'>Pharma Retail</p>

                            <p className='text-xl font-semibold pt-5 pb-2'>Pay With QR Code</p>
                            <img className='w-32' src="https://kalasoftech.com/img/pay_qrcode.png" alt="" />
                        </div>
                        <div className="w-[22vw]">
                            <p className='text-sm'>GST return filling</p>
                            <p className='text-sm'>Inventory Management Software</p>
                            <p className='text-sm'>POS Software</p>
                            <p className='text-sm'>Video Tutorial</p>
                            <p className='text-sm'>Privacy Policy</p>
                            <p className='text-sm'>Terms & Conditions</p>
                            <p className='text-sm'>Refund Policy</p>
                            <p className='text-sm'>Features</p>

                            <p className='text-xl font-semibold pt-16'>Follow Us</p>
                            <div className="mt-5 flex gap-5">
                                <Link to="https://www.instagram.com/mai_hu_harsh?igsh=MWkyMnVsaTNzaDNuZQ==">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="cursor-pointer bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                    </svg>
                                </Link>
                                <Link to="https://github.com/harshraj30">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="cursor-pointer bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                    </svg>
                                </Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="cursor-pointer bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="cursor-pointer bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-[22vw]">
                            <p className='text-xl'>CORPORATE OFFICE</p>
                            <p className='text-sm'><span className='font-bold'>Address</span>: 3rd Floor, B-3 Shopping Center
                                <br />Tagore Garden <br />New Delhi – 110027</p>
                            <p className='text-sm'><span className='font-bold'>State</span> : New Delhi</p>
                            <p className='text-sm'><span className='font-bold'>Phone</span> : +916200826171</p>
                            <p className='text-sm'><span className='font-bold'>Email</span> : info@kalasoftech.com</p>
                            <p className='text-sm'><span className='font-bold'>Email</span> : info@kalasoftech.org</p>
                        </div>
                        <div className="w-[22vw]">
                            <p className='text-xl'>CORPORATE OFFICE</p>
                            <p className='text-sm'><span className='font-bold'>Address</span>: Rajeshwari Bhawan <br />
                                Mourya Path , North of Piller Number 15 <br />
                                Bailey Road, Patna – 800014</p>
                            <p className='text-sm'><span className='font-bold'>State</span> : Bihar</p>
                            <p className='text-sm'><span className='font-bold'>Phone</span> : 09334483152 / 3 /7</p>
                            <p className='text-sm'><span className='font-bold'>Email</span> : info@kalasoftech.com</p>
                            <p className='text-sm'><span className='font-bold'>Email</span> : info@kalasoftech.org</p>
                        </div>
                    </div>

                    <div className="text-center text-white border-t-2 w-[70%] pt-2">
                        <p>Copyright ©️ 2023 - Kala Softech Pvt. Ltd. All rights reserved.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Landingpage