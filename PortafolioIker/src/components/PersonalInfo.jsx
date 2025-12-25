import { motion } from "framer-motion";
import { Mail, MapPin, User, Linkedin, Github, FileText } from "lucide-react";
import Reveal from "./Reveal";
import AnimatedText from "./AnimatedText";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const personalInfoSetup = [
  { id: "name", icon: User, labelKey: "nameLabel", valueKey: "nameValue" },
  {
    id: "location",
    icon: MapPin,
    labelKey: "locationLabel",
    valueKey: "locationValue",
  },
  {
    id: "email",
    icon: Mail,
    labelKey: "emailLabel",
    valueKey: "emailValue",
    hrefKey: "emailHref",
    isLink: true,
  },
  {
    id: "linkedin",
    icon: Linkedin,
    labelKey: "linkedinLabel",
    valueKey: "linkedinValueText",
    hrefKey: "linkedinHref",
    isLink: true,
    targetBlank: true,
  },
  {
    id: "github",
    icon: Github,
    labelKey: "githubLabel",
    valueKey: "githubValueText",
    hrefKey: "githubHref",
    isLink: true,
    targetBlank: true,
  },
];

const content = {
  es: {
    title: "Información Personal",
    nameLabel: "Nombre Completo",
    nameValue: "Iker Domínguez Calcerrada",
    locationLabel: "Ubicación",
    locationValue: "Madrid, España",
    emailLabel: "Email",
    emailValue: "ikerdc2005@gmail.com",
    emailHref: "mailto:ikerdc2005@gmail.com",
    linkedinLabel: "LinkedIn",
    linkedinValueText: "iker-domínguez-calcerrada",
    linkedinHref:
      "https://www.linkedin.com/in/iker-domínguez-calcerrada-423736298/",
    githubLabel: "GitHub",
    githubValueText: "dominguezz05",
    githubHref: "https://github.com/dominguezz05",
  },
  en: {
    title: "Personal Information",
    nameLabel: "Full Name",
    nameValue: "Iker Domínguez Calcerrada",
    locationLabel: "Location",
    locationValue: "Madrid, Spain",
    emailLabel: "Email",
    emailValue: "ikerdc2005@gmail.com",
    emailHref: "mailto:ikerdc2005@gmail.com",
    linkedinLabel: "LinkedIn",
    linkedinValueText: "iker-dominguez-calcerrada",
    linkedinHref:
      "https://www.linkedin.com/in/iker-domínguez-calcerrada-423736298/",
    githubLabel: "GitHub",
    githubValueText: "dominguezz05",
    githubHref: "https://github.com/dominguezz05",
  },
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
};

// Componente InfoItem
function InfoItem({ icon: IconComponent, label, value, isDarkMode }) {
  const iconBgClass = isDarkMode
    ? "bg-sky-900/50 text-sky-400"
    : "bg-sky-100 text-sky-600";
  const labelTextClass = isDarkMode ? "text-sky-400" : "text-sky-600";

  return (
    <motion.div
      className="flex items-start sm:items-center gap-4 py-3 info-row"
      variants={itemVariants}
    >
      <span className={`p-3 sm:p-4 rounded-full ${iconBgClass} flex-shrink-0`}>
        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
      </span>
      <div className="flex-1 text-sm sm:text-base leading-tight">
        <span className={`font-semibold ${labelTextClass}`}>{label}:</span>{" "}
        {value}
      </div>
    </motion.div>
  );
}

function PersonalInfo({ isDarkMode, language }) {
  const currentContent = content[language];

  const sectionBgClass = isDarkMode ? "bg-slate-900" : "bg-slate-100";
  const sectionTextColorClass = isDarkMode
    ? "text-slate-300"
    : "text-slate-700";

  const cardClasses = isDarkMode
    ? "bg-slate-800 text-slate-100"
    : "bg-white text-slate-900";

  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (prefersReduced) return;

    const section = sectionRef.current;
    const card = cardRef.current;
    if (!section || !card) return;

    const ctx = gsap.context(() => {
      gsap.set(card, {
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      });

      gsap.fromTo(
        card,
        {
          autoAlpha: 0,
          y: 28,
          rotateX: isTouch ? 0 : 10,
          scale: 0.98,
          filter: "blur(10px)",
        },
        {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
          clearProps: "filter",
          scrollTrigger: { trigger: section, start: "top 80%" },
        }
      );

      const shine = card.querySelector(".info-shine");
      if (shine) {
        gsap.set(shine, { autoAlpha: 0 });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
        tl.to(shine, { autoAlpha: 1, duration: 0.01 })
          .fromTo(
            shine,
            { xPercent: -120 },
            { xPercent: 120, duration: 0.9, ease: "power2.inOut" }
          )
          .to(shine, { autoAlpha: 0, duration: 0.2 });
      }

      const glow = card.querySelector(".info-glow");
      if (glow) {
        gsap.fromTo(
          glow,
          { autoAlpha: 0.25, scale: 0.98 },
          {
            autoAlpha: 0.55,
            scale: 1.03,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      gsap.utils.toArray(".info-row").forEach((row, i) => {
        gsap.fromTo(
          row,
          { autoAlpha: 0, y: 12 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
            delay: i * 0.03,
            scrollTrigger: { trigger: row, start: "top 88%" },
          }
        );
      });

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, [isDarkMode, language]);

  return (
    <section
      ref={sectionRef}
      id="personalinfo"
      className={`py-16 px-4 sm:px-8 transition-colors duration-500 ease-in-out ${sectionBgClass} ${sectionTextColorClass}`}
    >
      <div
        ref={cardRef}
        className={`relative overflow-hidden rounded-2xl shadow-xl max-w-2xl mx-auto p-6 sm:p-8 transition-colors duration-500 ${cardClasses}`}
      >
        {/* ✅ Glow base */}
        <div
          className="info-glow pointer-events-none absolute -inset-24 opacity-40"
          style={{
            background: isDarkMode
              ? "radial-gradient(500px circle at 30% 20%, rgba(56,189,248,0.28), transparent 60%)"
              : "radial-gradient(520px circle at 30% 20%, rgba(2,132,199,0.18), transparent 62%)",
          }}
        />

        {/* ✅ Shine sweep  */}
        <div
          className="info-shine pointer-events-none absolute inset-0 opacity-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.14) 50%, rgba(255,255,255,0) 100%)",
            mixBlendMode: "screen",
          }}
        />

        <Reveal>
          <div className="text-center mb-8 flex items-center justify-center gap-3 sm:gap-4 relative">
            <FileText
              className={`w-6 h-6 sm:w-7 sm:h-7 ${
                isDarkMode ? "text-sky-400" : "text-sky-600"
              }`}
            />
            <h3
              className={`text-2xl sm:text-3xl font-bold ${
                isDarkMode ? "text-sky-400" : "text-sky-600"
              }`}
            >
              <AnimatedText keyProp={`title-${language}`}>
                {currentContent.title}
              </AnimatedText>
            </h3>
          </div>

          <motion.div
            className="space-y-1 relative"
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            {personalInfoSetup.map((item) => {
              const label = currentContent[item.labelKey];
              let valueContent;

              const valueTextColor = isDarkMode
                ? "text-slate-200"
                : "text-slate-700";

              if (item.isLink) {
                valueContent = (
                  <a
                    href={currentContent[item.hrefKey]}
                    target={item.targetBlank ? "_blank" : undefined}
                    rel={item.targetBlank ? "noopener noreferrer" : undefined}
                    className={`hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded ${
                      isDarkMode
                        ? "text-sky-400 hover:text-sky-300 focus:ring-sky-500 focus:ring-offset-slate-800"
                        : "text-sky-600 hover:text-sky-500 focus:ring-sky-700 focus:ring-offset-white"
                    }`}
                  >
                    {currentContent[item.valueKey]}
                  </a>
                );
              } else {
                valueContent = (
                  <span className={valueTextColor}>
                    {currentContent[item.valueKey]}
                  </span>
                );
              }

              return (
                <InfoItem
                  key={item.id}
                  icon={item.icon}
                  label={label}
                  value={valueContent}
                  isDarkMode={isDarkMode}
                />
              );
            })}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

export default PersonalInfo;
