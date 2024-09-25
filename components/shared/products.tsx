import { cn } from "@/lib/utils";
import { FC } from "react";
import { ProductsGroupList } from ".";
import { Product } from "@/app/types";

interface Props {
  className?: string;
}

const rolls = [
  {
    name: "Ролл Филадельфия",
    price: 780,
    likes: 9600,
    weight: 245,
    feature: "crown",
    description: "лосось, огурец, авокадо, кунжут, сыр, лук, 6 шт.",
    imageUrl:
      "https://kcdn.tanuki.ru/images/1/gWf8acz3GQszxD9JQF_I0nJRbxCBgDuP.jpg?width=900&height=900",
  },
  {
    name: "Ролл Филадельфия",
    price: 780,
    likes: 9600,
    weight: 245,
    feature: "pepper",
    description: "лосось, огурец, авокадо, кунжут, сыр, лук, 6 шт.",
    imageUrl:
      "https://kcdn.tanuki.ru/images/1/gWf8acz3GQszxD9JQF_I0nJRbxCBgDuP.jpg?width=900&height=900",
  },
  {
    name: "Ролл Филадельфия",
    price: 780,
    likes: 9600,
    weight: 245,
    feature: "nogluten",
    description: "лосось, огурец, авокадо, кунжут, сыр, лук, 6 шт.",
    imageUrl:
      "https://kcdn.tanuki.ru/images/1/gWf8acz3GQszxD9JQF_I0nJRbxCBgDuP.jpg?width=900&height=900",
  },
  {
    name: "Ролл Филадельфия",
    price: 780,
    likes: 9600,
    weight: 245,
    feature: "broccoli",
    description: "лосось, огурец, авокадо, кунжут, сыр, лук, 6 шт.",
    imageUrl:
      "https://kcdn.tanuki.ru/images/1/gWf8acz3GQszxD9JQF_I0nJRbxCBgDuP.jpg?width=900&height=900",
  },
];

export const Products: FC<Props> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <ProductsGroupList groupName="Роллы" products={rolls as Product[]} />
    </div>
  );
};
