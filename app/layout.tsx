import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/PieDePagina";
import Wts from "@/components/Wts";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nadia Reyes Artista",
  description: "Obras Profesionales de Nadia Reyes",

  openGraph: {
    url: "https://www.nadiareyes.com",
    siteName: 'Nadia Reyes Artista',
   
  },
  verification: {
    google: 'wHOqqWEvoeFVaatDN4hYNyM6sdRjTKN8ChsF8uDNRNY',
  },
};



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
        <Wts />

        {/* 📌 Footer global */}
        <Footer />

      </body>
    </html>
  );
}