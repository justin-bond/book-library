import { ReactNode } from "react";
import clsx from "clsx";

import "./Card.scss";

export interface CardProps {
  children: ReactNode;
  className?: string;
  rounded?: boolean;
}

const Card = ({ children, className, rounded = true, ...rest }: CardProps) => {
  const cName = clsx("card", className, {
    rounded: rounded,
  });

  return (
    <div className={cName} {...rest}>
      {children}
    </div>
  );
};

export default Card;
