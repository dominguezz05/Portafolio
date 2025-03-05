import Reveal from './Reveal';

const projects = [
  {
    title: 'ThreeLogics',
    description: 'Sistema de gestión de almacenes optimizado para pequeñas y medianas empresas.',
    technologies: ['React', 'Node.js', 'Supabase', 'Tailwind'],
    link: 'https://github.com/TuUsuario/ThreeLogics',
  },
  {
    title: 'Portfolio Personal',
    description: 'Portfolio interactivo para mostrar mis proyectos y habilidades.',
    technologies: ['React', 'Tailwind', 'Framer Motion'],
    link: 'https://github.com/TuUsuario/Portfolio',
  },
  {
    title: 'Monkey´s Paradise',
    description: 'Videojuego arcade 2D donde controlas un mono que debe esquivar meteoritos y derrotar jefes finales.',
    technologies: ['HTML', 'JavaScript', 'Canvas', 'CSS3'],
    link: 'https://github.com/TuUsuario/BananaMadness',
},

];

function Projects() {
  return (
    <section id="projects" className="py-16 px-8 bg-gray-900 text-white">
      <Reveal>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-400 mb-6">
            Proyectos Destacados
          </h2>
          <p className="text-gray-300 text-center mb-12">
            Aquí tienes algunos de los proyectos en los que he trabajado, aplicando distintas tecnologías y resolviendo retos reales.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg hover:scale-[1.03] transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
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
