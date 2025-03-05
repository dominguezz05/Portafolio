import Reveal from './Reveal';

function Contact() {
  return (
    <section id="contact" className="py-16 px-8 bg-gray-900 text-white">
      <Reveal>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-400 mb-4">¿Hablamos?</h2>
          <p className="text-gray-300 mb-8">
            Si tienes un proyecto en mente, alguna propuesta o simplemente quieres conectar, no dudes en escribirme.
          </p>

          <form className="space-y-6 text-left">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Nombre</label>
              <input
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
              <input
                type="email"
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="Tu email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Mensaje</label>
              <textarea
                rows="4"
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="Tu mensaje"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg font-semibold text-white hover:scale-105 transition-transform"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}

export default Contact;
