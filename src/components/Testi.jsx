"use client"

import Image from "next/image";

import {Rating} from 'primereact/rating';
import {MdNavigateNext} from "react-icons/md";
import {MdNavigateBefore} from "react-icons/md";

// import datastorage with ext .js
import { testiData } from "@/data/dataStore"

export default function Testi(){
    return(
        <section className="w-full bg-sectionColor justify-center items-center py-24 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 justify-center item-center">
                <div className="">
                    <Image 
                    src="/images/gallery/Bedroom1.jpeg"
                    alt="Foto Testimonial"
                    width={800}
                    height={500}
                    className="object-cover rounded-3xl"
                        />
                </div>
                <div className="flex flex-col gap-6">
                    <div id="badgeGallery" className="badge-item w-25 font-plus font-semibold px-0 py-3 rounded-full justify-center items-center text-center">
                    Testimonials
                    </div>  
                    <h1 className="font-villatolping text-5xl font-medium">Hear from Our <br /> Guests.</h1>
                    
                    <Rating value={5} readOnly cancel={false} className="text-yellow-600 gap-1"/>

                    <p className="text-sm pr-16">"Tempat nyaman, bersih, suasana enak, fasilitas lengkap. Rekomen banget untuk kapasitas 20 orangan. Pokoknya the best."</p>
                    <hr className="text-gray-600 mr-16"/>

                    <span className="font-semibold text-sm">Kristian Sendi</span>

                    <div className="flex flex-row gap-4">
                        <button className="custom-prev -left-5 top-1/2 -translate-y-1/2 border border-gray-300 rounded-full shadow-md w-10 h-10 flex items-center justify-center cursor-pointer z-10">
                            <MdNavigateBefore className="text-white size-6"/>
                        </button>
                        <button className="custom-next -right-5 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center cursor-pointer z-10">
                            <MdNavigateNext className="text-black size-6"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}