import type { Product } from "../types";

export const products: Product[] = [
  {
    id: "1",
    title: "T-shirt",
    price: 25,
    image: "/placeholder.png",
    description: "Soft cotton tee.",
    rating: 4.5,
    tags: ["apparel"],
  },
  {
    id: "2",
    title: "Hoodie",
    price: 50,
    image: "/placeholder.png",
    description: "Cozy everyday hoodie.",
    rating: 4.7,
    tags: ["apparel"],
  },
  {
    id: "3",
    title: "Cap",
    price: 15,
    image: "/placeholder.png",
    description: "Classic cap.",
    rating: 4.2,
    tags: ["accessories"],
  },
  {
    id: "4",
    title: "Bag",
    price: 40,
    image: "/placeholder.png",
    description: "Daily carry bag.",
    rating: 4.1,
    tags: ["accessories"],
  },
  {
    id: "5",
    title: "Shoes",
    price: 80,
    image: "/placeholder.png",
    description: "Lightweight sneakers.",
    rating: 4.4,
    tags: ["footwear"],
  },
];
