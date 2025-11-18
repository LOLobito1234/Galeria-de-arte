import Image from "next/image";
import g1 from "../public/Images/g1.webp";
import g2 from "../public/Images/g2.webp";
import g3 from "../public/Images/g3.webp";
import g4 from "../public/Images/g4.webp";
import Link from "next/link"; 

const galleryData = [
  { src: g1, title: "Mis dos cuerpos" },
  { src: g2, title: "Deseo" },
  { src: g3, title: "Santa" },
  { src: g4, title: "Feliz Cumpleaños" },
];

export default function GaleriaAnimada() {
  return (
    // Contenedor principal para la galería y el botón
    <div className="flex flex-col items-center w-full">
      
      {/* 1. Galería de Imágenes (La cuadrícula) */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 w-full max-w-7xl">
        {galleryData.map((item, i) => (
          <div 
            key={i}
            className="
              group relative w-full h-72 md:h-[420px] 
              overflow-hidden rounded-2xl shadow-lg 
              transform transition-all duration-500
              hover:shadow-2xl hover:-translate-y-1 
            "
          > 
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="
                object-cover 
                transition-all duration-700 
                group-hover:scale-110 
                group-hover:brightness-100
              "
              placeholder="blur"
            />
            <div className="
              absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 
              transition-all duration-700
            " />
            <p className="
              absolute bottom-5 left-5 text-white text-xl font-extrabold 
              opacity-80 group-hover:opacity-100 
              transform group-hover:translate-y-0 translate-y-2 
              transition-all duration-700 tracking-wide
            ">
              {item.title}
            </p>
          </div>
        ))}
      </main>
      
      {/* 2. Botón de Enlace (Separado de la cuadrícula y centrado) */}
      <div className="mt-8 mb-12">
        {/*
          CORRECCIÓN: Se elimina 'passHref' y 'legacyBehavior'.
          El componente Link envuelve directamente el elemento que queremos hacer clickeable.
        */}
        <Link 
          href="/obras" 
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 inline-block"
        >
          {/* El botón ya no necesita ser un hijo directo de <a>, ahora es el contenido de <Link> */}
          <span className="cursor-pointer">
            Ver todas las obras 🎨
          </span>
        </Link>
      </div>

    </div>
  );
}