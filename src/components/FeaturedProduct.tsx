import Link from "next/link";
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductType } from "@/types";
import { cookies } from "next/headers";
import { Suspense } from "react";
import { CircularProgress } from "@nextui-org/react";

export default async function FeaturedProduct() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?limit=10`,
    {
      cache: "no-store",
    }
  );
  const data: ProductType[] = await res.json();
  const isLogin = cookies().get("Authorization") ? true : false;
  return (
    <>
      <div className="flex flex-col justify-center items-center p-10 gap-14">
        <div className="w-full flex items-center">
          <div className="flex-grow text-center">
            <h1 className="text-2xl">
              Explore a Selection of the Maisons Creations
            </h1>
          </div>
          <Link
            href="/products"
            className="ml-auto border-b-2 border-black flex items-center gap-2"
          >
            See More
            <FontAwesomeIcon
              icon={["fas", "arrow-right-long"]}
              className="w-[20px]"
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <Suspense
            fallback={
              <>
                <CircularProgress color="default" aria-label="Loading..." />
              </>
            }
          >
            {data.map((e) => (
              <ProductCard
                key={e._id}
                data={e}
                isAddWishlist
                isLogin={isLogin}
              />
            ))}
          </Suspense>
        </div>
      </div>
    </>
  );
}
