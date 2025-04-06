'use client';
import { createContext, ReactNode, useState } from 'react';
import { Producto } from '../types/producto';

interface CarritoContextType {
    carrito: Producto[];
    agregarProducto: (producto: Producto) => void;
    vaciarCarrito: () => void;
}

export const CarritoContext = createContext<CarritoContextType | undefined>(undefined);

export function CarritoProvider({ children }: { children: ReactNode }) {
    const [carrito, setCarrito] = useState<Producto[]>([]);

    const agregarProducto = (producto: Producto) => {
        setCarrito((prev) => [...prev, producto]);
    };

    const vaciarCarrito = () => setCarrito([]);

    return (
        <CarritoContext.Provider value={{ carrito, agregarProducto, vaciarCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
} 