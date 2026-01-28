import { motion } from "framer-motion";
import ImagenPerfil from "../assets/IkerPerfil.jpg"; // Asegúrate que esta ruta sea correcta
import AnimatedText from "./AnimatedText";
import { Download } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useApp } from "../context/AppContext";

// Variantes para la animación
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Hero() {
  const { theme, language } = useApp();
  const isDarkMode = theme === "dark";
  const imgRef = useRef(null);
  const tooltipRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!tooltipRef.current || !imgRef.current) return;

    if (hovered) {
      gsap.to(tooltipRef.current, {
        x: 0,
        autoAlpha: 1,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(imgRef.current, {
        scale: 1.2,
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(tooltipRef.current, {
        x: -20,
        autoAlpha: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
      gsap.to(imgRef.current, {
        scale: 1,
        duration: 0.4,
        ease: "power2.inOut",
      });
    }
  }, [hovered]);

  // Clases condicionales para botones y elementos
  const contactButtonClass = isDarkMode
    ? "border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900"
    : "border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white";

  const availableBadgeClass = isDarkMode
    ? "text-green-300 bg-green-700/30 hover:bg-green-600/50 hover:text-green-200 border-green-500"
    : "text-green-700 bg-green-100 hover:bg-green-200 hover:text-green-800 border-green-300";

  const availableBadgeConicGradient = isDarkMode
    ? "before:bg-[conic-gradient(transparent,rgba(134,239,172,0.8),transparent)]"
    : "before:bg-[conic-gradient(transparent,rgba(74,222,128,1),transparent)]";

  const profileImageBorder = isDarkMode ? "border-sky-400" : "border-sky-500";

  const cvButtonColors = isDarkMode
    ? "bg-emerald-600 hover:bg-emerald-500 text-white"
    : "bg-emerald-700 hover:bg-emerald-600 text-white";

  const cvFileName =
    language === "es"
      ? "CV_Iker_Dominguez.pdf"
      : "CV_Iker_Dominguez_english.pdf";
  const cvPath = `/${cvFileName}`;

  const heroBgClass = isDarkMode
    ? "bg-gradient-to-b from-black to-slate-900"
    : "bg-gradient-to-b from-slate-300 to-slate-100";

  // Definir el color de texto base para el h1, que cambiará con isDarkMode
  const heroTitleColor = isDarkMode
    ? "text-slate-100 hover:text-cyan-300"
    : "text-slate-900 hover:text-sky-600";

  return (
    <section
      id="hero"
      className={`min-h-screen flex flex-col justify-center items-center text-center p-6 sm:p-8 relative overflow-hidden ${heroBgClass}`}
      aria-labelledby="hero-title"
      role="banner"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-y-5 md:gap-y-6"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <div
            className="relative flex items-center justify-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <motion.img
              ref={imgRef}
              src={ImagenPerfil}
              alt="Iker Domínguez - Fotografía de perfil profesional"
              className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 shadow-lg object-cover cursor-pointer ${profileImageBorder}`}
              loading="lazy"
              style={{ objectPosition: "center 25%" }}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setHovered(!hovered);
                }
              }}
            />
            <div
              ref={tooltipRef}
              className={`absolute bg-slate-800 text-white px-4 py-3 rounded-lg shadow-lg opacity-0 pointer-events-none z-20 \
                w-auto max-w-[calc(100vw-4rem)] left-1/2 -translate-x-1/2 top-full mt-3 \
                sm:w-64 sm:max-w-none sm:left-auto sm:right-full sm:top-1/2 sm:-translate-x-0 sm:-translate-y-1/2 sm:mt-0 sm:mr-2`}
              role="tooltip"
              aria-hidden="true"
            >
              <p className="text-sm font-medium leading-snug">
                {language === "es"
                  ? "¡Hola! Soy Iker, desarrollador full-stack creativo y técnico. Conoce más sobre mi."
                  : `Hi! I'm Iker, a creative and technical full-stack developer. Learn more about me.`}
              </p>
            </div>
          </div>
          <a
            href="https://www.linkedin.com/in/iker-domínguez-calcerrada-423736298/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              language === "es"
                ? "Perfil de LinkedIn de Iker Domínguez, disponible para trabajar"
                : "Iker Domínguez LinkedIn profile, available for work"
            }
            className={`relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 group ${availableBadgeClass}`}
          >
            <span
              className={`absolute inset-0 rounded-full pointer-events-none opacity-60 group-hover:opacity-100
                               before:absolute before:inset-0 before:rounded-full before:border-2
                               before:border-transparent ${availableBadgeConicGradient} before:animate-spin-slow`}
            ></span>
            <span className="relative z-10 flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-current"></span>
              </span>
              <AnimatedText keyProp={`available-${language}`}>
                {language === "es" ? "Open to work" : "Open to work"}
              </AnimatedText>
            </span>
          </a>
        </motion.div>

        <motion.h1
          id="hero-title"
          variants={itemVariants}
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold cursor-pointer ${heroTitleColor}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              // Opcional: Add some interaction
            }
          }}
        >
          Iker Domínguez
        </motion.h1>

        <motion.div variants={itemVariants}>
          <AnimatedText
            keyProp={`description-${language}`}
            // El color de este texto ya se maneja bien con las clases de slate.
            className={`mt-1 text-md sm:text-lg ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
            as="p"
          >
            {language === "es"
              ? "Junior Full Stack Developer | React · Node.js · TypeScript · MongoDB"
              : "Junior Full Stack Developer | React · Node.js · TypeScript · MongoDB"}
          </AnimatedText>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center flex-wrap justify-center gap-3 sm:gap-4"
        >
          <a
            href="#projects"
            className={`px-6 py-2.5 font-semibold rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg
                           ${isDarkMode ? "bg-sky-500 hover:bg-sky-400 text-white" : "bg-sky-600 hover:bg-sky-500 text-white"}`}
          >
            <AnimatedText keyProp={`view-projects-${language}`}>
              {language === "es" ? "Ver Proyectos" : "View Projects"}
            </AnimatedText>
          </a>

          <a
            href={cvPath}
            download={cvFileName}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              language === "es"
                ? "Descargar mi Currículum Vitae (PDF)"
                : "Download my Curriculum Vitae (PDF)"
            }
            className={`inline-flex items-center gap-2 px-6 py-2.5 font-semibold rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${cvButtonColors}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                window.open(cvPath, "_blank");
              }
            }}
            role="button"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            <AnimatedText keyProp={`download-cv-${language}`}>
              {language === "es" ? "Descargar CV" : "Download CV"}
            </AnimatedText>
          </a>

          <a
            href="mailto:ikerdc2005@gmail.com?subject=Contacto%20desde%20Portfolio&body=Hola%20Iker,"
            aria-label={
              language === "es"
                ? "Enviar correo electrónico a Iker Domínguez"
                : "Send email to Iker Domínguez"
            }
            className={`px-6 py-2.5 font-semibold border-2 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${contactButtonClass}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                window.location.href =
                  "mailto:ikerdc2005@gmail.com?subject=Contacto%20desde%20Portfolio&body=Hola%20Iker,";
              }
            }}
            role="button"
          >
            <AnimatedText keyProp={`contact-me-${language}`}>
              {language === "es" ? "Contáctame" : "Contact Me"}
            </AnimatedText>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
