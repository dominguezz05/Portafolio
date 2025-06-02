import { useState, useEffect, useMemo } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react'; // Añadido Menu y X
import { FaGlobe } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from "./AnimatedText";

// --- RUTAS DE LOS LOGOTIPOS ---
// Asegúrate de que estas rutas sean correctas y las imágenes existan en tu carpeta `public` o `assets`
const logoDark = '/Logotipo.webp'; // Logotipo para el tema oscuro (fondo claro en el logo)
const logoLight = '/logotipoClaro.webp'; // Logotipo para el tema claro (fondo oscuro en el logo, o versión adaptada)

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
    openMenu: 'Abrir menú de navegación',
    closeMenu: 'Cerrar menú de navegación',
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
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
  }
};

function Navbar({ isDarkMode, toggleTheme, language, setLanguage }) {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para menú móvil
  const currentTexts = navbarTexts[language];

  const sectionIds = useMemo(() => navLinksDefinition.map(link => link.id), []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + (window.innerHeight * 0.3);
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
      setActiveSection(currentSection);
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  // Efecto para bloquear/desbloquear scroll del body cuando el menú móvil se abre/cierra
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function para asegurar que el scroll se restaura si el componente se desmonta
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);


  const linkClass = (sectionId, isMobile = false) => {
    const baseLinkColor = (scrolled && isDarkMode && !isMobile) || (!scrolled && !isMobile) ? 'text-white' : 'text-gray-700';
    const activeColor = isDarkMode ? 'text-sky-400' : 'text-sky-600';
    const hoverColor = isDarkMode ? 'hover:text-sky-300' : 'hover:text-sky-500';

    // Para enlaces móviles, el color base será diferente ya que el fondo del menú es sólido
    const mobileBaseLinkColor = isDarkMode ? 'text-slate-200' : 'text-slate-700';
    const mobileHoverColor = isDarkMode ? 'hover:text-sky-400' : 'hover:text-sky-600';

    if (isMobile) {
      return `block w-full text-center py-3 text-lg transition-colors duration-200
        ${activeSection === sectionId
          ? `${activeColor} font-semibold`
          : `${mobileBaseLinkColor} ${mobileHoverColor}`
        }`;
    }

    return `cursor-pointer transition-colors duration-200 px-2 py-1 rounded-md
      ${activeSection === sectionId
        ? `${activeColor} font-semibold`
        : `${baseLinkColor} ${hoverColor}`
      }`;
  };

  const navBgClass = scrolled
    ? isDarkMode
      ? 'bg-slate-900/80 backdrop-blur-md shadow-lg'
      : 'bg-slate-100/80 backdrop-blur-md shadow-lg'
    : 'bg-transparent';

  const navTextColorClass = scrolled
    ? (isDarkMode ? 'text-slate-100' : 'text-slate-800')
    : 'text-white';

  const handleMobileLinkClick = (event, href) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del ancla
    const targetId = href.substring(1); // Obtener el ID sin el '#'
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Cierra el menú al hacer clic en un enlace
  };
  
  // Nueva función para el scroll suave al hacer clic en el logo
  const handleLogoClick = (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del ancla
    const targetElement = document.getElementById('hero');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Asegurarse de que el menú móvil se cierre si está abierto
  };


  // Determinar qué logo mostrar
  const currentLogo = isDarkMode ? logoDark : logoLight;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out flex items-center justify-between px-4 md:px-10 py-3 ${navBgClass} ${navTextColorClass}`}
        aria-label="Main navigation"
      >
        {/* Logo o Nombre */}
        <div className="text-xl font-bold">
          {/* Modificado el onClick para usar handleLogoClick */}
          <a href="#hero" onClick={handleLogoClick}>
            <img
              src={currentLogo} // Usa el logo determinado por el tema
              alt="Logo IDC"
              className="h-10 sm:h-12 w-auto transition-opacity duration-300" // Ajusta el tamaño y añade transición
              key={currentLogo} // Key para forzar re-render en cambio de src si es necesario para animaciones
            />
          </a>
        </div>


        {/* Links de navegación para escritorio (ocultos en móvil) */}
        <div className="hidden md:flex flex-grow justify-center items-center gap-2 md:gap-4 text-sm md:text-base">
          {navLinksDefinition.map(link => (
            // Modificado el onClick para usar handleMobileLinkClick también en escritorio para consistencia de scroll
            <a 
              key={link.id} 
              href={link.href} 
              className={linkClass(link.id)}
              onClick={(e) => handleMobileLinkClick(e, link.href)} // Aplicar scroll suave
            >
              <AnimatedText keyProp={`${link.id}-${language}-desktop`}>
                {currentTexts[link.textKey]}
              </AnimatedText>
            </a>
          ))}
        </div>

        {/* Botones de acciones y Hamburguesa */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Botón de Tema */}
          <button
            onClick={toggleTheme}
            aria-label={isDarkMode ? currentTexts.toggleToLight : currentTexts.toggleToDark}
            className={`p-2 rounded-full transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-500 
                        ${isMobileMenuOpen && isDarkMode ? 'text-slate-100 hover:bg-white/10' : 
                         isMobileMenuOpen && !isDarkMode ? 'text-slate-800 hover:bg-black/10' : 
                         navTextColorClass + ' hover:bg-white/10 dark:hover:bg-black/10'}`}
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

          {/* Botón de Idioma */}
          <button
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            aria-label={language === 'es' ? currentTexts.toggleLangToEn : currentTexts.toggleLangToEs}
            className={`p-2 rounded-full transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-500
                        flex items-center gap-1.5 text-xs md:text-sm font-medium border
                        ${isDarkMode
                            ? 'border-slate-600 hover:bg-slate-700 hover:border-slate-500'
                            : 'border-slate-300 hover:bg-slate-200 hover:border-slate-400'}
                        ${isMobileMenuOpen && isDarkMode ? 'text-slate-100' : 
                         isMobileMenuOpen && !isDarkMode ? 'text-slate-800' : 
                         navTextColorClass}`}
          >
            <FaGlobe className={`w-3.5 h-3.5 md:w-4 md:h-4 transition-colors duration-300 ${language === 'es' ? 'text-red-500' : 'text-blue-500'}`} />
            <AnimatePresence mode="wait">
              <motion.span
                key={language}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.2 }}
                className="w-5 text-center"
              >
                {language === 'es' ? 'ES' : 'EN'}
              </motion.span>
            </AnimatePresence>
          </button>

          {/* Botón de Hamburguesa (visible solo en móvil) */}
          <button
            className={`md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500
                        ${isMobileMenuOpen && isDarkMode ? 'text-slate-100' : 
                         isMobileMenuOpen && !isDarkMode ? 'text-slate-800' : 
                         navTextColorClass}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? currentTexts.closeMenu : currentTexts.openMenu}
            aria-expanded={isMobileMenuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Panel del Menú Móvil */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed inset-x-0 top-0 pt-[68px] h-screen z-40 md:hidden 
                        ${isDarkMode ? 'bg-slate-900' : 'bg-slate-100'}
                        flex flex-col items-center shadow-xl`}
          >
            <div className="w-full max-w-xs mx-auto py-8 space-y-4">
              {navLinksDefinition.map(link => (
                <a
                  key={link.id}
                  href={link.href}
                  className={linkClass(link.id, true)} 
                  onClick={(e) => handleMobileLinkClick(e, link.href)} // Aplicar scroll suave y cerrar menú
                >
                  <AnimatedText keyProp={`${link.id}-${language}-mobile`}>
                    {currentTexts[link.textKey]}
                  </AnimatedText>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
