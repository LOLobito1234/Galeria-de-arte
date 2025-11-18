import Image from 'next/image';
import g1 from '../public/Images/f1.webp';

export default function Layout() {
    return (
        <div >

            <div className="relative w-full h-96 overflow-hidden shadow-2xl">

                {/* Imagen */}
                <Image
                    src={g1}
                    alt="Imagen de fondo"
                    fill
                    className="object-cover"
                    quality={95}     // 🟢 mejora calidad
                    priority
                />

                {/* 🎨 Overlay de color (tu color) */}
                <div className="absolute inset-0 bg-linear-to-t from-red-500/70 to-indigo-600/40"></div>


                {/* Texto */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="
                         text-3xl             
                         sm:text-4xl            
                         md:text-5xl            
                         lg:text-7xl            
                         xl:text-8xl            
                         font-extrabold text-white tracking-widest text-shadow-lg
                            ">
                        Galeria de Arte
                    </h1>

                </div>
            </div>

            {/* Contenido */}
            <div className="max-w-7xl mx-auto p-8">
                <p className="mt-8 
                        sm:text-4xl            
                         md:text-3xl            
                         lg:text-5xl            
                        text-3xl
                         text-gray-700">
                    Explora nuestra colección única de obras.
                </p>
            </div>

        </div>
    );
}
