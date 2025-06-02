import { Github, Linkedin, Mail } from 'lucide-react';
import AnimatedText from "./AnimatedText";

function Footer({ isDarkMode, language }) {
  // Define las clases para el fondo del footer y el color del texto principal
  // Se usan colores sólidos para el fondo, consistentes con otras secciones.
  const footerClasses = isDarkMode
    ? 'bg-slate-900 text-slate-300' // Fondo sólido slate-900 para modo oscuro
    : 'bg-slate-100 text-slate-700'; // Fondo sólido slate-100 para modo claro

  // Clases para los enlaces de navegación y sociales para el efecto hover
  const linkHoverColor = isDarkMode ? 'hover:text-sky-300' : 'hover:text-sky-500';
  const titleColor = isDarkMode ? 'text-blue-400' : 'text-blue-600'; // Color para el título principal del footer
  const motivationalQuoteColor = isDarkMode ? 'text-slate-500' : 'text-slate-400'; // Color para la cita motivacional

  return (
    <footer
      className={`py-8 transition-colors duration-500 ${footerClasses}`}
    >
      <div className="max-w-4xl mx-auto text-center space-y-4 px-4">

        {/* Título */}
        <p className={`text-lg font-semibold ${titleColor}`}>
        <AnimatedText keyProp={`footer-title-${language}`}>
          © {new Date().getFullYear()} Iker Domínguez - {language === 'es' ? 'Desarrollador Fullstack' : 'Fullstack Developer'}
          </AnimatedText>
        </p>

        {/* Navegación */}
        <nav className="flex justify-center flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href="#hero" className={`${linkHoverColor} transition`}>
          <AnimatedText keyProp={`footer-nav-home-${language}`}>
            {language === 'es' ? 'Inicio' : 'Home'}
            </AnimatedText>
          </a>
          <a href="#about" className={`${linkHoverColor} transition`}>
          <AnimatedText keyProp={`footer-nav-about-${language}`}>
            {language === 'es' ? 'Sobre mí' : 'About'}
            </AnimatedText>
          </a>
          <a href="#projects" className={`${linkHoverColor} transition`}>
          <AnimatedText keyProp={`footer-nav-projects-${language}`}>
            {language === 'es' ? 'Proyectos' : 'Projects'}
            </AnimatedText>
          </a>
          <a href="#skills" className={`${linkHoverColor} transition`}>
          <AnimatedText keyProp={`footer-nav-skills-${language}`}>
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
            aria-label={language === 'es' ? 'Perfil de GitHub de Iker Domínguez' : "Iker Domínguez's GitHub Profile"}
            className={`${linkHoverColor} transition`}
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/iker-domínguez-calcerrada-423736298/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={language === 'es' ? 'Perfil de LinkedIn de Iker Domínguez' : "Iker Domínguez's LinkedIn Profile"}
            className={`${linkHoverColor} transition`}
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:ikerdc2005@gmail.com"
            aria-label={language === 'es' ? 'Enviar correo electrónico a Iker Domínguez' : "Send email to Iker Domínguez"}
            className={`${linkHoverColor} transition`}
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Frase motivacional */}
        <p className={`text-sm italic mt-2 ${motivationalQuoteColor}`}>
            <AnimatedText keyProp={`footer-quote-${language}`}>
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
