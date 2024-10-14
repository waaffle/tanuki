"use client";

import { FC, ReactNode, useState } from "react";
import { Checkbox } from "../ui";
import { cn } from "@/lib/utils";

interface Props {
  value: string;
  text: string;
  endAdornment?: ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}

export const FilterCheckbox: FC<Props> = ({
  value,
  text,
  endAdornment,
  onCheckedChange,
  checked,
}) => {
  return (
    <div className={cn("flex items-center space-x-2")}>
      <Checkbox
        value={value}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="rounded-[8px] w-6 h-6"
        id={`checkbox-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(value)}`}
        className="text-lg leading-none font-medium flex-1 cursor-pointer"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
