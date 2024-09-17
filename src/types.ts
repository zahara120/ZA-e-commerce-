import { ObjectId } from "mongodb";

export interface ProductType {
  _id: string;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export interface UserType {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface WishlistType {
  _id?: ObjectId;
  userId: ObjectId;
  productId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
  detailProduct?: ProductType;
}
