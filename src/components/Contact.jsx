"use client";
import { useState, useEffect } from "react";

import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

import {funcShowFull} from "../app/interactions";

import Badge from "./ui/Badge";

export default function Contact(){

    const [showFull, setShowFull] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    //Configure Map Link
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3962.6859548388575!2d106.8845775!3d-6.6857683!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c99cf8450b13%3A0xd348f840f2e4fbbc!2sVilla%20Tolping!5e0!3m2!1sid!2sid!4v1762357240015!5m2!1sid!2sid";

    //Configure Email Link
    const emailAddress = 'villatolping@gmail.com';
    const subject = 'Inquiry about Tolping Villa';
    const body = 'Hello min, saya tertarik untuk mengetahui lebih lanjut tentang Villa Tolping. Apakah masih tersedia untuk tanggal ... ?';
    const encodeTextEmail = encodeURIComponent(body);
    const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}&body=${encodeTextEmail}`;


    // Add fallback timeout
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        },2500);
    },[])
    return(
        <section id="contact" className="w-full scroll-mt-[var(--nav-height)] scroll-mt-[var(--nav-height)] py-12 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col gap-6 px-6">
                <Badge 
                    badgeName="contact us"
                />
                <div className="flex flex-col gap-8 justify-center item-center">
                    <div className="flex flex-col gap-4 text-center">
                        <h1 className="font-villatolping font-medium text-5xl text-black">
                            Get in touch with us!
                        </h1>
                        <p className={`font-roboto font-medium text-gray-400 text-sm transition-all duration-700 ease-in-out overflow-hidden ${showFull ? 'max-h-96' :'max-h-12 line-clamp-2'}`}>
                            For inquiries, or to schedule a service, reach out to us today. Our dedicated team is here to assist you every step of the way.
                            <br className="hidden md:flex"/>
                            &nbsp;Contact us via WhatsApp, email, or media social to get started.
                        </p>
                        <button type="button" onClick={() => funcShowFull(showFull, setShowFull)} id="btnMore" className="block md:hidden text-blue-500 hover:text-blue-600 text-sm transition-colors">
                            {showFull ? 'Less...' : 'View More...'}
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        <div className="flex flex-cols gap-8">
                            <div className="w-full flex flex-col gap-6">
                                <a href={emailLink} target="_blank" rel="noopener noreferrer" className="max-w-full items-center border border-gray-300 rounded-3xl flex flex-row gap-8 p-6 hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex justify-center items-center bg-(--color-badge) rounded-full w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
                                        <MdEmail size={24} className="text-(--color-base) font-bold"/>
                                    </div>
                                    <div className="flex flex-col gap-1 justify-center" >
                                        <span className="font-plus font-medium text-gray-400 text-sm">Email</span>
                                        <p className="text-black text-md ">villatolping@gmail.com</p>
                                    </div>
                                </a>
                                <a href="https://maps.app.goo.gl/aR6bZLeTnm3ZB5727" target="_blank" rel="noopener noreferrer" className="max-w-full items-center border border-gray-300 rounded-3xl flex flex-row gap-8 p-6 hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex justify-center items-center bg-(--color-badge) rounded-full w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
                                        <FaLocationDot size={24} className="text-(--color-base) font-bold"/>
                                    </div>
                                    <div className="flex flex-col gap-1 justify-center">
                                        <span className="font-plus font-medium text-gray-400 text-sm">Address</span>
                                        <p className="max-w-full text-black text-sm">Jl. Kp. Balandongan, Ciherang, <br />Megamendung, Indonesia, West Java</p>
                                    </div>
                                </a>
                                <div className="max-w-full flex flex-col border border-gray-300 rounded-3xl justify-center items-center gap-4 p-6 hover:shadow-lg transition-shadow duration-300">
                                    <span className="font-plus font-medium text-gray-400 text-sm">Follow us on</span>
                                    <div className="flex flex-row gap-6">
                                        <a href="https://www.instagram.com/villatolping/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center bg-(--color-badge) rounded-full w-10 h-10">
                                            <FaInstagram size={18} className="text-(--color-base) font-bold"/>
                                        </a>
                                        <a href="https://www.facebook.com/people/Villa-Tolping/61551715414399/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center bg-(--color-badge) rounded-full w-10 h-10">
                                            <FaFacebookF size={18} className="text-(--color-base) font-bold"/>
                                        </a>
                                        <a href="https://www.facebook.com/people/Villa-Tolping/61551715414399/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center bg-(--color-badge) rounded-full w-10 h-10">
                                            <FaYoutube size={18} className="text-(--color-base) font-bold"/>
                                        </a>
                                        <a href="https://www.tiktok.com/@villa.tolping" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center bg-(--color-badge) rounded-full w-10 h-10">
                                            <FaTiktok size={18} className="text-(--color-base) font-bold"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        {/* Map Container - Responsive Height */}
                        <div className="relative w-full rounded-xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl bg-gray-200 mb-4 sm:mb-6"
                            style={{ paddingBottom: '75%' }}> {/* 4:3 ratio for mobile, adjust as needed */}
                            {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                                    <div className="flex flex-col items-center gap-2 sm:gap-3">
                                        <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-blue-600"></div>
                                        <p className="text-xs sm:text-sm text-gray-600 font-roboto">Loading map...</p>
                                    </div>
                                </div>
                            )}
                            <iframe
                                src={mapSrc}
                                className="absolute top-0 left-0 w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Villa Tolping Location"
                                onLoad={() => setIsLoading(false)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}