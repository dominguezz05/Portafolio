import Reveal from './Reveal';
import {
  SiHtml5, SiCss3, SiReact, SiBootstrap, SiGreensock, SiPhp, SiJavascript, SiTailwindcss,
  SiMysql, SiMongodb, SiSupabase, SiPython, SiGit, SiNodedotjs, SiXampp,
  SiGithub, SiVercel, SiPostman, SiDocker, SiAngular, SiAstro, SiJquery
} from 'react-icons/si';

import { FaCode, FaServer } from 'react-icons/fa'; 
import AnimatedText from "./AnimatedText";
const techs = [
  { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
  { name: 'CSS3', icon: SiCss3, color: 'text-blue-500' },
  { name: 'React', icon: SiReact, color: 'text-sky-400' },
  { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-500' },
  { name: 'GSAP', icon: SiGreensock, color: 'text-green-500' },
  { name: 'PHP', icon: SiPhp, color: 'text-indigo-500' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
  { name: 'Tailwind', icon: SiTailwindcss, color: 'text-sky-300' },
];

const databases = [
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  { name: 'Supabase', icon: SiSupabase, color: 'text-emerald-500' },
];

const tools = [
  { name: 'Git', icon: SiGit, color: 'text-red-500' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-400' },
  { name: 'XAMPP', icon: SiXampp, color: 'text-orange-500' },
  { name: 'GitHub', icon: SiGithub, color: 'text-gray-500' },
  { name: 'Vercel', icon: SiVercel, color: 'text-black dark:text-white' },
  { name: 'Postman', icon: SiPostman, color: 'text-orange-600' },
  { name: 'JQuery', icon: SiJquery, color: 'text-orange-600' },
  { name: 'Ajax', icon: FaCode, color: 'text-purple-400' },
  { name: 'ApiRest', icon: FaServer, color: 'text-green-500' },
];

const learning = [
  { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
  { name: 'Angular', icon: SiAngular, color: 'text-black dark:text-white' },
  { name: 'Astro', icon: SiAstro, color: 'text-red-500' },
  { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
];

function Skills({ isDarkMode, language }) {
  const renderSkill = ({ name, icon: Icon, color }) => (
    <div key={name} className={`flex items-center gap-2 rounded-full px-4 py-2 shadow-lg
      ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Icon className={`${color} w-5 h-5`} />
      <span className="text-sm">{name}</span>
    </div>
  );

  return (
    <section id="skills" className="py-16 px-8 transition-colors duration-300">
      <Reveal>
        <div className="text-center mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 text-blue-400">
          <AnimatedText keyProp={language}>
            {language === 'es' ? 'Tecnologías y Skills' : 'Technologies and Skills'}
            </AnimatedText>
          </h2>

          {/* Lenguajes y tecnologías web */}
          <h3 className="text-2xl font-semibold mb-4">
          <AnimatedText keyProp={language}>
            {language === 'es' ? '💻 Lenguajes de Programación' : '💻 Programming Languages'}
            </AnimatedText>
          </h3>
          <div className="flex justify-center flex-wrap gap-3 mb-8">
            {techs.map(renderSkill)}
          </div>

          {/* Bases de datos */}
          <h3 className="text-2xl font-semibold mb-4">
          <AnimatedText keyProp={language}>
            {language === 'es' ? '🗄️ Bases de Datos' : '🗄️ Databases'}
            </AnimatedText>
          </h3>
          <div className="flex justify-center flex-wrap gap-3 mb-8">
            {databases.map(renderSkill)}
          </div>

          {/* Otros lenguajes y herramientas */}
          <h3 className="text-2xl font-semibold mb-4">
          <AnimatedText keyProp={language}>
            {language === 'es' ? '⚙️ Otros Lenguajes y Herramientas' : '⚙️ Other Languages and Tools'}
            </AnimatedText>
          </h3>
          <div className="flex justify-center flex-wrap gap-3 mb-8">
            {tools.map(renderSkill)}
          </div>

          {/* Actualmente aprendiendo */}
          <h3 className="text-2xl font-semibold mb-4">
          <AnimatedText keyProp={language}>
            {language === 'es' ? '🚀 Aprendiendo Ahora' : '🚀 Currently Learning'}
            </AnimatedText>
          </h3>
          <div className="flex justify-center flex-wrap gap-3">
            {learning.map(renderSkill)}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Skills;
