import { ReactNode } from "react";
import clsx from "clsx";

import "./Button.scss";

interface ButtonProps {
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: ReactNode;
}

const Button = ({
  className,
  disabled = false,
  type = "button",
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx("button", className)}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
