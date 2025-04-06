'use client';
import { useState, createContext, useContext } from 'react';

const CarritoContext = createContext();

export function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (producto) => {
        setCarrito((prev) => [...prev, producto]);
    };

    const vaciarCarrito = () => setCarrito([]);

    return (
        <CarritoContext.Provider value= {{ carrito, agregarProducto, vaciarCarrito }
}>
    { children }
    </CarritoContext.Provider>
  );
}

export const useCarrito = () => useContext(CarritoContext);
