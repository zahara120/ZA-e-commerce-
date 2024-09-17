import Wishlist from "@/db/models/Wishlist";

export async function GET(request: Request) {
  try {
    const userId = request.headers.get("x-id") as string;
    const data = await Wishlist.getAll(userId);
    return Response.json(data);
  } catch (error) {
    let msgError = "Internal server error";
    let status = 500;

    return Response.json(
      {
        msg: msgError,
      },
      {
        status: status,
      }
    );
  }
}
export async function POST(request: Request) {
  try {
    const userId = request.headers.get("x-id") as string;
    const { productId } = await request.json();
    const result = await Wishlist.addWishlist(productId, userId);
    return Response.json({ msg: result });
  } catch (error) {
    console.log(error, "error dari route");

    let msgError = "Internal server error";
    let status = 500;

    return Response.json(
      {
        msg: msgError,
      },
      {
        status: status,
      }
    );
  }
}
