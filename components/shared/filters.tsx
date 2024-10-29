import { cn } from "@/lib/utils";
import { FC } from "react";
import { FilterCheckbox, Price, Title } from ".";

interface Props {
  className?: string;
}

export const Filters: FC<Props> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <Title text="Отсортировать" size="xl" className="mb-5" />
      <div className="flex flex-col gap-4 mb-12">
        <FilterCheckbox value="1" text="По популярности"></FilterCheckbox>
        <FilterCheckbox value="2" text="Сначала новое"></FilterCheckbox>
      </div>
      <Price />
    </div>
  );
};
