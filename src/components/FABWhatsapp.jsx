"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FAB() {

    // Configure Whatsapp Link
    const phoneNumbercs = '6282114667061';
    const templateText = "Hai mimin, baru lihat - lihat website nih. Mau tanya-tanya tentang Villa Tolping boleh?";
    const encodeText = encodeURIComponent(templateText);
    const whatsappLinkCSfirst = `whatsapp://send?phone=${phoneNumbercs}&text=${encodeText}`;

    // Configure Whatsapp Link
    // const templateTextRefCalendar = `Hai mimin, baru cek website nih. Untuk tanggal ${formatDateWA(checkInDate)} - ${formatDateWA(checkOutDate)} Apakah sudah terisi? Sekalian nih, Mau tanya-tanya tentang Villa Tolping?`;
    // const encText = encodeURIComponent(templateTextRefCalendar);
    // const whatsappCSFirstRefCal = `whatsapp://send?phone=${phoneNumbercs}&text=${encText}`;

    return (
        <>
            <a href={whatsappLinkCSfirst} className="fixed right-0 md:right-10 lg:right-10 rounded-full bg-linear-to-t from-[#075e54] via-[#128c7e] to-[#25d366] bottom-10 z-50 p-4 m-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <FaWhatsapp size={32} color="white" />
            </a>
        </>
    );
}