"use client";

import Image from "next/image";

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
import g11 from "../../public/Images/g11.webp";
import g12 from "../../public/Images/g12.webp";



const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];

export default function StaticGallery() {
    return (
        <>

            <section className="py-20 px-6 max-w-7xl mx-auto">
                <h2 className="text-center text-4xl font-extrabold text-red-500 mb-14">
                    Galería de Obras
                </h2>

                {/* Galería estática, responsive y ordenada */}
                <div
                    className="
                        grid 
                        grid-cols-2 
                        sm:grid-cols-3 
                        lg:grid-cols-4
                        xl:grid-cols-6
                        gap-6
                    "
                >
                    {images.map((img, i) => (
                        <div key={i} className="w-full">
                            <Image
                                src={img}
                                alt={`Obra ${i + 1}`}
                                className="w-full h-auto rounded-xl shadow-md object-cover"
                            />
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
}
