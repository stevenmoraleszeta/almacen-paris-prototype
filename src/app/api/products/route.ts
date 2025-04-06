import { NextResponse } from 'next/server';

// Datos de ejemplo - en una aplicación real, esto vendría de una base de datos
const products = [
  {
    id: 1,
    title: "Zapatillas Running",
    price: 89.99,
    image: "/products/prod-1.jpg"
  },
  {
    id: 2,
    title: "Camiseta Deportiva",
    price: 29.99,
    image: "/products/prod-2.jpg"
  },
  {
    id: 3,
    title: "Pantalón Deportivo",
    price: 49.99,
    image: "/products/prod-3.jpg"
  },
  {
    id: 4,
    title: "Gorra Deportiva",
    price: 19.99,
    image: "/products/prod-4.jpg"
  },
  {
    id: 5,
    title: "Mochila Deportiva",
    price: 59.99,
    image: "/products/prod-5.jpg"
  },
  {
    id: 6,
    title: "Calcetines Técnicos",
    price: 14.99,
    image: "/products/prod-6.jpg"
  }
];

export async function GET() {
  return NextResponse.json(products);
} 