export type Product = {
    name: string;
    price: number;
    likes?: number;
    weight: number;
    feature?: "crown" | "pepper" | "broccoli" | "nogluten";
    description: string;
    imageUrl: string;
};