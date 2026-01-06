import { IoMdImages } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { BsGift } from "react-icons/bs";

import Badge from "./ui/Badge";


export default function Booking(){
    return(
        <section id="booking" className="w-full scroll-mt-[var(--nav-height)] py-12 px-6 bg-(--secondary-background)">
            <div className="max-w-6xl mx-auto flex flex-col gap-8">
                <Badge 
                    badgeName="booking"
                />
                <div className="flex flex-col gap-4 text-center">
                    <h1 className="font-villatolping font-medium text-5xl text-black">How It Works</h1>
                    <p className="font-roboto text-sm font-medium text-gray-400">Simple step to secure your perfect villa getaway with flexible payments options</p>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-3xl p-8">
                            <div className="max-w-full mx-auto flex justify-end">
                                <span id="badgeGallery" className="bg-(--color-badge) text-gray-500 font-plus font-semibold py-1 px-4 rounded-md text-[10px]">
                                    Step 1
                                </span>
                            </div>
                            <div className="flex flex-col gap-6 text-center justify-center items-center pt-6">
                                <div className="flex justify-center items-center bg-(--color-badge) rounded-full w-15 h-15">
                                    <IoMdImages size={24} className="text-(--color-base) font-bold"/>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h4 className="font-plus font-semibold text-black text-lg">Explore Our Gallery</h4>
                                    <p className="text-gray-400 text-sm px-6">Browse through stunning images of our villa to envision your stay</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-3xl p-8">
                            <div className="max-w-full mx-auto flex justify-end">
                                <span id="badgeGallery" className="bg-(--color-badge) text-gray-500 font-plus font-semibold py-1 px-4 rounded-md text-[10px]">
                                    Step 2
                                </span>
                            </div>
                            <div className="flex flex-col gap-6 text-center justify-center items-center pt-6">
                                <div className="flex justify-center items-center bg-(--color-badge) rounded-full w-15 h-15">
                                    <IoLogoWhatsapp size={24} className="text-(--color-base) font-bold"/>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h4 className="font-plus font-semibold text-black text-lg">Inquire via Contact</h4>
                                    <p className="text-gray-400 text-sm px-6">React out to us with any questions. We're here to help</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-3xl p-8">
                            <div className="max-w-full mx-auto flex justify-end">
                                <span id="badgeGallery" className="bg-(--color-badge) text-gray-500 font-plus font-semibold py-1 px-4 rounded-md text-[10px]">
                                    Step 3
                                </span>
                            </div>
                            <div className="flex flex-col gap-6 text-center justify-center items-center pt-6">
                                <div className="flex justify-center items-center bg-(--color-badge) rounded-full w-15 h-15">
                                    <FaRegCalendarCheck size={22} className="text-(--color-base) font-bold"/>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h4 className="font-plus font-semibold text-black text-lg">Confirm Booking</h4>
                                    <p className="text-gray-400 text-sm px-6">Choose your date, pay a down payment, and secure your reservation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl ">
                        <div className="bg-white rounded-3xl p-8">
                            <div className="max-w-full mx-auto flex justify-end">
                                <span id="badgeGallery" className="bg-(--color-badge) text-gray-500 font-plus font-semibold py-1 px-4 rounded-md text-[10px]">
                                    Step 4
                                </span>
                            </div>
                            <div className="flex flex-col gap-6 text-center justify-center items-center pt-6">
                                <div className="flex justify-center items-center bg-(--color-badge) rounded-full w-15 h-15">
                                    <MdPayment size={24} className="text-(--color-base) font-bold"/>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h4 className="font-plus font-semibold text-black text-lg">Repayment</h4>
                                    <p className="text-gray-400 text-sm px-6">Complete the remaining payment easily before your stay.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-3xl p-8">
                            <div className="max-w-full mx-auto flex justify-end">
                                <span id="badgeGallery" className="bg-(--color-badge) text-gray-500 font-plus font-semibold py-1 px-4 rounded-md text-[10px]">
                                    Step 5
                                </span>
                            </div>
                            <div className="flex flex-col gap-6 text-center justify-center items-center pt-6">
                                <div className="flex justify-center items-center bg-(--color-badge) rounded-full w-15 h-15">
                                    <BsGift size={24} className="text-(--color-base) font-bold"/>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h4 className="font-plus font-semibold text-black text-lg">Enjoy Your Stay</h4>
                                    <p className="text-gray-400 text-sm px-6">Relax and create unforgettable memories.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}