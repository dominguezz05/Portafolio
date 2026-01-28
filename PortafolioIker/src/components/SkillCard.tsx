import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext'
import AnimatedText from './AnimatedText'

interface SkillCardProps {
  skill: any
  index?: number
  className?: string
}

export function SkillCard({ skill, index = 0, className = '' }: SkillCardProps) {
  const { theme, language } = useApp()
  const isDarkMode = theme === 'dark'

  const cardClasses = `group relative flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${
    isDarkMode
      ? 'bg-slate-800 border-slate-600 hover:border-sky-500 hover:bg-slate-700'
      : 'bg-white border-slate-200 hover:border-sky-400 hover:bg-slate-50'
  } ${className}`

  const iconClasses = `text-4xl mb-3 transition-all duration-300 group-hover:scale-110 ${
    isDarkMode ? 'text-slate-300 group-hover:text-sky-400' : 'text-slate-600 group-hover:text-sky-500'
  }`

  const nameClasses = `text-sm font-semibold text-center transition-colors duration-300 ${
    isDarkMode 
      ? 'text-slate-200 group-hover:text-white' 
      : 'text-slate-700 group-hover:text-slate-900'
  }`

  const categoryClasses = `text-xs text-center mt-1 opacity-70 transition-opacity duration-300 group-hover:opacity-100 ${
    isDarkMode ? 'text-slate-400' : 'text-slate-500'
  }`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className={cardClasses}
      title={`${skill.name} - ${skill.categoryTitle}`}
    >
      {/* Icono de la tecnología */}
      <div className={iconClasses}>
        {skill.icon}
      </div>

      {/* Nombre de la tecnología */}
      <div className={nameClasses}>
        <AnimatedText keyProp={`skill-${skill.id}-${language}`}>
          {skill.name}
        </AnimatedText>
      </div>

      {/* Categoría */}
      <div className={categoryClasses}>
        {skill.categoryTitle}
      </div>

      {/* Efecto de brillo en hover */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-sky-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
        isDarkMode ? '' : 'mix-blend-multiply'
  }`} />
    </motion.div>
  )
}

interface SkillCategoryProps {
  title: string
  skills: any[]
  className?: string
}

export function SkillCategory({ title, skills, className = '' }: SkillCategoryProps) {
  const { theme, language } = useApp()
  const isDarkMode = theme === 'dark'

  const titleClasses = `text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${
    isDarkMode 
      ? 'from-blue-400 to-purple-400' 
      : 'from-blue-600 to-purple-600'
  }`

  const gridClasses = `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 ${className}`

  return (
    <div className="space-y-6">
      <h3 className={titleClasses}>
        <AnimatedText keyProp={`category-${title}-${language}`}>
          {title}
        </AnimatedText>
      </h3>
      
      <div className={gridClasses}>
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.id}
            skill={skill}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}