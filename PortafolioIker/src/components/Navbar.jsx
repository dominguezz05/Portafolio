import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

function Navbar({ isDarkMode, toggleTheme }) {
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
            : 'bg-gary-100/80 backdrop-blur-lg text-gray-900'
          : 'bg-transparent text-white'
      }`}
    >
      {/* Links centrados */}
      <div className="flex-1 flex justify-center gap-6">
      <a href="#about" className={linkClass('about')}>
          Sobre mí
        </a>
        <a href="#personalinfo" className={linkClass('personalinfo')}>
          Información Personal
        </a>
        <a href="#projects" className={linkClass('projects')}>
          Proyectos
        </a>
        <a href="#skills" className={linkClass('skills')}>
          Skills
        </a>
     
      </div>

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
    </nav>
  );
}

export default Navbar;
