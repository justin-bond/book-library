import { ReactNode } from "react";
import clsx from "clsx";

import "./Container.scss";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "small";
}

const Container = ({ children, className, size }: ContainerProps) => {
  return <div className={clsx("container", className, size)}>{children}</div>;
};

export default Container;
