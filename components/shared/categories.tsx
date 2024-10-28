"use client";

import { useCategoryStore } from "@/app/store/category";
import { Container } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FC, useRef } from "react";
import "swiper/css/navigation";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper";
import { Navigation } from "swiper/modules";

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
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className={cn("sticky top-0 bg-white z-10", className)}>
      <Container className={"relative"}>
        <button
          ref={prevRef}
          className="absolute left-0 top-1.5 w-10 h-14 z-10 flex items-center justify-center shadow-[10px_0px_10px_rgba(255,255,255,1)] bg-white"
        >
          <div className=" bg-no-repeat bg-center-center w-4 h-5  bg-[url('../public/assets/images/chevron-left-solid.svg')] "></div>
        </button>
        <button
          ref={nextRef}
          className="absolute right-0 top-1.5 w-10 h-14 z-10 flex items-center justify-center shadow-[-10px_0px_10px_rgba(255,255,255,1)] bg-white"
        >
          <div className=" bg-no-repeat bg-center-center w-4 h-5  bg-[url('../public/assets/images/chevron-left-solid.svg')] rotate-180"></div>
        </button>
        <Swiper
          slidesPerView="auto"
          spaceBetween={0}
          navigation={{
            disabledClass: "disabled-class",
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          className="mySwiper"
          onBeforeInit={(swiper: SwiperCore) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          modules={[Navigation]}
        >
          {cats.map(({ name, id }, index) => (
            <SwiperSlide key={index} className="mr-2 basis-0 py-4">
              <a href={`/#${name}`}>
                <Button
                  variant={currentCategory === id ? "secondary" : "outline"}
                  className={"rounded-2xl text-xl text-muted-foreground"}
                  key={index}
                >
                  {name}
                </Button>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};
