// src/components/CertificationDetailModal.js
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink as LinkIcon, Award } from 'lucide-react';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 150, damping: 20 },
  },
  exit: {
    opacity: 0,
    y: -50,
    scale: 0.9,
    transition: { duration: 0.2 },
  },
};

const DetailSection = ({ title, content, isDarkMode }) => {
  if (!content) return null;
  return (
    <div className="mb-4">
      <h4
        className={`text-lg font-semibold mb-1.5 ${
          isDarkMode ? 'text-sky-400' : 'text-sky-600'
        }`}
      >
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
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

function CertificationDetailModal({ certification, onClose, isDarkMode, language }) {
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [onClose]);

  if (!certification) return null;

  const getLangContent = (keyBase) => {
    const keyLang = `${keyBase}_${language}`;
    return (
      certification[keyLang] ||
      certification[keyBase + '_en'] ||
      certification[keyBase + '_es'] ||
      null
    );
  };

  const modalTexts = {
    es: {
      close: 'Cerrar detalles de la certificación',
      issuerTitle: '🏢 Organismo emisor',
      dateTitle: '📅 Fecha de expedición',
      descriptionTitle: '📝 Descripción',
      skillsTitle: '🧩 Aptitudes y competencias',
      credentialTitle: '🔗 Credencial',
      credentialButton: 'Ver credencial',
      credentialIdTitle: '🆔 ID de la credencial',
    },
    en: {
      close: 'Close certification details',
      issuerTitle: '🏢 Issuing organization',
      dateTitle: '📅 Issue date',
      descriptionTitle: '📝 Description',
      skillsTitle: '🧩 Skills & competencies',
      credentialTitle: '🔗 Credential',
      credentialButton: 'View credential',
      credentialIdTitle: '🆔 Credential ID',
    },
  };

  const t = modalTexts[language] || modalTexts.es;

  const detailSections = [
    {
      title: t.issuerTitle,
      content: certification.organization,
      titleKey: 'issuerTitle',
    },
    {
      title: t.dateTitle,
      content: certification.issueDate,
      titleKey: 'dateTitle',
    },
    {
      title: t.descriptionTitle,
      content: getLangContent('description'),
      titleKey: 'descriptionTitle',
    },
    {
      title: t.skillsTitle,
      content: renderList(getLangContent('skills')),
      titleKey: 'skillsTitle',
    },
    {
      title: t.credentialIdTitle,
      content: certification.credentialId,
      titleKey: 'credentialIdTitle',
    },
  ];

  return (
    <AnimatePresence>
      {certification && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[100] p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className={`relative rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto ${
              isDarkMode ? 'bg-slate-800 text-slate-200' : 'bg-white text-slate-700'
            }`}
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className={`sticky top-0 p-4 flex justify-between items-center border-b z-10 ${
                isDarkMode
                  ? 'bg-slate-800 border-slate-700'
                  : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <Award
                  className={isDarkMode ? 'text-sky-400' : 'text-sky-600'}
                  size={28}
                />
                <div>
                  <h2
                    className={`text-2xl md:text-3xl font-bold ${
                      isDarkMode ? 'text-sky-400' : 'text-sky-600'
                    }`}
                  >
                    {certification.title}
                  </h2>
                  {certification.subtitle && (
                    <p className="text-xs md:text-sm opacity-80">
                      {certification.subtitle}
                    </p>
                  )}
                </div>
              </div>

              <button
                onClick={onClose}
                className={`p-2 rounded-full transition-colors ${
                  isDarkMode
                    ? 'text-slate-400 hover:bg-slate-700 hover:text-sky-400'
                    : 'text-slate-500 hover:bg-slate-200 hover:text-sky-600'
                }`}
                aria-label={t.close}
              >
                <X size={24} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8 space-y-5 text-sm md:text-base leading-relaxed">
              {certification.highlight && (
                <p className="italic text-md mb-6">
                  {getLangContent('highlight') || certification.highlight}
                </p>
              )}

              {detailSections.map((section) =>
                section.content ? (
                  <DetailSection
                    key={section.titleKey}
                    title={section.title}
                    content={section.content}
                    isDarkMode={isDarkMode}
                  />
                ) : null
              )}

              {certification.credentialUrl && (
                <DetailSection
                  title={t.credentialTitle}
                  isDarkMode={isDarkMode}
                  content={
                    <a
                      href={certification.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                        isDarkMode
                          ? 'border-sky-500 text-sky-300 hover:bg-sky-500/10'
                          : 'border-sky-600 text-sky-700 hover:bg-sky-600/10'
                      }`}
                    >
                      <LinkIcon size={16} />
                      {t.credentialButton}
                    </a>
                  }
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CertificationDetailModal;
