"use client";
import { useState } from "react";

import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

import Image from "next/image";

import {funcShowFull} from "../app/interactions";

export default function Contact(){

    const [showFull, setShowFull] = useState(false);

    return(
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col gap-6 px-6">
                <div id="badgeGallery" className="badge-item w-25 font-plus font-semibold px-0 py-3 rounded-full justify-center items-center text-center">Contact Us
                </div>
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
                            {showFull ? 'Lebih Sedikit' : 'Selengkapnya...'}
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        <div className="flex flex-cols gap-8">
                            <div className="w-full flex flex-col gap-6">
                                <div className="max-w-full items-center border border-gray-300 rounded-3xl flex flex-row gap-8 p-6">
                                    <div className="flex justify-center items-center bg-(--color-badge) rounded-full w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
                                        <MdEmail size={24} className="text-(--color-base) font-bold"/>
                                    </div>
                                    <div className="flex flex-col gap-1 justify-center">
                                        <span className="font-plus font-medium text-gray-400 text-sm">Email</span>
                                        <p className="text-black text-md ">villatolping@gmail.com</p>
                                    </div>
                                </div>
                                <div className="max-w-full items-center border border-gray-300 rounded-3xl flex flex-row gap-8 p-6">
                                    <div className="flex justify-center items-center bg-(--color-badge) rounded-full w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
                                        <FaLocationDot size={24} className="text-(--color-base) font-bold"/>
                                    </div>
                                    <div className="flex flex-col gap-1 justify-center">
                                        <span className="font-plus font-medium text-gray-400 text-sm">Address</span>
                                        <p className="max-w-full text-black text-md">8V7M+HQX, Sukamaju, Kec.Megamendung, <br />Kabupaten Bogor, <br className="flex md:hidden"/>Jawa Barat</p>
                                    </div>
                                </div>
                                <div className="max-w-full flex flex-col border border-gray-300 rounded-3xl justify-center items-center gap-4 p-6">
                                    <span className="font-plus font-medium text-gray-400 text-sm">Follow us on</span>
                                    <div className="flex flex-row gap-6">
                                        <div className="flex justify-center items-center bg-(--color-badge) rounded-full w-10 h-10">
                                            <FaInstagram size={18} className="text-(--color-base) font-bold"/>
                                        </div>
                                        <div className="flex justify-center items-center bg-(--color-badge) rounded-full w-10 h-10">
                                            <FaFacebookF size={18} className="text-(--color-base) font-bold"/>
                                        </div>
                                        <div className="flex justify-center items-center bg-(--color-badge) rounded-full w-10 h-10">
                                            <FaYoutube size={18} className="text-(--color-base) font-bold"/>
                                        </div>
                                        <div className="flex justify-center items-center bg-(--color-badge) rounded-full w-10 h-10">
                                            <FaTiktok size={18} className="text-(--color-base) font-bold"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Image src="/images/gallery/Bedroom1.jpeg" alt="Gambar-Alternatif" width={800} height={500}
                        className="bg-auto w-full h-full md:h-[370px] rounded-4xl"/>
                    </div>
                </div>
            </div>
        </section>
    );
}