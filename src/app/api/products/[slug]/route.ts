import Product from "@/db/models/Product";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    const data = await Product.getById(slug);
    return Response.json(data);
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
