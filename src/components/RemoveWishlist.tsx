"use client";
import { faHeart, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function RemoveWishlist({
  productId,
  getData,
}: {
  productId: string;
  getData?: () => void;
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleWishlist = async () => {
    setIsLiked(!isLiked);
    console.log(productId, "untuk remove wishlist");
    try {
      setIsLoading(true);
      const res = await fetch("/api/wishlist/" + productId, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      getData?.();
      setIsLoading(false);
      if (!res.ok) throw await res.json();
    } catch (error: any) {
      setIsLoading(false);
      console.log(error.msg);
    }
  };
  return (
    <>
      <Button
        radius="none"
        color="danger"
        variant="faded"
        isIconOnly
        aria-label="Like"
        className="border-0 bg-transparent rounded-full"
        onClick={() => handleWishlist()}
        isLoading={isLoading}
      >
        <FontAwesomeIcon icon={faXmark} className="text-gray-500" size="xl" />
      </Button>
    </>
  );
}
