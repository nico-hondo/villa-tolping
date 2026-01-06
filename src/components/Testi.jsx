"use client"
import { useState, useRef, useEffect } from "react";

import Image from "next/image";

import {Rating} from 'primereact/rating';
import {MdNavigateNext} from "react-icons/md";
import {MdNavigateBefore} from "react-icons/md";

// import datastorage with ext .js
import { testiData } from "@/data/dataStore"

import Badge from "./ui/Badge";

export default function Testi(){

    //Ganti data testi tanpa library external seperti swiper
    const [currentIndex, setCurrentIndex] = useState(0);

    //initiate indexing check before change slide
    const isFirstSlide = currentIndex === 0;
    const isLastSlide = currentIndex === testiData.length - 1;

    //function to handle prev and next button
    const handlePrev = () => {
        const newIndex = isFirstSlide ? testiData.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    //ambil data testi berdasarkan currentNowByIndex
    const currentData = testiData[currentIndex];

    //disabled button prev if first slide


    return(
        <section id="testimonial" className="w-full scroll-mt-[var(--nav-height)] bg-sectionColor justify-center items-center py-10 md:py-24 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
                <div className="flex max-w-full justify-center items-center">
                    <Image 
                    src={currentData.src}
                    alt={currentData.alt}
                    width={800}
                    height={500}
                    className="object-cover rounded-3xl"
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <Badge 
                        badgeName="testimonials"
                    />
                    <h1 className="font-villatolping text-5xl font-medium">Hear from Our <br /> Guests.</h1>
                    
                    <Rating value={currentData.rating} readOnly cancel={false} className="text-yellow-600 gap-1"/>

                    <div className="min-h-25 md:min-h-20">
                        <p className="text-sm pr-0 md:pr-16">"{currentData.description}"</p>
                    </div>
                    <hr className="text-gray-600 mr-16"/>

                    <span className="font-semibold text-sm">{currentData.author}</span>

                    <div className="flex flex-row gap-4">
                        <button onClick={handlePrev} className={`custom-prev border border-gray-300 rounded-full shadow-md w-10 h-10 flex items-center justify-center cursor-pointer z-10 ${isFirstSlide ? 'border-gray-100 opacity-75 cursor-none' : 'border-gray-300'}`} disabled={isFirstSlide}>
                            <MdNavigateBefore className={`text-white size-6 ${isFirstSlide? 'text-gray-700 opacity-50 ' : 'text-white hover:text-gray-200'}`}/>
                        </button>
                        <button onClick={handleNext} className={`custom-next  bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center cursor-pointer z-10 ${isLastSlide ? 'bg-gray-400 cursor-not-allowed opacity-50' : 'bg-white hover:bg-gray-100'}`} disabled={isLastSlide}>
                            <MdNavigateNext className="text-black size-6"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}