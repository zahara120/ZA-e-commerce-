import Product from "@/db/models/Product";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("search");
    const limit = searchParams.get("limit");
    const page = searchParams.get("page");

    const products = await Product.getAll(query, limit, page);
    return Response.json(products);
  } catch (error) {
    return Response.json(
      {
        msg: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}
