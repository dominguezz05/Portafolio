import { useState, useEffect, useMemo } from 'react'; // Añadido useMemo
import { Sun, Moon } from 'lucide-react';
import { FaGlobe } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from "./AnimatedText";

// 1. Datos para navegación y textos i18n
const navLinksDefinition = [
  { id: 'about', href: '#about', textKey: 'navAbout' },
  { id: 'personalinfo', href: '#personalinfo', textKey: 'navPersonalInfo' },
  { id: 'projects', href: '#projects', textKey: 'navProjects' },
  { id: 'skills', href: '#skills', textKey: 'navSkills' },
];

const navbarTexts = {
  es: {
    navAbout: 'Sobre Mí',
    navPersonalInfo: 'Información',
    navProjects: 'Proyectos',
    navSkills: 'Skills',
    toggleToLight: 'Cambiar a tema claro',
    toggleToDark: 'Cambiar a tema oscuro',
    toggleLangToEn: 'Switch to English',
    toggleLangToEs: 'Cambiar a Español',
  },
  en: {
    navAbout: 'About Me',
    navPersonalInfo: 'Personal Info',
    navProjects: 'Projects',
    navSkills: 'Skills',
    toggleToLight: 'Switch to light theme',
    toggleToDark: 'Switch to dark theme',
    toggleLangToEn: 'Switch to English',
    toggleLangToEs: 'Cambiar a Español',
  }
};

function Navbar({ isDarkMode, toggleTheme, language, setLanguage }) {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const currentTexts = navbarTexts[language];

  // 2. Usar useMemo para el array de secciones para evitar re-crearlo en cada render
  const sectionIds = useMemo(() => navLinksDefinition.map(link => link.id), []);

  useEffect(() => {
    const handleScroll = () => {
      // El offset de 200px ayuda a activar el enlace un poco antes de que la sección llegue al tope.
      // Puedes ajustarlo según tus preferencias.
      const scrollPosition = window.scrollY + (window.innerHeight * 0.3); // 30% desde el tope de la ventana

      let currentSection = '';
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = sectionId;
            break;
          }
        }
      }
      // Si no se encuentra ninguna sección activa (ej. al final de la página, más allá de la última sección)
      // podrías querer mantener la última activa o limpiarla.
      // Por ahora, si no hay ninguna, se limpia.
      setActiveSection(currentSection);
      setScrolled(window.scrollY > 50);
    };

    // Ejecutar una vez al montar para el estado inicial
    handleScroll(); 

    window.addEventListener('scroll', handleScroll, { passive: true }); // Añadido { passive: true } para scroll más fluido
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]); // Dependencia de sectionIds (aunque es estable con useMemo)

  const linkClass = (sectionId) => {
    // Los colores de los enlaces deben contrastar bien con los fondos del navbar
    const baseLinkColor = (scrolled && isDarkMode) || (!scrolled) ? 'text-white' : 'text-gray-700'; // Texto blanco si navbar oscuro/transparente, gris si navbar claro
    const activeColor = isDarkMode ? 'text-sky-400' : 'text-sky-600'; // Color de acento para activo/hover
    const hoverColor = isDarkMode ? 'hover:text-sky-300' : 'hover:text-sky-500';

    return `cursor-pointer transition-colors duration-200 px-2 py-1 rounded-md
      ${activeSection === sectionId
        ? `${activeColor} font-semibold` // No necesita baseLinkColor porque activeColor lo sobreescribe
        : `${baseLinkColor} ${hoverColor}`
      }`;
  };

  const navBgClass = scrolled
    ? isDarkMode
      ? 'bg-slate-900/80 backdrop-blur-md shadow-lg' // Un poco más oscuro y con más blur/sombra
      : 'bg-slate-100/80 backdrop-blur-md shadow-lg'
    : 'bg-transparent';
  
  // El color de texto base del navbar cuando está scrolleado
  const navTextColorClass = scrolled 
    ? (isDarkMode ? 'text-slate-100' : 'text-slate-800')
    : 'text-white'; // Cuando es transparente, asumimos fondo oscuro detrás (ej. Hero)


  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out flex items-center justify-between px-4 md:px-10 py-3 ${navBgClass} ${navTextColorClass}`}
      aria-label="Main navigation"
    >
      {/* Logo o Nombre - Opcional (no estaba en tu original) */}
      {/* <div className="text-xl font-bold">
        <a href="#hero">Iker D.</a>
      </div> */}

      {/* Links de navegación (centrados si no hay logo, o ajustar con flex) */}
      {/* Si añades logo, este div podría necesitar un margin auto para centrarse correctamente */}
      <div className="flex-grow flex justify-center items-center gap-2 md:gap-4 text-sm md:text-base">
        {navLinksDefinition.map(link => (
          <a key={link.id} href={link.href} className={linkClass(link.id)}>
            <AnimatedText keyProp={`${link.id}-${language}`}>
              {currentTexts[link.textKey]}
            </AnimatedText>
          </a>
        ))}
      </div>

      {/* Botones de acciones */}
      <div className="flex items-center gap-2 md:gap-3">
        <button
          onClick={toggleTheme}
          aria-label={isDarkMode ? currentTexts.toggleToLight : currentTexts.toggleToDark} // 4. ARIA Label
          className="p-2 rounded-full transition-transform duration-200 hover:scale-110 hover:bg-white/10 dark:hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isDarkMode ? "moon" : "sun"}
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              {isDarkMode ? (
                <Sun className="text-yellow-400 w-5 h-5 md:w-6 md:h-6" />
              ) : (
                <Moon className="text-slate-600 w-5 h-5 md:w-6 md:h-6" />
              )}
            </motion.div>
          </AnimatePresence>
        </button>

        <button
          onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
          aria-label={language === 'es' ? currentTexts.toggleLangToEn : currentTexts.toggleLangToEs} // 4. ARIA Label
          className={`p-2 rounded-full transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-500
                      flex items-center gap-1.5 text-xs md:text-sm font-medium border
                      ${isDarkMode ? 'border-slate-600 hover:bg-slate-700 hover:border-slate-500' : 'border-slate-300 hover:bg-slate-200 hover:border-slate-400'}`}
        >
          <FaGlobe className={`w-3.5 h-3.5 md:w-4 md:h-4 transition-colors duration-300 ${language === 'es' ? 'text-red-500' : 'text-blue-500'}`} />
          <AnimatePresence mode="wait">
            <motion.span
              key={language}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
              className="w-5 text-center" // Ancho fijo para evitar saltos
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