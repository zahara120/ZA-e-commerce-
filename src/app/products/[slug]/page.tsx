import AddToWishlist from "@/components/AddToWishlist";
import ProductDetailCard from "@/components/ProductDetailCard";
import { ProductType } from "@/types";
import { Button } from "@nextui-org/react";
import { formatRupiah } from "../../../db/helpers/format";

import type { Metadata, ResolvingMetadata } from "next";
import { cookies } from "next/headers";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const product: ProductType = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${slug}`
  ).then((res) => res.json());

  return {
    title: "ZA - " + product.name,
    description: product.excerpt,
    openGraph: {
      images: [product.thumbnail],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/` + params.slug
  );
  const product: ProductType = await res.json();
  const isLogin = cookies().get("Authorization") ? true : false;
  return (
    <>
      <div className="flex items-center justify-center min-h-screen gap-10">
        <div className="overflow-y-auto">
          {product.images.map((e, idx) => (
            <ProductDetailCard url={e} key={idx} />
          ))}
        </div>
        <div className="flex flex-col gap-5 sticky top-5 self-start px-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              {isLogin && <AddToWishlist productId={product._id} />}
            </div>
            <p className="text-xs text-gray-400">
              (Description) {product.description}
            </p>
            <p className="text-xs text-gray-500">Tags : {product.tags}</p>
            <p className="text-md mt-2 text-gray-500">
              Price : {formatRupiah(product.price)}
            </p>
          </div>
          <Button
            className="bg-black text-white w-full mt-3"
            variant="flat"
            type="submit"
          >
            Contact Concierge Services
          </Button>
          <p className="text-xs text-gray-400">
            Our Digital Advisor is available if you have any question on this
            product. Contact us
          </p>
          <div className="flex flex-col gap-2">
            <h1>Product details</h1>
            <p className="text-xs text-gray-400">(Excerpt) {product.excerpt}</p>
          </div>
        </div>
      </div>
    </>
  );
}
