import { WishlistType, ProductType } from "@/types";
import { db } from "../config";
import { ObjectId } from "mongodb";

class Wishlist {
  static collection() {
    return db.collection<WishlistType>("wishlists");
  }

  static async getAll(userId: string) {
    const agg = [
      {
        $match: {
          userId: new ObjectId(userId), // Ambil dari middleware
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "productId",
          foreignField: "_id",
          as: "detailProduct",
        },
      },
      {
        $unwind: {
          path: "$detailProduct",
          preserveNullAndEmptyArrays: true,
        },
      },
    ];
    const data = await this.collection().aggregate<WishlistType>(agg).toArray();
    return data;
  }

  static async addWishlist(productId: string, userId: string) {
    const result = await db.collection<WishlistType>("wishlists").insertOne({
      userId: new ObjectId(userId), // Ambil dari middleware
      productId: new ObjectId(productId),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return result;
  }

  static async deleteWishlist(id: string) {
    await db
      .collection<WishlistType>("wishlists")
      .deleteOne({ _id: new ObjectId(id) });
    return "berhasil menghapus wishlist";
  }
}

export default Wishlist;
