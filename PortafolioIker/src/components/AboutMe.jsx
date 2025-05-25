import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal'; // Asumimos que Reveal funciona como se espera

// 1. Centralizar textos para i18n y datos de la trayectoria (SIN CAMBIOS EN ESTA PARTE)
const aboutMeContent = {
  es: {
    title: 'Sobre Mí',
    greeting: '¡Hola! Soy un apasionado desarrollador web en formación, actualmente cursando el ciclo de ',
    program: 'Desarrollo de Aplicaciones Web (DAW) ',
    passion: '. Desde que descubrí el mundo de la programación, me ha fascinado la posibilidad de transformar ideas en experiencias digitales reales. ',
    experienceIntro: 'Durante mi formación, he adquirido experiencia trabajando con tecnologías como ',
    coreTech: 'HTML, CSS, JavaScript, PHP, MySQL ',
    modernTechIntro: 'y recientemente me he sumergido en el ecosistema moderno con herramientas como ',
    modernTech: 'React, Node.js, TailwindCSS ',
    dbIntro: 'y bases de datos NoSQL como ',
    dbTech: 'MongoDB y Supabase (PostgreSQL avanzado) ',
    personality: 'Me considero una persona creativa, curiosa y en constante evolución. Disfruto resolviendo problemas, experimentando con nuevas tecnologías y colaborando en proyectos reales que me permitan seguir aprendiendo. ',
    goal: 'Mi objetivo es fusionar creatividad y tecnología para crear soluciones digitales innovadoras que impacten positivamente en las personas y en las empresas. Si quieres saber más sobre mí, no dudes en echar un vistazo a mis ',
    projectsLinkText: 'proyectos ',
    goalContinuation: 'o ponerte en contacto. ',
    journeyTitle: '📅 Mi Trayectoria ',
    journey: [
      {
        id: 1,
        title: 'Ciclo Formativo de Grado Superior: Desarrollo de Aplicaciones Web (DAW)',
        period: '2023 - 2025 ',
        institution: 'Centro de Formación Profesional Medac, Fuenlabrada',
        description: 'Formación integral en desarrollo front-end y back-end, bases de datos, y despliegue de aplicaciones.',
      },
      {
        id: 2,
        title: 'Proyecto de Fin de Grado (Destacado): ThreeLogics',
        period: '2024',
        institution: 'Proyecto Académico',
        description: 'Sistema de Gestión de Almacenes (SGA) robusto y escalable, desarrollado con React, Vite, Node.js (para API REST), Supabase (PostgreSQL) y TailwindCSS. Incluye autenticación, CRUD de inventario, gestión de pedidos y analíticas.',
      },
      {
        id: 3,
        title: 'Lanzamiento en Google Play: Monkey’s Paradise',
        period: '2025',
        institution: 'Proyecto Personal',
        description: 'Videojuego de plataformas 2D lanzado en Google Play. Incluye múltiples niveles, jefes, meteoritos y control táctil optimizado. Publicado tras una fase de pruebas cerradas y mejoras continuas basadas en feedback.',
      },
    ],
  },
  en: {
    title: 'About Me ',
    greeting: 'Hello! I am a passionate web developer in training, currently studying ',
    program: 'Web Application Development (DAW) ',
    passion: '. Since I discovered the world of programming, I have been fascinated by the ability to turn ideas into real digital experiences. ',
    experienceIntro: 'During my training, I have gained experience working with technologies such as ',
    coreTech: 'HTML, CSS, JavaScript, PHP, MySQL ',
    modernTechIntro: 'and recently I have immersed myself in the modern ecosystem with tools such as ',
    modernTech: 'React, Node.js, TailwindCSS ',
    dbIntro: 'and NoSQL-friendly databases like ',
    dbTech: 'MongoDB and Supabase (advanced PostgreSQL) ',
    personality: 'I consider myself a creative, curious, and constantly evolving person. I enjoy solving problems, experimenting with new technologies, and collaborating on real projects that allow me to continue learning. ',
    goal: 'My goal is to merge creativity and technology to create innovative digital solutions that positively impact people and companies. If you want to know more about me, feel free to check out my ',
    projectsLinkText: 'projects ',
    goalContinuation: 'or get in touch. ',
    journeyTitle: '📅 My Journey ',
    journey: [
      {
        id: 1,
        title: 'Higher Level Technical Certificate: Web Application Development (DAW )',
        period: '2023 - 2025 ',
        institution: 'Medac Vocational Training Center, Fuenlabrada ',
        description: 'Comprehensive training in front-end and back-end development, databases, and application deployment.',
      },
      {
        id: 2,
        title: 'Final Degree Project (Featured): ThreeLogics ',
        period: '2024 ',
        institution: 'Academic Project ',
        description: 'A robust and scalable Warehouse Management System (WMS) built with React, Vite, Node.js (for REST API), Supabase (PostgreSQL), and TailwindCSS. Features authentication, inventory CRUD, order management, and analytics.',
      },
      {
        id: 3,
        title: 'Google Play Launch: Monkey’s Paradise',
        period: '2025',
        institution: 'Personal Project',
        description: '2D platformer game released on Google Play. Includes multiple levels, bosses, meteorites and optimized touch controls. Published after a closed beta phase and iterative improvements based on user feedback.',
      },
    ],
  },
};


const JourneyItem = ({ item, isDarkMode, language }) => ( // El language no se usa aquí, se podría quitar si no se prevé
  <div className="relative pl-2">
    <div className={`absolute -left-[calc(0.5rem+2px)] top-1.5 w-4 h-4 rounded-full ${isDarkMode ? 'bg-blue-400 border-gray-900' : 'bg-blue-600 border-gray-100'} border-2`}></div>
    <p className={`font-semibold text-md mb-0.5 ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
      {item.title}
    </p>
    <p className={`text-xs uppercase tracking-wider font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
      {item.period} {item.institution && `| ${item.institution}`}
    </p>
    {item.description && (
      <p className={`mt-1 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {item.description}
      </p>
    )}
  </div>
);

function AboutMe({ isDarkMode, language }) {
  const currentContent = aboutMeContent[language];
  const techHighlightClass = isDarkMode ? 'text-sky-400' : 'text-sky-600';
  // El color del título principal de la sección también debe ser consistente con App.js o definido aquí
  const titleColor = isDarkMode ? 'text-sky-400' : 'text-sky-600'; // Manteniendo tu elección de 'sky'
  // El color de los párrafos de texto simple heredará del <main> en App.js

  return (
    <section
      id="about"
      // SE HAN ELIMINADO LAS CLASES DE FONDO, TEXTO BASE Y TRANSICIÓN DE COLORES AQUÍ
      className="py-20 px-6 md:px-16" 
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* El color del título se sigue manejando aquí porque es un color de acento */}
        <h2 className={`text-4xl font-extrabold mb-12 ${titleColor}`}>
          {currentContent.title}
        </h2>

        <Reveal>
          <AnimatePresence mode="wait">
            <motion.div
              key={language}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="space-y-6 text-left md:text-justify"
            >
              {/* Los párrafos ahora heredan el color de texto de <main> */}
              {/* Si necesitas un color específico para estos párrafos que sea diferente al de <main>, */}
              {/* entonces SÍ deberías añadir clases como 'text-slate-300' o 'dark:text-slate-300' */}
              <p className="text-lg leading-relaxed">
                {currentContent.greeting}{' '}
                <span className={`font-semibold ${techHighlightClass}`}>{currentContent.program}</span>
                {currentContent.passion}
              </p>

              <p className="text-lg leading-relaxed">
                {currentContent.experienceIntro}{' '}
                <span className={`font-medium ${techHighlightClass}`}>{currentContent.coreTech}</span>
                {currentContent.modernTechIntro}{' '}
                <span className={`font-medium ${techHighlightClass}`}>{currentContent.modernTech}</span>
                {currentContent.dbIntro}{' '}
                <span className={`font-medium ${techHighlightClass}`}>{currentContent.dbTech}</span>.
              </p>

              <p className="text-lg leading-relaxed">
                {currentContent.personality}
              </p>

              <p className="text-lg leading-relaxed">
                {currentContent.goal}{' '}
                <a href="#projects" className={`underline font-medium ${isDarkMode ? 'text-sky-400 hover:text-sky-300' : 'text-sky-600 hover:text-sky-500'}`}>
                  {currentContent.projectsLinkText}
                </a>
                {currentContent.goalContinuation}
              </p>

              <div className="pt-10">
                <h3 className={`text-3xl font-bold text-center mb-8 ${titleColor}`}> {/* Título de sección con acento */}
                  {currentContent.journeyTitle}
                </h3>
                <div className={`border-l-4 pl-6 space-y-8 ${isDarkMode ? 'border-sky-500' : 'border-sky-600'}`}> {/* Borde con acento */}
                  {currentContent.journey.map((item) => (
                    <JourneyItem key={item.id} item={item} isDarkMode={isDarkMode} language={language} />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutMe;