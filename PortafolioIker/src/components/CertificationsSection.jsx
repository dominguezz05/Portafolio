import React, { useMemo, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, ExternalLink as LinkIcon } from "lucide-react";

import CertificationDetailModal from "./CertificationDetailModal";
import AnimatedText from "./AnimatedText";
import Reveal from "./Reveal";
import { useApp } from '../context/AppContext';
import { useLoadingState } from '../hooks/useLoadingState';
import { CardSkeleton } from './Skeleton';

gsap.registerPlugin(ScrollTrigger);

function CertificationsSection({ certifications }) {
  const { theme, language } = useApp();
  const isDarkMode = theme === 'dark';
  const [selectedCert, setSelectedCert] = useState(null);
  const sectionRef = useRef(null);
  const { isLoading } = useLoadingState({ minLoadingTime: 600 });

  const texts = useMemo(
    () => ({
      es: {
        sectionTitle: "🎓 Certificaciones",
        sectionSubtitle:
          "Formación acreditada en Inteligencia Artificial, Cloud y desarrollo.",
        viewDetails: "Ver detalles",
        viewCredential: "Credencial",
      },
      en: {
        sectionTitle: "🎓 Certifications",
        sectionSubtitle: "Accredited training in AI, Cloud and development.",
        viewDetails: "View details",
        viewCredential: "Credential",
      },
    }),
    []
  );

  const t = texts[language] || texts.es;

  if (!certifications || certifications.length === 0) return null;

  const getLangText = (item, baseKey) =>
    item[`${baseKey}_${language}`] ||
    item[`${baseKey}_en`] ||
    item[`${baseKey}_es`] ||
    item[baseKey];

  const getLangArray = (item, baseKey) =>
    item[`${baseKey}_${language}`] ||
    item[`${baseKey}_en`] ||
    item[`${baseKey}_es`] ||
    item[baseKey] ||
    [];

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Base 3D
      gsap.set(".cert-card", {
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      });

      gsap.set(".cert-shine", {
        background:
          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.16) 50%, rgba(255,255,255,0) 100%)",
        mixBlendMode: "screen",
        opacity: 0,
      });

      const cards = gsap.utils.toArray(".cert-card");

      cards.forEach((card) => {
        const shine = card.querySelector(".cert-shine");
        const badges = card.querySelectorAll(".cert-badge");
        const iconWrap = card.querySelector(".cert-icon");
        const title = card.querySelector(".cert-title");
        const meta = card.querySelector(".cert-meta");
        const desc = card.querySelector(".cert-desc");
        const footer = card.querySelector(".cert-footer");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          card,
          {
            autoAlpha: 0,
            y: 26,
            rotateX: isMobile ? 0 : 12,
            rotateY: isMobile ? 0 : -10,
            filter: "blur(10px)",
            clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
            scale: 0.98,
          },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            filter: "blur(0px)",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            scale: 1,
            duration: 0.85,
            ease: "power3.out",
            clearProps: "filter",
          }
        )
          .fromTo(
            [iconWrap, title, meta],
            { autoAlpha: 0, y: 10 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.45,
              ease: "power2.out",
              stagger: 0.06,
            },
            0.15
          )
          .fromTo(
            desc,
            { autoAlpha: 0, y: 10 },
            { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" },
            0.25
          )
          .fromTo(
            badges,
            { autoAlpha: 0, y: 8, scale: 0.92 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "back.out(1.7)",
              stagger: 0.03,
            },
            0.32
          )
          .fromTo(
            footer,
            { autoAlpha: 0, y: 10 },
            { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" },
            0.42
          )
          // Shine sweep
          .to(shine, { opacity: 1, duration: 0.01 }, 0.25)
          .fromTo(
            shine,
            { xPercent: -120 },
            { xPercent: 120, duration: 0.7, ease: "power2.inOut" },
            0.25
          )
          .to(shine, { opacity: 0, duration: 0.2 }, 0.95);

        // Hover tilt (desktop)
        if (!isMobile) {
          const onMove = (e) => {
            const r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width;
            const py = (e.clientY - r.top) / r.height;
            const rotY = (px - 0.5) * 10; // -5..5
            const rotX = (0.5 - py) * 10; // -5..5
            gsap.to(card, {
              rotateX: rotX,
              rotateY: rotY,
              duration: 0.25,
              ease: "power2.out",
            });
          };
          const onLeave = () => {
            gsap.to(card, {
              rotateX: 0,
              rotateY: 0,
              duration: 0.35,
              ease: "power2.out",
            });
          };

          card.addEventListener("mousemove", onMove);
          card.addEventListener("mouseleave", onLeave);

          // cleanup
          ScrollTrigger.addEventListener("refreshInit", onLeave);
          card._certCleanup = () => {
            card.removeEventListener("mousemove", onMove);
            card.removeEventListener("mouseleave", onLeave);
            ScrollTrigger.removeEventListener("refreshInit", onLeave);
          };
        }
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => {
      if (sectionRef.current) {
        sectionRef.current
          .querySelectorAll(".cert-card")
          .forEach((el) => el._certCleanup?.());
      }
      ctx.revert();
    };
  }, [language, isDarkMode, certifications?.length]);

  return (
    <>
      <section ref={sectionRef} id="certifications" className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <Reveal>
            <div className="mb-8 text-center">
              <h2
                className={`text-2xl md:text-3xl font-bold tracking-tight ${
                  isDarkMode ? "text-sky-400" : "text-sky-600"
                }`}
              >
                <AnimatedText keyProp={`certifications-title-${language}`}>
                  {t.sectionTitle}
                </AnimatedText>
              </h2>
              <p className="mt-2 text-sm md:text-base opacity-80 max-w-2xl mx-auto">
                {t.sectionSubtitle}
              </p>
            </div>

            <div className="grid gap-5 md:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {isLoading ? (
                <CardSkeleton count={3} />
              ) : (
                certifications.map((cert) => {
                const shortDescription = getLangText(cert, "shortDescription");
                const skills = getLangArray(cert, "skills");

                return (
                  <article
                    key={cert.id}
                    className={`cert-card group relative overflow-hidden rounded-xl border shadow-sm transition-all ${
                      isDarkMode
                        ? "bg-slate-900/60 border-slate-700/70 hover:border-sky-500/70 hover:bg-slate-900"
                        : "bg-white/80 border-slate-200 hover:border-sky-500/70 hover:bg-sky-50/60"
                    }`}
                  >
                    {/* Shine overlay */}
                    <div className="cert-shine pointer-events-none absolute inset-0" />

                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="w-full h-full text-left p-4 md:p-5 flex flex-col gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`cert-icon flex items-center justify-center rounded-full p-2 ${
                            isDarkMode
                              ? "bg-sky-500/10 text-sky-400"
                              : "bg-sky-100 text-sky-600"
                          }`}
                        >
                          {cert.logo ? (
                            <img
                              src={cert.logo}
                              alt={cert.organization}
                              className="w-7 h-7 rounded-full object-cover"
                            />
                          ) : (
                            <Award size={20} />
                          )}
                        </div>

                        <div>
                          <h3 className="cert-title text-sm md:text-base font-semibold leading-snug">
                            {cert.title}
                          </h3>
                          <p className="cert-meta text-xs opacity-75">
                            {cert.organization} • {cert.issueDate}
                          </p>
                        </div>
                      </div>

                      {shortDescription && (
                        <p className="cert-desc text-xs md:text-sm opacity-80 line-clamp-3">
                          {shortDescription}
                        </p>
                      )}

                      {skills.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {skills.slice(0, 4).map((skill, idx) => (
                            <span
                              key={idx}
                              className={`cert-badge px-2 py-0.5 rounded-full text-[11px] border ${
                                isDarkMode
                                  ? "border-slate-600 bg-slate-800/80"
                                  : "border-slate-200 bg-slate-50"
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                          {skills.length > 4 && (
                            <span className="text-[11px] opacity-60">
                              +{skills.length - 4}
                            </span>
                          )}
                        </div>
                      )}

                      <div className="cert-footer mt-3 flex items-center justify-between text-xs">
                        <span
                          className={`inline-flex items-center gap-1 font-medium ${
                            isDarkMode
                              ? "text-sky-300 group-hover:text-sky-200"
                              : "text-sky-700 group-hover:text-sky-800"
                          }`}
                        >
                          {t.viewDetails}
                        </span>

                        {cert.credentialUrl && (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className={`inline-flex items-center gap-1 text-[11px] underline-offset-2 hover:underline ${
                              isDarkMode
                                ? "text-slate-300 hover:text-sky-300"
                                : "text-slate-600 hover:text-sky-700"
                            }`}
                          >
                            <LinkIcon size={12} />
                            {t.viewCredential}
                          </a>
                        )}
                      </div>
                    </button>
                  </article>
);
              })
              )}
            </div>
          </Reveal>
        </div>
      </section>

<CertificationDetailModal
        certification={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </>
  );
}

export default CertificationsSection;
