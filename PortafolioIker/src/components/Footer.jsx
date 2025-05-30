import { Github, Linkedin, Mail } from 'lucide-react';
import AnimatedText from "./AnimatedText";
function Footer({ isDarkMode, language }) {
  return (
    <footer
      className={`py-8 transition-colors duration-500 ${
        isDarkMode
          ? 'bg-gradient-to-t from-gray-800 to-gray-900 text-gray-300'
          : 'bg-gradient-to-t from-white to-gray-100 text-gray-700'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center space-y-4">

        {/* Título */}
        <p className={`text-lg font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
        <AnimatedText keyProp={language}>
          © 2025 Iker Domínguez - {language === 'es' ? 'Desarrollador Fullstack' : 'Fullstack Developer'}
          </AnimatedText>
        </p>

        {/* Navegación */}
        <nav className="flex justify-center gap-6 text-sm">
          <a href="#hero" className="hover:text-blue-400 transition">
          <AnimatedText keyProp={language}>
            {language === 'es' ? 'Inicio' : 'Home'}
            </AnimatedText>
          </a>
          <a href="#about" className="hover:text-blue-400 transition">
          <AnimatedText keyProp={language}>
            {language === 'es' ? 'Sobre mí' : 'About'}
            </AnimatedText>
          </a>
          <a href="#projects" className="hover:text-blue-400 transition">
          <AnimatedText keyProp={language}>
            {language === 'es' ? 'Proyectos' : 'Projects'}
            </AnimatedText>
          </a>
          <a href="#skills" className="hover:text-blue-400 transition">
          <AnimatedText keyProp={language}>
            {language === 'es' ? 'Skills' : 'Skills'}
            </AnimatedText>
          </a>
        </nav>

        {/* Iconos sociales */}
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/dominguezz05"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/iker-dom%C3%ADnguez-calcerrada-423736298/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:ikerdc2005@gmail.com"
            className="hover:text-blue-400 transition"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Frase motivacional */}
        <p className={`text-sm italic mt-2 ${
          isDarkMode ? 'text-gray-500' : 'text-gray-400'
        }`}>
           <AnimatedText keyProp={language}>
          {language === 'es'
            ? '"Siempre aprendiendo, siempre creando."'
            : '"Always learning, always creating."'}
            </AnimatedText>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
