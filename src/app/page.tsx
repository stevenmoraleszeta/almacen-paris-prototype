import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductoCard';
import { products } from '@/lib/productos';

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="container mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Nuestros Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>
    </>
  );
}
