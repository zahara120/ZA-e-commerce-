"use client";
import { CircularProgress, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { ProductType } from "@/types";
import { getCookie } from "@/app/actions";
import ProductCard from "@/components/ProductCard";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Product() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState<ProductType[]>([]);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const getData = async (pageNumber: number) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?search=${keyword}&page=${pageNumber}`,
        {
          cache: "no-store",
        }
      );
      const newData: ProductType[] = await res.json();

      if (newData.length === 0) {
        setHasMore(false);
      } else {
        setData((prevData) => [...prevData, ...newData]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setHasMore(false);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const checkLogin = async () => {
      const loginStatus = await getCookie();
      setIsLogin(loginStatus);
    };

    checkLogin();
  }, []);

  useEffect(() => {
    setData([]);
    setPage(1);
    setHasMore(true);
    getData(1);
  }, [keyword]);

  const loadMoreData = () => {
    if (!isLoading && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      getData(nextPage);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="mx-4">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[20rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500",
            }}
            placeholder="Type to search..."
            size="sm"
            type="keyword"
            variant="bordered"
            name="keyword"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={hasMore}
          loader={<h4 className="text-center">Please wait...</h4>}
          endMessage={
            <>
              <div className="mx-4">
                <p className="text-center px-4">No more products to show</p>
              </div>
            </>
          }
        >
          <div className="grid grid-cols-3 md:grid-cols-5 justify-items-center items-center ">
            {data.map((e) => (
              <ProductCard
                key={e._id}
                data={e}
                isAddWishlist
                isLogin={isLogin}
              />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}
