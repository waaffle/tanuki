"use client";
import { ChangeEvent, FC, useState } from "react";
import { RangeSlider, Title } from ".";
import { cn } from "@/lib/utils";
import { Input } from "../ui";

interface Props {
  className?: string;
}

export const Price: FC<Props> = ({ className }) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(3000);
  const minChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMin(Number(e.target.value));
  };

  const maxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMax(Number(e.target.value));
  };

  const onValueChange = (newValues: number[]) => {
    setMin(newValues[0]);
    setMax(newValues[1]);
  };
  return (
    <div className={cn("border-t-2", className)}>
      <Title className="mt-5" size="xl" text="Цена от и до:" />
      <div className="flex gap-3 mt-5">
        <Input placeholder={String(min)} onChange={minChange} />
        <Input placeholder={String(max)} onChange={maxChange} />
      </div>
      <RangeSlider
        onValueChange={onValueChange}
        className="mt-9"
        value={[min, max]}
        min={0}
        max={3000}
        step={10}
      />
    </div>
  );
};
