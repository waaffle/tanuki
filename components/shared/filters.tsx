import { cn } from "@/lib/utils";
import { FC, createRef, useRef } from "react";
import { FilterCheckbox, Price, RangeSlider, Title } from ".";

interface Props {
  className?: string;
}

export const Filters: FC<Props> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <Title text="Отсортировать" size="xl" className="mb-5" />
      <FilterCheckbox
        name="popular"
        value="1"
        text="По популярности"
        className="mb-3"
      ></FilterCheckbox>
      <FilterCheckbox
        name="news"
        value="2"
        text="Сначала новое"
        className="mb-10"
      ></FilterCheckbox>
      <Price />
    </div>
  );
};
