import React, { useContext, useEffect, useRef, useState } from 'react';
import Hero from '../Components/Bodycomponents/Hero';
import Form from '../Components/Bodycomponents/Form';
import Banner from '../Components/Bodycomponents/Banner';

import Footer from '../Components/Bodycomponents/Footer';
import Bookcar from '../Components/Bodycomponents/Bookcar';
import Accountbar from '../Components/Navbarcomponents/Accountbar';
import { UserContext } from '../Context/Clientcontext';
import { useNavigate } from 'react-router-dom';
import LinearColor from '../Components/Bodycomponents/linearprogress';
import Privateroute from '../middleware/privateroute';



export default function Account(){

   Privateroute();
    const {user} = useContext(UserContext);
    const reservationFormRef = useRef(null);
    const [isDivVisible, setDivVisible] = useState(false);
    const [carType, setCarType] = useState('');
    const [pickPlace, setPickPlace] = useState('');
    const [dropPlace, setDropPlace] = useState('');
    const [pickDate, setPickDate] = useState('');
    const [dropDate, setDropDate] = useState('');
    const navigate = useNavigate();
    const [checkUser, setCheckUser] = useState(false);

    

    useEffect(()=>{
        const timer = setTimeout(() => {
            setCheckUser(true)
        }, 1000);

        return () => {
            clearTimeout(timer);
          };
    },[user])

 
    const addClass = ()=>{
        let classes = "";
        if(isDivVisible){
            classes += "saturate-50" 
         }
        return classes;
    }
        


    const handleBookRideClick = () => {
        if (reservationFormRef.current) {
          reservationFormRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const toggleDiv = () => {
        setDivVisible(true);
      };
    


   

    
    return(
        <>
        {!checkUser && <LinearColor/>}
        {checkUser && 
            <div className="">
           <div className={addClass()}>
            <Accountbar/>
            <Hero handleBookRideClick={handleBookRideClick}/>
            <Form reservationFormRef={reservationFormRef} toggleDiv={toggleDiv} carType={carType} setCarType={setCarType} pickPlace={pickPlace}
                dropPlace={dropPlace} setPickPlace={setPickPlace} setDropPlace={setDropPlace} pickDate={pickDate} dropDate={dropDate}
                setPickDate={setPickDate} setDropDate={setDropDate}
            />
            
            
            <Banner/>
            
            
            
            <Footer/>
        </div>
            <Bookcar isDivVisible={isDivVisible} setDivVisible={setDivVisible} carType={carType} pickPlace={pickPlace}
                dropPlace={dropPlace} pickDate={pickDate} dropDate={dropDate} />
        </div>}
        </>
    )
}