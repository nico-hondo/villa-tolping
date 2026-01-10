"use client";

import Image from "next/image";

import logovilla from "@/../public/images/Logo-Large-White.png";

import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { RiYoutubeLine } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer(){

    const tahunSekarang = new Date().getFullYear();

    const { translations } = useLanguage();

    // Destructure navbar translations
    const navbar = translations.navbar;

    // Destructure footer translations
    const footer = translations.footer;
    const footContact = footer.contactinfo;

    // Configure Whatsapp Link
    const phoneNumbercs = '6282114667061';
    const phoneNumbercs2 = '6282210413051';
    const templateText = "Hai mimin, baru cek website nih. Mau tanya-tanya tentang Villa Tolping?";
    const encodeText = encodeURIComponent(templateText);
    const whatsappLinkCSfirst = `whatsapp://send?phone=${phoneNumbercs}&text=${encodeText}`;
    const whatsappLinkCSsecond = `whatsapp://send?phone=${phoneNumbercs2}&text=${encodeText}`;

    //Configure Email Link
    const emailAddress = 'villatolping@gmail.com';
    const subject = 'Inquiry about Tolping Villa';
    const body = 'Hello min, saya tertarik untuk mengetahui lebih lanjut tentang Villa Tolping. Apakah masih tersedia untuk tanggal ... ?';
    const encodeTextEmail = encodeURIComponent(body);
    const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}&body=${encodeTextEmail}`;

    return(
        <footer className="w-full py-12 px-6 bg-footer border-t border-gray-200">
            <div className="max-w-6xl mx-auto flex flex-col gap-16">
                <div className="flex flex-col gap-4">
                    <Image src={logovilla} alt="Villa-Tolping Logo" width={230} height={230}/>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 text-white font-plus">
                        <div className="flex flex-col gap-10">
                            <p className="text-sm/7 font-medium">"{footer.description} <br className="hidden md:block"/>{footer.descriptioncont} <br className="hidden md:block"/> {footer.descriptionlast}"</p>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm font-medium">{footer.follow}</p>
                                <div className="flex flex-row gap-6">
                                    <a href="https://www.instagram.com/villatolping/" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram size={20} className="text-(--color-badge) md:text-white hover:text-(--color-badge) transition-colors duration-300 cursor-pointer"/>
                                    </a>
                                    <a href="https://www.facebook.com/people/Villa-Tolping/61551715414399/" target="_blank" rel="noopener noreferrer">
                                        <FiFacebook size={20} className="text-(--color-badge) md:text-white hover:text-(--color-badge) transition-colors duration-300 cursor-pointer"/>
                                    </a>
                                    <a href="https://www.facebook.com/people/Villa-Tolping/61551715414399/" target="_blank" rel="noopener noreferrer">
                                        <RiYoutubeLine size={20} className="text-(--color-badge) md:text-white hover:text-(--color-badge) transition-colors duration-300 cursor-pointer"/>
                                    </a>
                                    <a href="https://www.tiktok.com/@villa.tolping" target="_blank" rel="noopener noreferrer">
                                        <FaTiktok size={16} className="text-(--color-badge) md:text-white hover:text-(--color-badge) transition-colors duration-300 cursor-pointer"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <div className="flex flex-col gap-6 hidden md:flex">
                                <h3 className="font-semibold text-md">{footer.titlelink}</h3>
                                <div className="flex flex-col gap-3 pr-8">
                                    <a href="#" className="text-sm font-medium text-white hover:text-(--color-badge) transition-colors duration-300">{navbar.home}</a>
                                    <a href="#" className="text-sm font-medium text-white hover:text-(--color-badge) transition-colors duration-300">{navbar.gallery}</a>
                                    <a href="#" className="text-sm font-medium text-white hover:text-(--color-badge) transition-colors duration-300">{navbar.about}</a>
                                    <a href="#" className="text-sm font-medium text-white hover:text-(--color-badge) transition-colors duration-300">{navbar.testimonials}</a>
                                    <a href="#" className="text-sm font-medium text-white hover:text-(--color-badge) transition-colors duration-300">{navbar.booking}</a>
                                    <a href="#" className="text-sm font-medium text-white hover:text-(--color-badge) transition-colors duration-300">{navbar.contact}</a>
                                </div>
                            </div>
                            <div className="col-span-2 flex flex-col gap-6">
                                <h3 className="font-semibold text-md">{footContact.title}</h3>
                                <div className="flex flex-col gap-3">
                                    <a href={whatsappLinkCSfirst} className="flex flex-row gap-4 items-center">
                                        <FaWhatsapp size={24} className="text-(--color-badge)"/>
                                        <p className="text-sm font-medium text-white hover:text-(--color-badge) transition-colors duration-300">
                                            {footContact.wa1}
                                        </p>
                                    </a>
                                    <hr className="border-gray-400"/>
                                    <a href={whatsappLinkCSsecond} className="flex flex-row gap-4 items-center">
                                        <FaWhatsapp size={24} className="text-(--color-badge)"/>
                                        <p className="text-sm font-medium text-white hover:text-(--color-badge) transition-colors duration-300">
                                            {footContact.wa2}
                                        </p>
                                    </a>
                                    <hr className="border-gray-400"/>
                                    <a href={emailLink} target="_blank" rel="noopener noreferrer" className="flex flex-row gap-4 items-center">
                                        <MdOutlineMail size={24} className="text-(--color-badge)"/>
                                        <p className="text-md font-medium text-white hover:text-(--color-badge) transition-colors duration-300">admin@villatolping.com</p>
                                    </a>
                                    <hr className="border-gray-400"/>
                                    <a href="https://maps.app.goo.gl/aR6bZLeTnm3ZB5727" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-4">
                                        <MdOutlineLocationOn size={24} className="text-(--color-badge)"/>
                                        <p className="text-sm font-medium text-white hover:text-(--color-badge) transition-colors duration-300">Jl. Kp. Balandongan, Ciherang, <br />Megamendung, Indonesia, West Java</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border border-gray-700 border-solid opacity-25"/>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-roboto text-sm text-gray-400">&copy; {tahunSekarang} Tolping Villa. All rights reserved.</p>
                    <div className="flex flex-row gap-6">
                        <a href="#" className="font-roboto text-sm text-gray-400 hover:text-(--color-badge) transition-colors duration-300">Privacy Policy</a>
                        <a href="#" className="font-roboto text-sm text-gray-400 hover:text-(--color-badge) transition-colors duration-300">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}