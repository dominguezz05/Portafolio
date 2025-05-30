import React from "react";

// Asegúrate de que el componente acepte la prop isDarkMode
export default function CarruselEstiloContinuo({ isDarkMode }) {
 const textUnitTop = "JAVASCRIPT REACT NODE.JS PYTHON ";
const textUnitBottom = "VSCODE CHATGPT GIT SQL FIGMA "; 

  const fullTextTop = textUnitTop.repeat(8); 
  const fullTextBottom = textUnitBottom.repeat(8);

  const animationDuration = "60s";

  // Definimos los colores para ambos temas
  const mainBackgroundColor_dark = "#101828";
  const stripBackgroundColor_dark = "#131D2F";
  const overlayBackgroundColor_dark = "#000000"; // Negro para overlays en tema oscuro
  const textGradient_dark = "linear-gradient(90deg, #e0e0e0 30%, #999999 50%, #e0e0e0 70%)"; // Texto claro para tema oscuro

  const mainBackgroundColor_light = "#f3f4f6"; // Un gris muy claro (similar a Tailwind gray-100)
  const stripBackgroundColor_light = "#e5e7eb"; // Un gris un poco más oscuro para las líneas (similar a Tailwind gray-200)
  const overlayBackgroundColor_light = "#f3f4f6"; // Mismo color que el fondo claro para que el texto "desaparezca" en él
  const textGradient_light = "linear-gradient(90deg, #374151 30%, #1f2937 50%, #374151 70%)"; // Texto oscuro para tema claro

  // Seleccionamos los colores basados en isDarkMode
  const mainBackgroundColor = isDarkMode ? mainBackgroundColor_dark : mainBackgroundColor_light;
  const stripBackgroundColor = isDarkMode ? stripBackgroundColor_dark : stripBackgroundColor_light;
  const overlayBackgroundColor = isDarkMode ? overlayBackgroundColor_dark : overlayBackgroundColor_light;
  const textGradient = isDarkMode ? textGradient_dark : textGradient_light;

  return (
    // Contenedor principal: Aplicamos el color de fondo dinámicamente
    // y establecemos una variable CSS para el gradiente del texto
    <div 
      className={`w-99% h-screen overflow-hidden relative bg-[${mainBackgroundColor}] flex flex-col items-center justify-center`}
      style={{
        '--text-gradient': textGradient, // Variable CSS para el gradiente del texto
      }}
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&display=swap');
        
        .main-carousel-text-item {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: clamp(30px, 8vw, 80px);
          line-height: 0.95;
          white-space: nowrap;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          /* Usamos la variable CSS para el color del texto */
          background-image: var(--text-gradient); 
          padding: 0 0.25em;
          margin-bottom: 0.1em;
        }

        .line-viewport {
          width: 100%;
          overflow: hidden;
        }

        .text-track {
          display: flex;
          width: fit-content;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .scroll-left {
          animation-name: scrollLeftAnimation;
          animation-duration: ${animationDuration};
        }

        .scroll-right {
          animation-name: scrollRightAnimation;
          animation-duration: ${animationDuration};
        }

        @keyframes scrollLeftAnimation {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); } 
        }

        @keyframes scrollRightAnimation {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>

      {/* Fondo con líneas diagonales sutiles */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${mainBackgroundColor} 0px, ${mainBackgroundColor} 5px, ${stripBackgroundColor} 5px, ${stripBackgroundColor} 10px)`,
          zIndex: 0 
        }}
      />
      
      {/* Contenedor para las dos líneas de texto animadas */}
      <div style={{ zIndex: 1 }}>
        <div className="line-viewport">
          <div className="text-track scroll-left">
            <h1 className="main-carousel-text-item">{fullTextTop}</h1>
            <h1 className="main-carousel-text-item">{fullTextTop}</h1>
          </div>
        </div>
        <div className="line-viewport mt-px"> 
          <div className="text-track scroll-right">
            <h1 className="main-carousel-text-item">{fullTextBottom}</h1>
            <h1 className="main-carousel-text-item">{fullTextBottom}</h1>
          </div>
        </div>
      </div>

      {/* Overlay izquierdo - color dinámico */}
      <div
        className={`absolute top-0 left-0 h-full bg-[${overlayBackgroundColor}] pointer-events-none`}
        style={{
          width: '25%', 
          zIndex: 2      
        }}
      ></div>

      {/* Overlay derecho - color dinámico */}
      <div
        className={`absolute top-0 right-0 h-full bg-[${overlayBackgroundColor}] pointer-events-none`}
        style={{
          width: '25%', 
          zIndex: 2     
        }}
      ></div>
    </div>
  );
}