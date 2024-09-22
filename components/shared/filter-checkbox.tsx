"use client";

import { FC, useState } from "react";
import { Checkbox } from "../ui";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  name: string;
  value: string;
  text: string;
}

export const FilterCheckbox: FC<Props> = ({ className, name, value, text }) => {
  const [checked, setChecked] = useState(false);
  const onCheckedChange = () => {
    setChecked((state) => !state);
  };
  return (
    <div className={cn("flex items-center gap-1 space-x-2", className)}>
      <Checkbox
        id={name}
        value={value}
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
      <label
        htmlFor={name}
        className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
      >
        {text}
      </label>
    </div>
  );
};
