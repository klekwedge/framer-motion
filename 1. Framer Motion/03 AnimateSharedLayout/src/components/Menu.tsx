import { motion, AnimateSharedLayout } from "framer-motion";
import { useState } from "react";

const menuData = ["Short", "Very Loooooooong item", "Normal item"];

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        background: "#eee",
        padding: "1rem",
        borderRadius: "25px",
        marginBottom: 40,
      }}
    >
      <AnimateSharedLayout>
        {menuData.map((item, index) => (
          <MenuItem
            key={item}
            item={item}
            isSelected={activeIndex === index}
            handleClick={() => setActiveIndex(index)}
          />
        ))}
      </AnimateSharedLayout>
    </div>
  );
};

interface MenuItemProps {
  item: string;
  handleClick: () => void;
  isSelected: boolean;
}

const MenuItem = (props: MenuItemProps) => {
  const { item, isSelected, handleClick } = props;

  return (
    <motion.div
      onClick={handleClick}
      style={{ margin: "0 0.5rem", fontWeight: 900, position: "relative" }}
      initial={{ color: "#000" }}
      animate={{ color: isSelected ? "rgb(255, 0, 0)" : "#000" }}
    >
      {isSelected && <ActiveLine />}
      {item}
    </motion.div>
  );
};

const ActiveLine = () => {
  return (
    <motion.div
      layoutId="activeItem"
      style={{
        width: "calc(100% - 10px)",
        height: "4px",
        position: "absolute",
        bottom: "-6px",
        left: "5px",
        background: "rgb(255, 0, 0)",
      }}
    ></motion.div>
  );
};

export default Menu;
