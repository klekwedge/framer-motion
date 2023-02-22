import { motion, useMotionValue, useTransform } from "framer-motion";

export default function MotionValues() {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0.5, 1, 0]);

  return <motion.div className="test" drag="x" style={{ x, opacity }} />;
}
