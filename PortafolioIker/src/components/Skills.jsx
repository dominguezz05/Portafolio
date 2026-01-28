import { useState, useMemo } from "react"; // <--- useMemo y useState vienen de AQUÍ
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import AnimatedText from "./AnimatedText";
import { useApp } from "../context/AppContext";
import { useLoadingState } from "../hooks/useLoadingState";
import { Skeleton } from "./Skeleton";
import { useSkillSearch } from "../hooks/useSearch";
import { SearchBar, SearchResults } from "./Search";
import { SkillCard } from "./SkillCard";

import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiBootstrap,
  SiGreensock,
  SiPhp,
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiPython,
  SiGit,
  SiNodedotjs,
  SiXampp,
  SiGithub,
  SiVercel,
  SiPostman,
  SiDocker,
  SiAngular,
  SiAstro,
  SiJquery,
  SiWordpress,
  SiElementor,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiSass,
  SiFigma,
  SiJest,
  SiKotlin,
  SiAndroidstudio,
  SiSqlite,
  SiGradle,
  SiJunit5,
} from "react-icons/si";
import { FaCode, FaServer, FaJava } from "react-icons/fa";

// ====== DATA ======

// Frontend
const frontend = [
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "React", icon: SiReact, color: "text-sky-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "text-sky-300" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
  { name: "GSAP", icon: SiGreensock, color: "text-green-500" },
  { name: "SASS", icon: SiSass, color: "text-pink-500" },
];

// Backend
const backend = [
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "text-neutral-500 dark:text-neutral-400",
  },
  { name: "PHP", icon: SiPhp, color: "text-indigo-500" },
];
// Mobile Development
const mobile = [
  { name: "Java", icon: FaJava, color: "text-orange-600" },
  { name: "Kotlin", icon: SiKotlin, color: "text-purple-600" },
  { name: "Android Studio", icon: SiAndroidstudio, color: "text-green-600" },
  // Si usas Compose, puedes indicarlo en el nombre. No hay icono propio en react-icons:
  {
    name: "Jetpack Compose / XML",
    icon: SiAndroidstudio,
    color: "text-emerald-600",
  },
  { name: "SQLite / Room", icon: SiSqlite, color: "text-blue-600" },
  { name: "Retrofit (REST/JSON)", icon: FaServer, color: "text-green-500" },
  { name: "Gradle", icon: SiGradle, color: "text-lime-600" },
  { name: "JUnit", icon: SiJunit5, color: "text-red-600" },
];

// Databases
const databases = [
  { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  {
    name: "Supabase (PostgreSQL)",
    icon: SiSupabase,
    color: "text-emerald-500",
  },
];

// Tools & Methodologies
const tools = [
  // Version control & deploy
  { name: "Git", icon: SiGit, color: "text-red-500" },
  { name: "GitHub", icon: SiGithub, color: "text-gray-500" },
  { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white" },
  { name: "XAMPP", icon: SiXampp, color: "text-orange-500" },

  // APIs & collaboration
  { name: "REST APIs", icon: FaServer, color: "text-green-500" },
  { name: "Postman", icon: SiPostman, color: "text-orange-600" },
  { name: "Ajax", icon: FaCode, color: "text-purple-400" },
  { name: "jQuery", icon: SiJquery, color: "text-blue-500" },

  // CMS & design & testing
  { name: "WordPress", icon: SiWordpress, color: "text-blue-600" },
  { name: "Elementor", icon: SiElementor, color: "text-pink-500" },
  { name: "Figma", icon: SiFigma, color: "text-purple-500" },
  { name: "Jest", icon: SiJest, color: "text-red-600" },
];

// Currently learning
const learning = [
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "Angular", icon: SiAngular, color: "text-red-600" },
  { name: "Astro", icon: SiAstro, color: "text-yellow-500" },
  { name: "Python", icon: SiPython, color: "text-yellow-400" },
];

// ====== i18n TEXTS ======
const skillsContent = {
  es: {
    mainTitle: "Tecnologías y Habilidades",
    categories: {
      frontend: { title: "🎨 Desarrollo Frontend" },
      backend: { title: "🛠️ Desarrollo Backend" },
      mobile: { title: "📱 Desarrollo Mobile (Android)" },
      db: { title: "🗄️ Bases de Datos" },
      tools: { title: "⚙️ Herramientas y Metodologías" },
      learning: { title: "🚀 Aprendiendo ahora" },
    },
  },
  en: {
    mainTitle: "Technologies and Skills",
    categories: {
      frontend: { title: "🎨 Frontend Development" },
      backend: { title: "🛠️ Backend Development" },
      mobile: { title: "📱 Mobile Development (Android)" },
      db: { title: "🗄️ Databases" },
      tools: { title: "⚙️ Tools & Methodologies" },
      learning: { title: "🚀 Currently Learning" },
    },
  },
};

// ====== CATEGORY STRUCTURE ======
const skillCategories = [
  { id: "frontend", data: frontend, titleKey: "frontend" },
  { id: "backend", data: backend, titleKey: "backend" },
  { id: "mobile", data: mobile, titleKey: "mobile" },
  { id: "db", data: databases, titleKey: "db" },
  { id: "tools", data: tools, titleKey: "tools" },
  { id: "learning", data: learning, titleKey: "learning" },
];

// ====== FRAMER VARIANTS ======
const sectionContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

// ====== SKILL PILL ======
const SkillPill = ({ name, icon: Icon, color, isDarkMode }) => {
  let pillBgColor, pillTextColor, pillBorderColor, hoverBgColor;
  if (isDarkMode) {
    pillBgColor = "bg-slate-800";
    pillTextColor = "text-slate-100";
    pillBorderColor = "border-slate-700";
    hoverBgColor = "hover:bg-slate-700";
  } else {
    pillBgColor = "bg-white";
    pillTextColor = "text-slate-800";
    pillBorderColor = "border-slate-300";
    hoverBgColor = "hover:bg-slate-200";
  }
  return (
    <motion.div
      className={`flex items-center gap-2.5 rounded-full px-4 py-2 shadow-lg border transition-all duration-200 ease-in-out cursor-default ${pillBgColor} ${pillTextColor} ${pillBorderColor} ${hoverBgColor}`}
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: "spring", stiffness: 100 },
        },
      }}
      whileHover={{
        y: -4,
        scale: 1.07,
        boxShadow: "0 10px 20px -5px rgba(0,0,0,0.15)",
      }}
    >
      <Icon className={`${color} w-5 h-5 flex-shrink-0`} />
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  );
};

// ====== COMPONENT ======
function Skills() {
  const { theme, language } = useApp();
  const isDarkMode = theme === "dark";
  const { isLoading } = useLoadingState({ minLoadingTime: 700 });
  const [showFilters, setShowFilters] = useState(false);
  const currentContent = skillsContent[language];
  const titleColor = isDarkMode ? "text-blue-400" : "text-blue-600";
  const subtitleColor = isDarkMode ? "text-blue-400" : "text-blue-600";
  const sectionBgClass = isDarkMode ? "bg-slate-900" : "bg-slate-100";
  const sectionTextColorClass = isDarkMode
    ? "text-slate-300"
    : "text-slate-700";

  // Crear array de skills para la búsqueda
  const allSkills = useMemo(() => {
    // Eliminamos ": any[]"
    const skills = [];

    skillCategories.forEach((category) => {
      category.data.forEach((skill) => {
        skills.push({
          id: `${category.id}-${skill.name}`,
          name: skill.name,
          category: category.titleKey,
          level: skill.level || "intermediate",
          icon: skill.icon,
          categoryTitle:
            currentContent.categories[category.titleKey]?.title ||
            category.titleKey,
        });
      });
    });
    return skills;
  }, [currentContent, skillCategories]); // Nota: He añadido skillCategories a las dependencias por seguridad

  // Hook de búsqueda para skills
  const {
    searchTerm,
    setSearchTerm,
    searchResults,
    selectedFilters,
    toggleFilter,
    clearSearch,
    availableFilters,
    hasActiveSearch,
  } = useSkillSearch(allSkills);

  return (
    <section
      id="skills"
      className={`py-16 px-8 transition-colors duration-500 ease-in-out ${sectionBgClass} ${sectionTextColorClass}`}
    >
      <Reveal>
        <div className="text-center mx-auto max-w-4xl">
          <h2 className={`text-4xl font-bold mb-10 ${titleColor}`}>
            <AnimatedText keyProp={`mainTitle-${language}`}>
              {currentContent.mainTitle}
            </AnimatedText>
          </h2>

          {/* Barra de búsqueda y filtros */}
          <div className="mb-8">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              placeholder={
                language === "es"
                  ? "Buscar tecnologías por nombre o categoría..."
                  : "Search technologies by name or category..."
              }
              filters={availableFilters}
              selectedFilters={selectedFilters}
              onFilterToggle={toggleFilter}
              showFilters={showFilters}
              onToggleFilters={() => setShowFilters(!showFilters)}
            />
          </div>

          <div className="space-y-12">
            {isLoading ? (
              <div className="space-y-8">
                {skillCategories.map((category, index) => (
                  <div key={index} className="space-y-4">
                    <Skeleton variant="text" width="200px" height="32px" />
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                      {Array.from({ length: category.data.length }).map(
                        (_, i) => (
                          <Skeleton
                            key={i}
                            variant="rectangular"
                            width="100%"
                            height="60px"
                            className="rounded-lg"
                          />
                        ),
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : hasActiveSearch ? (
              <div>
                <SearchResults
                  results={searchResults}
                  searchTerm={searchTerm}
                  selectedFilters={selectedFilters}
                  renderItem={(skill, index) => (
                    <SkillCard key={skill.id} skill={skill} index={index} />
                  )}
                  emptyMessage={
                    language === "es"
                      ? "Intenta con otros términos de búsqueda o ajusta los filtros"
                      : "Try different search terms or adjust the filters"
                  }
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
                />
              </div>
            ) : (
              skillCategories.map((category) => {
                const categoryInfo =
                  currentContent.categories[category.titleKey];
                return (
                  <section
                    key={category.id}
                    aria-labelledby={`${category.id}-title`}
                  >
                    <h3
                      id={`${category.id}-title`}
                      className={`text-2xl font-semibold mb-4 ${subtitleColor}`}
                    >
                      <AnimatedText keyProp={`${category.id}-${language}`}>
                        {categoryInfo.title}
                      </AnimatedText>
                    </h3>
                    <motion.div
                      className="flex justify-center flex-wrap gap-3 mb-8"
                      variants={sectionContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      {category.data.map((skill) => (
                        <SkillPill
                          key={skill.name}
                          name={skill.name}
                          icon={skill.icon}
                          color={skill.color}
                          isDarkMode={isDarkMode}
                        />
                      ))}
                    </motion.div>
                  </section>
                );
              })
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Skills;
