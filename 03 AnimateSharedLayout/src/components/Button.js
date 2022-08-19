import { motion } from "framer-motion";

const Button = (props) => {
  const { text, handleClick = Function.prototype, isSelected } = props;

  return (
    <motion.button
      layout
      style={btnStyle}
      whileHover={{ background: "#ddd" }}
      whileTap={{ background: "#ccc" }}
      onClick={handleClick}
    >
      {isSelected && <BgSelector />}
      <motion.span animate={{ color: isSelected ? "#fff" : "#000" }}
      style={{position: 'relative', }}>
        {text}
      </motion.span>
    </motion.button>
  );
};

const btnStyle = {
  border: "none",
  outline: "none",
  padding: "12px 16px",
  backgroundColor: "transparent",
  cursor: "pointer",
  position: "relative",
};

export default Button;

const BgSelector = () => {
  return (
    <motion.div
      layoutId="activeMenuItem"
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        background: "red",
        zIndex: 0,
      }}
    ></motion.div>
  );
};
