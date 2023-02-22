import { motion } from "framer-motion";

export default function ServerRendering() {
  return <motion.div className="test" initial={false} animate={{ x: 100 }} />;
}
