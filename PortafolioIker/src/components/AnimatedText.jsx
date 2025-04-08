import { motion, AnimatePresence } from "framer-motion";

function AnimatedText({ children, keyProp }) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={keyProp}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </AnimatePresence>
  );
}

export default AnimatedText;
