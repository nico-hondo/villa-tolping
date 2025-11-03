"use client";

export default function Marketing() {
    return (
        <section className="max-w-full mx-auto bg-sectionColor justify-center items-center text-center py-12 px-4">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-villatolping font-medium text-white text-4xl mb-4">Ready to Experience Paradise?</h2>
                <p className="marketing-description text-gray-400 font-roboto text-sm mb-10">
                    Book your dream villa today and create unforgettable memories.
                </p>
                <a href="#booking" className="marketing-cta inline-block bg-(--color-button) text-(--color-base) font-semibold font-roboto text-sm px-8 py-3 rounded-full hover:bg-(--color-badge) hover:text-(--color-nav) transition duration-300">
                    Book Now
                </a>
            </div>
        </section>
    );
}