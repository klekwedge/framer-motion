import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import { IData } from "../data";
import Button from "./Button";

interface FilterProps {
  data: IData[];
}

const Filter = ({ data }: FilterProps) => {
  const [cards, setCards] = useState(data);
  const [selected, setSelected] = useState(0);

  const buttons = data.reduce(
    (acc, el) => {
      if (acc.includes(el.category)) return acc;
      return [...acc, el.category];
    },
    ["all"]
  );

  const handleFilter = (selector: string) => {
    if (selector === "all") return setCards(data);
    setCards(data.filter((el) => el.category === selector));
  };

  return (
    <AnimateSharedLayout>
      <motion.div layout>
        <motion.div style={{ background: "#f1f1f1" }}>
          {buttons.map((btn, index) => (
            <Button
              key={btn}
              text={btn}
              handleClick={() => {
                handleFilter(btn);
                setSelected(index);
              }}
              isSelected={selected === index}
            ></Button>
          ))}
        </motion.div>
        <motion.div
          layout
          style={{
            overflow: "hidden",
            maxWidth: 312,
            border: "1px solid #ccc",
          }}
        >
          <AnimatePresence initial={false} exitBeforeEnter>
            {cards.map((el) => (
              <motion.div
                layout
                key={el.title}
                style={boxStyle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {console.log(el.title)}
                {el.title}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimateSharedLayout>
  );
};

const boxStyle = {
  float: "left",
  backgroundColor: "#2196F3",
  color: "#ffffff",
  width: "100px",
  lineHeight: "100px",
  textAlign: "center",
  margin: "2px",
};

export default Filter;
