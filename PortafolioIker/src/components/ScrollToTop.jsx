import { ArrowUp } from 'lucide-react';

function ScrollToTop() {
  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition cursor-pointer"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

export default ScrollToTop;
