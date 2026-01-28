import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Reveal from "./Reveal";
import AnimatedText from "./AnimatedText";
import { GraduationCap, Lightbulb, Briefcase } from "lucide-react";
import useIsMobile from "../hooks/useIsMobile";
import { useApp } from '../context/AppContext';

gsap.registerPlugin(ScrollTrigger);

const aboutMeContent = {
  es: {
    title: "Sobre Mí",
    greeting: "¡Hola! Soy un desarrollador Full Stack junior, titulado en ",
    program:
      "Desarrollo de Aplicaciones Web (DAW) y actualmente cursando 2º de Desarrollo de Aplicaciones Multiplataforma (DAM). ",
    passion:
      "Desde que descubrí el mundo de la programación, me ha fascinado la posibilidad de transformar ideas en experiencias digitales reales. ",
    experienceIntro:
      "A lo largo de mi formación y proyectos he adquirido experiencia en diferentes áreas del desarrollo: ",
    coreTech:
      "Frontend: HTML, CSS, JavaScript, TypeScript, React, TailwindCSS, Bootstrap. ",
    modernTechIntro:
      "Backend: Node.js, Express, PHP, Python (en aprendizaje). ",
    modernTech:
      "Bases de datos: MySQL, MongoDB, Supabase (PostgreSQL avanzado). ",
    dbIntro:
      "Herramientas y metodologías: Git, GitHub, Docker, Postman, Agile/Scrum, Vercel, Figma. ",
    dbTech: "",
    personality:
      "Me considero una persona creativa, resolutiva y en constante evolución. Disfruto resolviendo problemas, explorando nuevas tecnologías y colaborando en proyectos que me permitan seguir aprendiendo. ",
    goal: "Busco aplicar mis conocimientos en proyectos reales dentro de un equipo profesional, aportando compromiso, creatividad y capacidad de aprendizaje continuo. ",
    projectsLinkText: "Puedes ver mis proyectos destacados ",
    goalContinuation: "o contactarme directamente. ",
    journeyTitle: "📅 Mi Trayectoria ",
    journey: [
      {
        id: 1,
        type: "education",
        title:
          "Ciclo Formativo de Grado Superior: Desarrollo de Aplicaciones Web (DAW)",
        period: "2023 - 2025",
        institution: "Centro de Formación Profesional Medac, Fuenlabrada",
        description:
          "Titulación oficial finalizada. Formación integral en front-end y back-end, bases de datos relacionales y no relacionales y despliegue de aplicaciones web modernas.",
      },
      {
        id: 2,
        type: "education",
        title:
          "Ciclo Formativo de Grado Superior: Desarrollo de Aplicaciones Multiplataforma (DAM)",
        period: "2025 - 2026",
        institution: "Centro de Formación Profesional Medac, Fuenlabrada",
        description:
          "Actualmente cursando 2º curso. Especialización en aplicaciones multiplataforma, móviles y de escritorio, e integración de servicios.",
      },
      {
        id: 3,
        type: "work",
        title: "Desarrollador Web en Prácticas – Grupo Oro",
        period: "Marzo - Junio 2025",
        institution: "Grupo Oro",
        description:
          "Diseño, desarrollo y mantenimiento de sitios web (WordPress/Elementor). Personalización para marcas como Mentamoda, MarbellaPlan, GuindaSpa y Masaka Africana, aplicando UX, SEO y Scrum. Desarrollo de e-commerce (InfluProductos), integración con PHP/JSON y optimización técnica.",
      },
      {
        id: 7,
        type: "work",
        title: "Desarrollador Full Stack en prácticas (React & Node.js)",
        period: "Dic. 2025 - Actualidad",
        institution: "SEGULA Technologies",
        description:
          "Formo parte del equipo de desarrollo de SEGULA Technologies realizando prácticas como desarrollador full stack.\n\n" +
          "- Desarrollo de interfaces web con React y Tailwind CSS.\n" +
          "- Implementación de APIs y lógica de negocio con Node.js y TypeScript.\n" +
          "- Participación en el desarrollo de varios proyectos internos para clientes.\n" +
          "- Uso de Git y buenas prácticas de control de versiones.\n" +
          "- Trabajo en equipo siguiendo metodologías ágiles (Scrum/Kanban).",
      },
      {
        id: 4,
        type: "project",
        title: "Proyecto de Fin de Grado (Destacado): ThreeLogics",
        period: "2025",
        institution: "Proyecto Académico",
        description:
          "SGA robusto con React, Vite, Node.js (API REST), Supabase (PostgreSQL) y TailwindCSS. Autenticación, CRUD de inventario, gestión de pedidos y analíticas.",
      },
      {
        id: 5,
        type: "project",
        title: "Lanzamiento en Google Play: Monkey’s Paradise",
        period: "2025",
        institution: "Proyecto Personal",
        description:
          "Videojuego 2D de plataformas lanzado en Google Play. Múltiples niveles, jefes, meteoritos y control táctil optimizado. Publicado tras pruebas cerradas y mejoras por feedback.",
      },
      {
        id: 6,
        type: "project",
        title: "DevTool Express",
        period: "2025",
        institution: "Proyecto Personal",
        description:
          "Suite de productividad para devs: generadores README/.gitignore, conversor JSON↔CSV, minificador HTML/CSS/JS, asistente Git, gestor de snippets, configurador visual de Prettier, conversor de unidades CSS y decodificador JWT. UI con vistas previas en tiempo real.",
      },
    ],
  },
  en: {
    title: "About Me",
    greeting: "Hi! I am a junior Full Stack Developer, graduated in ",
    program:
      "Web Application Development (DAW) and currently studying the 2nd year of Multiplatform Application Development (DAM). ",
    passion:
      "Since I discovered the world of programming, I have been fascinated by the possibility of turning ideas into real digital experiences. ",
    experienceIntro:
      "Throughout my education and projects, I have gained experience in different areas of development: ",
    coreTech:
      "Frontend: HTML, CSS, JavaScript, TypeScript, React, TailwindCSS, Bootstrap. ",
    modernTechIntro: "Backend: Node.js, Express, PHP, Python (in progress). ",
    modernTech: "Databases: MySQL, MongoDB, Supabase (advanced PostgreSQL). ",
    dbIntro:
      "Tools & methodologies: Git, GitHub, Docker, Postman, Agile/Scrum, Vercel, Figma. ",
    dbTech: "",
    personality:
      "I consider myself a creative, problem-solving, and constantly evolving person. I enjoy tackling challenges, exploring new technologies, and collaborating on real projects that allow me to keep learning. ",
    goal: "I am looking to apply my knowledge in real projects within a professional team, bringing commitment, creativity, and a strong willingness to keep growing. ",
    projectsLinkText: "You can check out my featured projects ",
    goalContinuation: "or contact me directly. ",
    journeyTitle: "📅 My Journey ",
    journey: [
      {
        id: 1,
        type: "education",
        title: "Higher National Diploma: Web Application Development (DAW)",
        period: "2023 - 2025",
        institution: "Medac Vocational Training Center, Fuenlabrada",
        description:
          "Official degree completed. Comprehensive training in front-end and back-end development, relational and non-relational databases, and deployment of modern web applications.",
      },
      {
        id: 2,
        type: "education",
        title:
          "Higher National Diploma: Multiplatform Application Development (DAM)",
        period: "2025 - 2026",
        institution: "Medac Vocational Training Center, Fuenlabrada",
        description:
          "Currently studying the 2nd year. Specialization in multiplatform, mobile, and desktop applications, as well as integration of advanced services and environments.",
      },
      {
        id: 3,
        type: "work",
        title: "Web Developer Intern – Grupo Oro",
        period: "March - June 2025",
        institution: "Grupo Oro",
        description:
          "Design, development, and maintenance of professional websites using WordPress and Elementor. Contributed to projects for brands such as Mentamoda, MarbellaPlan, GuindaSpa, and Masaka Africana, applying UX principles, SEO, and Agile/Scrum methodologies.",
      },
      {
        id: 7,
        type: "work",
        title: "Full Stack Developer Intern (React & Node.js)",
        period: "Dec 2025 - Present",
        institution: "SEGULA Technologies",
        description:
          "I am part of SEGULA Technologies' development team, working as a full stack developer intern.\n\n" +
          "- Building web interfaces with React and Tailwind CSS.\n" +
          "- Implementing APIs and business logic with Node.js and TypeScript.\n" +
          "- Contributing to multiple internal client-facing projects.\n" +
          "- Using Git and following best practices for version control.\n" +
          "- Collaborating in an agile environment (Scrum/Kanban).",
      },

      {
        id: 4,
        type: "project",
        title: "Final Degree Project (Highlighted): ThreeLogics",
        period: "2025",
        institution: "Academic Project",
        description:
          "Robust WMS built with React, Vite, Node.js (REST API), Supabase (PostgreSQL), and TailwindCSS.",
      },
      {
        id: 5,
        type: "project",
        title: "Google Play Launch: Monkey’s Paradise",
        period: "2025",
        institution: "Personal Project",
        description:
          "2D arcade platformer video game launched on Google Play. Features multiple levels, bosses, meteor mechanics, and optimized touch controls.",
      },
      {
        id: 6,
        type: "project",
        title: "DevTool Express",
        period: "2025",
        institution: "Personal Project",
        description:
          "All-in-one productivity tool for developers: generators, converters, minifiers, Git assistant, snippets, Prettier UI, unit converter, JWT decoder.",
      },
    ],
  },
};

// --- JourneyItem igual que el tuyo ---
const JourneyItem = ({ item, isDarkMode }) => {
  let iconColor = "";
  let dotColorClass = "";
  let IconComponent;

  switch (item.type) {
    case "education":
      IconComponent = GraduationCap;
      iconColor = isDarkMode ? "text-blue-300" : "text-blue-700";
      dotColorClass = isDarkMode
        ? "bg-blue-400 border-gray-900"
        : "bg-blue-600 border-gray-100";
      break;
    case "project":
      IconComponent = Lightbulb;
      iconColor = isDarkMode ? "text-green-300" : "text-green-700";
      dotColorClass = isDarkMode
        ? "bg-green-400 border-gray-900"
        : "bg-green-600 border-gray-100";
      break;
    case "work":
      IconComponent = Briefcase;
      iconColor = isDarkMode ? "text-purple-300" : "text-purple-700";
      dotColorClass = isDarkMode
        ? "bg-purple-400 border-gray-900"
        : "bg-purple-600 border-gray-100";
      break;
    default:
      IconComponent = null;
      iconColor = isDarkMode ? "text-gray-300" : "text-gray-700";
      dotColorClass = isDarkMode
        ? "bg-gray-400 border-gray-900"
        : "bg-gray-600 border-gray-100";
  }

  return (
    <div className="relative pl-8 about-item">
      <div
        className={`absolute -left-[calc(0.5rem+2px)] top-1.5 w-4 h-4 rounded-full ${dotColorClass} border-2`}
      />
      <div className="flex items-center gap-2 mb-0.5">
        {IconComponent && <IconComponent className={`w-5 h-5 ${iconColor}`} />}
        <p className={`font-semibold text-md ${iconColor}`}>{item.title}</p>
      </div>
      <p
        className={`text-xs uppercase tracking-wider font-medium ml-7 ${
          isDarkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {item.period} {item.institution && `| ${item.institution}`}
      </p>
      {item.description && (
        <p
          className={`mt-1 text-sm ml-7 ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {item.description}
        </p>
      )}
    </div>
  );
};

function AboutMe() {
  const { theme, language } = useApp();
  const isDarkMode = theme === 'dark';
  const isMobile = useIsMobile();
  const currentContent = aboutMeContent[language];

  const scopeRef = useRef(null);
  const contentRef = useRef(null);

  const techHighlightClass = isDarkMode ? "text-sky-400" : "text-sky-600";
  const titleColor = isDarkMode ? "text-sky-400" : "text-sky-600";
  const aboutMeBgClass = isDarkMode ? "bg-slate-900" : "bg-slate-100";
  const paragraphTextColor = isDarkMode ? "text-slate-300" : "text-slate-700";

  useLayoutEffect(() => {
    if (isMobile) return;
    if (!scopeRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        scopeRef.current,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: scopeRef.current,
            start: "top 80%",
          },
        }
      );

      const tl = gsap.timeline();
      tl.fromTo(
        ".about-anim",
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
          stagger: 0.08,
          clearProps: "transform",
        }
      );

      gsap.utils.toArray(".about-item").forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, scopeRef);

    return () => ctx.revert();
  }, [language, isMobile]);

  return (
    <section
      ref={scopeRef}
      id="about"
      className={`py-20 px-6 md:px-16 transition-colors duration-500 ease-in-out ${aboutMeBgClass} ${paragraphTextColor}`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-4xl font-extrabold mb-12 ${titleColor}`}>
          {currentContent.title}
        </h2>

        {/* Si quieres, puedes eliminar Reveal y dejar solo GSAP */}
        <Reveal animationEnabled={!isMobile}>
          <div
            ref={contentRef}
            key={language}
            className="space-y-6 text-left md:text-justify"
          >
            <p className="text-lg leading-relaxed about-anim">
              {currentContent.greeting}
              <span className={`font-semibold ${techHighlightClass}`}>
                {currentContent.program}
              </span>
              {currentContent.passion}
            </p>

            <p className="text-lg leading-relaxed about-anim">
              {currentContent.experienceIntro}
              <span className={`font-medium ${techHighlightClass}`}>
                {currentContent.coreTech}
              </span>
              {currentContent.modernTechIntro}
              <span className={`font-medium ${techHighlightClass}`}>
                {currentContent.modernTech}
              </span>
              {currentContent.dbIntro}
              <span className={`font-medium ${techHighlightClass}`}>
                {currentContent.dbTech}
              </span>
              .
            </p>

            <p className="text-lg leading-relaxed about-anim">
              {currentContent.personality}
            </p>

            <p className="text-lg leading-relaxed about-anim">
              {currentContent.goal}
              <a
                href="#projects"
                className={`underline font-medium ${
                  isDarkMode
                    ? "text-sky-400 hover:text-sky-300"
                    : "text-sky-600 hover:text-sky-500"
                }`}
              >
                {currentContent.projectsLinkText}
              </a>
              {currentContent.goalContinuation}
            </p>

            <div className="pt-10 about-anim">
              <h3
                className={`text-3xl font-bold text-center mb-8 ${titleColor}`}
              >
                {currentContent.journeyTitle}
              </h3>
              <div
                className={`relative border-l-4 pl-6 space-y-10 ${
                  isDarkMode ? "border-sky-700" : "border-sky-300"
                }`}
              >
                {currentContent.journey.map((item) => (
                  <JourneyItem
                    key={item.id}
                    item={item}
                    isDarkMode={isDarkMode}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutMe;
