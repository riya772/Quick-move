import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';


export default function Footer(){
    return(
        <>
            <div className=" mt-10">
                <div className="container mx-auto p-6">
                    <div className="grid lg:grid-cols-4 gap-6">
                        <div className="">
                            <h1 className="font-sans font-bold text-3xl">Car Rentals</h1>
                            <p className="font-sans text-base text-[#706f7b] my-2">We’re not just a car rental platform—we’re your travel companion.
                                 Whether you need a car for a few hours, a few days, or even longer,</p>
                            <h2 style={{cursor:"pointer"}} className="font-sans font-bold text-lg my-1 hover:text-orange"><PhoneIcon/> 9153435146</h2>
                            <h2 style={{cursor:"pointer"}} className="font-sans font-bold text-lg my-1 hover:text-orange"><EmailIcon/> carrentals@gmail.com</h2>
                            
                        </div>
                        <div className="">
                            <h2 className="font-sans font-bold text-2xl">Terms of Services</h2>
                            <p>You must be 18+ with a valid driving license.

                               Identity verification is required.
                               Use the car legally and safely.
                               No smoking, drinking, or racing
                               .</p>
                            
                        </div>
                        <div className="">
                            <h2 className="font-sans font-bold text-2xl">Our Achievements</h2>
                            <p className="font-sans text-lg mt-1">50,000+ Rides Completed.</p>
                            <p className="font-sans text-lg mt-1">Rated 4.8/5 by Our Customers</p>
                            
                        </div>
                        <div className="">
                            <h2 className="font-sans font-bold text-2xl">SUBSCRIPTION</h2>
                            <p className="font-sans text-lg mt-1">Subscribe your Email address for latest news & updates.</p>
                            <div className="grid grid-rows-2 gap-2 mt-2">
                                <input type="email" placeholder='Enter Email Address' className="focus:outline-none text-center  py-3 px-10 bg-[#ececec]"></input>
                                <button className="bg-orange text-white font-bold hover:shadow-2xl px-24 py-3 mt-1">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}