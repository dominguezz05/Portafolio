import { motion } from 'framer-motion'
import { useState } from 'react'
import { Github, ExternalLink, PlayCircle } from 'lucide-react'
import { useApp } from '../context/AppContext'
import AnimatedText from './AnimatedText'

interface ProjectCardProps {
  project: any
  index?: number
  onOpenModal?: (project: any) => void
  className?: string
}

export function ProjectCard({ project, index = 0, onOpenModal, className = '' }: ProjectCardProps) {
  const { theme, language } = useApp()
  const isDarkMode = theme === 'dark'
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  const handleProjectClick = () => {
    if (onOpenModal) {
      onOpenModal(project)
    }
  }

  const linkClasses = `inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
    isDarkMode
      ? 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'
      : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300'
  }`

  const techBadgeClasses = `inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
    isDarkMode
      ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
  }`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row overflow-hidden rounded-lg shadow-xl hover:scale-[1.02] transition-transform duration-300 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-800 to-gray-900 text-slate-100"
          : "bg-gradient-to-br from-white to-gray-100 text-slate-800"
      } ${className}`}
    >
      {/* Imagen del proyecto */}
      <div className="relative md:w-1/3 h-48 md:h-auto">
        {!imageError && project.mainImage ? (
          <img
            src={project.mainImage}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={handleImageError}
            loading="lazy"
          />
        ) : (
          <div className={`w-full h-full flex items-center justify-center ${
            isDarkMode ? 'bg-slate-800' : 'bg-slate-200'
          }`}>
            <span className="text-4xl">🚀</span>
          </div>
        )}
        
        {/* Overlay con información */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="text-white space-y-2">
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p className="text-sm line-clamp-2">
              {language === 'es' ? project.description_es : project.description_en}
            </p>
          </div>
        </div>
      </div>

      {/* Contenido del proyecto */}
      <div className="flex-1 p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed opacity-90 line-clamp-3">
            {language === 'es' ? project.description_es : project.description_en}
          </p>
        </div>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 6).map((tech, index) => (
            <span key={index} className={techBadgeClasses}>
              {tech}
            </span>
          ))}
          {project.technologies.length > 6 && (
            <span className={techBadgeClasses}>
              +{project.technologies.length - 6}
            </span>
          )}
        </div>

        {/* Enlaces */}
        <div className="flex flex-wrap gap-3 pt-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
              aria-label={`${language === 'es' ? 'Ver código fuente de' : 'View source code of'} ${project.title}`}
            >
              <Github className="w-4 h-4" />
              {language === 'es' ? 'Código' : 'Code'}
            </a>
          )}
          
          {project.preview && (
            <a
              href={project.preview}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
              aria-label={`${language === 'es' ? 'Ver demo de' : 'View demo of'} ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
              {language === 'es' ? 'Demo' : 'Live'}
            </a>
          )}

          {project.video && (
            <button
              onClick={handleProjectClick}
              className={linkClasses}
              aria-label={`${language === 'es' ? 'Ver video de' : 'Watch video of'} ${project.title}`}
            >
              <PlayCircle className="w-4 h-4" />
              {language === 'es' ? 'Video' : 'Video'}
            </button>
          )}

          {!project.link && !project.preview && !project.video && (
            <button
              onClick={handleProjectClick}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                isDarkMode
                  ? "bg-purple-600 hover:bg-purple-500 text-white"
                  : "bg-purple-500 hover:bg-purple-600 text-white"
              }`}
              aria-label={`${language === 'es' ? 'Más información sobre' : 'More info about'} ${project.title}`}
            >
              {language === 'es' ? 'Leer Más...' : 'Read More...'}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}