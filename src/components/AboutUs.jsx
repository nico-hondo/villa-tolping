"use client";

import { FaCircleCheck } from "react-icons/fa6";

import HostVideoModal from "@/config/HostVideoModal";


export default function AboutUs(){
    return(
        <section className="w-full py-12 px-6 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col gap-8">
                <div id="badgeGallery" className="badge-item w-25 font-plus font-semibold px-0 py-3 rounded-full justify-center items-center text-center">About Us
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div>
        </section>
    );
}