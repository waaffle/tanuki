import { FC, createElement } from "react";
import { cn } from "../../lib/utils";

interface Props {
  text: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
}

export const Title: FC<Props> = ({ text, size = "sm", className = "" }) => {
  const type = {
    sm: "h5",
    md: "h4",
    lg: "h3",
    xl: "h2",
    "2xl": "h1",
  };
  const fontStyle = {
    sm: "font-medium text-sm",
    md: "font-medium text-base",
    lg: "font-medium text-lg",
    xl: "font-semibold text-2xl",
    "2xl": "font-semibold text-4xl",
  };
  return createElement(
    type[size],
    { className: cn(fontStyle[size], className) },
    text
  );
};
