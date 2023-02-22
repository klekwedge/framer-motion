import { motion } from "framer-motion";

export default function ScrollTriggeredTest() {

  return <motion.div className="scrolltriggered" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} />;
}
