'use client';
import { useState } from 'react';
import { FiShoppingCart, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { useCarrito } from '@/hooks/useCarrito';

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const { carrito, vaciarCarrito } = useCarrito();

  const toggleCart = () => setIsOpen(!isOpen);

  const total = carrito.reduce((sum, item) => sum + item.precio, 0);

  return (
    <div className="relative">
      <button
        onClick={toggleCart}
        className="p-2 text-gray-600 hover:text-gray-900 relative"
      >
        <FiShoppingCart size={24} />
        {carrito.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {carrito.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Tu Carrito</h3>
              <button onClick={toggleCart} className="text-gray-500 hover:text-gray-700">
                <FiX size={20} />
              </button>
            </div>

            {carrito.length === 0 ? (
              <p className="text-gray-500 text-center py-4">Tu carrito está vacío</p>
            ) : (
              <>
                <div className="max-h-96 overflow-y-auto">
                  {carrito.map((item) => (
                    <div key={item.id} className="flex items-center py-2 border-b">
                      <img src={item.imagen} alt={item.nombre} className="w-16 h-16 object-cover rounded" />
                      <div className="ml-3 flex-1">
                        <h4 className="text-sm font-medium">{item.nombre}</h4>
                        <p className="text-sm text-gray-500">${item.precio}</p>
                      </div>
                      <button
                        onClick={() => vaciarCarrito()}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FiX size={18} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold">Total:</span>
                    <span className="font-bold">${total.toFixed(2)}</span>
                  </div>
                  <Link
                    href="/checkout"
                    className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700"
                  >
                    Ir al Checkout
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 