import { Mail, MapPin, Calendar, User, Linkedin, Github } from 'lucide-react';
import Reveal from './Reveal';

function PersonalInfo() {
  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-xl text-white max-w-2xl mx-auto mt-8">
        <Reveal>
      <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">Información Personal</h3>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <User className="text-blue-400 w-6 h-6" />
          <p className="text-gray-300"><span className="font-semibold text-blue-400">Nombre:</span> Tu Nombre Completo</p>
        </div>

        <div className="flex items-center gap-4">
          <Calendar className="text-blue-400 w-6 h-6" />
          <p className="text-gray-300"><span className="font-semibold text-blue-400">Edad:</span> 21 años</p>
        </div>

        <div className="flex items-center gap-4">
          <MapPin className="text-blue-400 w-6 h-6" />
          <p className="text-gray-300"><span className="font-semibold text-blue-400">Ubicación:</span> Ciudad, País</p>
        </div>

        <div className="flex items-center gap-4">
          <Mail className="text-blue-400 w-6 h-6" />
          <p className="text-gray-300"><span className="font-semibold text-blue-400">Correo:</span> 
            <a href="mailto:tuemail@gmail.com" className="text-blue-400 hover:underline"> tuemail@gmail.com</a>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Linkedin className="text-blue-400 w-6 h-6" />
          <p className="text-gray-300"><span className="font-semibold text-blue-400">LinkedIn:</span> 
            <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"> linkedin.com/in/tuusuario</a>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Github className="text-blue-400 w-6 h-6" />
          <p className="text-gray-300"><span className="font-semibold text-blue-400">GitHub:</span> 
            <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"> github.com/tuusuario</a>
          </p>
        </div>
      </div>
      </Reveal>
    </div>
  );
}

export default PersonalInfo;
