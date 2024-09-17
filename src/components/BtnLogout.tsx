"use client";

import { deleteCookie } from "@/app/actions";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function BtnLogout() {
  const router = useRouter();
  const handleLogout = async () => {
    // panggil server actions
    await deleteCookie();
    // balik ke home
    router.push("/");
    router.refresh();
  };
  return (
    <Button
      color="danger"
      variant="flat"
      className="w-full"
      onPress={() => handleLogout()}
    >
      Logout
    </Button>
  );
}
