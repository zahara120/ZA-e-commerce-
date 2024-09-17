import { Image } from "@nextui-org/react";

export default function ProductDetailCard({ url }: { url: string }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[hsla(0,0%,95%,1)] to-[hsla(0,0%,88%,1)] h-[80vh]">
        <Image
          radius="none"
          className="w-full"
          isZoomed
          alt="NextUI hero Image with delay"
          src={url}
        />
      </div>
    </>
  );
}
