"use client";

import { IoMdImages } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { BsGift } from "react-icons/bs";

import Badge from "./ui/Badge";

import { useLanguage } from "@/context/LanguageContext";

export default function Booking(){

    const { translations } = useLanguage();
    const booking = translations.booking;
    const steps = booking.steps;

    return(
        <section id="booking" className="w-full scroll-mt-[var(--nav-height)] py-12 px-6 bg-(--secondary-background)">
            <div className="max-w-6xl mx-auto flex flex-col gap-8">
                <Badge 
                    badgeName={booking.badge}
                />
                <div className="flex flex-col gap-4 text-center">
                    <h1 className="font-villatolping font-medium text-3xl md:text-4xl lg:text-5xl text-black">{booking.title}</h1>
                    <p className="font-roboto text-sm font-medium text-gray-400">{booking.subtitle}</p>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-3xl p-8">
                            <div className="max-w-full mx-auto flex justify-end">
                                <span id="badgeGallery" className="bg-(--color-badge) text-gray-500 font-plus font-semibold py-1 px-4 rounded-md text-[10px]">
                                    {steps.step1.step}
                                </span>
                            </div>
                            <div className="flex flex-col gap-6 text-center justify-center items-center pt-6">
                                <div className="flex justify-center items-center bg-(--color-badge) rounded-full w-15 h-15">
                                    <IoMdImages size={24} className="text-(--color-base) font-bold"/>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h4 className="font-plus font-semibold text-black text-lg">{steps.step1.title}</h4>
                                    <p className="text-gray-400 text-sm px-6">{steps.step1.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-3xl p-8">
                            <div className="max-w-full mx-auto flex justify-end">
                                <span id="badgeGallery" className="bg-(--color-badge) text-gray-500 font-plus font-semibold py-1 px-4 rounded-md text-[10px]">
                                    {steps.step2.step}
                                </span>
                            </div>
                            <div className="flex flex-col gap-6 text-center justify-center items-center pt-6">
                                <div className="flex justify-center items-center bg-(--color-badge) rounded-full w-15 h-15">
                                    <IoLogoWhatsapp size={24} className="text-(--color-base) font-bold"/>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h4 className="font-plus font-semibold text-black text-lg">{steps.step2.title}</h4>
                                    <p className="text-gray-400 text-sm px-6">{steps.step2.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-3xl p-8">
                            <div className="max-w-full mx-auto flex justify-end">
                                <span id="badgeGallery" className="bg-(--color-badge) text-gray-500 font-plus font-semibold py-1 px-4 rounded-md text-[10px]">
                                    {steps.step3.step}
                                </span>
                            </div>
                            <div className="flex flex-col gap-6 text-center justify-center items-center pt-6">
                                <div className="flex justify-center items-center bg-(--color-badge) rounded-full w-15 h-15">
                                    <FaRegCalendarCheck size={22} className="text-(--color-base) font-bold"/>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h4 className="font-plus font-semibold text-black text-lg">{steps.step3.title}</h4>
                                    <p className="text-gray-400 text-sm px-6">{steps.step3.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:max-w-2xl lg:max-w-3xl ">
                        <div className="bg-white rounded-3xl p-8">
                            <div className="max-w-full mx-auto flex justify-end">
                                <span id="badgeGallery" className="bg-(--color-badge) text-gray-500 font-plus font-semibold py-1 px-4 rounded-md text-[10px]">
                                    {steps.step4.step}
                                </span>
                            </div>
                            <div className="flex flex-col gap-6 text-center justify-center items-center pt-6">
                                <div className="flex justify-center items-center bg-(--color-badge) rounded-full w-15 h-15">
                                    <MdPayment size={24} className="text-(--color-base) font-bold"/>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h4 className="font-plus font-semibold text-black text-lg">{steps.step4.title}</h4>
                                    <p className="text-gray-400 text-sm px-6">{steps.step4.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-3xl p-8">
                            <div className="max-w-full mx-auto flex justify-end">
                                <span id="badgeGallery" className="bg-(--color-badge) text-gray-500 font-plus font-semibold py-1 px-4 rounded-md text-[10px]">
                                    {steps.step5.step}
                                </span>
                            </div>
                            <div className="flex flex-col gap-6 text-center justify-center items-center pt-6">
                                <div className="flex justify-center items-center bg-(--color-badge) rounded-full w-15 h-15">
                                    <BsGift size={24} className="text-(--color-base) font-bold"/>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h4 className="font-plus font-semibold text-black text-lg">{steps.step5.title}</h4>
                                    <p className="text-gray-400 text-sm px-6">{steps.step5.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}