import { motion } from 'framer-motion';
import { Mail, MapPin, User, Linkedin, Github, FileText } from 'lucide-react';
import Reveal from './Reveal';
import AnimatedText from "./AnimatedText";

// Datos para la información personal (SIN CAMBIOS EN ESTA PARTE)
const personalInfoSetup = [
  { id: 'name', icon: User, labelKey: 'nameLabel', valueKey: 'nameValue' },
  { id: 'location', icon: MapPin, labelKey: 'locationLabel', valueKey: 'locationValue' },
  { id: 'email', icon: Mail, labelKey: 'emailLabel', valueKey: 'emailValue', hrefKey: 'emailHref', isLink: true },
  { id: 'linkedin', icon: Linkedin, labelKey: 'linkedinLabel', valueKey: 'linkedinValueText', hrefKey: 'linkedinHref', isLink: true, targetBlank: true },
  { id: 'github', icon: Github, labelKey: 'githubLabel', valueKey: 'githubValueText', hrefKey: 'githubHref', isLink: true, targetBlank: true },
];

// Textos para i18n (SIN CAMBIOS EN ESTA PARTE)
const content = {
  es: {
    title: 'Información Personal',
    nameLabel: 'Nombre Completo',
    nameValue: 'Iker Domínguez Calcerrada',
    locationLabel: 'Ubicación',
    locationValue: 'Madrid, España',
    emailLabel: 'Email',
    emailValue: 'ikerdc2005@gmail.com',
    emailHref: 'mailto:ikerdc2005@gmail.com',
    linkedinLabel: 'LinkedIn',
    linkedinValueText: 'iker-domínguez-calcerrada',
    linkedinHref: 'https://www.linkedin.com/in/iker-domínguez-calcerrada-423736298/',
    githubLabel: 'GitHub',
    githubValueText: 'dominguezz05',
    githubHref: 'https://github.com/dominguezz05',
  },
  en: {
    title: 'Personal Information',
    nameLabel: 'Full Name',
    nameValue: 'Iker Domínguez Calcerrada',
    locationLabel: 'Location',
    locationValue: 'Madrid, Spain',
    emailLabel: 'Email',
    emailValue: 'ikerdc2005@gmail.com',
    emailHref: 'mailto:ikerdc2005@gmail.com',
    linkedinLabel: 'LinkedIn',
    linkedinValueText: 'iker-dominguez-calcerrada',
    linkedinHref: 'https://www.linkedin.com/in/iker-domínguez-calcerrada-423736298/',
    githubLabel: 'GitHub',
    githubValueText: 'dominguezz05',
    githubHref: 'https://github.com/dominguezz05',
  },
};

// Variantes de Framer Motion (SIN CAMBIOS EN ESTA PARTE)
const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } },
};

// Componente InfoItem (SIN CAMBIOS EN ESTA PARTE)
function InfoItem({ icon: IconComponent, label, value, isDarkMode }) {
  const iconBgClass = isDarkMode ? 'bg-sky-900/50 text-sky-400' : 'bg-sky-100 text-sky-600';
  const labelTextClass = isDarkMode ? 'text-sky-400' : 'text-sky-600';
  return (
    <motion.div className="flex items-start sm:items-center gap-4 py-3" variants={itemVariants}>
      <span className={`p-3 sm:p-4 rounded-full ${iconBgClass} flex-shrink-0`}>
        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
      </span>
      <div className="flex-1 text-sm sm:text-base leading-tight">
        <span className={`font-semibold ${labelTextClass}`}>{label}:</span>{' '}
        <span className={isDarkMode ? 'text-slate-200' : 'text-slate-700'}>{value}</span>
      </div>
    </motion.div>
  );
}

function PersonalInfo({ isDarkMode, language }) {
  const currentContent = content[language];

  return (
    <section
      id="personalinfo"
      // SE HAN ELIMINADO LAS CLASES DE FONDO, TEXTO BASE Y TRANSICIÓN DE COLORES AQUÍ
      className="py-16 px-4 sm:px-8" 
    >
      {/* Esta tarjeta SÍ debe tener su propio fondo y color de texto, ya que es un elemento visual distinto */}
      <div
        className={`rounded-2xl shadow-xl max-w-2xl mx-auto p-6 sm:p-8 transition-colors duration-500 ${
          isDarkMode ? 'bg-slate-800 text-slate-100' : 'bg-white text-slate-900'
        }`}
      >
        <Reveal>
          <div className="text-center mb-8 flex items-center justify-center gap-3 sm:gap-4">
            <FileText className={`w-6 h-6 sm:w-7 sm:h-7 ${isDarkMode ? 'text-sky-400' : 'text-sky-600'}`} />
            <h3 className={`text-2xl sm:text-3xl font-bold ${isDarkMode ? 'text-sky-400' : 'text-sky-600'}`}>
              <AnimatedText keyProp={`title-${language}`}>
                {currentContent.title}
              </AnimatedText>
            </h3>
          </div>

          <motion.div
            className="space-y-1"
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            {personalInfoSetup.map((item) => {
              const label = currentContent[item.labelKey];
              let valueContent;
              if (item.isLink) {
                valueContent = (
                  <a
                    href={currentContent[item.hrefKey]}
                    target={item.targetBlank ? '_blank' : undefined}
                    rel={item.targetBlank ? 'noopener noreferrer' : undefined}
                    className={`hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded ${isDarkMode ? 'text-sky-400 hover:text-sky-300 focus:ring-sky-500 focus:ring-offset-slate-800' : 'text-sky-600 hover:text-sky-500 focus:ring-sky-700 focus:ring-offset-white'}`}
                  >
                    {currentContent[item.valueKey]}
                  </a>
                );
              } else {
                valueContent = currentContent[item.valueKey];
              }
              return (
                <InfoItem
                  key={item.id}
                  icon={item.icon}
                  label={label}
                  value={valueContent}
                  isDarkMode={isDarkMode}
                />
              );
            })}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

export default PersonalInfo;