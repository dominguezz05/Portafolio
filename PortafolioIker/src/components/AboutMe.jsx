import Reveal from './Reveal';

function AboutMe({ isDarkMode }) {
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
            Sobre mí
          </h2>
          <Reveal>
          {/* Párrafos */}
          <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            ¡Hola! Soy un apasionado desarrollador web en formación, actualmente cursando el ciclo de
            <span className="font-semibold"> Desarrollo de Aplicaciones Web (DAW)</span>. Desde que descubrí el mundo de la programación, me ha fascinado la posibilidad de transformar ideas en experiencias digitales reales.
          </p>

          <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Durante mi formación, he adquirido experiencia trabajando con tecnologías como
            <span className={`font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}> HTML, CSS, JavaScript, PHP, MySQL</span>,
            y recientemente me he sumergido en el ecosistema moderno con herramientas como
            <span className={`font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}> React, Node.js, TailwindCSS</span> y bases de datos NoSQL como
            <span className={`font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}> MongoDB y Supabase (PostgreSQL avanzado)</span>.
          </p>

          <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Me considero una persona creativa, curiosa y en constante evolución. Disfruto resolviendo problemas,
            experimentando con nuevas tecnologías y colaborando en proyectos reales que me permitan seguir aprendiendo.
          </p>

          <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Mi objetivo es fusionar creatividad y tecnología para crear soluciones digitales innovadoras que impacten positivamente en las personas y en las empresas.
            Si quieres saber más sobre mí, no dudes en echar un vistazo a mis
            <a href="#projects" className={`underline ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}> proyectos</a> o ponerte en contacto.
            
          </p>
      
          {/* Trayectoria */}
          <div className="mt-10 space-y-6 text-left">
            <h3 className={`text-2xl font-bold text-center ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              📅 Mi Trayectoria
            </h3>
            <div className={`border-l-4 pl-4 space-y-4 ${isDarkMode ? 'border-blue-400' : 'border-blue-600'}`}>
              <div>
                <p className={`font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Ciclo DAW</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>2023 - 2025 | Centro de Formación Profesional Medac (Fuenlabrada)</p>
              </div>
              <div>
                <p className={`font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Proyecto Final Grado: ThreeLogics</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Gestor de almacenes con React, vite, Tailwind y Supabase</p>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      
    </section>
  );
}

export default AboutMe;
