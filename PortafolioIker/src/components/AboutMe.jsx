import Reveal from './Reveal';

function AboutMe({ isDarkMode, language }) {
  return (
    <section
      id="about"
      className={`py-20 px-6 md:px-16 transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Título */}
        <h2 className={`text-4xl font-extrabold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
          {language === 'es' ? 'Sobre mí' : 'About Me'}
        </h2>

        <Reveal>
          {/* Párrafos */}
          <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {language === 'es' 
              ? '¡Hola! Soy un apasionado desarrollador web en formación, actualmente cursando el ciclo de'
              : 'Hello! I am a passionate web developer in training, currently studying the program of'}
            <span className="font-semibold"> {language === 'es' ? 'Desarrollo de Aplicaciones Web (DAW)' : 'Web Application Development (DAW)'}</span>.
            {language === 'es' 
              ? ' Desde que descubrí el mundo de la programación, me ha fascinado la posibilidad de transformar ideas en experiencias digitales reales.'
              : ' Since I discovered the world of programming, I have been fascinated by the ability to turn ideas into real digital experiences.'}
          </p>

          <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {language === 'es' 
              ? 'Durante mi formación, he adquirido experiencia trabajando con tecnologías como'
              : 'During my training, I have gained experience working with technologies such as'}
            <span className={`font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              {' HTML, CSS, JavaScript, PHP, MySQL '}
            </span>
            {language === 'es' 
              ? 'y recientemente me he sumergido en el ecosistema moderno con herramientas como'
              : 'and recently I have immersed myself in the modern ecosystem with tools such as'}
            <span className={`font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              {' React, Node.js, TailwindCSS '}
            </span>
            {language === 'es' 
              ? 'y bases de datos NoSQL como'
              : 'and NoSQL databases like'}
            <span className={`font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              {' MongoDB and Supabase (advanced PostgreSQL)'}
            </span>.
          </p>

          <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {language === 'es'
              ? 'Me considero una persona creativa, curiosa y en constante evolución. Disfruto resolviendo problemas, experimentando con nuevas tecnologías y colaborando en proyectos reales que me permitan seguir aprendiendo.'
              : 'I consider myself a creative, curious, and constantly evolving person. I enjoy solving problems, experimenting with new technologies, and collaborating on real projects that allow me to continue learning.'}
          </p>

          <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {language === 'es'
              ? 'Mi objetivo es fusionar creatividad y tecnología para crear soluciones digitales innovadoras que impacten positivamente en las personas y en las empresas. Si quieres saber más sobre mí, no dudes en echar un vistazo a mis'
              : 'My goal is to merge creativity and technology to create innovative digital solutions that positively impact people and companies. If you want to know more about me, feel free to check out my'}{' '}
            <a href="#projects" className={`underline ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}>
              {language === 'es' ? 'proyectos' : 'projects'}
            </a>{' '}
            {language === 'es' ? 'o ponerte en contacto.' : 'or get in touch.'}
          </p>

          {/* Trayectoria */}
          <div className="mt-10 space-y-6 text-left">
            <h3 className={`text-2xl font-bold text-center ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              {language === 'es' ? '📅 Mi Trayectoria' : '📅 My Journey'}
            </h3>

            <div className={`border-l-4 pl-4 space-y-4 ${isDarkMode ? 'border-blue-400' : 'border-blue-600'}`}>
              <div>
                <p className={`font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {language === 'es' ? 'Ciclo DAW' : 'DAW Program'}
                </p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  2023 - 2025 | {language === 'es' ? 'Centro de Formación Profesional Medac (Fuenlabrada)' : 'Medac Vocational Training Center (Fuenlabrada)'}
                </p>
              </div>
              <div>
                <p className={`font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {language === 'es' ? 'Proyecto Final Grado: ThreeLogics' : 'Final Project: ThreeLogics'}
                </p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {language === 'es'
                    ? 'Gestor de almacenes con React, Vite, Tailwind y Supabase'
                    : 'Warehouse management system built with React, Vite, Tailwind, and Supabase'}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutMe;
