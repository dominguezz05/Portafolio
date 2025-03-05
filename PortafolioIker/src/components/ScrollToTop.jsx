import { ArrowUp } from 'lucide-react';

function ScrollToTop({ isDarkMode }) {
  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer ${
        isDarkMode
          ? 'bg-blue-600 text-white hover:bg-blue-500'
          : 'bg-blue-200 text-blue-700 hover:bg-blue-300'
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

export default ScrollToTop;
