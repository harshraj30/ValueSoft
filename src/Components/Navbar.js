import React from 'react'
import { Link } from 'react-router-dom'
import marquee from 'react-fast-marquee'

const Navbar = ({ children }) => {
    return (
        <div className="flex flex-col justify-between min-h-screen">

            {/* NavBar */}

            <div className="">
                <div className="w-screen flex fixed top-0  z-50 flex-col">
                    <div className=" bg-blue-900 flex items-center  w-full h-10">
                        <marquee>
                            <div className="flex text-lg font-semibold text-white gap-10">
                                <h1>e-Invoicing is mandatory for the taxpayers with annual turnover more than Rs.5 Crore from 01st Aug 2023.</h1>
                                <h1>Generate e-Way bill easily</h1>
                                <h1>Generate e-Invoice quickly</h1>
                                <h1>Save GSTR1 to GST Portal directly from Valuesoft</h1>
                                <h1>Reconciliation of Data with GSTR2A & GSTR2B.</h1>
                            </div>
                        </marquee>
                    </div>

                    <div className="w-full py-4  bg-gray-100 shadow-lg shadow-gray-500 flex justify-center">
                        <div className="w-[90%] items-center flex justify-between">
                            <Link to="/">
                                <div className="">
                                    <img className='w-44' src="https://kalasoftech.com/img/value4.jpg" alt="" />
                                </div>
                            </Link>
                            <div className="flex items-center gap-24">
                                <span className='flex gap-5 text-xl'>
                                    <Link to="/AboutUs">About Us</Link>
                                    <Link>Price</Link>
                                    <Link>
                                        <div className="group">
                                            <div className="flex items-center">
                                                <h1>Product</h1>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="group-hover:-rotate-180 duration-500 w-5 h-5" viewBox="0 0 16 16">
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
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="group-hover:-rotate-180 duration-500 w-5 h-5" viewBox="0 0 16 16">
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
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="group-hover:-rotate-180 duration-500 w-5 h-5" viewBox="0 0 16 16">
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
                </div>
            </div>

            {/* Children */}


            {children}


            {/* Bottom Bar */}

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
    )
}

export default Navbar