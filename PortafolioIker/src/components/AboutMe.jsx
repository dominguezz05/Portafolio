import Reveal from './Reveal';

function AboutMe() {
  return (
    <section id="about" className="py-16 px-8 bg-gray-900 text-white">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-blue-400">Sobre mí</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            ¡Hola! Soy un apasionado desarrollador web en formación, actualmente cursando el ciclo de 
            <span className="text-blue-400 font-semibold"> Desarrollo de Aplicaciones Web (DAW)</span>. 
            Desde que descubrí el mundo de la programación, me ha fascinado la posibilidad de 
            transformar ideas en experiencias digitales reales.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            Durante mi formación, he adquirido experiencia trabajando con tecnologías como 
            <span className="text-blue-400 font-semibold"> HTML, CSS, JavaScript, PHP, MySQL</span>, 
            y recientemente me he sumergido en el ecosistema moderno con herramientas como 
            <span className="text-blue-400 font-semibold"> React, Node.js, TailwindCSS</span> y 
            bases de datos NoSQL como <span className="text-blue-400 font-semibold">MongoDB y Supabase</span>.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            Me considero una persona creativa, curiosa y en constante evolución. Disfruto resolviendo problemas, 
            experimentando con nuevas tecnologías y colaborando en proyectos reales que me permitan seguir aprendiendo.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            Mi objetivo es fusionar creatividad y tecnología para crear soluciones digitales innovadoras que 
            impacten positivamente en las personas y en las empresas. Si quieres saber más sobre mí, 
            no dudes en echar un vistazo a mis <a href="#projects" className="text-blue-400 underline hover:text-blue-300">proyectos</a> o 
            ponerte en <a href="#contact" className="text-blue-400 underline hover:text-blue-300">contacto</a>.
          </p>
        </div>
        <h3 className="text-2xl font-bold text-center text-blue-400">📅 Mi Trayectoria</h3>
<div className="border-l-4 border-blue-400 pl-4 space-y-4">
  <div>
    <p className="font-semibold text-gray-300">Ciclo DAW</p>
    <p className="text-gray-400">2023 - 2025 | Centro de Estudios XYZ</p>
  </div>
  <div>
    <p className="font-semibold text-gray-300">Proyecto Final: ThreeLogics</p>
    <p className="text-gray-400">Gestor de almacenes con React y Supabase</p>
  </div>
</div>

      </Reveal>
    </section>
  );
}

export default AboutMe;
