"use client";
import Image from "next/image";
import logovilla from "@/../public/images/Logo-Medium.png";
import {CiGlobe} from "react-icons/ci";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full text-nav">
            <div className="max-w-6xl mx-auto py-6 px-4 flex justify-between items-center">
                <a href="#">
                    <Image src={logovilla} alt="Villa Tolping Logo" width={150} height={50} />
                </a>
                <div className="flex right-30 font-semibold space-x-4 top-6 text-sm text-center justify-center items-center ">
                    <a href="#" className="px-3 py-3">Home</a>
                    <a href="#" className="px-3 py-3">Gallery</a>
                    <a href="#" className="px-3 py-3">About us</a>
                    <a href="#" className="px-3 py-3">Testimonial</a>
                    <a href="#" className="px-3 py-3">Booking</a>
                    <a href="#" className="px-3 py-3">Contact</a>
                    <a href="#" className="px-3 py-2 font-medium flex text-xs justify-center items-center rounded-4xl border border-gray-700 bg-(--color-base) text-white hover:bg-gray-700 transition duration-300">
                        <CiGlobe size={20} className="inline mr-2" />
                        Eng
                    </a>
                </div>
            </div>
        </nav>
    );
}