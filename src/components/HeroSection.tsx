'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedButton from './AnimatedButton';

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold mb-4 text-gray-900"
      >
        Simplemente revolucionario.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl text-gray-700 mb-8"
      >
        Explora lo último en innovación y diseño.
      </motion.p>
      <AnimatedButton text="Ver Productos" />
      <Image src="/products/prod-1.jpg" width={600} height={400} alt="Hero Image" className="rounded-lg shadow-xl mt-10" />
    </section>
  );
}
