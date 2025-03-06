import { motion } from 'framer-motion';

function Hero({ isDarkMode }) {
  return (
    <section
  className={`h-[80vh] flex flex-col justify-center items-center text-center p-8 relative overflow-hidden transition-colors duration-300 `}
 
>

      {/* Contenedor con foto + "Disponible para trabajar" alineados horizontalmente */}
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Foto */}
        <img
          src="/tu-foto.jpg"
          alt="Foto de perfil"
          className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
        />

        {/* Disponible para trabajar */}
        <a
          href="https://www.linkedin.com/in/iker-dom%C3%ADnguez-calcerrada-423736298/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-green-800 bg-green-100 rounded-full cursor-pointer overflow-hidden transition-transform duration-300 hover:bg-green-300 hover:text-green-900 hover:scale-105 group"
        >
          {/* Borde animado */}
          <span className="absolute inset-0 rounded-full pointer-events-none border-2 border-transparent opacity-50 group-hover:opacity-100 before:absolute before:inset-0 before:rounded-full before:border-2 before:border-transparent before:bg-[conic-gradient(transparent,rgba(74,222,128,1),transparent)] before:animate-spin-slow"></span>

          {/* Contenido */}
          <span className="relative z-10 flex items-center gap-2">
            Disponible para trabajar
          </span>
        </a>
      </motion.div>

      {/* Nombre con animación */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-5xl font-bold cursor-pointer mt-4"
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.9 }}
        >
          Iker Domínguez
        </motion.h1>
      </motion.div>

      {/* Descripción con animación */}
      <motion.p
        className="mt-4 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      >
        Desarrollador Web | Creativo | Apasionado por la tecnología
      </motion.p>

      {/* Botones con hover y animación */}
      <motion.div
        className="mt-6 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
      >
        <a
          href="#projects"
          className="px-6 py-2 bg-blue-600 rounded-lg transition transform hover:scale-105 hover:bg-blue-500"
        >
          Ver Proyectos
        </a>
        <a
          href="mailto:ikerdc2005@gmail.com?subject=Me%20interesa%20tu%20perfil&body=Hola%20Iker,%20he%20visto%20tu%20portfolio%20y%20me%20gustaría%20hablar%20contigo."
          className="px-6 py-2 border border-white rounded-lg transition transform hover:scale-105 hover:bg-white hover:text-gray-900"
        >
          Contactame
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
