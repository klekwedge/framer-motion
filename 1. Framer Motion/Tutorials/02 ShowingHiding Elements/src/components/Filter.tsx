import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IData } from "../data";
import Button from "./Button";

interface FilterProps {
  data: IData[];
}

const boxStyle = {
  float: "left",
  backgroundColor: "#2196F3",
  color: "#ffffff",
  width: "100px",
  lineHeight: "100px",
  textAlign: "center",
  margin: "2px",
};

const Filter = ({ data }: FilterProps) => {
  const [cards, setCards] = useState(
    data.filter((el) => el.category === "cars")
  );

  function getCategories() {
    const categories: string[] = [];

    data.forEach((item) => {
      if (categories.includes(item.category)) {
        return categories;
      }
      return [...categories, item.category];
    });

    return categories;
  }

  const buttons: string[] = getCategories();

  const handleFilter = (selector: string) => {
    setCards(data.filter((el) => el.category === selector));
  };

  return (
    <div>
      <div>
        {buttons.map((btn) => (
          <Button
            key={btn}
            text={btn}
            handleClick={() => handleFilter(btn)}
          ></Button>
        ))}
      </div>
      <div style={{ overflow: "hidden", maxWidth: 400 }}>
        <AnimatePresence initial={false} exitBeforeEnter>
          {cards.map((el) => (
            <motion.div
              key={el.title}
              style={boxStyle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {el.title}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Filter;
