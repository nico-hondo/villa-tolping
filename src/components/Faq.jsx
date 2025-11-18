"use client";

import { faqs } from "@/data/dataStore";

import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

import { useAccordion } from "@/app/interactions";
import { useState } from "react";

export default function Faq(){
    const   {toggleIndex, isActive} = useAccordion();
    const   [open, setOpen] = useState(null);

    const toggle = (i) => {
        setOpen(open == i ? null : i);
    };

    return(
        <section className="w-full py-12 px-6 bg-(--secondary-background)">
            <div className="max-w-6xl mx-auto flex flex-col gap-16">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-6 text-center">
                        <h1 className="font-villatolping font-medium text-3xl text-black"> Property Details</h1>
                    </div>
                    <div className="max-w-2xl mx-auto w-full flex flex-col gap-4">
                        <div className="flex flex-col bg-white rounded-xl shadow-md shadow-gray-200 p-5 hover:shadow-xl transition-shadow duration-300">
                            <div onClick={() => toggle(1)} className="flex flex-row justify-between cursor-pointer">
                                <h1 className="font-plus text-black text-sm font-medium">Villa Information</h1>
                                <div className="flex-shrink-0 transition-transform duration-300">
                                    {open == 1 ?(
                                        <FaChevronUp size={16} className="text-(--color-base) font-bold"/>
                                    ):(
                                        <FaChevronDown size={16} className="text-(--color-base) font-bold"/>
                                    )}
                                </div>
                            </div>
                            <div className={`overflow-hidden transition-all duration-300 ${open == 1 ? 'max-h-auto opacity-100' : 'max-h-0 opacity-0'}`}>
                                <hr  className="mt-4"/>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col gap-2 font-swiss text-gray-600 font-light text-sm">
                                            <span className="flex flex-row gap-2">
                                                <p>
                                                    Check-in:
                                                </p>
                                                <p className="text-black">
                                                    2:00 pm
                                                </p>
                                            </span>
                                            <span className="flex flex-row gap-2">
                                                <p>
                                                    Check-out:
                                                </p>
                                                <p className="text-black">
                                                    12:00 pm
                                                </p>
                                            </span>
                                            <span className="flex flex-row gap-2">
                                                <p>Minimum Age to Check-in:</p>
                                                <p className="text-black">All Ages Welcome </p>
                                            </span>
                                            <span className="text-black">
                                                Smoke Free Property
                                            </span>
                                        </div>
                                        <hr />
                                        <div className="flex flex-col gap-2 text-sm">
                                            <h5 className="text-black">Pet Policy</h5>
                                            <span className="text-gray-600">Pets Not Allowed</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 text-sm">
                                        <h5 className="text-black">Parking</h5>
                                        <span className="text-gray-600">Complimentary On-Site Parking</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white rounded-xl shadow-md shadow-gray-200 p-5 hover:shadow-xl transition-shadow duration-300">
                            <div onClick={() => toggle(2)} className="flex flex-row justify-between cursor-pointer">
                                <h1 className="font-plus text-black text-sm font-medium">General Information</h1>
                                <div className="flex-shrink-0 transition-transform duration-300">
                                    {open == 2 ?(
                                        <FaChevronUp size={16} className="text-(--color-base) font-bold"/>
                                    ):(
                                        <FaChevronDown size={16} className="text-(--color-base) font-bold"/>
                                    )}
                                </div>
                            </div>
                            <div className={`overflow-hidden transition-all duration-300 ${open == 2 ? 'max-h-auto opacity-100' : 'max-h-0 opacity-0'}`}>
                                <hr  className="mt-4"/>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                    <div className="flex flex-col gap-2 text-sm">
                                        <h5 className="text-black">Policies and Payments</h5>
                                        <span className="flex flex-row gap-2 text-gray-600">
                                            Accepts: Cash, Credit Cards
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-2 text-sm">
                                        <h5 className="text-black">Service</h5>
                                        <span className="text-gray-600">Languages Spoken by staff: <br />Indonesian, English</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4 text-center">
                        <h1 className="font-villatolping font-medium text-3xl text-black">Frequently Asked Questions</h1>
                        <p className="font-roboto text-sm font-medium text-gray-400 ">Quick answer to common questions about <br className="block md:hidden"/> Tolping Villa</p>
                    </div>
                    <div className="max-w-2xl mx-auto w-full flex flex-col gap-4">
                        {faqs.map((item) => ( 
                        <div key={item.id} onClick={() => toggleIndex(item.id)}  className="flex flex-col bg-white rounded-xl shadow-md shadow-gray-200 p-5 cursor-pointer hover:shadow-xl transition-shadow duration-300">
                            <div className="flex flex-row justify-between">
                                <h1 className="font-plus text-black text-sm font-medium">{item.question}</h1>
                                <div className="flex-shrink-0 transition-transform duration-300">
                                    {isActive(item.id) ?(
                                        <FaChevronUp size={16} className="text-(--color-base) font-bold"/>
                                    ):(
                                        <FaChevronDown size={16} className="text-(--color-base) font-bold"/>
                                    )}
                                </div>
                            </div>
                            <div className={`overflow-hidden transition-all duration-300 ${isActive(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <hr  className="mt-4"/>
                                <div className="mt-4">
                                    <p className="font-swiss text-gray-500 font-medium text-sm">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}