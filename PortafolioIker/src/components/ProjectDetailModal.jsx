// src/components/ProjectDetailModal.js
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink as LinkIcon, Youtube, Image as ImageIcon } from 'lucide-react'; // Usamos LinkIcon para evitar colisión con <a>
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay as SwiperAutoplay } from 'swiper/modules'; // Renombrado Autoplay para evitar colisión

// Estilos de Swiper para el modal (si usas un carrusel interno)
// Puedes omitir estos si no hay carrusel interno o ya los importaste globalmente para el otro carrusel.
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 150, damping: 20 } },
  exit: { opacity: 0, y: -50, scale: 0.9, transition: { duration: 0.2 } },
};

const DetailSection = ({ title, content, isDarkMode }) => {
  if (!content) return null;
  return (
    <div className="mb-4">
      <h4 className={`text-lg font-semibold mb-1.5 ${isDarkMode ? 'text-sky-400' : 'text-sky-600'}`}>
        {title}
      </h4>
      {typeof content === 'string' ? <p>{content}</p> : content}
    </div>
  );
};

const renderList = (items) => {
  if (!items || items.length === 0) return null;
  return (
    <ul className="list-disc list-inside space-y-1 mt-1 pl-1">
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
};


function ProjectDetailModal({ project, onClose, isDarkMode, language }) {
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [onClose]);

  if (!project) return null;

  // Helper para obtener contenido traducido
  const getLangContent = (keyBase) => {
    const keyLang = `${keyBase}_${language}`;
    return project[keyLang] || project[keyBase + '_en'] || project[keyBase + '_es'] || null; // Fallback
  };
  
  const detailSections = [
    { titleKey: 'problemTitle', content: getLangContent('problem') },
    { titleKey: 'myRoleTitle', content: getLangContent('myRole') },
    { titleKey: 'techStackDetailsTitle', content: getLangContent('techStackDetails') },
    { titleKey: 'challengesTitle', content: renderList(getLangContent('challenges')) },
    { titleKey: 'solutionsTitle', content: renderList(getLangContent('solutions')) },
    { titleKey: 'learningsTitle', content: getLangContent('learnings') },
  ];

  const modalTexts = {
    es: {
      close: 'Cerrar detalles del proyecto',
      problemTitle: '🎯 El Problema',
      myRoleTitle: '👤 Mi Rol',
      techStackDetailsTitle: '🛠️ Stack Tecnológico Detallado',
      challengesTitle: '🧗 Desafíos Clave',
      solutionsTitle: '💡 Soluciones Implementadas',
      learningsTitle: '🧠 Principales Aprendizajes',
      additionalGalleryTitle: '🖼️ Galería Adicional',
      videoDemoTitle: '🎬 Vídeo Demo',
    },
    en: {
      close: 'Close project details',
      problemTitle: '🎯 The Problem',
      myRoleTitle: '👤 My Role',
      techStackDetailsTitle: '🛠️ Detailed Tech Stack',
      challengesTitle: '🧗 Key Challenges',
      solutionsTitle: '💡 Implemented Solutions',
      learningsTitle: '🧠 Key Learnings',
      additionalGalleryTitle: '🖼️ Additional Gallery',
      videoDemoTitle: '🎬 Video Demo',
    }
  };
  const currentModalTexts = modalTexts[language];


  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[100] p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className={`relative rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto 
                        ${isDarkMode ? 'bg-slate-800 text-slate-200' : 'bg-white text-slate-700'}`}
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de Cerrar Fijo */}
            <div className={`sticky top-0 p-4 flex justify-between items-center border-b z-10
                           ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
              <h2 className={`text-2xl md:text-3xl font-bold ${isDarkMode ? 'text-sky-400' : 'text-sky-600'}`}>
                {project.title}
              </h2>
              <button
                onClick={onClose}
                className={`p-2 rounded-full transition-colors
                            ${isDarkMode ? 'text-slate-400 hover:bg-slate-700 hover:text-sky-400' : 'text-slate-500 hover:bg-slate-200 hover:text-sky-600'}`}
                aria-label={currentModalTexts.close}
              >
                <X size={28} />
              </button>
            </div>
            
            {/* Contenido Scrolleable */}
            <div className="p-6 md:p-8 space-y-5 text-sm md:text-base leading-relaxed">
              {project.detailedDescription_es && ( // Asumimos que si hay uno, hay el otro para descripción detallada
                 <p className="italic text-md mb-6">{getLangContent('detailedDescription')}</p>
              )}

              {detailSections.map(section => (
                <DetailSection 
                  key={section.titleKey}
                  title={currentModalTexts[section.titleKey]} 
                  content={section.content}
                  isDarkMode={isDarkMode}
                />
              ))}

              {project.extraImages && project.extraImages.length > 0 && (
                <DetailSection title={currentModalTexts.additionalGalleryTitle} isDarkMode={isDarkMode} content={
                  <Swiper
                    modules={[Pagination, Navigation, SwiperAutoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop
                    className="myModalSwiper rounded-lg overflow-hidden mt-2" // Clase para estilos específicos si es necesario
                  >
                    {project.extraImages.map((img, index) => (
                      <SwiperSlide key={index}>
                        <img src={img} alt={`${project.title} - Detalle ${index + 1}`} className="w-full h-auto object-contain rounded-md max-h-96" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                }/>
              )}

              {project.videoUrl && (
                <DetailSection title={currentModalTexts.videoDemoTitle} isDarkMode={isDarkMode} content={
                  <div className="aspect-w-16 aspect-h-9 mt-2 rounded-lg overflow-hidden">
                    <iframe
                      src={project.videoUrl}
                      title={`${project.title} Video Demo`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                }/>
              )}

              {/* Enlaces externos del proyecto si los tiene */}
              <div className="flex flex-wrap gap-3 pt-4 border-t mt-6 ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}">
                  {project.link && (
                     <a href={project.link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-sm transition-colors ${isDarkMode ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-slate-600 hover:bg-slate-700 text-white'}`}>
                        <Github size={18}/> GitHub
                     </a>
                  )}
                  {project.preview && (
                     <a href={project.preview} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-sm transition-colors ${isDarkMode ? 'bg-sky-600 hover:bg-sky-500 text-white' : 'bg-sky-500 hover:bg-sky-600 text-white'}`}>
                        <LinkIcon size={18}/> {language === 'es' ? 'Ver Demo' : 'View Demo'}
                     </a>
                  )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectDetailModal;