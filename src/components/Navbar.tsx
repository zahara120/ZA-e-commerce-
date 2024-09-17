"use client";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { deleteCookie } from "@/app/actions";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

export default function Navbars() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const checkCookie = () => {
      const cookieValue = Cookies.get("Authorization");
      if (cookieValue) {
        setIsLogin(true);
      }
    };

    checkCookie();
  }, [pathname]);
  return (
    <Navbar className="mb-4">
      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarBrand>
          <p className="font-bold text-inherit text-2xl">ZA</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            className={`link ${pathname === "/" ? "font-bold" : ""}`}
            href="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className={`link ${pathname === "/products" ? "font-bold" : ""}`}
            href="/products"
          >
            Products
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/wishlist">
            <Button
              radius="none"
              color="danger"
              variant="faded"
              isIconOnly
              aria-label="Like"
              className="border-0 bg-transparent rounded-full"
            >
              {pathname === "/wishlist" ? (
                <FontAwesomeIcon icon={faHeartSolid} size="xl" />
              ) : (
                <FontAwesomeIcon icon={faHeartRegular} size="xl" />
              )}
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          {!isLogin ? (
            <Link
              color="foreground"
              href="/login"
              className={`link ${pathname === "/login" ? "font-bold" : ""}`}
            >
              Log in
            </Link>
          ) : (
            <Button
              isIconOnly
              color="danger"
              variant="flat"
              className="capitalize"
              isLoading={isLoading}
              onPress={async () => {
                setIsLoading(true);
                await deleteCookie();
                setIsLoading(false);
                setIsLogin(false);
                router.push("/login");
                router.refresh();
              }}
            >
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="text-red-500"
              />
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
