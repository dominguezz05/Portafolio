import Reveal from './Reveal';
import { Github, ExternalLink } from 'lucide-react';
import imagen from '../assets/imaegn.png';
import threeLogicsImage from '../assets/qr.png'; // Imagen del QR

const projects = [
  {
    title: 'ThreeLogics',
    description_es: 'ThreeLogics es un sistema de gestión de almacenes (WMS) diseñado para pequeñas y medianas empresas. Permite automatizar procesos logísticos, gestionar inventarios en tiempo real, optimizar rutas de picking y generar informes analíticos personalizados. La plataforma incluye control de stock, registro de movimientos, trazabilidad de pedidos y predicción de demanda mediante análisis de datos. Escanea el QR para ver el Webinar de presentación 🎥',
    description_en: 'ThreeLogics is a warehouse management system (WMS) designed for small and medium-sized businesses. It automates logistics processes, manages real-time inventory, optimizes picking routes, and generates personalized analytical reports. It includes stock control, movement tracking, order traceability, and demand prediction through data analysis. Scan the QR to watch the presentation webinar 🎥',
    technologies: ['React', 'Node.js + Express', 'Supabase', 'Tailwind CSS', 'Google Cloud', 'Vercel', 'Recharts', 'Render', 'API-rest', 'Framer-motion'],
    link: 'https://github.com/threeLogics/threelogics-app',
    preview: 'https://threelogicsapp.vercel.app/',
    image: threeLogicsImage,
  },
  {
    title: "Monkey's Paradise",
    description_es: 'Monkey’s Paradise es un videojuego arcade 2D en el que controlas a un mono que debe esquivar meteoritos, recoger plátanos y enfrentarse a jefes finales en niveles progresivamente más desafiantes. Cuenta con mecánicas de movimiento dinámico, físicas personalizadas, enemigos con patrones de ataque y niveles especiales con jefes que lanzan misiles, escudos y meteoritos.',
    description_en: 'Monkey’s Paradise is a 2D arcade game where you control a monkey that must dodge meteors, collect bananas, and fight final bosses in increasingly challenging levels. It features dynamic movement mechanics, custom physics, enemies with attack patterns, and special levels with bosses launching missiles, shields, and meteors.',
    technologies: ['HTML5', 'JavaScript', 'Canvas API', 'CSS3', 'Itch.io'],
    link: 'https://github.com/dominguezz05/Monkeys-Paradise',
    preview: 'https://simiosoft.itch.io/monkeys-paradise-simiosoft',
    image: imagen,
  },
];

function Projects({ isDarkMode, language }) {
  return (
    <section
      id="projects"
      className={`py-16 px-8 transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <Reveal>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-10 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            💼 {language === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}
          </h2>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row overflow-hidden rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300 ${
                  isDarkMode
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900'
                    : 'bg-gradient-to-br from-gray-200 to-gray-300'
                }`}
              >
                {/* Imagen del proyecto */}
                {project.image && (
                  <div className="relative w-full md:w-2/5 h-64 md:h-auto group overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}

                {/* Contenido */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <h3 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      {project.title}
                    </h3>

                    <p className="mb-4 text-sm leading-relaxed">
                      {language === 'es' ? project.description_es : project.description_en}
                    </p>

                    {/* Tecnologías */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`text-xs px-3 py-1 rounded-full font-semibold ${
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
                      {project.title === "Monkey's Paradise"
                        ? language === 'es' ? 'Jugar en Itch.io' : 'Play on Itch.io'
                        : language === 'es' ? 'Ver Demo' : 'View Demo'}
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
