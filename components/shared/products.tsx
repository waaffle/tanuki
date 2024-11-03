import { cn } from "@/lib/utils";
import { FC } from "react";
import { ProductsGroupList } from ".";
import { Product } from "@/app/types";

interface Props {
  className?: string;
}

const rolls = [
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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
    id: "4",
    name: "Ролл Филадельфия",
    price: 780,
    likes: 9600,
    weight: 245,
    feature: "broccoli",
    description: "лосось, огурец, авокадо, кунжут, сыр, лук, 6 шт.",
    imageUrl:
      "https://kcdn.tanuki.ru/images/1/gWf8acz3GQszxD9JQF_I0nJRbxCBgDuP.jpg?width=900&height=900",
  },

  {
    id: "5",
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
    id: "6",
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
    id: "7",
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
    id: "8",
    name: "Ролл Филадельфия",
    price: 780,
    likes: 9600,
    weight: 245,
    feature: "broccoli",
    description: "лосось, огурец, авокадо, кунжут, сыр, лук, 6 шт.",
    imageUrl:
      "https://kcdn.tanuki.ru/images/1/gWf8acz3GQszxD9JQF_I0nJRbxCBgDuP.jpg?width=900&height=900",
  },

  {
    id: "9",
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
    id: "10",
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
    id: "11",
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
    id: "12",
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
      <ProductsGroupList
        title="Хиты продаж"
        categoryId={1}
        products={rolls as Product[]}
      />
      <ProductsGroupList
        title="Роллы"
        categoryId={2}
        products={rolls as Product[]}
      />
    </div>
  );
};
