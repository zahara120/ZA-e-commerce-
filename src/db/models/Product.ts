import { db } from "../config";
import { ProductType } from "@/types";

class Product {
  static collection() {
    return db.collection<ProductType>("products");
  }
  static async getAll(
    search: string | null,
    limit: string | null,
    page: string | null
  ) {
    const numericLimit = limit ? +limit : 10;
    const numericPage = page ? +page : 1;

    const matchStage = search
      ? {
          $match: {
            name: { $regex: search, $options: "i" },
          },
        }
      : { $match: {} };

    const agg = [
      matchStage,
      // {
      //   $sort: {
      //     createdAt: -1,
      //   },
      // },
    ];

    const data = await this.collection()
      .aggregate<ProductType>(agg)
      .skip(numericLimit * (numericPage - 1))
      .limit(numericLimit)
      .toArray();

    return data;
  }
  static async getById(slug: string) {
    const data = await this.collection().findOne({
      slug: slug,
    });
    return data;
  }
}

export default Product;
