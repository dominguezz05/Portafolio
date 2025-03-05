import { useState } from 'react';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import PersonalInfo from './components/PersonalInfo';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans bg-gray-900 text-white scroll-smooth">
      <Hero />
      <AboutMe />
      <PersonalInfo />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
