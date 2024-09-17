import Wishlist from "@/db/models/Wishlist";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const result = await Wishlist.deleteWishlist(params.id);
    return Response.json({ msg: result });
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
