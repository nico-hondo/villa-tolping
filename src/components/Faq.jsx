"use client";

import { faqs } from "@/data/dataStore";

import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

import { useAccordion } from "@/app/interactions";

export default function Faq(){
    const {toggleIndex, isActive} = useAccordion();

    return(
        <section className="w-full py-12 px-6 bg-(--secondary-background)">
            <div className="max-w-6xl mx-auto flex flex-col gap-10">
                <div className="flex flex-col gap-6 text-center">
                    <h1 className="font-villatolping font-medium text-5xl text-black">Frequently Asked Questions</h1>
                    <p className="font-roboto text-sm font-medium text-gray-400 ">Quick answer to common questions about <br className="block md:hidden"/> Tolping Villa</p>
                </div>
                <div className="max-w-2xl mx-auto w-full flex flex-col gap-6">
                    {faqs.map((item) => ( 
                    <div key={item.id} onClick={() => toggleIndex(item.id)}  className="flex flex-col bg-white rounded-xl shadow-md shadow-gray-200 p-5 cursor-pointer hover:shadow-xl transition-shadow duration-300">
                        <div className="flex flex-row justify-between">
                            <h1 className="font-plus text-black text-sm font-semibold">{item.question}</h1>
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
                                <p className="font-roboto text-gray-500 font-medium text-sm">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}