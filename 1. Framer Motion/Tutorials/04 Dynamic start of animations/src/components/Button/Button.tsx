import cn from "classnames";
import { ReactNode } from "react";
import classes from "./Button.module.scss";

interface ButtonProps {
  variant?: string;
  size?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children?: ReactNode;
}

export const Button = ({
  onClick,
  variant = "",
  size = "medium",
  type = "button",
  children,
}: ButtonProps) => {
  const mainCn = cn(classes.button, classes[size], classes[variant]);

  return (
    <button className={mainCn} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
