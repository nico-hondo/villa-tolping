"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {MdNavigateNext} from "react-icons/md";
import {MdNavigateBefore} from "react-icons/md";

import { galleryData } from "@/data/dataStore";


export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState("Outdoor");

    const categories = Object.keys(galleryData);
    const images = galleryData[activeCategory];

    const prevRef =  useRef(null);
    const nextRef =  useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (
            swiperRef.current &&
            swiperRef.current.params &&
            prevRef.current &&
            nextRef.current
        ) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.destroy(); //reset
            swiperRef.current.navigation.init(); //inisialisasi ulang
            swiperRef.current.navigation.update(); //update data
        }
    }, [swiperRef, prevRef, nextRef]);

    return(
        <main className="gallery-section container max-w-6xl mx-auto py-12 px-6">

            <div id="badgeGallery" className="badge-item w-25 font-plus font-semibold px-0 py-3 rounded-full justify-center items-center text-center">Gallery</div>
            <h1 className="font-villatolping font-medium text-black text-5xl pt-4 pb-8">Where Relaxation Meets Nature</h1>

            <div className="flex flex-col gap-6">
                {/* Filter buttons */}
                <div className="relative w-full">
                    <div className="overflow-x-auto scrollbar-hide scroll-smooth md:overflow-visible">
                        <div className="flex space-x-2 text-sm text-black font-nunito-sans font-semibold rounded-4xl md:border md:border-gray-300 px-0 md:px-2 py-1 w-fit md:mx-0">
                            {categories.map((category) => (
                            <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`flex-shrink-0 px-5 py-2 rounded-full transition-all whitespace-nowrap ${
                                activeCategory === category
                                ? "bg-black text-white shadow-md"
                                : "bg-white text-black cursor-pointer hover:text-gray-800"
                            }`}
                            >
                            {category}
                            </button>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="relative">
                    {/* Swiper Gallery */}
                    <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={2}
                    spaceBetween={20}
                    pagination={{ clickable: false }}
                    onSwiper={(swiper) => {
                        //menghubungkan tombol navigasi ke swiper
                        swiperRef.current = swiper;
                    }}
                    // navigation={{
                    //     nextEl: nextRef.current,
                    //     prevEl: prevRef.current,
                    // }}
                    className="rounded-lg"

                    breakpoints={{
                        0: { // for screens >= 0px (Mobile)
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: { //for screens >= 640px (>= Tablet)
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                    }}
                    >
                    {images.map((item, index) => (
                        <SwiperSlide key={index}>
                        <div className="relative overflow-hidden rounded-3xl">
                            <Image
                            src={item.src}
                            alt={item.alt}
                            width={800}
                            height={700}
                            className="object-cover w-full h-64 md:h-80 lg:h-96 transition-transform duration-300 ease-in-out hover:scale-105"
                            />
                            <p className="font-(family-name:--font-nunito-sans) absolute bottom-4 left-4 text-sm text-white font-medium drop-shadow-lg">
                            {item.alt}
                            </p>
                        </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                    {/* Custom tombol navigasi */}
                    <button className="custom-prev absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 bg-black rounded-full shadow-md w-10 h-10 flex items-center justify-center cursor-pointer z-10" ref={prevRef}>
                        <MdNavigateBefore className="text-white size-6"/>
                    </button>
                    <button className="custom-next absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 bg-black rounded-full shadow-md w-10 h-10 flex items-center justify-center cursor-pointer z-10" ref={nextRef}>
                        <MdNavigateNext className="text-white size-6"/>
                    </button>
                </div>
            </div>
        </main>
    );
}