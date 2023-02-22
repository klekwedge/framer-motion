import { useState } from "react";

import classes from "./Form.module.scss";
import { Button } from "../Button/Button";

interface FormProps {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

const Form = ({ handleClick, title }: FormProps) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className={classes.form}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <Button onClick={() => handleClick(email, pass)}>{title}</Button>
    </div>
  );
};

export { Form };
