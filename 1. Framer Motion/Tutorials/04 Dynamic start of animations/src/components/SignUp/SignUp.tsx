import { Form } from "./Form";

interface SignUpProps {
  closeModal: () => void;
}

export const SignUp = ({ closeModal }: SignUpProps) => {
  const handleRegister = (email: string, pass: string) => {
    closeModal();
  };

  return <Form handleClick={handleRegister} title="Register" />;
};
