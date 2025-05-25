import React from 'react';
import Reveal from './Reveal';
import AnimatedText from "./AnimatedText";
import { Github, ExternalLink, PlayCircle } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// DATA DE PROYECTOS (SIN CAMBIOS EN ESTA PARTE)
import threeLogicsImage1 from '../assets/qr.png';
import threeLogicsImage2 from '../assets/threelogics.png';
// import threeLogicsImage3 from '../assets/threelogics.png'; // Asumo que la tercera imagen es igual o tienes otra
const threeLogicsImage3 = threeLogicsImage2; // Placeholder si solo tienes dos distintas


import monkeyParadiseImage1 from '../assets/imaegn.png';
// import monkeyParadiseImage2 from '../assets/imaegn.png'; // Asumo que las otras imágenes son iguales o tienes otras
// import monkeyParadiseImage3 from '../assets/imaegn.png';
const monkeyParadiseImage2 = monkeyParadiseImage1; // Placeholder
const monkeyParadiseImage3 = monkeyParadiseImage1; // Placeholder


const projects = [
  {
    title: 'ThreeLogics',
    description_es: 'ThreeLogics es un sistema de gestión de almacenes (WMS) diseñado para pequeñas y medianas empresas. Permite automatizar procesos logísticos, gestionar inventarios en tiempo real, optimizar rutas de picking y generar informes analíticos personalizados. La plataforma incluye control de stock, registro de movimientos, trazabilidad de pedidos y predicción de demanda mediante análisis de datos.',
    description_en: 'ThreeLogics is a warehouse management system (WMS) designed for small and medium-sized businesses. It automates logistics processes, manages real-time inventory, optimizes picking routes, and generates personalized analytical reports. It includes stock control, movement tracking, order traceability, and demand prediction through data analysis.',
    technologies: ['React', 'Node.js + Express', 'Supabase', 'Tailwind CSS', 'Google Cloud', 'Vercel', 'Recharts', 'Render', 'API-rest', 'Framer-motion'],
    link: 'https://github.com/threeLogics/threelogics-app',
    preview: 'https://threelogicsapp.vercel.app/',
    images: [threeLogicsImage1, threeLogicsImage2, threeLogicsImage3],
  },
  {
    title: "Monkey's Paradise",
    description_es: 'Monkey’s Paradise es un videojuego arcade 2D en el que controlas a un mono que debe esquivar meteoritos, recoger plátanos y enfrentarse a jefes finales en niveles progresivamente más desafiantes. Cuenta con mecánicas de movimiento dinámico, físicas personalizadas, enemigos con patrones de ataque y niveles especiales con jefes que lanzan misiles, escudos y meteoritos.',
    description_en: 'Monkey’s Paradise is a 2D arcade game where you control a monkey that must dodge meteors, collect bananas, and fight final bosses in increasingly challenging levels. It features dynamic movement mechanics, custom physics, enemies with attack patterns, and special levels with bosses launching missiles, shields, and meteors.',
    technologies: ['HTML5', 'JavaScript', 'Canvas API', 'CSS3', 'Itch.io'],
    link: 'https://github.com/dominguezz05/Monkeys-Paradise',
    preview: 'https://simiosoft.itch.io/monkeys-paradise-simiosoft',
    images: [monkeyParadiseImage1, monkeyParadiseImage2, monkeyParadiseImage3],
    googlePlayLink: 'https://play.google.com/store/apps/details?id=com.tu.juego.id', // ¡RECUERDA CAMBIAR ESTE ENLACE!
  },
];

function Projects({ isDarkMode, language }) {
  // El color del título principal de la sección debe ser consistente con App.js o definido aquí
  const titleColor = isDarkMode ? 'text-blue-400' : 'text-blue-600'; // Manteniendo tu elección de 'blue'

  return (
    <section
      id="projects"
      // SE HAN ELIMINADO LAS CLASES DE FONDO, TEXTO BASE Y TRANSICIÓN DE COLORES AQUÍ
      className="py-20 px-4 sm:px-8" 
    >
      <Reveal>
        <div className="max-w-7xl mx-auto">
        
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${titleColor}`}> {/* Ajustado mb y añadido md:text-5xl */}
            <AnimatedText keyProp={`title-${language}`}>
              💼 {language === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}
            </AnimatedText>
          </h2>
          
          <div className="space-y-16 md:space-y-20">
            {projects.map((project) => (
              // Las tarjetas de proyecto SÍ deben tener su propio fondo y estilos, como ya lo hacen
              <div
                key={project.title}
                className={`flex flex-col md:flex-row overflow-hidden rounded-lg shadow-xl hover:scale-[1.02] transition-transform duration-300 
                            ${isDarkMode
                              ? 'bg-gradient-to-br from-gray-800 to-gray-900 text-slate-100' // Texto base para la tarjeta
                              : 'bg-gradient-to-br from-white to-gray-100 text-slate-800' // Texto base para la tarjeta
                            }`}
              >
                {/* Carrusel de Imágenes */}
                {project.images && project.images.length > 0 && (
                  <div className="relative w-full md:w-2/5 h-72 md:h-auto group overflow-hidden">
                    <Swiper
                      spaceBetween={0}
                      centeredSlides={true}
                      autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                      }}
                      pagination={{ clickable: true }}
                      navigation={project.images.length > 1}
                      loop={project.images.length > 1}
                      modules={[Autoplay, Pagination, Navigation]}
                      className="mySwiper w-full h-full"
                    >
                      {project.images.map((imgSrc, idx) => (
                        <SwiperSlide key={`${project.title}-img-${idx}`}>
                          <img
                            src={imgSrc}
                            alt={`${project.title} - screenshot ${idx + 1}`}
                            className="object-cover object-center w-full h-full"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                )}

                {/* Contenido de la tarjeta */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className={`text-2xl lg:text-3xl font-bold mb-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      {project.title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed"> {/* Color heredado del div de la tarjeta */}
                      <AnimatedText keyProp={`${project.title}-desc-${language}`}>
                        {language === 'es' ? project.description_es : project.description_en}
                      </AnimatedText>
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                            isDarkMode ? 'bg-sky-700 text-sky-100' : 'bg-sky-100 text-sky-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-sm transition-all duration-200 ease-in-out
                                  ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-slate-700 hover:bg-slate-800 text-white'}`}
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                    {project.preview && (
                      <a
                        href={project.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-sm transition-all duration-200 ease-in-out
                                    ${isDarkMode ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <AnimatedText keyProp={`${project.title}-preview-${language}`}>
                          {project.title === "Monkey's Paradise"
                            ? language === 'es' ? 'Jugar en Itch.io' : 'Play on Itch.io'
                            : language === 'es' ? 'Ver Demo' : 'View Demo'}
                        </AnimatedText>
                      </a>
                    )}
                    {project.googlePlayLink && (
                      <a
                        href={project.googlePlayLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-sm transition-all duration-200 ease-in-out
                                    ${isDarkMode ? 'bg-green-600 hover:bg-green-500 text-white' : 'bg-green-500 hover:bg-green-600 text-white'}`}
                      >
                        <PlayCircle className="w-4 h-4" />
                        <AnimatedText keyProp={`${project.title}-gplay-${language}`}>
                          {language === 'es' ? 'Jugar en Google Play' : 'Play on Google Play'}
                        </AnimatedText>
                      </a>
                    )}
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