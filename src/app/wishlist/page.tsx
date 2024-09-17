"use client";
import WishlistCard from "@/components/WishlistCard";
import { WishlistType } from "@/types";
import { CircularProgress } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function Wishlist() {
  const [product, setProduct] = useState<WishlistType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    setIsLoading(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist`);
    const data: WishlistType[] = await res.json();
    setProduct(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-3xl">Wishlist</h1>
          <h1 className="text-lg">Don’t lose your favorites anymore</h1>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <CircularProgress color="default" aria-label="Loading..." />
          </div>
        ) : (
          <div className="grid grid-cols-3 md:grid-cols-5 justify-items-center items-center gap-4">
            {product.length === 0 ? (
              <div className="col-span-full flex justify-center items-center h-full">
                <h1 className="text-center">
                  our wishlist is waiting to be filled! Discover our selection
                  and add your desired products today.
                </h1>
              </div>
            ) : (
              product.map((e) => (
                <WishlistCard
                  key={String(e?._id)}
                  data={e}
                  isAddWishlist={false}
                  isLogin
                  getData={getData}
                />
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
}
