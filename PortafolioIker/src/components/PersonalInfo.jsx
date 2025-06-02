import { motion } from 'framer-motion';
import { Mail, MapPin, User, Linkedin, Github, FileText } from 'lucide-react';
import Reveal from './Reveal';
import AnimatedText from "./AnimatedText";

// Datos para la información personal
const personalInfoSetup = [
  { id: 'name', icon: User, labelKey: 'nameLabel', valueKey: 'nameValue' },
  { id: 'location', icon: MapPin, labelKey: 'locationLabel', valueKey: 'locationValue' },
  { id: 'email', icon: Mail, labelKey: 'emailLabel', valueKey: 'emailValue', hrefKey: 'emailHref', isLink: true },
  { id: 'linkedin', icon: Linkedin, labelKey: 'linkedinLabel', valueKey: 'linkedinValueText', hrefKey: 'linkedinHref', isLink: true, targetBlank: true },
  { id: 'github', icon: Github, labelKey: 'githubLabel', valueKey: 'githubValueText', hrefKey: 'githubHref', isLink: true, targetBlank: true },
];

// Textos para i18n
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

// Variantes de Framer Motion
const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } },
};

// Componente InfoItem
function InfoItem({ icon: IconComponent, label, value, isDarkMode }) {
  const iconBgClass = isDarkMode ? 'bg-sky-900/50 text-sky-400' : 'bg-sky-100 text-sky-600';
  const labelTextClass = isDarkMode ? 'text-sky-400' : 'text-sky-600';
  // El color del valor del item se hereda de la tarjeta o se define explícitamente si es un enlace.
  // Si el valor es un string, usará el color de texto de la tarjeta.
  // Si el valor es un elemento <a>, este ya tiene sus propios estilos de color.
  return (
    <motion.div className="flex items-start sm:items-center gap-4 py-3" variants={itemVariants}>
      <span className={`p-3 sm:p-4 rounded-full ${iconBgClass} flex-shrink-0`}>
        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
      </span>
      <div className="flex-1 text-sm sm:text-base leading-tight">
        <span className={`font-semibold ${labelTextClass}`}>{label}:</span>{' '}
        {/* El color del 'value' se maneja por el contenido de 'value' (enlace o texto simple) y el color de texto de la tarjeta */}
        {value}
      </div>
    </motion.div>
  );
}

function PersonalInfo({ isDarkMode, language }) {
  const currentContent = content[language];

  // Define el color de fondo sólido para la sección según el tema (oscuro/claro)
  const sectionBgClass = isDarkMode
    ? 'bg-slate-900' // Color de fondo para modo oscuro
    : 'bg-slate-100'; // Color de fondo para modo claro

  // Define el color del texto base para cualquier texto directamente en la sección (si lo hubiera)
  // Aunque la mayoría del texto está en la tarjeta, es buena práctica para consistencia.
  const sectionTextColorClass = isDarkMode ? 'text-slate-300' : 'text-slate-700';

  // Clases para la tarjeta interna, que mantiene sus propios colores de fondo y texto
  const cardClasses = isDarkMode
    ? 'bg-slate-800 text-slate-100' // Fondo de tarjeta oscuro, texto claro
    : 'bg-white text-slate-900'; // Fondo de tarjeta claro, texto oscuro

  return (
    <section
      id="personalinfo"
      // Aplicar la clase de fondo sólido a la sección y el color de texto base.
      className={`py-16 px-4 sm:px-8 transition-colors duration-500 ease-in-out ${sectionBgClass} ${sectionTextColorClass}`}
    >
      {/* Esta tarjeta SÍ debe tener su propio fondo y color de texto, ya que es un elemento visual distinto */}
      <div
        className={`rounded-2xl shadow-xl max-w-2xl mx-auto p-6 sm:p-8 transition-colors duration-500 ${cardClasses}`}
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

              // Determinar el color del texto para el valor del item.
              // Si es un enlace, el enlace tiene sus propios estilos.
              // Si es texto simple, debe heredar el color de la tarjeta.
              const valueTextColor = isDarkMode ? 'text-slate-200' : 'text-slate-700';

              if (item.isLink) {
                valueContent = (
                  <a
                    href={currentContent[item.hrefKey]}
                    target={item.targetBlank ? '_blank' : undefined}
                    rel={item.targetBlank ? 'noopener noreferrer' : undefined}
                    // Los colores del enlace ya están definidos para contraste con el fondo de la tarjeta
                    className={`hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded ${isDarkMode ? 'text-sky-400 hover:text-sky-300 focus:ring-sky-500 focus:ring-offset-slate-800' : 'text-sky-600 hover:text-sky-500 focus:ring-sky-700 focus:ring-offset-white'}`}
                  >
                    {currentContent[item.valueKey]}
                  </a>
                );
              } else {
                // Aplicar el color de texto de la tarjeta al valor si no es un enlace
                valueContent = <span className={valueTextColor}>{currentContent[item.valueKey]}</span>;
              }
              return (
                <InfoItem
                  key={item.id}
                  icon={item.icon}
                  label={label}
                  value={valueContent} // valueContent ya es un JSX element (<a> o <span>)
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
