import Link from 'next/link';
// Importa la imagen como un módulo
import WhatsApp from '../public/Images/WhatsApp.png';
// ¡Importa el componente Image!
import Image from 'next/image'; 

export default function Wts() {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Link
                href="https://wa.me/+5215567895806"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                {/* 🚨 Usa <Image> en lugar de <img> 🚨 */}
                <Image 
                    src={WhatsApp} // Pasa el módulo de importación directamente
                    alt="WhatsApp"
                    width={64} // Debes especificar el ancho (w-16 = 64px)
                    height={64} // Y la altura (h-16 = 64px)
                    className="
                        rounded-full 
                        shadow-lg 
                        transition-all 
                        duration-300 
                        ease-in-out 
                        hover:scale-110 
                        hover:shadow-xl 
                        cursor-pointer 
                    "
                />
            </Link>
        </div>
    );
}