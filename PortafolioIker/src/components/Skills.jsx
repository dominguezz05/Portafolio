import Reveal from './Reveal';
import {
  SiHtml5, SiCss3, SiReact, SiBootstrap, SiGreensock, SiPhp, SiJavascript, SiTailwindcss,
  SiMysql, SiMongodb, SiSupabase, SiPython, SiGit, SiNodedotjs, SiXampp,
  SiGithub, SiVercel, SiPostman, SiDocker, SiNextdotjs, SiPrisma, SiNestjs
} from 'react-icons/si';

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
  { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
  { name: 'Git', icon: SiGit, color: 'text-red-500' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-400' },
  { name: 'XAMPP', icon: SiXampp, color: 'text-orange-500' },
  { name: 'GitHub', icon: SiGithub, color: 'text-gray-500' },
  { name: 'Vercel', icon: SiVercel, color: 'text-black dark:text-white' },
  { name: 'Postman', icon: SiPostman, color: 'text-orange-600' },
];

const learning = [
  { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
  { name: 'Prisma', icon: SiPrisma, color: 'text-indigo-500' },
  { name: 'NestJS', icon: SiNestjs, color: 'text-red-500' },
];

function Skills({ isDarkMode }) {
  const renderSkill = ({ name, icon: Icon, color }) => (
    <div key={name} className={`flex items-center gap-2 rounded-full px-4 py-2 shadow-lg
      ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Icon className={`${color} w-5 h-5`} />
      <span className="text-sm">{name}</span>
    </div>
  );

  return (
    <section id="skills" className={`py-16 px-8 transition-colors duration-300 
      ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Reveal>
        <div className="text-center mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 text-blue-400">Tecnologías y Skills</h2>

          {/* Lenguajes y tecnologías web */}
          <h3 className="text-2xl font-semibold mb-4">💻 Lenguajes de Programación</h3>
          <div className="flex justify-center flex-wrap gap-3 mb-8">
            {techs.map(renderSkill)}
          </div>

          {/* Bases de datos */}
          <h3 className="text-2xl font-semibold mb-4">🗄️ Bases de Datos</h3>
          <div className="flex justify-center flex-wrap gap-3 mb-8">
            {databases.map(renderSkill)}
          </div>

          {/* Otros lenguajes y herramientas */}
          <h3 className="text-2xl font-semibold mb-4">⚙️ Otros Lenguajes y Herramientas</h3>
          <div className="flex justify-center flex-wrap gap-3 mb-8">
            {tools.map(renderSkill)}
          </div>

          {/* Actualmente aprendiendo */}
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">🚀 Aprendiendo Ahora</h3>
          <div className="flex justify-center flex-wrap gap-3">
            {learning.map(renderSkill)}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Skills;
