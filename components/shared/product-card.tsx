import { Product } from "@/app/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Title } from ".";
import { Button } from "../ui";

interface Props {
  className?: string;
  product: Product;
}

export const ProductCard: FC<Props> = ({ className, product }) => {
  const { name, price, likes, weight, feature, description, imageUrl } =
    product;

  const likesToStr = (likes: number) => {
    if (likes > 1000) {
      let str = likes.toString();
      return str[0] + "." + str[1] + "к";
    } else return String(likes);
  };

  const getFeatureUrl = (
    feature: "crown" | "pepper" | "broccoli" | "nogluten"
  ) => {
    switch (feature) {
      case "crown":
        return "https://kcdn.tanuki.ru/product-tags/1/LzMHzh4vNW8ycW6ncb956gFVekMxcG-u.png?width=40&height=40";
      case "broccoli":
        return "https://kcdn.tanuki.ru/product-tags/1/46xWMH7PAmEAOG6zozG-_RxLnIaNKtrh.png?width=40&height=40";
      case "pepper":
        return "https://kcdn.tanuki.ru/product-tags/1/SwQgVo8eEcslZuM-QbnmH4N1VQuBXa4Y.png?width=40&height=40";
      case "nogluten":
        return "https://kcdn.tanuki.ru/product-tags/1/PYRQmOxEmamJ6VM6u4Hn2UBPpUavb1jT.png?width=40&height=40";
    }
  };

  return (
    <div
      className={cn(
        "border rounded-lg hover:shadow-md transition-shadow	",
        className
      )}
    >
      <Link href="#" className="relative">
        <Image
          className="pt-3"
          src={imageUrl}
          width={500}
          height={500}
          alt={name}
        />
        {feature && (
          <div className="absolute left-3 bottom-0">
            <Image
              src={getFeatureUrl(feature)}
              width={30}
              height={30}
              alt={feature}
              className="border rounded-lg p-1"
            />
          </div>
        )}
      </Link>
      <div className="p-3 ">
        <div className="flex items-center gap-3 mb-2">
          <div>{weight} г</div>
          {likes && (
            <div className="flex items-center gap-1 border p-0.5 rounded-lg">
              <Image
                src="https://tanukifamily.ru/static/media/thumbup.40975529.avif"
                width={15}
                height={15}
                alt="like"
              />
              {likesToStr(likes)}
            </div>
          )}
        </div>
        <Title text={name} size="md" className="font-bold" />
        <div className="mb-5">{description}</div>
        <Button
          variant="secondary"
          className="w-full rounded-full hover:bg-background hover:border hover:border-black transition-all duration-300 h-10 mb-1"
        >
          <div className="font-bold text-lg">{price} ₽</div>
        </Button>
      </div>
    </div>
  );
};
