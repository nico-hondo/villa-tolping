"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {MdNavigateNext} from "react-icons/md";
import {MdNavigateBefore} from "react-icons/md";

import { galleryData } from "@/data/dataStore";

import { useLanguage } from "@/context/LanguageContext";

import Badge from "./ui/Badge";


export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState("Outdoor");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLastSlide, setIsLastSlide] = useState(false);

    const [device, setDevice] = useState("unknown");

    const galleryVar = galleryData[activeCategory];
    
    //Check if first or last slide
    const isFirstSlide = currentIndex === 0;

    //Kenapa dikurang 2 ? Karena perbedaan jumlah data dengan jumlah pagination. So currentIndex ini value nya akan bertambah seiring function onClick dijalankan. Jadi currentIndex di lastslide itu mempunyai nilai 2, sedangkan jumlah data gambar terdapat 4, jikalau dikurang 1 maka isLastSlide tidak valid, sehingga dikurangi 2 agar match dengan jumlah currentIndex
    
    const {translations} = useLanguage();
    const galleryTranslations = translations.gallery;

    // cek condition size device
    useEffect(() => {
        function checkDevice() {
            const width = window.innerWidth;

            if (width < 640) {
                setDevice("mobile");
                const lastSlide = currentIndex === galleryVar.length - 1;
                setIsLastSlide(lastSlide);
            } else if (width >= 640 && width < 1024) {
                setDevice("tablet");
                const lastSlide = currentIndex === galleryVar.length - 2;
                setIsLastSlide(lastSlide);
            } else {
                setDevice("desktop");
                const lastSlide = currentIndex === galleryVar.length - 2;
                setIsLastSlide(lastSlide);
            }
        }
        checkDevice();
        console.log("Device type:", device);
        window.addEventListener("resize", checkDevice);
        
        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    // Cek different indexing in gallery
    // console.log(currentIndex);
    // console.log(galleryVar.length - 2);
   
    const totalSlide = galleryVar.length - 2;

    const handlePref = () => {
        const newIndex = isFirstSlide ? 0 : currentIndex -1;
        setCurrentIndex(newIndex);
    }

    const handleNext = () => {
        const newIndex = isLastSlide ? galleryVar.length - 1 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    console.log("Current Slide:", isLastSlide);
    // const currentData = galleryVar[currentIndex];
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
        <main id="gallery" className="relative isolate w-full scroll-mt-[var(--nav-height)] py-12 px-6">
            <section className="max-w-6xl mx-auto flex flex-col gap-8">
                <Badge 
                    badgeName= {galleryTranslations.badge}
                />
                <div className="flex flex-col gap-10 text-center">
                    <div className="flex flex-col text-center justify-center items-center gap-2">
                        <h2 className="w-full font-plus text-gray-500 text-xs font-medium uppercase">{galleryTranslations.opening}</h2>
                        <h3 className="font-villatolping font-medium text-black text-3xl md:text-4xl lg:text-5xl md:pb-8">{galleryTranslations.title}</h3>
                    </div>
                    <div className="flex flex-col gap-6">
                        {/* Filter buttons */}
                        <div className="relative w-full">
                            <div className="overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth border-b border-gray-300 items-center">
                                <div className="flex justify-center min-w-full juspace-x-2 text-sm font-nunito-sans font-medium rounded-4xl px-0 md:px-2 w-fit md:mx-0">
                                    {categories.map((category) => (
                                    <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`flex-shrink-0 px-5 py-2 transition-all whitespace-nowrap ${
                                        activeCategory === category
                                        ? "text-black border-b-2 border-gray-700 transition-500"
                                        : "bg-white text-gray-600 cursor-pointer hover:text-gray-800"
                                    }`}
                                    >
                                    {category}
                                    </button>
                                    ))}
                                </div>
                                <div className="hidden md:flex flex-row absolute inset-y-0 right-0 gap-1 text-black text-sm justify-center items-center">
                                    0{currentIndex + 1}
                                    <span className="font-villatolping text-2xl font-medium">/</span>
                                    0{totalSlide + 1}
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative overflow-hidden">
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
                            className="mySwiper"

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
                                <div className="relative overflow-hidden">
                                    <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={800}
                                    height={700}
                                    className="object-cover w-full h-64 md:h-80 lg:h-96 transition-transform duration-300 ease-in-out hover:scale-105"
                                    />
                                    <p className="font-(family-name:--font-nunito-sans) absolute bottom-4 left-4 text-sm text-white font-medium drop-shadow-lg">
                                    {item.title}
                                    </p>
                                </div>
                                </SwiperSlide>
                            ))}
                            </Swiper>

                            {/* <div className="flex md:hidden flex-row absolute top-0 right-2 z-[1] gap-1 text-black text-xs md:text-sm justify-center items-center">
                                0{currentIndex + 1}
                                <span className="font-villatolping text-2xl font-medium">/</span>
                                0{totalSlide + 1}
                            </div> */}
                            s
                            {/* Custom tombol navigasi */}
                            <button onClick={handlePref} className={`custom-prev absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black rounded-full w-10 h-10 items-center justify-center cursor-pointer shadow-md z-[2] ${isFirstSlide ? 'hidden' : 'flex bg-black hover:bg-gray-700'}`} disabled={isFirstSlide} ref={prevRef}>
                                <MdNavigateBefore className={`size-6 ${isFirstSlide ? 'text-gray-400' : 'text-white'}`}/>
                            </button>
                            <button onClick={handleNext} className={`custom-next absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black rounded-full w-10 h-10 items-center justify-center cursor-pointer shadow-md z-[2] ${isLastSlide ? 'hidden' : 'flex bg-black hover:bg-gray-700'}`} disabled={isLastSlide} ref={nextRef}>
                                <MdNavigateNext className={`size-6 ${isLastSlide ? 'text-gray-400' : 'text-white'}`}/>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </section>
        </main>
    );
}