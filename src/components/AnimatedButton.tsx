'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface AnimatedButtonProps {
  text: string;
}

export default function AnimatedButton({ text }: AnimatedButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push('/productos');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="bg-black text-white px-6 py-3 rounded-full shadow-lg"
      onClick={handleClick}
    >
      {text}
    </motion.button>
  );
}
