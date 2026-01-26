"use client";
import { useState } from "react";

import Image from "next/image";

import Badge from "./ui/Badge";
import HostVideoModal from "@/config/HostVideoModal";

import { funcShowFull } from "@/app/interactions";

import { useLanguage } from "@/context/LanguageContext";

export default function AboutUs(){

    const [showFull, setShowFull] = useState(false);

    const { translations } = useLanguage();
    const about = translations.about;

    const { language } = useLanguage();

    return(
        <section id="about" className="w-full scroll-mt-[var(--nav-height)] py-12 px-6 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col gap-8">
                <Badge
                    badgeName={about.badge}
                />
                <div className="flex flex-col gap-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="flex flex-col gap-6">
                            <h1 className="font-villatolping font-medium text-black text-3xl md:text-4xl lg:text-5xl text-center md:text-left">{about.title}<br />{about.titlecont}</h1>
                            <div className="pr-0 md:pr-8 text-center md:text-justify flex flex-col gap-2">
                                <span className={`text-gray-500 text-xs md:text-sm lg:text-md font-swiss ${showFull ? 'max-h-96' : 'max-h-12 line-clamp-3 md:max-h-12 md:line-clamp-3 lg:max-h-none lg:line-clamp-none'}`}>{about.description}<br />
                                {about.descriptioncont}
                                </span>
                                <button type="button" onClick={() => funcShowFull(showFull, setShowFull)} id="btnMore" className="block md:flex lg:hidden text-blue-500 hover:text-blue-600 text-sm transition-colors">
                                {language === 'en' ? (showFull ? 'Less...' : 'View More...') : (showFull ? 'Lebih Sedikit...' : 'Lebih Banyak...')}
                                 </button>
                            </div>
                            
                        </div>
                        {/* <div className="">
                            <iframe
                                src="https://player.cloudinary.com/embed/?cloud_name=deumvkhxw&public_id=Villa_Tolping_1_p4n2md&profile=cld-default"
                                width="640"
                                height="360" 
                                style={{height: 'auto', width: '100%', aspectRatio: 640 / 360}} 
                                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                                allowFullScreen
                                frameBorder="0"
                                className="rounded-2xl"
                                >
                            </iframe>
                        </div> */}
                        <HostVideoModal
                            cloudName="deumvkhxw"
                            customThumbImg = 'https://res.cloudinary.com/deumvkhxw/image/upload/v1762484266/Footerbackground-overlay_cbcf7q.jpg'
                            videoId="Villa_Tolping_1_p4n2md"
                            title="Villa Tolping - Megamendung, West Java"
                            thumbnailTime={2}
                        />
                    </div>


                    <div className="flex flex-col gap-8 justify-center items-center text-center">
                        <div className="flex flex-col gap-2 justify-center items-center">
                            <h1 className="w-full font-villatolping text-2xl md:text-3xl text-black">{about.titlefacilities}</h1>
                            <span className="w-15 h-[3px] bg-teal-500"></span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            <div className="flex flex-col justify-center items-center shadow-md rounded-xl w-full h-35 gap-4">
                                <Image src="/images/icons/swimpool-icon.png" alt="Icon Swimming Pool" width={70} height={70} loading="lazy"/>
                                <p className="text-gray-600 text-sm font-semibold">{about.facilities.pool}</p>
                            </div>
                            <div className="flex flex-col justify-center items-center shadow-md rounded-xl w-full h-35 gap-4">
                                <Image src="/images/icons/wifi-icon.png" alt="Icon Wifi" width={60} height={60} loading="lazy"/>
                                <p className="text-gray-600 text-sm font-semibold">{about.facilities.wifi}</p>
                            </div>
                            <div className="flex flex-col justify-center items-center shadow-md rounded-xl w-full h-35 gap-4">
                                <Image src="/images/icons/kitchenset-icon.png" alt="Icon Kitchen Set" width={60} height={60} loading="lazy"/>
                                <p className="text-gray-600 text-sm font-semibold">{about.facilities.kitchen}</p>
                            </div>
                            <div className="flex flex-col justify-center items-center text-center shadow-md rounded-xl w-full h-35 gap-4 px-6">
                                <Image src="/images/icons/parking-icon.png" alt="Icon Parking" width={60} height={60} loading="lazy"/>
                                <p className="text-gray-600 text-sm font-semibold">{about.facilities.parking}</p>
                            </div>
                            <div className="flex flex-col col-span-2 md:col-span-1 justify-center items-center shadow-md rounded-xl w-full h-35 gap-4">
                                <Image src="/images/icons/snowflake-icon.png" alt="Icon AC" width={60} height={60} loading="lazy"/>
                                <p className="text-gray-600 text-sm font-semibold">{about.facilities.ac}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}