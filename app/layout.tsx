import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/PieDePagina";
import Wts from "@/components/Wts";
// ❌ No necesitas importar 'Verification' de next/dist
// import { Verification } from "next/dist/lib/metadata/types/metadata-types"; 

const outfit = Outfit({
  subsets: ["latin"],
});

// 🚀 ¡AQUÍ ESTÁ EL CAMBIO!
export const metadata: Metadata = {
  title: "Nadia Reyes Artista",
  description: "Obras Profesionales de Nadia Reyes",
  // 1. Agrega la propiedad 'verification'
  verification: {
    // 2. Dentro de 'verification', especifica 'google'
    google: 'wHOqqWEvoeFVaatDN4hYNyM6sdRjTKN8ChsF8uDNRNY',
    // Puedes agregar otras verificaciones aquí (bing, yandex, etc.) si las tienes.
  },
};

// ❌ Elimina esta línea, ya no es necesaria
// export const meta: Verification = {
//   google: 'wHOqqWEvoeFVaatDN4hYNyM6sdRjTKN8ChsF8uDNRNY',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.className} bg-white`}>
        
        {/* 📌 Se carga en TODAS las páginas */}
        <Header />

        {/* 📌 Contenido dinámico */}
        <main className="min-h-screen">
          {children}
        </main>
        <Wts/>

        {/* 📌 Footer global */}
        <Footer/>

      </body>
    </html>
  );
}