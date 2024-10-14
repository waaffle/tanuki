export type Product = {
    id: string;
    name: string;
    price: number;
    likes?: number;
    weight: number;
    feature?: "crown" | "pepper" | "broccoli" | "nogluten";
    description: string;
    imageUrl: string;
};

export type Group = {
    title: string,
    value: number
}