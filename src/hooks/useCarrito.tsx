'use client';
import { useState, createContext, useContext, ReactNode } from 'react';
import { Producto } from '../types/producto';

interface CarritoContextType {
    carrito: Producto[];
    agregarProducto: (producto: Producto) => void;
    vaciarCarrito: () => void;
}

const CarritoContext = createContext<CarritoContextType | undefined>(undefined);

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

export const useCarrito = () => {
    const context = useContext(CarritoContext);
    if (!context) {
        throw new Error('useCarrito must be used within a CarritoProvider');
    }
    return context;
};
