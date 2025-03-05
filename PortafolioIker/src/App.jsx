import {  useEffect } from 'react'; // <- Importa useEffect correctamente
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import PersonalInfo from './components/PersonalInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    console.log('%c¡Hey! ¿Qué haces mirando la consola? 😜', 'color: cyan; font-size: 16px;');
  }, []);

  return (
    <div className="font-sans bg-gray-900 text-white scroll-smooth">
      <Hero />
      <AboutMe />
      <PersonalInfo />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
