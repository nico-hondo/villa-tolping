"use client";

import { FaCircleCheck } from "react-icons/fa6";
import Image from "next/image";


export default function AboutUs(){
    return(
        <section className="w-full py-12 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div id="badgeGallery" className="badge-item w-25 font-plus font-semibold px-0 py-3 rounded-full justify-center items-center text-center">About Us
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-between pt-16">
                    <div className="flex flex-col gap-6">
                        <h1 className="font-villatolping font-medium text-black text-5xl">Looking for the <br />Perfect Villa?</h1>
                        <span className="text-gray-500">Featuring beautiful natural views and adequate facilities, it's perfect for gathering and relaxing with friends or family. Furthermore, amenities like a spacious yard make it ideal for outdoor activities. 
                        <br />Discover the facilities available at our villa.</span>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row gap-4">
                                <FaCircleCheck size={20} className="inline text-(--color-button)"/>
                                <p className="text-gray-500">3 Bedroom</p>
                            </div>
                            <div className="flex flex-row gap-4">
                                <FaCircleCheck size={20} className="inline text-(--color-button)"/>
                                <p className="text-gray-500">3 Bathroom</p>
                            </div>
                            <div className="flex flex-row gap-4">
                                <FaCircleCheck size={20} className="inline text-(--color-button)"/>
                                <p className="text-gray-500">Water Heater</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <Image src="/images/gallery/Bedroom1.jpeg" alt="Gambar-Alternatif" width={800} height={500}
                        className="bg-auto w-full h-[370px] rounded-3xl"/>
                    </div>
                </div>
            </div>
        </section>
    );
}