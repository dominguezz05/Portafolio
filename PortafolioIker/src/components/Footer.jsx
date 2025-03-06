import { Github, Linkedin, Mail } from 'lucide-react';

function Footer({ isDarkMode }) {
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
          © 2025 Iker Domínguez - Desarrollador Fullstack
        </p>

        {/* Navegación */}
        <nav className="flex justify-center gap-6 text-sm">
          <a href="#hero" className="hover:text-blue-400 transition">Inicio</a>
          <a href="#about" className="hover:text-blue-400 transition">Sobre mí</a>
          <a href="#projects" className="hover:text-blue-400 transition">Proyectos</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
        </nav>

        {/* Iconos sociales */}
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/IkerDominguez2005"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/iker-domínguez-calcerrada-423736298"
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
          "Siempre aprendiendo, siempre creando."
        </p>
      </div>
    </footer>
  );
}

export default Footer;
