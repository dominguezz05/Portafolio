import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function ScrollToTop({ isDarkMode }) {
  const [isVisible, setIsVisible] = useState(false);

  // Muestra el botón cuando el usuario ha hecho scroll hacia abajo más de 200px
  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Añade y limpia el event listener para el scroll
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Clases de estilo dinámicas basadas en el tema
  const buttonClasses = isDarkMode
    ? 'bg-sky-600 text-white hover:bg-sky-500 focus:ring-sky-400' // Estilo más alineado con otros botones de acción
    : 'bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-300'; // Estilo más alineado

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={handleClick}
          aria-label="Scroll to top" // Etiqueta ARIA para accesibilidad
          className={`fixed bottom-8 right-8 p-3 rounded-full shadow-xl 
                      focus:outline-none focus:ring-4 focus:ring-offset-2 
                      dark:focus:ring-offset-slate-900 light:focus:ring-offset-slate-100
                      transition-all duration-300 ease-in-out transform hover:scale-110 cursor-pointer
                      ${buttonClasses}`}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          whileHover={{ scale: 1.15 }} // Efecto de hover un poco más pronunciado
          whileTap={{ scale: 0.95 }}   // Efecto al pulsar
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;
