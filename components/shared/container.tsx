import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export const Container: FC<Props> = ({ className, children }) => {
  return (
    <div className={cn(className, "max-w-[1400px] mx-auto text-center px-3")}>
      {children}
    </div>
  );
};
