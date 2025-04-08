import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { FaGlobe } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from "./AnimatedText";


function Navbar({ isDarkMode, toggleTheme, language, setLanguage }) {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'personalinfo', 'skills'];
      const scrollPosition = window.scrollY + 200;

      // Detectar sección activa
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Detectar si ha scrolleado para aplicar fondo
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = (section) =>
    `cursor-pointer transition-colors duration-300 ${
      activeSection === section
        ? 'text-blue-400 font-bold'
        : 'hover:text-blue-400'
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 flex items-center justify-between px-6 md:px-12 py-3 md:py-4 ${
        scrolled
          ? isDarkMode
            ? 'bg-gray-900/80 backdrop-blur-lg text-white'
            : 'bg-gray-100/80 backdrop-blur-lg text-gray-900'
          : 'bg-transparent text-white'
      }`}
    >
      {/* Links centrados */}
      <div className="flex-1 flex justify-center gap-6">
        <a href="#about" className={linkClass('about')}>
        <AnimatedText keyProp={language}>
          {language === 'es' ? 'Sobre mí' : 'About Me'}
          </AnimatedText>
        </a>
        <a href="#personalinfo" className={linkClass('personalinfo')}>
        <AnimatedText keyProp={language}>
          {language === 'es' ? 'Información Personal' : 'Personal Info'}
          </AnimatedText>
        </a>
        <a href="#projects" className={linkClass('projects')}>
        <AnimatedText keyProp={language}>
          {language === 'es' ? 'Proyectos' : 'Projects'}
          </AnimatedText>
        </a>
        <a href="#skills" className={linkClass('skills')}>
        <AnimatedText keyProp={language}>
          {language === 'es' ? 'Skills' : 'Skills'}
          </AnimatedText>
        </a>
      </div>

      {/* Botones de acciones */}
      <div className="flex items-center gap-2">
        {/* Botón modo claro/oscuro */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full transition-transform hover:scale-110 focus:outline-none cursor-pointer"
        >
          {isDarkMode ? (
            <Sun className="text-yellow-400 w-6 h-6" />
          ) : (
            <Moon className="text-gray-800 w-6 h-6" />
          )}
        </button>

        {/* Botón cambio de idioma */}
        <button
  onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
  className="p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-blue-500 hover:text-white focus:outline-none text-sm border border-gray-400 hover:border-blue-500 flex items-center gap-1 cursor-pointer"
>
  <FaGlobe className={`w-4 h-4 ${language === 'es' ? 'text-red-500' : 'text-blue-500'}`} />
  
  <AnimatePresence mode="wait">
    <motion.span
      key={language}
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 5 }}
      transition={{ duration: 0.3 }}
    >
      {language === 'es' ? 'ES' : 'EN'}
    </motion.span>
  </AnimatePresence>
</button>



      </div>
    </nav>
  );
}

export default Navbar;
