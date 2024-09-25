import { FC, createElement } from "react";
import { cn } from "../../lib/utils";

interface Props {
  text: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
}

export const Title: FC<Props> = ({ text, size = "lg", className = "" }) => {
  const type = {
    sm: "h5",
    md: "h4",
    lg: "h3",
    xl: "h2",
    "2xl": "h1",
  };
  const fontStyle = {
    sm: "font-medium text-sm text-black",
    md: "font-medium text-base text-black",
    lg: "font-medium text-lg text-black",
    xl: "font-medium text-2xl text-black",
    "2xl": "font-medium text-4xl text-black",
  };
  return createElement(
    type[size],
    { className: cn(fontStyle[size], className) },
    text
  );
};
