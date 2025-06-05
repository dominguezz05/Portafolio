import { useState, useEffect } from "react";

/**
 * Hook personalizado para detectar si la pantalla corresponde a un dispositivo móvil.
 * @param {number} breakpoint - El ancho en píxeles para considerar el cambio (por defecto 768px, el 'md' de Tailwind).
 * @returns {boolean} - Devuelve 'true' si el ancho de la ventana es menor que el breakpoint.
 */
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Función para verificar el tamaño de la pantalla
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Verificar al montar el componente y añadir listener para resize
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Limpiar el listener al desmontar para evitar fugas de memoria
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
