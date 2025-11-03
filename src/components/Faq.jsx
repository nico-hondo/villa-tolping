"use client";

import { faqs } from "@/data/dataStore";

import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";


export default function Faq(){
    return(
        <section className="w-full py-12 px-6 bg-(--secondary-background)">
            <div className="max-w-6xl mx-auto flex flex-col gap-8">
                <div className="flex flex-col gap-4 text-center">
                    <h1 className="font-villatolping font-medium text-5xl text-black">Frequently Asked Questions</h1>
                    <p className="font-roboto text-sm font-medium text-gray-400 ">Quick answer to common questions about Tolping Villa</p>
                </div>
                <div className="max-w-2xl mx-auto w-full flex flex-col gap-6">
                    {/* {faqs.map((item, index) => ( */}
                        
                    {/* ))} */}
                    <div className="flex flex-col border rounded-2xl border-gray-200 shadow-lg p-4">
                        <div className="flex flex-row justify-between">
                            <h1 className="font-plus text-black text-sm font-semibold">How do i book a stay at the villa</h1>
                            <button type="button" id="btnCollapse">
                                <FaChevronUp size={16} className="text-(--color-base) font-bold"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}