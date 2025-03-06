import Reveal from './Reveal';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'ThreeLogics',
    description: 'Sistema de gestión de almacenes optimizado para pequeñas y medianas empresas.',
    technologies: ['React', 'Node.js + Express', 'Supabase', 'Tailwind'],
    link: 'https://github.com/IkerDominguez2005/ThreeLogics',
  },
  {
    title: 'Portfolio Personal',
    description: 'Portfolio interactivo para mostrar mis proyectos y habilidades.',
    technologies: ['React', 'Tailwind', 'Framer Motion', 'Vite'],
    link: 'https://github.com/IkerDominguez2005/Portfolio',
  },
  {
    title: 'Monkey´s Paradise',
    description: 'Videojuego arcade 2D donde controlas un mono que esquiva meteoritos y derrota jefes finales.',
    technologies: ['HTML', 'JavaScript', 'Canvas', 'CSS3'],
    link: 'https://github.com/IkerDominguez2005/BananaMadness',
  },
];

function Projects({ isDarkMode }) {
  return (
    <section
      id="projects"
      className={`py-16 px-8 transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <Reveal>
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-6 ${
            isDarkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            💼 Proyectos Destacados
          </h2>
          <p className="text-center mb-12 text-lg leading-relaxed">
            Aquí tienes algunos de los proyectos en los que he trabajado, aplicando distintas tecnologías
            y resolviendo retos reales.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.03] ${
                  isDarkMode
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900'
                    : 'bg-gradient-to-br from-gray-200 to-gray-300'
                }`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {project.title}
                </h3>

                <p className="mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        isDarkMode ? 'bg-blue-800 text-white' : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  Ver en GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Projects;
