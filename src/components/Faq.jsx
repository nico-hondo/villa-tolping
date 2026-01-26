"use client";

import { faqs } from "@/data/dataStore";

import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

import { useAccordion } from "@/app/interactions";
import { useState } from "react";

import { useLanguage } from "@/context/LanguageContext";

export default function Faq(){
    const   {toggleIndex, isActive} = useAccordion();
    const   [open, setOpen] = useState(null);

    const { translations } = useLanguage();

    // property detail translations
    const faqPD = translations.propertyDetail;
    const pdInfost = faqPD.modalst.information;
    const pdInfond = faqPD.modalnd.information;

    // faq translations
    const faq = translations.faq;

    const toggle = (i) => {
        setOpen(open == i ? null : i);
    };

    return(
        <section className="w-full py-12 px-6 bg-(--secondary-background)">
            <div className="max-w-6xl mx-auto flex flex-col gap-16">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-6 text-center">
                        <h1 className="font-villatolping font-medium text-2xl md:text-3xl text-black">{faqPD.title}</h1>
                    </div>
                    <div className="max-w-2xl mx-auto w-full flex flex-col gap-4">
                        <div className="flex flex-col bg-white rounded-xl shadow-md shadow-gray-200 p-5 hover:shadow-xl transition-shadow duration-300">
                            <div onClick={() => toggle(1)} className="flex flex-row justify-between cursor-pointer">
                                <h1 className="font-plus text-black text-sm font-medium">{faqPD.modalst.title}</h1>
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
                                                    {pdInfost.in.title}:
                                                </p>
                                                <p className="text-black">
                                                    {pdInfost.in.time}
                                                </p>
                                            </span>
                                            <span className="flex flex-row gap-2">
                                                <p>
                                                    {pdInfost.out.title}:
                                                </p>
                                                <p className="text-black">
                                                    {pdInfost.out.time}
                                                </p>
                                            </span>
                                            <span className="flex flex-row gap-2">
                                                <p>{pdInfost.age.title}:</p>
                                                <p className="text-black">{pdInfost.age.age}</p>
                                            </span>
                                            <span className="text-black">
                                                {pdInfost.smoke.title}
                                            </span>
                                        </div>
                                        <hr />
                                        <div className="flex flex-col gap-2 text-sm">
                                            <h5 className="text-black">{pdInfost.pets.title}</h5>
                                            <span className="text-gray-600">{pdInfost.pets.info}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 text-sm">
                                        <div className="flex flex-col gap-2">
                                            <h5 className="text-black">{pdInfost.parking.title}:</h5>
                                            <span className="text-gray-600">{pdInfost.parking.info}</span>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <h5 className="text-black">{pdInfost.capacity.title}:</h5>
                                            <span className="text-gray-600">{pdInfost.capacity.people}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white rounded-xl shadow-md shadow-gray-200 p-5 hover:shadow-xl transition-shadow duration-300">
                            <div onClick={() => toggle(2)} className="flex flex-row justify-between cursor-pointer">
                                <h1 className="font-plus text-black text-sm font-medium">{faqPD.modalnd.title}</h1>
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
                                        <h5 className="text-black">{pdInfond.pay.title}</h5>
                                        <span className="flex flex-row gap-2 text-gray-600 font-semibold">
                                            {pdInfond.pay.info}
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-2 text-sm">
                                        <h5 className="text-black">{pdInfond.service.title}</h5>
                                        <span className="text-gray-600">{pdInfond.service.info} <br />{pdInfond.service.infolang}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4 text-center">
                        <h1 className="font-villatolping font-medium text-2xl md:text-3xl text-black">{faq.title}</h1>
                        <p className="font-roboto text-sm font-medium text-gray-400 ">{faq.subtitle} <br className="block md:hidden"/> {faq.subtitlecont}</p>
                    </div>
                    <div className="max-w-2xl mx-auto w-full flex flex-col gap-4">
                        {faqs.map(item => {
                            const accordion = faq.accordion[item.id];
                            return(
                                <div key={item.id} onClick={() => toggleIndex(item.id)}  className="flex flex-col bg-white rounded-xl shadow-md shadow-gray-200 p-5 cursor-pointer hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex flex-row justify-between">
                                        <h1 className="font-plus text-black text-sm font-medium">{accordion.question}</h1>
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
                                                {accordion.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}