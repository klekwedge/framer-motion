import { motion } from "framer-motion";

export default function VariantsTest() {
  const list = { hidden: { opacity: 0.5 } };
  const item = { hidden: { x: -110, opacity: 1 } };

  return (
    <motion.ul animate="hidden" variants={list}>
      <motion.li variants={item} />
      <motion.li variants={item} />
      <motion.li variants={item} />
    </motion.ul>
  );
}
