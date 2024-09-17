import { Card, CardHeader, Image } from "@nextui-org/react";
import Link from "next/link";

export default function Banner({
  category,
  title,
  url,
}: {
  category: string;
  title: string;
  url: string;
}) {
  return (
    <>
      <Card radius="none" className="col-span-12 sm:col-span-4 h-[600px]">
        <CardHeader className="absolute z-10 bottom-5 flex flex-col gap-2 !items-center">
          <p className="text-sm text-white/70 uppercase">{category}</p>
          <p className="text-3xl text-white/70 uppercase font-bold">{title}</p>
          <Link href="#">
            <h4 className="text-white underline font-medium text-md">
              Discover the Exclusive Digital Pre-launch
            </h4>
          </Link>
        </CardHeader>
        <Image
          radius="none"
          isZoomed
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={`/${url}.jpg`}
        />
      </Card>
    </>
  );
}
