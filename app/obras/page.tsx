"use client";

import Image from "next/image";

// Importa tus imágenes locales
import g1 from "../../public/Images/g1.webp";
import g2 from "../../public/Images/g2.webp";
import g3 from "../../public/Images/g3.webp";
import g4 from "../../public/Images/g4.webp";
import g5 from "../../public/Images/g5.webp";
import g6 from "../../public/Images/g6.webp";
import g7 from "../../public/Images/g7.webp";
import g8 from "../../public/Images/g8.webp";
import g9 from "../../public/Images/g9.webp";
import g10 from "../../public/Images/g10.webp";


import Header from "@/components/Header";
import Footer from "@/components/footer";

export default function FloatingGallery() {
    return (
        <>
            <Header />
            <section className="py-20" id="work">
                <h2 className="text-center text-4xl font-extrabold text-red-500 mb-14">
                    Trabajos a lo largo de mi trayectoria
                </h2>

                <div className="flex justify-center gap-12 px-6 overflow-hidden">

                    {/* Columna 1 */}
                    <div className="flex flex-col gap-8 animate-float">
                        <Image
                            src={g1}
                            alt="Obra 1"
                            className="w-64 h-auto rounded-2xl shadow-lg transition hover:scale-105 hover:-translate-y-2 cursor-zoom-in"
                        />
                        <Image
                            src={g4}
                            alt="Obra 2"
                            className="w-64 h-auto rounded-2xl shadow-lg transition hover:scale-105 hover:-translate-y-2 cursor-zoom-in"
                        />
                        <Image
                            src={g6}
                            alt="Obra 3"
                            className="w-64 h-auto rounded-2xl shadow-lg transition hover:scale-105 hover:-translate-y-2 cursor-zoom-in"
                        />
                    </div>

                    {/* Columna 2 — más lenta */}
                    <div className="flex flex-col gap-8 mt-20 animate-float-slow">
                        <Image
                            src={g2}
                            alt="Obra 4"
                            className="w-64 h-auto rounded-2xl shadow-lg transition hover:scale-105 hover:-translate-y-2 cursor-zoom-in"
                        />
                        <Image
                            src={g3}
                            alt="Obra 5"
                            className="w-64 h-auto rounded-2xl shadow-lg transition hover:scale-105 hover:-translate-y-2 cursor-zoom-in"
                        />
                        <Image
                            src={g7}
                            alt="Obra 6"
                            className="w-64 h-auto rounded-2xl shadow-lg transition hover:scale-105 hover:-translate-y-2 cursor-zoom-in"
                        />
                    </div>

                    {/* Columna 3 */}
                    <div className="flex flex-col gap-8 animate-float">
                        <Image
                            src={g8}
                            alt="Obra 7"
                            className="w-64 h-auto rounded-2xl shadow-lg transition hover:scale-105 hover:-translate-y-2 cursor-zoom-in"
                        />
                        <Image
                            src={g9}
                            alt="Obra 8"
                            className="w-64 h-auto rounded-2xl shadow-lg transition hover:scale-105 hover:-translate-y-2 cursor-zoom-in"
                        />
                        <Image
                            src={g10}
                            alt="Obra 9"
                            className="w-64 h-auto rounded-2xl shadow-lg transition hover:scale-105 hover:-translate-y-2 cursor-zoom-in"
                        />
                    </div>
                </div>
            </section>
            <Footer />
            </>

    );
}
