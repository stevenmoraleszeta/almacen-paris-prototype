import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./tailwind.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CarritoProvider } from '@/hooks/useCarrito';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Paris Store",
  description: "Tu tienda de confianza",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CarritoProvider>
          <Navbar />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </CarritoProvider>
      </body>
    </html>
  );
}
