import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal'; // Asumimos que Reveal funciona como se espera
import AnimatedText from './AnimatedText'; // Asegúrate de que este componente exista
import { GraduationCap, Lightbulb, Briefcase } from 'lucide-react'; // Iconos para tipos de trayectoria

// 1. Centralizar textos para i18n y datos de la trayectoria
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
        type: 'education', // Tipo de hito
        title: 'Ciclo Formativo de Grado Superior: Desarrollo de Aplicaciones Web (DAW)',
        period: '2023 - 2025 ',
        institution: 'Centro de Formación Profesional Medac, Fuenlabrada',
        description: 'Formación integral en desarrollo front-end y back-end, bases de datos, y despliegue de aplicaciones.',
      },
      {
        id: 4, // Nuevo ID, asegúrate de que sea único y secuencial si importa el orden
        type: 'work', // Tipo de hito: experiencia laboral
        title: 'Desarrollador Web en Prácticas – Grupo Oro',
        period: 'Marzo - Junio 2025', // ACTUALIZA ESTA FECHA
        institution: 'Grupo Oro',
        description: 'Durante mi estancia en Grupo Oro, participé activamente en el diseño, desarrollo y mantenimiento de sitios web profesionales utilizando WordPress, Elementor y tecnologías relacionadas. Contribuí a la creación y personalización de proyectos para marcas como Mentamoda, MarbellaPlan, GuindaSpa y Masaka Africana, aplicando principios de experiencia de usuario (UX), SEO y metodologías ágiles como Scrum.\nAdemás, desarrollé proyectos propios de comercio electrónico mediante dropshipping, como la tienda InfluProductos, abordando tanto el diseño visual como la estructura técnica mediante sistemas de gestión de contenidos (CMS), integración de PHP, JSON y estrategias de optimización.'
      },
      {
        id: 2,
        type: 'project', // Tipo de hito
        title: 'Proyecto de Fin de Grado (Destacado): ThreeLogics',
        period: '2025',
        institution: 'Proyecto Académico',
        description: 'Sistema de Gestión de Almacenes (SGA) robusto y escalable, desarrollado con React, Vite, Node.js (para API REST), Supabase (PostgreSQL) y TailwindCSS. Incluye autenticación, CRUD de inventario, gestión de pedidos y analíticas.',
      },
      {
        id: 3,
        type: 'project', // Tipo de hito
        title: 'Lanzamiento en Google Play: Monkey’s Paradise',
        period: '2025', // Considera si esta fecha es correcta si el anterior es 2024
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
        type: 'education',
        title: 'Higher Level Technical Certificate: Web Application Development (DAW)',
        period: '2023 - 2025 ',
        institution: 'Medac Vocational Training Center, Fuenlabrada ',
        description: 'Comprehensive training in front-end and back-end development, databases, and application deployment.',
      },
      {
        id: 4, // New ID
        type: 'work',
        title: 'Intern Web Developer – Grupo Oro',
        period: 'MAY - June 2025', // UPDATE THIS DATE
        institution: 'Grupo Oro',
        description: 'During my time at Grupo Oro, I actively participated in the design, development, and maintenance of professional websites using WordPress, Elementor, and related technologies. I contributed to the creation and customization of projects for brands such as Mentamoda, MarbellaPlan, GuindaSpa, and Masaka Africana, applying user experience (UX) principles, SEO, and agile methodologies like Scrum.\nAdditionally, I developed my own e-commerce dropshipping projects, such as the InfluProductos store, addressing both visual design and technical structure using content management systems (CMS), PHP and JSON integration, and optimization strategies.'
      },
      {
        id: 2,
        type: 'project',
        title: 'Final Degree Project (Featured): ThreeLogics ',
        period: '2025 ',
        institution: 'Academic Project ',
        description: 'A robust and scalable Warehouse Management System (WMS) built with React, Vite, Node.js (for REST API), Supabase (PostgreSQL), and TailwindCSS. Features authentication, inventory CRUD, order management, and analytics.',
      },
      {
        id: 3,
        type: 'project',
        title: 'Google Play Launch: Monkey’s Paradise',
        period: '2025',
        institution: 'Personal Project',
        description: '2D platformer game released on Google Play. Includes multiple levels, bosses, meteorites and optimized touch controls. Published after a closed beta phase and iterative improvements based on user feedback.',
      },
    ],
  },
};

// Componente para cada item de la trayectoria
const JourneyItem = ({ item, isDarkMode }) => {
  let iconColor = '';
  let dotColorClass = '';
  let IconComponent;

  switch (item.type) {
    case 'education':
      IconComponent = GraduationCap;
      iconColor = isDarkMode ? 'text-blue-300' : 'text-blue-700';
      dotColorClass = isDarkMode ? 'bg-blue-400 border-gray-900' : 'bg-blue-600 border-gray-100';
      break;
    case 'project':
      IconComponent = Lightbulb;
      iconColor = isDarkMode ? 'text-green-300' : 'text-green-700';
      dotColorClass = isDarkMode ? 'bg-green-400 border-gray-900' : 'bg-green-600 border-gray-100';
      break;
    case 'work':
      IconComponent = Briefcase;
      iconColor = isDarkMode ? 'text-purple-300' : 'text-purple-700';
      dotColorClass = isDarkMode ? 'bg-purple-400 border-gray-900' : 'bg-purple-600 border-gray-100';
      break;
    default:
      IconComponent = null; // O un icono por defecto
      iconColor = isDarkMode ? 'text-gray-300' : 'text-gray-700';
      dotColorClass = isDarkMode ? 'bg-gray-400 border-gray-900' : 'bg-gray-600 border-gray-100';
  }

  return (
    <div className="relative pl-8"> {/* Aumentado el padding izquierdo para el icono */}
      {/* Círculo decorativo para la línea de tiempo */}
      <div className={`absolute -left-[calc(0.5rem+2px)] top-1.5 w-4 h-4 rounded-full ${dotColorClass} border-2`}></div>
      
      {/* Título del hito con icono */}
      <div className="flex items-center gap-2 mb-0.5">
        {IconComponent && <IconComponent className={`w-5 h-5 ${iconColor}`} />}
        <p className={`font-semibold text-md ${iconColor}`}>
          {item.title}
        </p>
      </div>

      {/* Periodo e institución */}
      <p className={`text-xs uppercase tracking-wider font-medium ml-7 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}> {/* Margen para alinear con título si hay icono */}
        {item.period} {item.institution && `| ${item.institution}`}
      </p>
      {/* Descripción del hito */}
      {item.description && (
        <p className={`mt-1 text-sm ml-7 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}> {/* Margen para alinear */}
          {item.description}
        </p>
      )}
    </div>
  );
};


function AboutMe({ isDarkMode, language }) {
  const currentContent = aboutMeContent[language];
  const techHighlightClass = isDarkMode ? 'text-sky-400' : 'text-sky-600';
  const titleColor = isDarkMode ? 'text-sky-400' : 'text-sky-600';

  const aboutMeBgClass = isDarkMode
    ? 'bg-slate-900'
    : 'bg-slate-100';

  const paragraphTextColor = isDarkMode ? 'text-slate-300' : 'text-slate-700';

  return (
    <section
      id="about"
      className={`py-20 px-6 md:px-16 transition-colors duration-500 ease-in-out ${aboutMeBgClass} ${paragraphTextColor}`}
    >
      <div className="max-w-4xl mx-auto text-center">
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
              <p className="text-lg leading-relaxed">
                {currentContent.greeting}
                <span className={`font-semibold ${techHighlightClass}`}>{currentContent.program}</span>
                {currentContent.passion}
              </p>

              <p className="text-lg leading-relaxed">
                {currentContent.experienceIntro}
                <span className={`font-medium ${techHighlightClass}`}>{currentContent.coreTech}</span>
                {currentContent.modernTechIntro}
                <span className={`font-medium ${techHighlightClass}`}>{currentContent.modernTech}</span>
                {currentContent.dbIntro}
                <span className={`font-medium ${techHighlightClass}`}>{currentContent.dbTech}</span>.
              </p>

              <p className="text-lg leading-relaxed">
                {currentContent.personality}
              </p>

              <p className="text-lg leading-relaxed">
                {currentContent.goal}
                <a href="#projects" className={`underline font-medium ${isDarkMode ? 'text-sky-400 hover:text-sky-300' : 'text-sky-600 hover:text-sky-500'}`}>
                  {currentContent.projectsLinkText}
                </a>
                {currentContent.goalContinuation}
              </p>

              <div className="pt-10">
                <h3 className={`text-3xl font-bold text-center mb-8 ${titleColor}`}>
                  {currentContent.journeyTitle}
                </h3>
                <div className={`relative border-l-4 pl-6 space-y-10 ${isDarkMode ? 'border-sky-700' : 'border-sky-300'}`}> {/* Color de línea de tiempo ajustado */}
                  {currentContent.journey.map((item) => (
                    <JourneyItem key={item.id} item={item} isDarkMode={isDarkMode} />
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
