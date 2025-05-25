import { motion } from 'framer-motion';
import ImagenPerfil from "../assets/Perfil.jpg"; // Asegúrate que esta ruta sea correcta
import AnimatedText from './AnimatedText';
import { Download } from 'lucide-react'; // <--- Importa el icono Download

// Variantes para la animación (sin cambios)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

function Hero({ isDarkMode, language }) {
  // Clases condicionales (sin cambios)
  const contactButtonClass = isDarkMode
    ? "border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900"
    : "border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white";

  const availableBadgeClass = isDarkMode
    ? "text-green-300 bg-green-700/30 hover:bg-green-600/50 hover:text-green-200 border-green-500"
    : "text-green-700 bg-green-100 hover:bg-green-200 hover:text-green-800 border-green-300";
    
  const availableBadgeConicGradient = isDarkMode
    ? "before:bg-[conic-gradient(transparent,rgba(134,239,172,0.8),transparent)]"
    : "before:bg-[conic-gradient(transparent,rgba(74,222,128,1),transparent)]";

  const profileImageBorder = isDarkMode ? "border-sky-400" : "border-sky-500";

  // Estilo para el nuevo botón de CV
  const cvButtonColors = isDarkMode
    ? 'bg-emerald-600 hover:bg-emerald-500 text-white' // Un verde para la acción de descarga
    : 'bg-emerald-700 hover:bg-emerald-600 text-white';

  // --- INICIO DE MODIFICACIÓN: Determinar el archivo CV según el idioma ---
  const cvFileName = language === 'es' ? 'CV_Iker_Dominguez.pdf' : 'CV_Iker_Dominguez_english.pdf';
  const cvPath = `/${cvFileName}`; // Asumiendo que los archivos están en la raíz de la carpeta 'public'
  // --- FIN DE MODIFICACIÓN ---

  return (
    <section
      id="hero"
      className="min-h-[85vh] flex flex-col justify-center items-center text-center p-6 sm:p-8 relative overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-y-5 md:gap-y-6"
      >
        {/* Contenedor de Imagen + "Disponible para trabajar" (sin cambios) */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <img
            src={ImagenPerfil}
            alt={language === 'es' ? 'Foto de perfil de Iker Domínguez' : 'Profile picture of Iker Domínguez'}
            className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 shadow-lg object-cover ${profileImageBorder}`}
          />
          <a
            href="https://www.linkedin.com/in/iker-domínguez-calcerrada-423736298/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={language === 'es' ? 'Perfil de LinkedIn de Iker Domínguez, disponible para trabajar' : 'Iker Domínguez LinkedIn profile, available for work'}
            className={`relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 group ${availableBadgeClass}`}
          >
            <span className={`absolute inset-0 rounded-full pointer-events-none opacity-60 group-hover:opacity-100 
                              before:absolute before:inset-0 before:rounded-full before:border-2 
                              before:border-transparent ${availableBadgeConicGradient} before:animate-spin-slow`}
            ></span>
            <span className="relative z-10 flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-current"></span>
              </span>
              <AnimatedText keyProp={`available-${language}`}>
                {language === 'es' ? 'Disponible' : 'Available'}
              </AnimatedText>
            </span>
          </a>
        </motion.div>

        {/* Nombre (sin cambios) */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold cursor-pointer" 
          whileHover={{ scale: 1.05, color: isDarkMode ? '#67e8f9' : '#0ea5e9' }}
          whileTap={{ scale: 0.95 }}
        >
          Iker Domínguez
        </motion.h1>

        {/* Descripción / Subtítulo (sin cambios) */}
        <motion.div variants={itemVariants}>
          <AnimatedText
            keyProp={`description-${language}`}
            className={`mt-1 text-md sm:text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`} 
            as="p"
          >
            {language === 'es'
              ? 'Desarrollador Web Full-Stack | Creativo | Apasionado por la tecnología'
              : 'Full-Stack Web Developer | Creative | Passionate about technology'}
          </AnimatedText>
        </motion.div>

        {/* Botones de Acción */}
        <motion.div
          variants={itemVariants}
          className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center flex-wrap justify-center gap-3 sm:gap-4"
        >
          <a
            href="#projects"
            className={`px-6 py-2.5 font-semibold rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg
                        ${isDarkMode ? 'bg-sky-500 hover:bg-sky-400 text-white' : 'bg-sky-600 hover:bg-sky-500 text-white'}`}
          >
            <AnimatedText keyProp={`view-projects-${language}`}>
              {language === 'es' ? 'Ver Proyectos' : 'View Projects'}
            </AnimatedText>
          </a>
          
          {/* --- BOTÓN DE DESCARGAR CV CON LÓGICA DINÁMICA --- */}
          <a
            href={cvPath} 
            download={cvFileName}
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={language === 'es' ? 'Descargar mi Currículum Vitae' : 'Download my Curriculum Vitae'}
            className={`inline-flex items-center gap-2 px-6 py-2.5 font-semibold rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg ${cvButtonColors}`}
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            <AnimatedText keyProp={`download-cv-${language}`}>
              {language === 'es' ? 'Descargar CV' : 'Download CV'}
            </AnimatedText>
          </a>
          {/* --- FIN BOTÓN CV --- */}
          
          <a
            href="mailto:ikerdc2005@gmail.com?subject=Contacto%20desde%20Portfolio&body=Hola%20Iker,"
            className={`px-6 py-2.5 font-semibold border-2 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 shadow-sm hover:shadow-md ${contactButtonClass}`}
          >
            <AnimatedText keyProp={`contact-me-${language}`}>
              {language === 'es' ? 'Contáctame' : 'Contact Me'}
            </AnimatedText>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;