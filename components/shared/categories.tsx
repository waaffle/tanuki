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
    "Скидка 15%",
    "Новинки",
    "Хиты продаж",
    "Роллы",
    "Суши",
    "Сашими",
    "Сеты",
    "Дим-самы",
    "Веган-меню",
    "Закуски",
    "Салаты",
    "Супы",
    "Горячее",
    "Десерты",
  ];

  const activeIndex = 0;

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
            {cats.map((cat, index) => (
              <CarouselItem
                key={index}
                className="p-1.5 min-w-auto inline md:basis-1/12 lg:basis-1/12"
              >
                <a>
                  <Button
                    variant={activeIndex === index ? "secondary" : "outline"}
                    className={"rounded-2xl text-base"}
                    key={index}
                  >
                    {cat}
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
