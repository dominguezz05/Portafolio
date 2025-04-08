import { Mail, MapPin, User, Linkedin, Github, FileText } from 'lucide-react';
import Reveal from './Reveal';
import AnimatedText from "./AnimatedText";

function PersonalInfo({ isDarkMode, language }) {
  return (
    <section
      id="personalinfo"
      className={`py-16 px-8 transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div
        className={`rounded-2xl shadow-xl max-w-2xl mx-auto p-8 transition-colors duration-500 ${
          isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
        }`}
      >
        <Reveal>
          {/* Título */}
          <div className="text-center mb-6 flex items-center justify-center gap-4">
            <FileText className={`w-7 h-7 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <h3 className={`text-3xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            <AnimatedText keyProp={language}>
              {language === 'es' ? 'Información Personal' : 'Personal Information'}
              
            </AnimatedText>
            </h3>
          </div>

          <div className="space-y-4">
          <AnimatedText keyProp={language}>
            <InfoItem
              icon={<User className="w-6 h-6" />}
              label={language === 'es' ? 'Nombre' : 'Name'}
              value="Iker Domínguez"
              isDarkMode={isDarkMode}
            />
            
            
            <InfoItem
              icon={<MapPin className="w-6 h-6" />}
              label={language === 'es' ? 'Ubicación' : 'Location'}
              value="Madrid, España"
              isDarkMode={isDarkMode}
            />
 
            <InfoItem
              icon={<Mail className="w-6 h-6" />}
              label="Email"
              value={
                <a
                  href="mailto:ikerdc2005@gmail.com"
                  className={`hover:underline ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
                >
                  ikerdc2005@gmail.com
                </a>
              }
              isDarkMode={isDarkMode}
            />

            <InfoItem
              icon={<Linkedin className="w-6 h-6" />}
              label="LinkedIn"
              value={
                <a
                  href="https://www.linkedin.com/in/iker-dom%C3%ADnguez-calcerrada-423736298/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:underline ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
                >
                  {language === 'es' ? 'Visita mi perfil de LinkedIn' : 'Visit my LinkedIn profile'}
                </a>
              }
              isDarkMode={isDarkMode}
            />

            <InfoItem
              icon={<Github className="w-6 h-6" />}
              label="GitHub"
              value={
                <a
                  href="https://github.com/dominguezz05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:underline ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
                >
                  dominguezz05
                </a>
              }
              isDarkMode={isDarkMode}
            />
            </AnimatedText>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// Componente auxiliar para cada fila de info
function InfoItem({ icon, label, value, isDarkMode }) {
  return (
    <div className="flex items-center gap-6 py-2">
      <span
        className={`p-4 rounded-full ${
          isDarkMode
            ? 'bg-blue-900/40 text-blue-400'
            : 'bg-blue-100 text-blue-600'
        }`}
      >
        {icon}
      </span>
      <p className="flex-1 text-base">
        <span
          className={`font-semibold ${
            isDarkMode ? 'text-blue-400' : 'text-blue-600'
          }`}
        >
          {label}:
        </span>{' '}
        {value}
      </p>
    </div>
  );
}


export default PersonalInfo;
