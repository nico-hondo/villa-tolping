"use client";

import Image from "next/image";

import HeroImage from "../../public/images/Background-Image.png";

import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";

export default function Hero(){

    // Configure Whatsapp Link
    const phoneNumbercs = '6282114667061';
    const templateText = "Hai mimin, baru cek website nih. Mau tanya-tanya tentang Villa Tolping?";
    const encodeText = encodeURIComponent(templateText);
    const whatsappLinkCSfirst = `whatsapp://send?phone=${phoneNumbercs}&text=${encodeText}`;


    return(
        <section className="w-full h-screen flex items-center justify-center relative">

            <Image src={HeroImage} alt="Hero-Image" className="w-full h-full inset-0 object-cover absolute"/>

            {/* Overlay background - linear gradient -> to right */}
            <div className="absolute inset-0 bg-linear-to-r from-slate-800/80 via-slate-800/50 to-transparent"></div>

            <div className="w-full h-auto px-6 md:px-12 lg:px-20 z-10">
                <div className="max-w-6xl mx-auto px-4 flex flex-col gap-48 relative">
                    <div className="w-full bg-white py-4 px-8 grid grid-cols-3 gap-4 rounded-2xl shadow-lg">
                        <div className="flex flex-col border-r border-dashed border-indigo-500 justify-center px-4">
                            <div className="flex flex-row gap-2 items-center">
                                <IoLocationOutline className="text-(--color-button) text-sm"/>
                                <span className="text-sm text-gray-600 font-nunito-sans tracking-widest">Plan Your Stay</span>
                            </div>
                            <h3 className="text-2xl font-montaga font-medium text-gray-500">Pick your stay dates!</h3>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="flex flex-row gap-2 items-center">
                                <CiCalendar className="text-(--color-button) text-sm"/>
                                <span className="text-sm text-gray-600 font-nunito-sans tracking-widest">1 Night</span>
                            </div>
                            <h3 className="text-2xl font-montaga font-medium text-black cursor-pointer">Wed, 12 Nov - Thu, 13 Nov</h3>
                        </div>
                        <div className="w-full flex fle-row gap-2 items-center bg-black/90 rounded-full justify-center text-white cursor-pointer hover:bg-(--color-button) hover:text-black transition duration-300 py-4">
                            <IoIosSend className="text-lg"/>
                            <span>Check Availability</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <h1 className="font-villatolping font-medium text-4xl md:text-5xl ">Discover Serenity at <br/> Tolping's Villa</h1>
                        <a href={whatsappLinkCSfirst} className="font-roboto h-12 w-35 bg-(--color-button) text-(--color-base) font-semibold rounded-3xl flex items-center justify-center hover:bg-(--color-badge) hover:text-(--color-nav) transition duration-300 text-sm">
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}