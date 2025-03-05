import { useEffect, useState } from 'react';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import PersonalInfo from './components/PersonalInfo';

import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    console.log('%c¡Hey! ¿Qué haces mirando la consola? 😜', 'color: cyan; font-size: 16px;');
  }, []);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.add('dark');
    }
};

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
    <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    <main className="font-sans bg-gray-900 text-white scroll-smooth">
    <Hero isDarkMode={isDarkMode} />
      <AboutMe isDarkMode={isDarkMode} />
      <PersonalInfo isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
      <ScrollToTop isDarkMode={isDarkMode} />

      </main>
    </div>
  );
}

export default App;
// que el hero se vea  con lo de sobre mi, el hablamos que funcione poniendo que abra con tu correo , lo de las skill ponerlo mejor en linkedinl con fotoa
// lo de los proyectos mas chulo con lo miudev y que salga la imagen, subir el sobre mi
// ver si el cambio puede ser con animacion tipo barrido