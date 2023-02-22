import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState } from "react";

interface CollapsibleProps {
  title: string;
  children: ReactNode;
}

const Collapsible = (props: CollapsibleProps) => {
  const { title = "click me", children } = props;

  const [isVisible, setVisible] = useState(true);
  const hadnleVisibility = () => setVisible(!isVisible);

  return (
    <>
      <div
        onClick={hadnleVisibility}
        style={{ background: "#ddd", width: 300, padding: "0.8rem 1.2rem" }}
      >
        {title}
      </div>
      <AnimatePresence initial={false}>
        {isVisible && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            style={{ overflow: "hidden", border: "1px solid #ddd" }}
          >
            <div style={{ padding: "0.8rem 1.2rem", width: 300 }}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Collapsible;
