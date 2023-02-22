import { motion } from "framer-motion";

export default function Gestures() {
  return (
    <motion.div
      className="gestures"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
    />
  );
}
