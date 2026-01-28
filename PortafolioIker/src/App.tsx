import { useEffect } from "react";

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
import { AppProvider } from "./context/AppContext";

function AppContent() {
  useLenis();

  useEffect(() => {
    console.log(
      "%c¡Hey! ¿Qué haces mirando la consola? 😜",
      "color: cyan; font-size: 16px;"
    );
  }, []);

  return (
    <>
      <Navbar />

      <main className="font-sans transition-colors duration-500 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        <Hero />
        <AboutMe />
        <PersonalInfo />
        <CarruselPortfolio />
        <Projects />

        <CertificationsSection certifications={certifications} />

        <Skills />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;