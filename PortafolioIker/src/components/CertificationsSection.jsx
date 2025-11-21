// src/components/CertificationsSection.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink as LinkIcon } from 'lucide-react';
import CertificationDetailModal from './CertificationDetailModal';
import AnimatedText from './AnimatedText'; 
import Reveal from './Reveal';
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, when: 'beforeChildren' },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 120, damping: 15 },
  },
};

function CertificationsSection({ certifications, isDarkMode, language }) {
  const [selectedCert, setSelectedCert] = useState(null);

  const texts = {
    es: {
      sectionTitle: '🎓 Certificaciones',
      sectionSubtitle:
        'Formación acreditada en Inteligencia Artificial, Cloud y desarrollo.',
      viewDetails: 'Ver detalles',
      viewCredential: 'Credencial',
    },
    en: {
      sectionTitle: '🎓 Certifications',
      sectionSubtitle: 'Accredited training in AI, Cloud and development.',
      viewDetails: 'View details',
      viewCredential: 'Credential',
    },
  };

  const t = texts[language] || texts.es;

  if (!certifications || certifications.length === 0) return null;

  // helper para elegir texto según idioma
  const getLangText = (item, baseKey) =>
    item[`${baseKey}_${language}`] ||
    item[`${baseKey}_en`] ||
    item[`${baseKey}_es`] ||
    item[baseKey];

  const getLangArray = (item, baseKey) =>
    item[`${baseKey}_${language}`] ||
    item[`${baseKey}_en`] ||
    item[`${baseKey}_es`] ||
    item[baseKey] ||
    [];

  return (
    <>
      <section id="certifications" className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Título */}
          <Reveal>  
          <div className="mb-8 text-center">
            <h2
              className={`text-2xl md:text-3xl font-bold tracking-tight ${
                isDarkMode ? 'text-sky-400' : 'text-sky-600'
              }`}
            >
               <AnimatedText keyProp={`certifications-title-${language}`}>
                {t.sectionTitle}
                 </AnimatedText>
            </h2>
            <p className="mt-2 text-sm md:text-base opacity-80 max-w-2xl mx-auto">
              {t.sectionSubtitle}
            </p>
          </div>

          {/* Grid de tarjetas */}
          <motion.div
            className="grid gap-5 md:gap-6 md:grid-cols-2 xl:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {certifications.map((cert) => {
              const shortDescription = getLangText(cert, 'shortDescription');
              const skills = getLangArray(cert, 'skills');

              return (
                <motion.article
                  key={cert.id}
                  variants={cardVariants}
                  className={`group relative overflow-hidden rounded-xl border shadow-sm transition-all ${
                    isDarkMode
                      ? 'bg-slate-900/60 border-slate-700/70 hover:border-sky-500/70 hover:bg-slate-900'
                      : 'bg-white/80 border-slate-200 hover:border-sky-500/70 hover:bg-sky-50/60'
                  }`}
                >
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="w-full h-full text-left p-4 md:p-5 flex flex-col gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex items-center justify-center rounded-full p-2 ${
                          isDarkMode
                            ? 'bg-sky-500/10 text-sky-400'
                            : 'bg-sky-100 text-sky-600'
                        }`}
                      >
                        {cert.logo ? (
                          <img
                            src={cert.logo}
                            alt={cert.organization}
                            className="w-7 h-7 rounded-full object-cover"
                          />
                        ) : (
                          <Award size={20} />
                        )}
                      </div>
                      <div>
                        <h3 className="text-sm md:text-base font-semibold leading-snug">
                          {cert.title}
                        </h3>
                        <p className="text-xs opacity-75">
                          {cert.organization} • {cert.issueDate}
                        </p>
                      </div>
                    </div>

                    {shortDescription && (
                      <p className="text-xs md:text-sm opacity-80 line-clamp-3">
                        {shortDescription}
                      </p>
                    )}

                    {skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {skills.slice(0, 4).map((skill, idx) => (
                          <span
                            key={idx}
                            className={`px-2 py-0.5 rounded-full text-[11px] border ${
                              isDarkMode
                                ? 'border-slate-600 bg-slate-800/80'
                                : 'border-slate-200 bg-slate-50'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                        {skills.length > 4 && (
                          <span className="text-[11px] opacity-60">
                            +{skills.length - 4}
                          </span>
                        )}
                      </div>
                    )}

                    <div className="mt-3 flex items-center justify-between text-xs">
                      <span
                        className={`inline-flex items-center gap-1 font-medium cursor-pointer ${
                          isDarkMode
                            ? 'text-sky-300 group-hover:text-sky-200'
                            : 'text-sky-700 group-hover:text-sky-800'
                        }`}
                      >
                        {t.viewDetails}
                      </span>

                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className={`inline-flex items-center gap-1 text-[11px] underline-offset-2 hover:underline ${
                            isDarkMode
                              ? 'text-slate-300 hover:text-sky-300'
                              : 'text-slate-600 hover:text-sky-700'
                          }`}
                        >
                          <LinkIcon size={12} />
                          {t.viewCredential}
                        </a>
                      )}
                    </div>
                  </button>
                </motion.article>
              );
            })}
          </motion.div>
          </Reveal>
        </div>
      </section>

      <CertificationDetailModal
        certification={selectedCert}
        onClose={() => setSelectedCert(null)}
        isDarkMode={isDarkMode}
        language={language}
      />
    </>
  );
}

export default CertificationsSection;
