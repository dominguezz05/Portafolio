import { Github, Linkedin, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-800 to-gray-900
 text-gray-300 py-8 mt-16">
      <div className="max-w-4xl mx-auto text-center space-y-4">

        <p className="text-lg font-semibold text-blue-400">© 2025 Tu Nombre - Desarrollador Fullstack</p>

        <nav className="flex justify-center gap-6 text-sm">
          <a href="#hero" className="hover:text-blue-400 transition">Inicio</a>
          <a href="#about" className="hover:text-blue-400 transition">Sobre mí</a>
          <a href="#projects" className="hover:text-blue-400 transition">Proyectos</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contacto</a>
        </nav>

        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:tuemail@gmail.com" className="hover:text-blue-400 transition">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <p className="text-sm text-gray-500 italic mt-2">"Siempre aprendiendo, siempre creando."</p>
      </div>
    </footer>
  );
}

export default Footer;
