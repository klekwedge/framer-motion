import { motion } from "framer-motion";


interface ButtonProps {
  text: string;
  handleClick: () => void
}

const Button = (props:ButtonProps) => {
  const { text, handleClick = Function.prototype } = props;

  return (
    <motion.button
      style={btnStyle}
      whileHover={{ background: "#ddd" }}
      whileTap={{ background: "#ccc" }}
      onClick={() => handleClick()}
    >{text}</motion.button>
  );
};

const btnStyle = {
  border: "none",
  outline: "none",
  padding: "12px 16px",
  backgroundColor: "#f1f1f1",
  cursor: "pointer",
};
export default Button;
