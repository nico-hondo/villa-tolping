"use client";

import { useState, useEffect} from "react";

import Image from "next/image";
import logoVillaBl from "@/../public/images/Logo-Medium.png";
import logoVillaWh from "@/../public/images/Logo-Large-White.png";
import { FaGlobeAmericas } from "react-icons/fa";

export default function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handlingScroll = () =>{

            //check jika posisi scroll lebih dari 60px
            if(window.scrollY > 60){
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handlingScroll);
        return () => {
            window.removeEventListener("scroll", handlingScroll);
        }
    }, []);

    return (
        <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-400 
        ${
            isScrolled ? "bg-white shadow-md text-black" : "bg-black/50 backdrop-blur-lg text-white hover:bg-white hover:text-black"
        }`}
        
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >

            <div className="max-w-6xl mx-auto py-6 px-4 flex justify-between items-center">
                <a href="#">
                    <Image src={
                        isScrolled ? 
                        logoVillaBl 
                        : 
                        isHovered ? logoVillaBl : logoVillaWh} alt="Villa Tolping Logo" width={150} height={50} className="transition-all duration-500"/>
                </a>
                <nav className="flex right-30 font-medium space-x-4 top-6 text-sm text-center justify-center items-center ">
                    <a href="#" className="px-3 py-3">Home</a>
                    <a href="#" className="px-3 py-3">Gallery</a>
                    <a href="#" className="px-3 py-3">About us</a>
                    <a href="#" className="px-3 py-3">Testimonial</a>
                    <a href="#" className="px-3 py-3">Booking</a>
                    <a href="#" className="px-3 py-3">Contact</a>
                    <a href="#" className={`px-3 py-2 font-medium flex text-xs justify-center items-center rounded-4xl border border-gray-300
                    ${isScrolled ? 'border-gray-800' : isHovered ? 'border-gray-800':'border-gray-300'}`}>
                        <FaGlobeAmericas size={18} className="inline mr-2" />
                        Eng
                    </a>
                </nav>
            </div>
        </header>
    );
}