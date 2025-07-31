import React from 'react';
import About from '../images/about.jpg';
import Truck from "../images/truck.png";
import garrage from "../images/garrage.png";
import outlet from "../images/outlet.png";


export default function AboutSection(){
    return(
        <>
            <div className="container mx-auto p-6 my-20">
                
                <div className="grid lg:grid-cols-2 ">
                    <div className="flex justify-center">
                        <img className="z-20 shadow-lg rounded w-[350px] " src={About} alt=""/>
                    </div>

                    <div className="w-full md:w-3/4 text-center md:text-start">
                        <h2 className="font-sans font-bold my-4 text-2xl">About</h2>
                        <h1 className="font-sans font-bold my-6 text-4xl"></h1>
                        <p className="text-base my-6 text-[#706f7b] font-sans">Whether you need a car for daily commuting, a weekend trip, or a business journey, we’ve got you covered.
                             Our platform offers a wide range of vehicles including hatchbacks, sedans, SUVs, and more — all available at competitive prices. Enjoy a seamless booking experience, 
                            flexible rental options, and complete transparency with no hidden charges. Every vehicle is thoroughly inspected and sanitized before every ride, ensuring safety and comfort.
                             With 24/7 customer support and easy online booking, you can rent a car in just a few clicks. Discover the freedom of the road — your perfect ride is just a tap away</p>
                        <div className="flex justify-center md:justify-start gap-6 mt-10">
                            <img src={Truck} alt="" className=""/>
                            <img src={garrage} alt="" className=""/>
                            <img src={outlet} alt="" className=""/>                                               
                        </div>
                        <p className="text-xl font-bold mt-10 text-[#706f7b]">We are at your service. Feel free to contact.</p>
                    </div>
                </div>
            </div>
        </>
    )
}



