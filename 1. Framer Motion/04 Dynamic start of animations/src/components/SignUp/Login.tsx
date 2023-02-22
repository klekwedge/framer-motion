import { Form } from "./Form";

interface LoginProps {
  closeModal: () => void;
}

export const Login = ({ closeModal }: LoginProps) => {
  const handleLogin = (email: string, pass: string) => {
    closeModal();
  };

  return <Form handleClick={handleLogin} title="Login" />;
};
