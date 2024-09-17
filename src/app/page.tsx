import Banner from "@/components/Banner";
import DetailInfoEcommerce from "@/components/DetailInfoEcommerce";
import FeaturedProduct from "@/components/FeaturedProduct";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center gap-20 min-h-screen">
        <div className="flex flex-col gap-14 text-center">
          <Banner
            category="WOMEN"
            title="Monogram Signature Handbags"
            url="2"
          />
          <FeaturedProduct />
        </div>
        <DetailInfoEcommerce />
        <div className="flex flex-col gap-14 text-center">
          <div className="flex flex-col gap-3 text-center">
            <h1 className="text-sm">MEN</h1>
            <h1 className="text-2xl">New Formal</h1>
            <Link className="underline" href="/products">
              Discover the Collection
            </Link>
          </div>
          <div className="flex flex-col gap-14 text-center">
            <Banner category="MEN" title="New Formal" url="3" />
            <FeaturedProduct />
          </div>
        </div>
      </main>
    </>
  );
}
