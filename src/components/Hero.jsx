"use client";
import { useState, useEffect } from "react";

import Image from "next/image";

import HeroImage from "../../public/images/Background-Image.png";

import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";

import { CalendarModal } from "../config/CalendarModal";

export default function Hero(){

    // Configure Whatsapp Link
    const phoneNumbercs = '6282114667061';
    const templateText = "Hai mimin, baru cek website nih. Mau tanya-tanya tentang Villa Tolping?";
    const encodeText = encodeURIComponent(templateText);
    const whatsappLinkCSfirst = `whatsapp://send?phone=${phoneNumbercs}&text=${encodeText}`;

    // Configure Calendar Custom
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    const formatDate = (date) => {
        if(!date) return '';
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
    };

    const formatDateWA = (date) => {
        if(!date) return '';
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'August', 'September', 'October', 'November', 'December'];
        return `${date.getDate()} ${months[date.getMonth()]}`;
    };
    const calculateNights = () => {
        if(!checkInDate && !checkOutDate) return 'Dates';
        if(checkInDate && !checkOutDate) return 0;
        const timeDiff = Math.abs(checkOutDate - checkInDate);
        const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        return diffDays;
    };
    const nights = calculateNights();
    
    const handleDateSelect = (newCheckIn, newCheckOut) => {
        setCheckInDate(newCheckIn);
        setCheckOutDate(newCheckOut);
    };


    // Configure Whatsapp Link
    const templateTextRefCalendar = `Hai mimin, baru cek website nih. Untuk tanggal ${formatDateWA(checkInDate)} - ${formatDateWA(checkOutDate)} Apakah sudah terisi? Sekalian nih, Mau tanya-tanya tentang Villa Tolping?`;
    const encText = encodeURIComponent(templateTextRefCalendar);
    const whatsappCSFirstRefCal = `whatsapp://send?phone=${phoneNumbercs}&text=${encText}`;

    //Configure Scroll Effect
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handlingScroll = () => {
            //check jika posisi scroll lebih dari 70px
            if(window.scrollY > 100){
                setIsScrolled(true);
            }else{
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handlingScroll);
        return () => {
            window.removeEventListener("scroll", handlingScroll);
        }
    }, []);

    return(
        <section className="w-full h-screen flex items-center justify-center relative">

            <Image src={HeroImage} alt="Hero-Image" className="w-full h-full inset-0 object-cover absolute"/>

            {/* Overlay background - linear gradient -> to right */}
            <div className="absolute inset-0 bg-linear-to-r from-slate-800/80 via-slate-800/50 to-transparent"></div>

            <div className="w-full z-10 flex flex-col gap-48 justify-center pt-20">
                <div className={`${isScrolled ? 'bg-white fixed top-20 left-0 w-full z-40' : 'w-full md:max-w-4xl lg:max-w-5xl xl:max-w-6xl xl:mx-48 px-6'} transition-all duration-300`}>
                    <div className={`bg-white ${isScrolled ? 'max-w-6xl mx-auto py-2 px-6 rounded-none' : 'w-full py-4 px-2 md:px-8 rounded-2xl shadow-lg'} grid grid-cols-2 md:grid-cols-3 gap-4 transition-all duration-700 ease-out`}>
                        <div className="flex flex-col border-r border-dashed border-indigo-500 justify-center px-2 md:px-4">
                            <div className="flex flex-row gap-2 items-center">
                                <IoLocationOutline className="text-(--color-button) text-sm"/>
                                <span className="text-sm text-gray-600 font-nunito-sans tracking-widest">Plan Your Stay</span>
                            </div>
                            <h3 className={`${isScrolled ? 'text-lg' : 'sm:text-md md:text-xl'} font-montaga font-medium text-gray-500 transition-all duration-500`}>Pick your stay dates!</h3>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="flex flex-row gap-2 items-center">
                                <CiCalendar className="text-(--color-button) text-sm"/>
                                <span className="text-sm text-gray-600 font-nunito-sans tracking-widest">
                                    {nights === 'Dates'
                                    ? 'Dates'
                                    :`${nights} NIGHT${nights !== 1 ? 'S' : ''}`}
                                </span>
                            </div>
                            
                            <button 
                            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                            className="text-left text-md md:text-xl font-montaga font-medium text-black">
                                {checkInDate && checkOutDate ? `${formatDate(checkInDate)} - ${formatDate(checkOutDate)}` : 'Select Dates'}
                            
                            </button>
                        </div>
                        <a href={whatsappCSFirstRefCal} className="w-full hidden md:flex flex-row gap-2 items-center bg-black/90 rounded-full justify-center text-white cursor-pointer hover:bg-(--color-button) hover:text-black transition duration-300 py-4">
                            <IoIosSend className="text-lg"/>
                            <p>Check Availability</p>
                        </a>
                    </div>
                </div>
                <div className="w-full md:max-w-4xl lg:max-w-6xl xl:mx-48 px-6 flex flex-col gap-48 relative transition-all duration-500">
                    <div className="flex flex-col gap-8">
                        <h1 className="font-cormorant-garamond font-medium text-4xl text-white md:text-5xl ">Discover Serenity at <br/> Tolping's Villa</h1>
                        <a href={whatsappLinkCSfirst} className="font-roboto h-12 w-35 bg-(--color-button) text-(--color-base) font-semibold rounded-3xl flex items-center justify-center hover:bg-(--color-badge) hover:text-(--color-nav) transition duration-300 text-sm">
                            Book Now
                        </a>
                    </div>
                </div>

                    <CalendarModal
                        isCalendarOpen={isCalendarOpen}
                        onClose={() => setIsCalendarOpen(false)}
                        checkInDate={checkInDate}
                        checkOutDate={checkOutDate}
                        onDateSelect={handleDateSelect}

                        setCheckInDate={setCheckInDate}
                        setCheckOutDate={setCheckOutDate}
                    />
            </div>
        </section>
    );
}