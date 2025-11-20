import Link from "next/link";
import {  Instagram, } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Array de datos para las redes sociales, incluyendo el icono y el enlace
  const socialLinks = [
  
    { 
      Icon: Instagram, 
      href: "https://www.instagram.com/nadiareyes___/", 
      name: "Instagram" 
    },
  
  
   
  ];

  return (
    // Contenedor principal: Fondo oscuro, color de texto claro
    <footer className="bg-gray-900 backdrop-blur-sm border-b-2 border-red-700/50 shadow-lg p-10">
      {/* Contenedor interno que maneja el layout y el ancho (max-width) */}
      <div className="
        max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
        py-4 
        flex flex-col sm:flex-row items-center justify-between 
        text-sm text-gray-400
      ">
        {/* Sección de Copyright */}
        <p className="mb-4 sm:mb-0">
          Copyright &copy; {currentYear} Nadia Reyes, todos los derechos reservados.
        </p>

        {/* Sección de Redes Sociales */}
        <div className="flex space-x-6">
          {socialLinks.map(({ Icon, href, name }) => (
            <Link 
              key={name}
              href={href} 
              className="text-gray-400 hover:text-white transition-colors" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {/* Texto oculto para lectores de pantalla (accesibilidad) */}
              <span className="sr-only">{name}</span>
              
              {/* El componente de Lucide-React. Aplicamos las clases para tamaño (w-5 h-5) */}
              <Icon className="w-5 h-5" /> 
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}