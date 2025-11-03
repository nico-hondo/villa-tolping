"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {MdNavigateNext} from "react-icons/md";
import {MdNavigateBefore} from "react-icons/md";

const galleryData = {
    Outdoor: [
        { id: 1, src: "/images/gallery/Outdoor1.jpg", alt: "Exterior View" },
        { id: 2, src: "/images/gallery/Outdoor2.JPG", alt: "Garden with Putting Green" },
        { id: 3, src: "/images/gallery/Outdoor3.JPG", alt: "Wide Parking Space" },
        { id: 4, src: "/images/gallery/Outdoor4.JPG", alt: "Spacious Area" },
    ],
    Bedroom: [
        { id: 1, src: "/images/gallery/Bedroom1.jpeg", alt: "First Bedroom" },
        { id: 2, src: "/images/gallery/Bedroom2.jpeg", alt: "Second Bed" },
        { id: 3, src: "/images/gallery/Bedroom3.jpeg", alt: "Third Bedroom" },
        { id: 4, src: "/images/gallery/Bedroom4(1).jpeg", alt: "Fourth Bedroom" }
    ],
    Living: [
        { id: 1, src: "/images/gallery/Living1.JPG", alt: "Living Room First Floor" },
        { id: 2, src: "/images/gallery/Living2.jpeg", alt: "Living Room Second Floor"},
        { id: 3, src: "/images/gallery/Living3.JPG", alt: "Living Room Second Floor" },
        { id: 4, src: "/images/gallery/Living4.JPG", alt: "Living Room First Floor" }
    ],
    Kitchen: [
        { id: 1, src: "/images/gallery/KitchenSet1.JPG", alt: "Kitchen Set on the second sloor" },
        { id: 2, src: "/images/gallery/KitchenSet2.JPG", alt: "Kitchen set on the first floor" },
        { id: 3, src: "/images/gallery/KitchenSet3.JPG", alt: "Wastafel Area" }
    ],
    Pool: [
        { id: 1, src: "/images/gallery/Pool1.jpg", alt: "Swimming Pool view" },
        { id: 2, src: "/images/gallery/Pool2.jpg", alt: "Swimming Pool another view" },
        { id: 3, src: "/images/gallery/Pool3.jpg", alt: "Another view from Visitors" }
    ],
    Gazebo: [
        { id: 1, src: "/images/gallery/Gazebo1.jpeg", alt: "Gazebo view" },
        { id: 2, src: "/images/gallery/Gazebo2.jpg", alt: "Gazebo another view" },
        { id: 3, src: "/images/gallery/Gazebo3.jpg", alt: "another view from the parking area" },
        { id: 4, src: "/images/gallery/Gazebo4.jpg", alt: "Another view from Visitors" }
    ]
}

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
        <main className="gallery-section container min-h-[750px] max-w-6xl mx-auto py-12 px-4">

            <div id="badgeGallery" className="badge-item w-25 font-plus font-semibold px-0 py-3 rounded-full justify-center items-center text-center">Gallery</div>
            <h1 className="font-villatolping font-medium text-black text-5xl pt-4 pb-8">Journey through Moments <br />Captured in Our Gallery</h1>
            <div className="pt-6">
                {/* Filter buttons */}
                <div className="flex absolute right-50 space-x-2 row-span-1 text-sm text-black font-nunito-sans font-semibold rounded-4xl border border-gray-300 px-2 py-1 max-w-fit">
                    {categories.map((category) => (
                        <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-5 py-2 transition-all ${
                            activeCategory === category
                            ? "bg-black text-white rounded-full "
                            : "bg-white text-black rounded-full cursor-pointer"
                        }`}
                        >
                        {category}
                        </button>
                    ))}
                </div>

                <div className="top-15 relative">
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
                    >
                    {images.map((item, index) => (
                        <SwiperSlide key={index}>
                        <div className="relative overflow-hidden rounded-3xl">
                            <Image
                            src={item.src}
                            alt={item.alt}
                            width={800}
                            height={500}
                            className="object-cover w-full h-[370px]"
                            />
                            <p className="font-(family-name:--font-nunito-sans) absolute bottom-4 left-4 text-sm text-white font-medium drop-shadow-lg">
                            {item.alt}
                            </p>
                        </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                    {/* Custom tombol navigasi */}
                    <button className="custom-prev absolute -left-5 top-1/2 -translate-y-1/2 bg-black rounded-full shadow-md w-10 h-10 flex items-center justify-center cursor-pointer z-10" ref={prevRef}>
                        <MdNavigateBefore className="text-white size-6"/>
                    </button>
                    <button className="custom-next absolute -right-5 top-1/2 -translate-y-1/2 bg-black rounded-full shadow-md w-10 h-10 flex items-center justify-center cursor-pointer z-10" ref={nextRef}>
                        <MdNavigateNext className="text-white size-6"/>
                    </button>
                </div>
            </div>
        </main>
    );
}