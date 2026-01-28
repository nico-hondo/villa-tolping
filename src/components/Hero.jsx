"use client";
import { useState, useEffect} from "react";

import Image from "next/image";

import HeroImage from "../../public/images/Background-Image.png";

import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { MdOutlineArrowRightAlt } from "react-icons/md";

import { CalendarModal } from "../config/CalendarModal";

import { useLanguage } from "@/context/LanguageContext";

export default function Hero(){

    // const elemenRef = useRef(null);

    // Configure Whatsapp Link
    const phoneNumbercs = '6282114667061';
    const templateText = "Hai mimin, baru cek website nih. Mau tanya-tanya tentang Villa Tolping?";
    const encodeText = encodeURIComponent(templateText);
    const whatsappLinkCSfirst = `whatsapp://send?phone=${phoneNumbercs}&text=${encodeText}`;

    // Configure Calendar Custom
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    const { translations } = useLanguage();
    const booking = translations.hero.bookingmodal;

    const formatDate = (date) => {
        if(!date) return '';
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
    };

    const formatDateWA = (date) => {
        if(!date) return '';

        //Format untuk mengambil tanggal dan bulan saja
        // const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        // const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'August', 'September', 'October', 'November', 'December'];
        // return `${date.getDate()} ${months[date.getMonth()]}`;

        return date.toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        });
    };

    const calculateNights = () => {
        if(!checkInDate && !checkOutDate) return 'Dates';
        if(checkInDate && !checkOutDate) return 0;
        const timeDiff = Math.abs(checkOutDate - checkInDate);
        const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    const nights = calculateNights();

    // useEffect(() => {
    //     //Make font weight to bold or maybe change color, when user has selected dates > 0 nights
    //     if(elemenRef.current){
    //         if(calculateNights() > 0 && calculateNights() !== 'Dates'){
    //             elemenRef.current.classList.remove('text-gray-600');
    //             elemenRef.current.classList.add('text-black', 'font-bold');
    //         }
    //     }
    // }, []);
    
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
        <section id="home" className="w-full h-screen flex items-center justify-center relative">

            <Image src={HeroImage} alt="Villa Tolping Megamendung Bogor" className="w-full h-full inset-0 object-cover absolute"/>

            {/* Overlay background - linear gradient -> to right */}
            <div className="absolute inset-0 bg-linear-to-r from-slate-800/80 via-slate-800/50 to-transparent"></div>

            <div className="w-full z-10 flex flex-col gap-48 justify-center pt-20">
                <div className={`${isScrolled ? 'bg-white fixed top-20 left-0 w-full z-40' : 'w-full md:max-w-4xl lg:max-w-5xl xl:max-w-6xl xl:mx-48 px-6'} transition-all duration-300`}>
                    <div className={`bg-white ${isScrolled ? 'max-w-6xl mx-auto py-2 px-2 rounded-none' : 'w-full py-4 px-2 md:px-8 rounded-2xl shadow-lg'} grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 transition-all duration-700 ease-out`}>
                        <div className="flex flex-col border-r border-dashed border-indigo-500 justify-center gap-1 px-2 md:px-4">
                            <div className="flex flex-row gap-2 items-center">
                                <IoLocationOutline className="text-(--color-button) text-sm md:text-lg lg:text-xl"/>
                                <span className={`${isScrolled ? 'text-xs md:text-sm lg:text-md' : 'text-xs md:text-sm lg:text-md'} text-gray-500 font-semibold font-villatolping`}>{booking.direction.label}</span>
                            </div>
                            <div className="flex flex-row gap-4">
                                <h3 className={`${isScrolled ? 'text-xs md:text-sm lg:text-md' : 'text-xs md:text-sm lg:text-md'} font-villatolping font-medium text-gray-500 transition-all duration-500`}>{booking.direction.helper}</h3>
                                <MdOutlineArrowRightAlt className={` ${isScrolled ? 'text-md' : 'text-sm md:text-md lg:text-xl'} mt-1 text-(--color-button) transition-all duration-500`}/>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center px-2 md:px-4 gap-1">
                            <div className="flex flex-row gap-2 items-center">
                                <CiCalendar className="text-(--color-button) text-sm md:text-lg lg:text-lg"/>
                                <span className={`${isScrolled ? 'text-xs md:text-sm lg:text-md' : 'text-xs md:text-sm lg:text-md'} ${nights > 0 ? 'text-gray-800 font-semibold' : 'text-gray-500 font-semibold'} font-villatolping`}>
                                    {nights === 'Dates'
                                    ? booking.pickdates.label
                                    :`${nights} ${booking.pickdates.helper}${booking.pickdates.helper == "Night" ? (nights !== 1 ? 's' : '') : '' }`}
                                </span>
                            </div>

                            <div className="flex flex-row gap-1 items-center">
                                <button 
                                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                                className={` ${isScrolled ? 'text-sm md:text-sm lg:text-md' : 'text-xs md:text-sm lg:text-md'}  font-villatolping font-medium text-left text-gray-900 md:text-gray-800 lg:text-gray-500 cursor-pointer hover:text-black transition duration-300`}>
                                    {checkInDate && checkOutDate ? `${formatDate(checkInDate)} - ${formatDate(checkOutDate)}` : booking.pickdates.placeholder}
                                </button>
                                <a href={whatsappCSFirstRefCal} alt="Check Availability" className="flex md:hidden">
                                    <IoIosSend className={` ${isScrolled ? 'text-lg' : 'text-xl'} text-(--color-button) transition-all duration-500 hover:text-(--color-button-dark) cursor-pointer`}/>
                                </a>
                            </div>
                        </div>
                        <a href={whatsappCSFirstRefCal} className="w-full hidden md:flex flex-row gap-2 items-center bg-black/90 rounded-full justify-center text-white cursor-pointer hover:bg-(--color-button) hover:text-black transition duration-300 py-4">
                            <IoIosSend className="text-lg"/>
                            <p className="text-xs md:text-sm lg:text-md">{booking.cta}</p>
                        </a>
                    </div>
                </div>
                <div className="w-full md:max-w-4xl lg:max-w-6xl xl:mx-48 px-6 flex flex-col gap-48 relative transition-all duration-500">
                    <div className="flex flex-col gap-8 items-start">
                        <h1 className="font-cormorant-garamond font-medium text-4xl text-white md:text-5xl ">{translations.hero.title} <br/> {translations.hero.titlecont}</h1>
                        <a href={whatsappLinkCSfirst} className="font-roboto px-8 py-3 bg-(--color-button) text-gray-700 font-semibold rounded-full items-center justify-center hover:bg-gray-900 hover:text-gray-300 transition duration-300 inline-block text-sm">
                            {translations.hero.cta}
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