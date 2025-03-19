"use client";

import { cn } from "@/lib/utils";
import { FC, useEffect, useRef, useState } from "react";
import { ProductCard, Title } from ".";
import { Group, Product } from "@/app/types";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/app/store/category";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  className?: string;
  categoryId: number;
  listClassName?: string;
  products: Product[];
}

export const ProductsGroupList: FC<Props> = ({
  title,
  className,
  categoryId,
  listClassName,
  products,
}) => {
  const setCurrentCategory = useCategoryStore(
    (state) => state.setCurrentCategory
  );

  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.3,
  });
  const router = useRouter();

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setCurrentCategory(categoryId);
      router.replace(`#${title}`, {scroll: false} );
    }
  }, [title, categoryId, intersection?.isIntersecting]);

  return (
    <div ref={intersectionRef} className={cn("mb-6 scroll-mt-16", className)} id={title}>
      <Title text={title} size="2xl" className="mb-6" />
      <div className={cn("grid grid-cols-4 gap-4", listClassName)}>
        {products.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};
