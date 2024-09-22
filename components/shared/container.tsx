import { cn } from "@/lib/utils";
import { FC, PropsWithChildren, ReactNode } from "react";

interface Props {
  className?: string;
}

export const Container: FC<PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("max-w-[1400px] px-3 mx-auto", className)}>
      {children}
    </div>
  );
};
