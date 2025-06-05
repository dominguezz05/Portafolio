import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function Reveal({ children, animationEnabled = true }) {
  // Si la animación está desactivada (ej. en móvil), renderizar los hijos directamente.
  // Esto elimina toda la lógica de Framer Motion y Intersection Observer para este caso.
  if (!animationEnabled) {
    return <>{children}</>;
  }

  // Lógica original de animación para cuando animationEnabled es true (ej. en escritorio)
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.3, // Se activa cuando un 30% de la sección es visible
    // triggerOnce: false, // Por defecto es false, anima cada vez que entra/sale.
                         // Cámbialo a true si solo quieres que anime una vez.
  });

  useEffect(() => {
    // Este efecto solo se ejecuta si animationEnabled es true, debido al 'return' de arriba.
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}