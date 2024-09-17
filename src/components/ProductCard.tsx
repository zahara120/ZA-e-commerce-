"use client";
import { Card, CardHeader, Image } from "@nextui-org/react";
import Link from "next/link";
import AddToWishlist from "./AddToWishlist";
import RemoveWishlist from "./RemoveWishlist";
import { ProductType } from "@/types";
import { formatRupiah } from "@/db/helpers/format";
export default function ProductCard({
  data,
  isAddWishlist = true,
  isLogin,
  getData,
}: {
  data: ProductType;
  isAddWishlist: boolean;
  isLogin: boolean;
  getData?: () => void;
}) {
  return (
    <Card
      radius="none"
      fullWidth={false}
      className="bg-gradient-to-b from-[hsla(0,0%,95%,1)] to-[hsla(0,0%,88%,1)]"
    >
      <CardHeader className="absolute z-10 right-0 flex-col !items-end">
        {isLogin && (
          <>
            {isAddWishlist ? (
              <>
                {/* nanti di kasih action mau add atau remove wishlist default nya add wishlist*/}
                <AddToWishlist productId={data._id} />
              </>
            ) : (
              <>
                {/* atau */}
                <RemoveWishlist productId={data._id} getData={getData} />
              </>
            )}
          </>
        )}
      </CardHeader>
      <Link href={`/products/${data.slug}`}>
        <CardHeader className="absolute z-10 bottom-1 flex-col !items-start">
          <p className="text-tiny text-black/60 uppercase font-bold">
            {data.name}
          </p>
          <h1 className="text-black font-medium text-large">
            {formatRupiah(data.price)}
          </h1>
        </CardHeader>
      </Link>
      <Image
        isZoomed
        radius="none"
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-[410px] object-fit"
        src={data.thumbnail}
      />
    </Card>
  );
}
