import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Reveal from "./Reveal";
import AnimatedText from "./AnimatedText";
import { Github, ExternalLink, PlayCircle } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import ProjectDetailModal from "../components/ProjectDetailModal";

gsap.registerPlugin(ScrollTrigger);

// --- IMÁGENES DE PROYECTOS ---

import threeLogicsImage2 from "../assets/threelogics22.png";
import threeLogicsImage3 from "../assets/dasboard.png";

import monkeyParadiseImage1 from "../assets/imaegn.png";

import monkeyParadiseImage2 from "../assets/game.jpg";

import monkeyParadiseImage3 from "../assets/game3.jpg";
import monkeyParadiseImage4 from "../assets/monkey.png";
import devtollImage1 from "../assets/Landing_Devtools.png";
import devtollImage2 from "../assets/Home_Dev.png";
import devtollImage3 from "../assets/herramienta.png";
// --- DATOS DE PROYECTOS CON DETALLES PARA EL MODAL ---
const projects = [
  {
    title: "ThreeLogics",
    description_es:
      "WMS para PYMEs: automatización logística, inventario real, optimización de rutas y analítica avanzada.",
    description_en:
      "WMS for SMEs: logistics automation, real-time inventory, route optimization, and advanced analytics.",
    technologies: [
      "React",
      "Node.js + Express",
      "Supabase",
      "Tailwind CSS",
      "Google Cloud",
      "Vercel",
      "Recharts",
      "Render",
      "API-rest",
      "Framer-motion",
    ],
    link: "https://github.com/threeLogics/threelogics-app",
    preview: "https://threelogicsapp.vercel.app/",
    images: [threeLogicsImage2, threeLogicsImage3],
    detailedDescription_es:
      "ThreeLogics es un Sistema de Gestión de Almacenes (WMS) para pequeñas y medianas empresas. Permite gestionar inventarios, pedidos, ubicaciones y movimientos de productos, todo con control de roles, estadísticas en tiempo real y análisis predictivo de demanda.",
    detailedDescription_en:
      "ThreeLogics is a Warehouse Management System (WMS) for small and medium-sized enterprises. It enables inventory, order, location, and product movement management, with role-based access, real-time stats, and demand prediction analysis.",
    problem_es:
      "Las PYMEs a menudo carecen de soluciones WMS personalizables y económicas que integren analítica avanzada sin necesidad de infraestructura compleja.",
    problem_en:
      "SMEs often lack customizable and affordable WMS solutions that offer advanced analytics without requiring complex infrastructure.",
    myRole_es:
      "Lideré el desarrollo full-stack del proyecto, desde la arquitectura del backend en Supabase y Node.js hasta la implementación del frontend en React, así como dashboards con Recharts, control de versiones y despliegue.",
    myRole_en:
      "I led the full-stack development of the project, from backend architecture with Supabase and Node.js to implementing the frontend in React, dashboards with Recharts, version control, and deployment.",
    techStackDetails_es:
      "Frontend: React (Vite, Hooks, Context API), TailwindCSS, Framer Motion. Backend: Node.js + Express, Supabase (PostgreSQL, Auth, RLS). Infraestructura: Google Cloud, Render, Vercel.",
    techStackDetails_en:
      "Frontend: React (Vite, Hooks, Context API), TailwindCSS, Framer Motion. Backend: Node.js + Express, Supabase (PostgreSQL, Auth, RLS). Infrastructure: Google Cloud, Render, Vercel.",
    challenges_es: [
      "Asegurar la escalabilidad y rendimiento en tiempo real.",
      "Diseñar una interfaz responsiva adaptable a múltiples roles.",
      "Implementar predicción de demanda.",
    ],
    challenges_en: [
      "Ensure real-time performance and scalability.",
      "Design a responsive interface adaptable to multiple roles.",
      "Implement demand prediction.",
    ],
    solutions_es: [
      "Optimización de consultas SQL en Supabase.",
      "Componentes reutilizables con Tailwind y React.",
      "Dashboards dinámicos con Recharts y control de acceso por rol.",
    ],
    solutions_en: [
      "Optimized SQL queries on Supabase.",
      "Reusable components with Tailwind and React.",
      "Dynamic dashboards with Recharts and role-based access control.",
    ],
    learnings_es:
      "Consolidé mis habilidades en arquitectura de software, diseño UI/UX y despliegue de sistemas distribuidos con enfoque en rendimiento y escalabilidad.",
    learnings_en:
      "I consolidated my skills in software architecture, UI/UX design, and deploying distributed systems with a focus on performance and scalability.",
    extraImages: [], // Añade rutas si las tienes
    videoUrl: null,
  },
  {
    title: "Monkey's Paradise",
    description_es:
      "Videojuego arcade 2D: esquiva meteoritos, recoge plátanos y supera niveles con plataformas dinámicas.",
    description_en:
      "2D arcade game: dodge meteors, collect bananas, and beat levels with dynamic platforms.",
    technologies: [
      "HTML5",
      "JavaScript",
      "Canvas API",
      "CSS3",
      "Itch.io",
      "Android Studio",
      "Google Play",
    ],
    link: "https://github.com/dominguezz05/Monkeys-Paradise",
    preview: "https://simiosoft.itch.io/monkeys-paradise-simiosoft",
    images: [
      monkeyParadiseImage1,
      monkeyParadiseImage2,
      monkeyParadiseImage3,
      monkeyParadiseImage4,
    ],
    googlePlayLink:
      "https://play.google.com/store/apps/details?id=com.iker.monkeysparadise",
    detailedDescription_es:
      "Monkey's Paradise es un juego arcade de plataformas 2D donde controlas a un mono que debe recoger plátanos mientras esquiva obstáculos como meteoritos. Incluye múltiples niveles, jefes, escudo con cooldown y plataformas móviles. Disponible en Itch.io y Google Play.",
    detailedDescription_en:
      "Monkey's Paradise is a 2D arcade platformer where you control a monkey collecting bananas while dodging obstacles like meteors. It features multiple levels, boss fights, a shield with cooldown, and moving platforms. Available on Itch.io and Google Play.",
    problem_es:
      "Crear un juego fluido y desafiante en JavaScript puro, compatible tanto con navegadores como con Android, con control táctil responsivo.",
    problem_en:
      "Creating a smooth and challenging game in pure JavaScript, compatible with browsers and Android, with responsive touch controls.",
    myRole_es:
      "Diseñé y desarrollé el juego completo: desde la lógica de colisiones, HUD, IA de enemigos, hasta la exportación a Android y publicación en Google Play.",
    myRole_en:
      "I designed and developed the full game: from collision logic, HUD, enemy AI, to Android export and Google Play publishing.",
    techStackDetails_es:
      "HTML5 + Canvas API para renderizado 2D, lógica en JavaScript modular, assets SVG/PNG, compilación en Android Studio, firma de APK/AAB para Play Store.",
    techStackDetails_en:
      "HTML5 + Canvas API for 2D rendering, modular JavaScript logic, SVG/PNG assets, Android Studio build, APK/AAB signing for Play Store.",
    challenges_es: [
      "Optimizar rendimiento en tablets con baja RAM.",
      "Diseñar niveles atractivos y progresivos.",
      "Integrar controles táctiles personalizables.",
    ],
    challenges_en: [
      "Optimize performance on low-RAM tablets.",
      "Design engaging and progressively harder levels.",
      "Integrate customizable touch controls.",
    ],
    solutions_es: [
      "Reducir resolución interna y limitar FPS.",
      "Balanceo de dificultad y progresión.",
      "Editor de controles táctiles en pantalla.",
    ],
    solutions_en: [
      "Reduce internal resolution and limit FPS.",
      "Balanced difficulty progression.",
      "On-screen touch control editor.",
    ],
    learnings_es:
      "Aprendí sobre desarrollo multiplataforma, publicación en Google Play, testing cerrado, integración de feedback y mejoras iterativas.",
    learnings_en:
      "I learned about cross-platform development, Google Play publishing, closed testing, feedback integration, and iterative improvements.",
    extraImages: [], // Puedes añadir más capturas si lo deseas
    videoUrl: "https://www.youtube.com/embed/e7BODpJaCXA",
  },
  {
    title: "DevToll Express",
    description_es:
      "Suite de utilidades para desarrolladores web: genera archivos, transforma datos, administra fragmentos de código y más desde una interfaz unificada.",
    description_en:
      "Web developer utility suite: generate files, transform data, manage code snippets, and more from a unified interface.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "Framer-Motion",
      "LocalStorage",
    ],
    link: "https://github.com/dominguezz05/devtools-express",
    preview: "https://devtools-express.vercel.app/",
    images: [devtollImage1, devtollImage2, devtollImage3],
    googlePlayLink: null, // No aplica en este caso
    detailedDescription_es:
      "DevToll Express es una plataforma de herramientas web diseñada para desarrolladores. Incluye generadores de README.md y .gitignore, convertidor JSON ↔ CSV, minificador de código, asistente de comandos Git, editor de snippets, creador de configuración Prettier, conversor de unidades CSS y decodificador JWT. Todo accesible desde una interfaz intuitiva y responsiva.",
    detailedDescription_en:
      "DevToll Express is a web-based tool suite built for developers. It features a README.md and .gitignore generator, JSON ↔ CSV converter, code minifier, Git command helper, snippet editor, Prettier config creator, CSS unit converter, and JWT decoder — all within a clean, responsive interface.",
    problem_es:
      "Centralizar herramientas de uso diario en desarrollo web, evitando tener múltiples pestañas o recursos dispersos.",
    problem_en:
      "Centralize everyday web development tools to avoid juggling multiple tabs or scattered resources.",
    myRole_es:
      "Diseñé y desarrollé por completo la aplicación: desde el frontend en React hasta la integración de cada herramienta con persistencia local.",
    myRole_en:
      "I fully designed and developed the application: from the React frontend to the integration of each tool with local persistence.",
    techStackDetails_es:
      "React con Vite para un frontend rápido, Tailwind CSS para el diseño, LocalStorage para guardar configuraciones y Vercel para el despliegue.",
    techStackDetails_en:
      "React with Vite for a fast frontend, Tailwind CSS for styling, LocalStorage for config persistence, and Vercel for deployment.",
    challenges_es: [
      "Diseñar una interfaz que unificara varias herramientas distintas sin perder usabilidad.",
      "Mantener la aplicación ligera y rápida en el navegador.",
      "Implementar almacenamiento local para preservar el estado del usuario.",
    ],
    challenges_en: [
      "Design a UI that unifies multiple tools without sacrificing usability.",
      "Keep the app lightweight and fast in the browser.",
      "Implement local storage to preserve user state.",
    ],
    solutions_es: [
      "Uso de componentes reutilizables y navegación clara.",
      "Optimización del rendimiento con Vite y carga diferida.",
      "Integración de LocalStorage para guardar preferencias y datos.",
    ],
    solutions_en: [
      "Use of reusable components and clear navigation.",
      "Performance optimization via Vite and lazy loading.",
      "LocalStorage integration to save user preferences and data.",
    ],
    learnings_es:
      "Mejoré mis habilidades en React, diseño de interfaces y despliegue web. Aprendí a integrar múltiples funcionalidades dentro de una sola experiencia fluida.",
    learnings_en:
      "I improved my skills in React, UI design, and web deployment. Learned how to integrate multiple features into a single smooth experience.",
    extraImages: [],
    videoUrl: null,
  },
];

function Projects({ isDarkMode, language }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  const openModalWithProject = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Estilos base para 3D y shine
      gsap.set(".project-card", {
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      });

      gsap.set(".project-shine", {
        background:
          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0) 100%)",
        mixBlendMode: "screen",
      });

      const cards = gsap.utils.toArray(".project-card");

      cards.forEach((card) => {
        const media = card.querySelector(".project-media");
        const content = card.querySelector(".project-content");
        const tags = card.querySelectorAll(".project-tag");
        const actions = card.querySelector(".project-actions");
        const shine = card.querySelector(".project-shine");
        const img = card.querySelector(".project-media img");

        // Entrada “wow”: clip + 3D + blur
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            end: "top 40%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          card,
          {
            autoAlpha: 0,
            y: 50,
            rotateX: isMobile ? 0 : 12,
            rotateY: isMobile ? 0 : -10,
            scale: 0.98,
            filter: "blur(10px)",
            clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
          },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            filter: "blur(0px)",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 0.9,
            ease: "power3.out",
            clearProps: "filter",
          }
        )
          // Media “punch” (zoom out suave)
          .fromTo(
            media,
            { scale: 1.08 },
            { scale: 1, duration: 0.8, ease: "power3.out" },
            0.05
          )
          // Contenido entra con stagger
          .fromTo(
            content.querySelectorAll(
              ".project-title, .project-desc, .project-tags"
            ),
            { autoAlpha: 0, y: 16 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.55,
              ease: "power2.out",
              stagger: 0.08,
            },
            0.2
          )
          // Chips (tags) “pop”
          .fromTo(
            tags,
            { autoAlpha: 0, y: 10, scale: 0.92 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.35,
              ease: "back.out(1.7)",
              stagger: 0.03,
            },
            0.35
          )

          .fromTo(
            actions,
            { autoAlpha: 0, y: 14 },
            { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" },
            0.45
          )

          .to(shine, { autoAlpha: 1, duration: 0.01 }, 0.35)
          .fromTo(
            shine,
            { xPercent: -120 },
            { xPercent: 120, duration: 0.75, ease: "power2.inOut" },
            0.35
          )
          .to(shine, { autoAlpha: 0, duration: 0.2 }, 1.05);

        // Parallax suave en la imagen (scrub)
        if (img) {
          gsap.fromTo(
            img,
            { y: 14, scale: 1.03 },
            {
              y: -14,
              scale: 1.03,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, [language, isDarkMode]);
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const titleColor = isDarkMode ? "text-blue-400" : "text-blue-600";

  const sectionBgClass = isDarkMode
    ? "bg-slate-900" // Color de fondo para modo oscuro
    : "bg-slate-100"; // Color de fondo para modo claro

  const sectionTextColorClass = isDarkMode
    ? "text-slate-300"
    : "text-slate-700";

  return (
    <>
      <section
        ref={sectionRef}
        id="projects"
        className={`py-20 px-4 sm:px-8 transition-colors duration-500 ease-in-out ${sectionBgClass} ${sectionTextColorClass}`}
      >
        <Reveal>
          <div className="max-w-7xl mx-auto">
            <h2
              className={`text-4xl md:text-4xl font-bold text-center mb-16 ${titleColor}`}
            >
              <AnimatedText keyProp={`title-${language}`}>
                💼{" "}
                {language === "es"
                  ? "Proyectos Destacados"
                  : "Featured Projects"}
              </AnimatedText>
            </h2>

            <div className="space-y-16 md:space-y-20">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className={`project-card relative flex flex-col md:flex-row overflow-hidden rounded-lg shadow-xl hover:scale-[1.02] transition-transform duration-300
      ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-800 to-gray-900 text-slate-100"
          : "bg-gradient-to-br from-white to-gray-100 text-slate-800"
      }`}
                >
                  {/* Shine sweep overlay */}
                  <div className="project-shine pointer-events-none absolute inset-0 opacity-0" />

                  {project.images && project.images.length > 0 && (
                    <div className="project-media relative w-full md:w-2/5 h-72 md:h-auto group overflow-hidden">
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

                  <div className="project-content flex-1 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h3
                        className={`project-title text-2xl lg:text-3xl font-bold mb-3 ${
                          isDarkMode ? "text-blue-400" : "text-blue-600"
                        }`}
                      >
                        {project.title}
                      </h3>

                      <p className="project-desc mb-5 text-sm leading-relaxed line-clamp-3 md:line-clamp-4">
                        <AnimatedText
                          keyProp={`${project.title}-desc-${language}`}
                        >
                          {language === "es"
                            ? project.description_es
                            : project.description_en}
                        </AnimatedText>
                      </p>

                      <div className="project-tags flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`project-tag text-xs px-3 py-1.5 rounded-full font-medium ${
                              isDarkMode
                                ? "bg-sky-700 text-sky-100"
                                : "bg-sky-100 text-sky-700"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="project-actions flex flex-wrap gap-3 mt-auto items-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub repository for ${project.title}`}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-sm transition-all duration-200 ease-in-out
            ${
              isDarkMode
                ? "bg-gray-700 hover:bg-gray-600 text-white"
                : "bg-slate-700 hover:bg-slate-800 text-white"
            }`}
                      >
                        <Github className="w-4 h-4" /> Code
                      </a>

                      {project.preview && (
                        <a
                          href={project.preview}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo of ${project.title}`}
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-sm transition-all duration-200 ease-in-out
              ${
                isDarkMode
                  ? "bg-blue-600 hover:bg-blue-500 text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <AnimatedText
                            keyProp={`${project.title}-preview-${language}`}
                          >
                            {project.title === "Monkey's Paradise"
                              ? language === "es"
                                ? "Jugar en Itch.io"
                                : "Play on Itch.io"
                              : language === "es"
                              ? "Ver web"
                              : "View web"}
                          </AnimatedText>
                        </a>
                      )}

                      {project.googlePlayLink && (
                        <a
                          href={project.googlePlayLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Google Play link for ${project.title}`}
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-sm transition-all duration-200 ease-in-out
              ${
                isDarkMode
                  ? "bg-green-600 hover:bg-green-500 text-white"
                  : "bg-green-500 hover:bg-green-600 text-white"
              }`}
                        >
                          <PlayCircle className="w-4 h-4" />
                          <AnimatedText
                            keyProp={`${project.title}-gplay-${language}`}
                          >
                            {language === "es"
                              ? "Jugar en Google Play"
                              : "Play on Google Play"}
                          </AnimatedText>
                        </a>
                      )}

                      {(project.detailedDescription_es ||
                        project.detailedDescription_en) && (
                        <button
                          onClick={() => openModalWithProject(project)}
                          aria-label={`${
                            language === "es"
                              ? "Leer más sobre el proyecto"
                              : "Read more about the project"
                          } ${project.title}`}
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-sm transition-all duration-200 ease-in-out
              ${
                isDarkMode
                  ? "bg-purple-600 hover:bg-purple-500 text-white"
                  : "bg-purple-500 hover:bg-purple-600 text-white"
              }`}
                        >
                          {language === "es" ? "Leer Más..." : "Read More..."}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <ProjectDetailModal
        project={selectedProject}
        onClose={closeModal}
        isDarkMode={isDarkMode}
        language={language}
      />
    </>
  );
}

export default Projects;
