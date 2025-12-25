import { useEffect, useState } from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import PersonalInfo from "./components/PersonalInfo";
import CarruselPortfolio from "./components/CarruselPortfolio";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CertificationsSection from "./components/CertificationsSection";
import { certifications } from "./data/certifications";

import { useLenis } from "./hooks/useLenis";

function App() {
  useLenis();

  useEffect(() => {
    console.log(
      "%c¡Hey! ¿Qué haces mirando la consola? 😜",
      "color: cyan; font-size: 16px;"
    );
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        language={language}
        setLanguage={setLanguage}
      />

      <main
        className={`font-sans transition-colors duration-500 ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        }`}
      >
        <Hero isDarkMode={isDarkMode} language={language} />
        <AboutMe isDarkMode={isDarkMode} language={language} />
        <PersonalInfo isDarkMode={isDarkMode} language={language} />
        <CarruselPortfolio isDarkMode={isDarkMode} language={language} />
        <Projects isDarkMode={isDarkMode} language={language} />

        <CertificationsSection
          certifications={certifications}
          isDarkMode={isDarkMode}
          language={language}
        />

        <Skills isDarkMode={isDarkMode} language={language} />
        <Footer isDarkMode={isDarkMode} language={language} />
        <ScrollToTop isDarkMode={isDarkMode} />
      </main>
    </div>
  );
}

export default App;
