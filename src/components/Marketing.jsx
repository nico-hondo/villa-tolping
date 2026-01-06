"use client";

export default function Marketing() {

    // Configure Whatsapp Link
    const phoneNumbercs = '6282114667061';
    const templateText = "Hai mimin, baru lihat - lihat website nih. Mau tanya-tanya tentang Villa Tolping boleh?";
    const encodeText = encodeURIComponent(templateText);
    const whatsappLinkCSfirst = `whatsapp://send?phone=${phoneNumbercs}&text=${encodeText}`;

    return (
        <section className="max-w-full mx-auto bg-sectionColor justify-center items-center text-center py-12 px-4">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-villatolping font-medium text-white text-4xl mb-4">Ready to Experience Paradise?</h2>
                <p className="marketing-description text-gray-400 font-roboto text-sm mb-10">
                    Book your dream villa today and create unforgettable memories.
                </p>
                <a href={whatsappLinkCSfirst} className="marketing-cta inline-block bg-(--color-button) text-(--color-base) font-semibold font-roboto text-sm px-8 py-3 rounded-full hover:bg-gray-900 hover:text-gray-300 transition duration-500">
                    Book Now
                </a>
            </div>
        </section>
    );
}