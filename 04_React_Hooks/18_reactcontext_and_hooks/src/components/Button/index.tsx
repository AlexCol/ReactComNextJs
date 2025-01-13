import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onButtonClick?: () => void;
}

function Button({ children, onButtonClick }: ButtonProps) {
  return (
    <button onClick={onButtonClick}>{children}</button>
  )
}

export default Button