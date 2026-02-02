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
    const [isFirstSlide, setIsFirstSlide] = useState(true);
    const [mounted, setMounted] = useState(false);

    const galleryVar = galleryData[activeCategory];

    //Kenapa dikurang 2 ? Karena perbedaan jumlah data dengan jumlah pagination. So currentIndex ini value nya akan bertambah seiring function onClick dijalankan. Jadi currentIndex di lastslide itu mempunyai nilai 2, sedangkan jumlah data gambar terdapat 4, jikalau dikurang 1 maka isLastSlide tidak valid, sehingga dikurangi 2 agar match dengan jumlah currentIndex
    
    const {translations} = useLanguage();
    const galleryTranslations = translations.gallery;

    // const currentData = galleryVar[currentIndex];
    const categories = Object.keys(galleryData);
    const images = galleryData[activeCategory];

    const prevRef =  useRef(null);
    const nextRef =  useRef(null);
    const swiperRef = useRef(null);

    // Separate Mounted Chcek
    useEffect(() => {
        setMounted(true);
    }, []);

    // cek condition size device
    useEffect(() => {
        if(!mounted) return; //waiting until mounted

        function checkDevice() {
            const width = window.innerWidth;
            let lastSlide

            if (width < 640) {
                lastSlide = galleryVar.length - 1;
            } else{
                lastSlide = galleryVar.length - 2;
            }
            setIsLastSlide(currentIndex >= lastSlide);
            setIsFirstSlide(currentIndex === 0);
        }

        checkDevice();
        window.addEventListener("resize", checkDevice);
        
        return () => window.removeEventListener("resize", checkDevice);
    }, [mounted, currentIndex, galleryVar.length]);

    useEffect(() => {
        if(!mounted) return;

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
    }, [mounted]);
   
    const totalSlide = galleryVar.length - 2;

    const handlePref = () => {
        if(swiperRef.current){
            swiperRef.current.slidePrev();
        }

        // const newIndex = isFirstSlide ? 0 : currentIndex -1;
        // setCurrentIndex(newIndex);
    }

    const handleNext = () => {
        if(swiperRef.current){
            swiperRef.current.slideNext();
        }
        // const newIndex = isLastSlide ? galleryVar.length - 1 : currentIndex + 1;
        // setCurrentIndex(newIndex);
    }

    // Fix: handle slide change
    const handleSlideChange = (swiper) => {
        setCurrentIndex(swiper.activeIndex);
    }

    // Reset Swiper saat ganti kategori
    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setCurrentIndex(0);
        if(swiperRef.current){
            swiperRef.current.slideTo(0,0); //slideTo(index, speed)
        }
    }

     if(!mounted) {
        return null;
     }
     
    return(
        <main id="gallery" className="relative isolate w-full scroll-mt-[var(--nav-height)] py-12 px-6">
            <section className="max-w-6xl mx-auto flex flex-col gap-8">
                <Badge 
                    badgeName= {mounted ? galleryTranslations.badge : ""}
                />
                <div className="flex flex-col gap-10 text-center">
                    <div className="flex flex-col text-center justify-center items-center gap-2">
                        <h2 className="w-full font-plus text-gray-500 text-xs font-medium uppercase">{mounted ? galleryTranslations.opening : ""}</h2>
                        <h3 className="font-villatolping font-medium text-black text-3xl md:text-4xl lg:text-5xl md:pb-8">{mounted ? galleryTranslations.title : ""}</h3>
                    </div>
                    <div className="flex flex-col gap-6">
                        {/* Filter buttons */}
                        <div className="relative w-full">
                            <div className="overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth border-b border-gray-300 items-center">
                                <div className="flex justify-center min-w-full space-x-2 text-sm font-nunito-sans font-medium rounded-4xl px-0 md:px-2 w-fit md:mx-0">
                                    {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => 
                                            handleCategoryChange(category) //use handler
                                        }
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

                                {/* fix: Show counter after mounted function */}
                                <div className="hidden md:flex flex-row absolute inset-y-0 right-0 gap-1 text-black text-sm justify-center items-center">
                                    {mounted ? String(currentIndex + 1).padStart(2, '0') : "01"}
                                    <span className="font-villatolping text-2xl font-medium">/</span>
                                    {mounted ? String(totalSlide + 1).padStart(2, '0') : "01"}
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative overflow-hidden">
                            {/* Swiper Gallery */}
                            {mounted && (
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    slidesPerView={2}
                                    spaceBetween={20}
                                    pagination={{ clickable: false }}
                                    onSwiper={(swiper) => {
                                        //menghubungkan tombol navigasi ke swiper
                                        swiperRef.current = swiper;
                                    }}
                                    onSlideChange={handleSlideChange} //callback handleSlideChange
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
                                        <SwiperSlide key={item.src}>
                                        <div className="relative overflow-hidden rounded-lg">
                                            <Image
                                                key={item.src}
                                                src={item.src}
                                                alt={item.alt}
                                                width={800}
                                                height={700}
                                                className="object-cover w-full h-64 md:h-80 lg:h-96 transition-transform duration-300 ease-in-out hover:scale-105"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                priority={index < 2} //Prioritas untuk 2 gambar pertama
                                            />
                                            <div className="font-(family-name:--font-nunito-sans) absolute bottom-4 left-4 text-sm text-white font-medium drop-shadow-lg">
                                                {item.title}
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )}

                            {mounted && (
                                <>
                                    {/* Custom tombol navigasi */}
                                    <button onClick={handlePref} className={`custom-prev absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black rounded-full w-10 h-10 items-center justify-center cursor-pointer shadow-md z-[2] ${isFirstSlide ? 'opacity-0' : 'flex bg-black hover:bg-gray-700'}`} disabled={isFirstSlide} ref={prevRef} aria-label="prev-villatolpingarrow">
                                        <MdNavigateBefore className={`size-6 ${isFirstSlide ? 'text-gray-400' : 'text-white'}`}/>
                                    </button>
                                    <button onClick={handleNext} className={`custom-next absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black rounded-full w-10 h-10 items-center justify-center cursor-pointer shadow-md z-[2] ${isLastSlide ? 'opacity-0' : 'flex bg-black hover:bg-gray-700'}`} disabled={isLastSlide} ref={nextRef} aria-label="next-villatolpingarrow">
                                        <MdNavigateNext className={`size-6 ${isLastSlide ? 'text-gray-400' : 'text-white'}`}/>
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}