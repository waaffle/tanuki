import { cn } from "@/lib/utils";
import { FC } from "react";
import { ProductCard, Title } from ".";
import { Product } from "@/app/types";

interface Props {
  className?: string;
  groupName: string;
  products: Product[];
}

export const ProductsGroupList: FC<Props> = ({
  className,
  groupName,
  products,
}) => {
  return (
    <div className={cn(className)}>
      <Title text={groupName} size="2xl" className="mb-6" />
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};
