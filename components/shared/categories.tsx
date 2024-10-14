"use client";

import { useCategoryStore } from "@/app/store/category";
import { Container } from "@/components/shared";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
}

export const Categories: FC<Props> = ({ className }) => {
  const cats = [
    {
      name: "Хиты продаж",
      id: 1,
    },
    {
      name: "Роллы",
      id: 2,
    },
    {
      name: "Суши",
      id: 3,
    },
    {
      name: "Сашими",
      id: 4,
    },
    {
      name: "Сеты",
      id: 5,
    },
    {
      name: "Дим-самы",
      id: 6,
    },
    {
      name: "Веган-меню",
      id: 7,
    },
    {
      name: "Закуски",
      id: 8,
    },
    {
      name: "Салаты",
      id: 9,
    },
    {
      name: "Супы",
      id: 10,
    },
  ];

  const currentCategory = useCategoryStore((state) => state.currentCategory);

  return (
    <div className={cn("sticky top-0 bg-white z-10", className)}>
      <Container className={"max-w-[1326px]"}>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="pl-3 py-5">
            {cats.map(({ name, id }, index) => (
              <CarouselItem
                key={index}
                className="p-1.5 min-w-auto inline md:basis-1/12 lg:basis-1/12"
              >
                <a href={`/#${name}`}>
                  <Button
                    variant={currentCategory === id ? "secondary" : "outline"}
                    className={"rounded-2xl text-lg "}
                    key={index}
                  >
                    {name}
                  </Button>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </div>
  );
};
