"use client";

export default function Hero(){

    // Configure Whatsapp Link
    const phoneNumbercs = '6282114667061';
    const templateText = "Hai mimin, baru cek website nih. Mau tanya-tanya tentang Villa Tolping?";
    const encodeText = encodeURIComponent(templateText);
    const whatsappLinkCSfirst = `whatsapp://send?phone=${phoneNumbercs}&text=${encodeText}`;


    return(
        <section className="hero-section h-screen w-full flex items-center justify-center">
            <div className="bg-hero min-h-screen h-full w-full flex items-center justify-center text-center">
                <div className="grid grid-rows-2 gap-8">
                    <h1 className="font-libre font-bold text-4xl md:text-5xl row-span-1">Discover Serenity at <br/> Tolping's Villa</h1>
                    <a href={whatsappLinkCSfirst} className="font-roboto row-span-1 h-12 w-35 mx-auto bg-(--color-button) text-(--color-base) font-semibold rounded-3xl flex items-center justify-center hover:bg-(--color-badge) hover:text-(--color-nav) transition duration-300 text-sm">
                        Book Now
                    </a>
                </div>
            </div>
        </section>
    );
}