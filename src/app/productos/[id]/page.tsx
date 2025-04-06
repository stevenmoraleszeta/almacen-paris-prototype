import Image from 'next/image';
import { products } from '@/lib/productos';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) return <div>Producto no encontrado</div>;

  return (
    <section className="max-w-5xl mx-auto py-24 px-6">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <Image src={product.image} width={700} height={600} alt={product.title} className="rounded-xl shadow-2xl"/>
        <div>
          <h1 className="text-5xl font-bold">{product.title}</h1>
          <p className="text-2xl font-semibold text-gray-600 my-6">${product.price}</p>
          <button className="bg-black text-white px-8 py-3 rounded-full shadow-lg">Agregar al Carrito</button>
        </div>
      </div>
    </section>
  );
}
