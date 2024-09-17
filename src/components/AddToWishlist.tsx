"use client";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function AddToWishlist({ productId }: { productId: string }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleWishlist = async () => {
    setIsLiked(!isLiked);
    console.log(productId, "untuk add wishlist");
    try {
      setIsLoading(true);
      const res = await fetch("/api/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
        }),
      });
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
        <FontAwesomeIcon
          icon={faHeart}
          className={isLiked ? "text-red-500" : "text-gray-300"}
          size="xl"
        />
      </Button>
    </>
  );
}
