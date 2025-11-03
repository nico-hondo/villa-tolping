"use client";

export default function Hero(){
    return(
        <section className="hero-section h-screen w-full flex items-center justify-center">
            <div className="bg-hero min-h-screen h-full w-full flex items-center justify-center text-center">
                <div className="grid grid-rows-2 gap-8">
                    <h1 className="font-libre font-bold text-5xl row-span-1">Discover Serenity at <br/> Tolping's Villa</h1>
                    <a href="#" className="font-roboto row-span-1 h-12 w-35 mx-auto bg-(--color-base) text-white font-semibold rounded-3xl flex items-center justify-center hover:bg-gray-700 transition duration-300 text-sm">
                        Book Now
                    </a>
                </div>
            </div>
        </section>
    );
}