import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center p-8 relative overflow-hidden bg-gray-900">
      {/* Foto con animación */}
      <motion.img
        src="/tu-foto.jpg"
        alt="Foto de perfil"
        className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      
      {/* Nombre con animación */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        {/* Aquí dentro el h1 puede tener el hover */}
        <motion.h1
          className="text-5xl font-bold cursor-pointer"
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.9 }}
        >
          Tu Nombre Aquí
        </motion.h1>
      </motion.div>

      {/* Descripción con animación */}
      <motion.p
        className="mt-4 text-lg text-gray-300"
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
          href="#contact"
          className="px-6 py-2 border border-white rounded-lg transition transform hover:scale-105 hover:bg-white hover:text-gray-900"
        >
          Contacto
        </a>
      </motion.div>

    </section>
  );
}

export default Hero;