import Link from "next/link";
import { Facebook, Instagram, X, Github, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Array de datos para las redes sociales, incluyendo el icono y el enlace
  const socialLinks = [
    { 
      Icon: Facebook, 
      href: "https://facebook.com/yourcompany", 
      name: "Facebook" 
    },
    { 
      Icon: Instagram, 
      href: "https://instagram.com/yourcompany", 
      name: "Instagram" 
    },
    { 
      Icon: X, // El icono de Lucide para la plataforma X (antes Twitter)
      href: "https://x.com/yourcompany", 
      name: "X (Twitter)" 
    },
    { 
      Icon: Github, 
      href: "https://github.com/yourcompany", 
      name: "GitHub" 
    },
    { 
      Icon: Youtube, 
      href: "https://youtube.com/yourcompany", 
      name: "YouTube" 
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
          Copyright &copy; {currentYear} Your Company, Inc. All rights reserved.
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