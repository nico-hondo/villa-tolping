"use client";

import { useState, useEffect, useRef} from "react";

import Image from "next/image";
import logoVillaBl from "@/../public/images/Logo-Medium.png";
import logoVillaWh from "@/../public/images/Logo-Large-White.png";

import { FaGlobeAmericas } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import { useLanguage } from "@/context/LanguageContext";

import { navItems } from "@/data/dataStore";


import LanguageSwitcher from "@/config/LanguageSwitcher";

export default function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isClick, setIsClickFlex] = useState(false);
    
    const DEFAULT_SECTION = "home";
    const [activeSection, setActiveSection] = useState(DEFAULT_SECTION);

    const navRef = useRef(null);

    const { translations } = useLanguage();

    if(!translations?.navbar) return null;

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if(!section) return;
        
        section.scrollIntoView({ 
            behavior: "smooth", 
            block: "start"
        });
    }

    useEffect(() => {
        const sections = navItems.map(item=> document.getElementById(item.id)).filter(Boolean);

        const observer = new IntersectionObserver(
            entries =>{
                entries.forEach(entry => {
                    if(entry.isIntersecting){
                        setActiveSection(entry.target.id);
                    }
                })
            },
            {
                root: null,
                threshold: 0.6 //60% of the section is visible
            }
        );

        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handlingScroll = () =>{

            //check jika posisi scroll lebih dari 60px
            if(window.scrollY > 100){
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

    useEffect(() => {
        
        const nav = document.getElementById("navbar");
        if(nav){
            document.documentElement.style.setProperty(
                '--nav-height', 
                `${nav.offsetHeight}px`
            );
        }
    }, []);

    return (
        <>
            <header id="navbar" className={`w-full h-20 fixed top-0 left-0 z-50 transition-all duration-700
            ${
                isScrolled ? "bg-white shadow-md text-black" : "bg-(--color-button)/70 md:bg-black/50 backdrop-blur-lg text-black hover:bg-white hover:text-black"
            }`}
            
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >

                <div className="max-w-6xl mx-auto h-full px-4 flex justify-between items-center">
                    <a href="#">
                        <Image src={
                            isScrolled ? 
                            logoVillaBl 
                            : 
                            isHovered ? logoVillaBl : logoVillaWh} alt="Villa Tolping Logo" width={150} height={50} className="transition-all duration-700"/>
                    </a>
                    <nav ref={navRef} id="navbar" className={`right-30 font-medium space-x-4 top-6 text-sm ${isScrolled ? 'text-black' : isHovered ? 'text-black' : 'text-white'} text-center justify-center items-center hidden md:flex transition-all duration-700`}>
                        {navItems.map(item => {
                            const isActive = activeSection === item.id;
                            const navBar = translations.navbar[item.id];
                            return(
                                <li key={item.id} className="relative decoration-none list-none inline-block mx-2 py-2">
                                    <button
                                        type="button"
                                        onClick={() => scrollToSection(item.id)}
                                        className={`px-1 text-sm tracking-wide ${isActive ? 'text-teal-500' : ''} cursor-pointer`}
                                    >
                                        {navBar}
                                    </button>

                                    {/* Underline Animation */}
                                    <span 
                                        className={`absolute left-0 -bottom-1 h-[2px] w-full bg-teal-500
                                        ${isActive ?
                                            "scale-x-100 opacity-100"
                                            : "scale-x-0 opacity-0"
                                        }
                                           origin-center 
                                        `}
                                    />
                                </li>
                            );
                        })}
                        {/* <a href="#" className={`px-3 py-2 font-medium flex text-xs justify-center items-center rounded-4xl border border-gray-300 hover:text-teal-500 ${isScrolled ? 'border-gray-800' : (isHovered ? 'border-gray-800':'border-gray-300')}`}>
                            <FaGlobeAmericas size={18} className="inline mr-2" />
                            Eng
                        </a> */}
                        <LanguageSwitcher isHovered={isHovered} isScrolled={isScrolled}/>
                    </nav>
                    <button onClick={() => setIsClickFlex(true)} className={`md:hidden text-xl ${isScrolled ? 'text-gray-500' : 'text-gray-200'} hover:text-teal-400 transition-colors duration-300`}>
                        <FaBars/>
                    </button>
                </div>
            </header>


            {/* Mobile Responsive when function setIsClickFlex is true */}
            {isClick && (
                <div className="fixed inset-0 z-[999] bg-gradient-to-b from-[#1ACFAE] to-[#0FB5B2] flex flex-col items-center justify-start pt-32 gap-8 text-gray-700">
                    <div className="w-full absolute top-6 flex justify-between px-4">
                        <a href="#">
                            <Image src={logoVillaBl} alt="Villa Tolping Logo" width={150} height={50} className="transition-all duration-500"/>
                        </a>
                        <button 
                            onClick={() => setIsClickFlex(false)} 
                            className="text-3xl text-black"
                            >
                            <IoClose />
                        </button>
                    </div>
                    <a href="#" className="font-semibold px-3 py-2">Home</a>
                    <a href="#" className="font-semibold px-3 py-2">Gallery</a>
                    <a href="#" className="font-semibold px-3 py-2">About us</a>
                    <a href="#" className="font-semibold px-3 py-2">Testimonial</a>
                    <a href="#" className="font-semibold px-3 py-2">Booking</a>
                    <a href="#" className="font-semibold px-3 py-2">Contact</a>
                    <a href="#" className={`px-3 py-2 font-semibold flex text-sm justify-center items-center rounded-4xl border border-gray-800`}>
                        <FaGlobeAmericas size={18} className="inline mr-2" />
                        Eng
                    </a>
                </div>
            )}
        </>
    );
}