import Reveal from './Reveal';
import { Github, ExternalLink } from 'lucide-react';
import imagen from '../assets/imaegn.png';

const projects = [
  /*{
    title: 'ThreeLogics',
    description: 'Sistema de gestión de almacenes optimizado para pequeñas y medianas empresas.',
    technologies: ['React', 'Node.js + Express', 'Supabase', 'Tailwind'],
    link: 'https://github.com/IkerDominguez2005/ThreeLogics',
    preview: 'https://your-preview-link.com/ThreeLogics', // Añade un link de preview si lo tienes
    image: '/images/threelogics.png' // Si tienes una captura del proyecto
  },*/
  {
    title: 'Monkey´s Paradise',
    description: 'Videojuego arcade 2D donde controlas un mono que esquiva meteoritos y derrota jefes finales.',
    technologies: ['HTML', 'JavaScript', 'Canvas', 'CSS3'],
    link: 'https://github.com/dominguezz05/Monkeys-Paradise',
    preview: 'https://monkeys-paradise.vercel.app/',
    image: imagen,  
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
          <h2 className={`text-4xl font-bold text-center mb-10 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            💼 Proyectos Destacados
          </h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row overflow-hidden rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300 ${
                  isDarkMode
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900'
                    : 'bg-gradient-to-br from-gray-200 to-gray-300'
                }`}
              >
                {/* Imagen del proyecto (opcional) */}
                {project.image && (
                  <div className="w-full md:w-1/3">
                    <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
                  </div>
                )}

                {/* Contenido */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      {project.title}
                    </h3>
                    <p className="mt-2 mb-4 text-sm leading-relaxed">{project.description}</p>

                    {/* Tecnologías */}
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
                  </div>

                  {/* Botones */}
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>

                    <a
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Preview
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Projects;
