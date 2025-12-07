import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/PieDePagina";
import Wts from "@/components/Wts";

// 1. CORRECCIÓN: Importar title desde tu archivo de constantes, no de 'process'
import { title, description } from "./lib/constant";

const outfit = Outfit({
  subsets: ["latin"],
  // Opcional: define variable CSS si usas Tailwind para la fuente
  variable: "--font-outfit", 
});

export const metadata: Metadata = {
  title: {
    default: title || "Nadia Reyes Artista", // Fallback por seguridad
    template: `%s | ${title || "Nadia Reyes"}`,
  },
  description,
  keywords: [
    "Nadia Reyes",
    "artista visual",
    "cuadros al óleo",
    "arte original",
    "pinturas hechas a mano",
    "galería de arte online",
    "arte contemporáneo",
    "cuadros personalizados",
    "pintura al óleo profesional",
    "artista mexicana",
  ],
  openGraph: {
    type: "website", // Recomendado agregar el tipo
    locale: "es_MX", // O es_ES, ayuda a SEO local
    url: "https://www.nadiareyes.com",
    siteName: "Nadia Reyes Artista",
    title: title,
    description: description,
  },
  verification: {
    google: "wHOqqWEvoeFVaatDN4hYNyM6sdRjTKN8ChsF8uDNRNY",
  },
  // Recomendado: Añadir la base del dominio para metadatos relativos
  metadataBase: new URL("https://www.nadiareyes.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* 2. MEJORA CSS: 
         - flex flex-col: Convierte el body en columna.
         - min-h-screen: El body ocupa al menos toda la pantalla.
      */}
      <body className={`${outfit.className} bg-white flex flex-col min-h-screen`}>
        
        <Header />

        {/* 3. MEJORA CSS:
           - flex-grow (o flex-1): Hace que el main ocupe todo el espacio disponible,
             empujando el footer hacia abajo.
        */}
        <main className="grow w-full">
          {children}
        </main>
        
        <Wts />

        <Footer />
      </body>
    </html>
  );
}