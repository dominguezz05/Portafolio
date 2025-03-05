import Reveal from './Reveal';

function Skills() {
  return (
    <section id="skills" className="py-16 px-8">
      <Reveal>
        <div className="text-center mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 text-blue-400">
            Tecnologías y Skills
          </h2>

          {/* Lenguajes y tecnologías web */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-300">💻 Lenguajes de Programación</h3>
          <div className="flex justify-center flex-wrap gap-3 mb-8">
            {['HTML5', 'CSS3', 'React', 'Bootstrap', 'GSAP', 'PHP', 'JavaScript', 'Tailwind'].map((tech) => (
              <span key={tech} className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-full border border-blue-300 shadow-lg">
                {tech}
              </span>
            ))}
          </div>

          {/* Bases de datos */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-300">🗄️ Bases de Datos</h3>
          <div className="flex justify-center flex-wrap gap-3 mb-8">
            {['MySQL', 'MongoDB', 'Supabase'].map((db) => (
              <span key={db} className="bg-gradient-to-r from-green-600 to-green-400 text-white px-4 py-2 rounded-full border border-green-300 shadow-lg">
                {db}
              </span>
            ))}
          </div>

          {/* Otros lenguajes */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-300">⚙️ Otros Lenguajes y Herramientas</h3>
          <div className="flex justify-center flex-wrap gap-3">
            {['Python', 'Git', 'Node.js', 'XAMPP', 'GitHub', 'Vercel', 'Postman'].map((other) => (
              <span key={other} className="bg-gradient-to-r from-purple-600 to-purple-400 text-white px-4 py-2 rounded-full border border-purple-300 shadow-lg">
                {other}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-bold text-blue-400 mt-8">🚀 Aprendiendo Ahora</h3>
<div className="flex justify-center flex-wrap gap-4 mt-4">
  {['Docker', 'Next.js', 'Prisma', 'NestJS'].map((tech) => (
    <span key={tech} className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full shadow-lg">
      {tech}
    </span>
  ))}
</div>

        </div>
      </Reveal>
    </section>
  );
}

export default Skills;
