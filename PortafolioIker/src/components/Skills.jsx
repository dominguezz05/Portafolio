import { motion } from 'framer-motion';
import Reveal from './Reveal';
import AnimatedText from "./AnimatedText";

import {
  SiHtml5, SiCss3, SiReact, SiBootstrap, SiGreensock, SiPhp, SiJavascript, SiTailwindcss,
  SiMysql, SiMongodb, SiSupabase, SiPython, SiGit, SiNodedotjs, SiXampp,
  SiGithub, SiVercel, SiPostman, SiDocker, SiAngular, SiAstro, SiJquery, SiWordpress, SiElementor,
  SiTypescript, SiNextdotjs, SiExpress, SiSass, SiFigma, SiJest
} from 'react-icons/si';
import { FaCode, FaServer } from 'react-icons/fa';

// DATOS DE HABILIDADES (SIN CAMBIOS EN ESTA PARTE)
const techs = [
  { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
  { name: 'CSS3', icon: SiCss3, color: 'text-blue-500' },
  { name: 'React', icon: SiReact, color: 'text-sky-400' },
  { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-500' },
  { name: 'GSAP', icon: SiGreensock, color: 'text-green-500' },
  { name: 'PHP', icon: SiPhp, color: 'text-indigo-500' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
  { name: 'Tailwind', icon: SiTailwindcss, color: 'text-sky-300' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
  { name: 'SASS', icon: SiSass, color: 'text-pink-500' },
];
const databases = [
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  { name: 'Supabase', icon: SiSupabase, color: 'text-emerald-500' },
];
const tools = [
  { name: 'Git', icon: SiGit, color: 'text-red-500' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-400' },
  { name: 'Express.js', icon: SiExpress, color: 'text-neutral-500 dark:text-neutral-400' },
  { name: 'XAMPP', icon: SiXampp, color: 'text-orange-500' },
  { name: 'GitHub', icon: SiGithub, color: 'text-gray-500' },
  { name: 'Vercel', icon: SiVercel, color: 'text-black dark:text-white' },
  { name: 'Postman', icon: SiPostman, color: 'text-orange-600' },
  { name: 'JQuery', icon: SiJquery, color: 'text-orange-600' },
  { name: 'Ajax', icon: FaCode, color: 'text-purple-400' },
  { name: 'ApiRest', icon: FaServer, color: 'text-green-500' },
  { name: 'WordPress', icon: SiWordpress, color: 'text-blue-600' },
  { name: 'Elementor', icon: SiElementor, color: 'text-pink-500' },
  { name: 'Figma', icon: SiFigma, color: 'text-purple-500' },
  { name: 'Jest', icon: SiJest, color: 'text-red-600' },
];
const learning = [
  { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
  { name: 'Angular', icon: SiAngular, color: 'text-black dark:text-white' },
  { name: 'Astro', icon: SiAstro, color: 'text-red-500' },
  { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
];

// TEXTOS PARA i18n (SIN CAMBIOS EN ESTA PARTE)
const skillsContent = {
  es: {
    mainTitle: 'Tecnologías y Skills',
    categories: {
      tech: { title: '💻 Lenguajes de Programación' },
      db: { title: '🗄️ Bases de Datos' },
      tools: { title: '⚙️ Otros Lenguajes y Herramientas' },
      learning: { title: '🚀 Aprendiendo Ahora' },
    }
  },
  en: {
    mainTitle: 'Technologies and Skills',
    categories: {
      tech: { title: '💻 Programming Languages' },
      db: { title: '🗄️ Databases' },
      tools: { title: '⚙️ Other Languages and Tools' },
      learning: { title: '🚀 Currently Learning' },
    }
  }
};

// ESTRUCTURA DE CATEGORÍAS (SIN CAMBIOS EN ESTA PARTE)
const skillCategories = [
  { id: 'tech', data: techs, titleKey: 'tech' },
  { id: 'db', data: databases, titleKey: 'db' },
  { id: 'tools', data: tools, titleKey: 'tools' },
  { id: 'learning', data: learning, titleKey: 'learning' },
];

// VARIANTS DE FRAMER MOTION (SIN CAMBIOS EN ESTA PARTE)
const sectionContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } }
};

// COMPONENTE SkillPill (SIN CAMBIOS EN ESTA PARTE, ya modificado para resaltar)
const SkillPill = ({ name, icon: Icon, color, isDarkMode }) => {
  let pillBgColor, pillTextColor, pillBorderColor, hoverBgColor;
  if (isDarkMode) {
    pillBgColor = 'bg-gray-800';
    pillTextColor = 'text-white';
    pillBorderColor = 'border-gray-700';
    hoverBgColor = 'hover:bg-gray-700';
  } else {
    pillBgColor = 'bg-white';
    pillTextColor = 'text-gray-900';
    pillBorderColor = 'border-gray-300';
    hoverBgColor = 'hover:bg-gray-200';
  }
  return (
    <motion.div
      className={`flex items-center gap-2.5 rounded-full px-4 py-2 shadow-lg border transition-all duration-200 ease-in-out cursor-default ${pillBgColor} ${pillTextColor} ${pillBorderColor} ${hoverBgColor}`}
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100 } }
      }}
      whileHover={{ y: -4, scale: 1.07, boxShadow: "0 10px 20px -5px rgba(0,0,0,0.15)" }}
    >
      <Icon className={`${color} w-5 h-5 flex-shrink-0`} />
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  );
};

function Skills({ isDarkMode, language }) {
  const currentContent = skillsContent[language];
  // Estos colores son para elementos DENTRO de la sección, no para la sección misma
  const titleColor = isDarkMode ? 'text-blue-400' : 'text-blue-600';
  const subtitleColor = isDarkMode ? 'text-blue-400' : 'text-blue-600';

  return (
    <section 
      id="skills" 
      // SE HAN ELIMINADO LAS CLASES DE FONDO, TEXTO BASE Y TRANSICIÓN DE COLORES AQUÍ
      className="py-16 px-8" 
    >
      <Reveal>
        <div className="text-center mx-auto max-w-4xl">
          <h2 className={`text-4xl font-bold mb-10 ${titleColor}`}>
            <AnimatedText keyProp={`mainTitle-${language}`}>
              {currentContent.mainTitle}
            </AnimatedText>
          </h2>

          <div className="space-y-12">
            {skillCategories.map(category => {
              const categoryInfo = currentContent.categories[category.titleKey];
              return (
                <section key={category.id} aria-labelledby={`${category.id}-title`}>
                  <h3 id={`${category.id}-title`} className={`text-2xl font-semibold mb-4 ${subtitleColor}`}>
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
                    {category.data.map(skill => (
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
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Skills;