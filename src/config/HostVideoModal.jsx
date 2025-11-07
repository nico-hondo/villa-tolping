"use client";
import { useState } from "react";

import { FaPlay } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

import Image from "next/image";

const HostVideoModal = ({
    cloudName,
    customThumbImg,
    videoId,
    title ="Video",
    thumbnailTime = "5"
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const thumbnailUrl = customThumbImg || `https://res.cloudinary.com/${cloudName}/video/upload/so_${thumbnailTime},w_800,q_auto,f_auto/${videoId}.jpg`;
    const videoUrl = `https://res.cloudinary.com/${cloudName}/video/upload/v1762482819/${videoId}.mp4`;

    return (
        <>
            {/* Menampilkan Thumbnail dengan button */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer group shadow-xl bg-gray-200" 
            onClick={() => setIsOpen(true)}>
                <Image
                    src={thumbnailUrl}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 group-hover:from-black/30 group-hover:to-black/50 transition-all duration-300" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-2xl">
                        <FaPlay className="text-gray-800 text-3xl ml-1" />
                    </div>
                </div>

                {/* Title Badge (Optional) */}
                {/* <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2">
                        <p className="text-white font-semibold text-sm md:text-base line-clamp-1">
                        {title}
                        </p>
                    </div>
                </div> */}
            </div>

            {/* Modal Video Player - Muncul ketika tombol play dari thumbnail diklik*/}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setIsOpen(false)}
                    >
                    {/* Close Button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10 group"
                        aria-label="Close video"
                    >
                        <IoMdClose className="text-white text-2xl md:text-3xl group-hover:rotate-90 transition-transform duration-300" />
                    </button>

                    {/* Video Container */}
                    <div 
                        className="relative w-full max-w-5xl aspect-video"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Video - Elemen Bawaan HTML yang hanya bisa memutar file video langsung, so pastikan format urlnya harus sesuai yang nembak lgsg ke videonya, bukan link player "Embed" dari hostPlatformnya. Seperti https://player.cloudinary.com/embed/?public_id=video_sesuatu&cloud_name=namacloud */}
                        
                        <video
                            className="w-full h-full rounded-xl md:rounded-2xl shadow-2xl"
                            controls
                            controlsList="nodownload noplaybackrate"
                            autoPlay
                            playsInline
                            poster={thumbnailUrl} // Menampilkan thumbnail saat video belum diputar
                        >
                            <source src={videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Jikalau ingin menggunakan cloudinary player */}
                        {/* <iframe
                        src={videoUrl}
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        className="w-full h-full rounded-xl md:rounded-2xl shadow-2xl border-0"
                        title={title}
                        /> */}
                    </div>
                </div>
            )}
        </>
    );
}

export default HostVideoModal;