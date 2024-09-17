"use server";

import { cookies } from "next/headers";

export async function getCookie(): Promise<boolean> {
  const cookie = cookies().get("Authorization") ? true : false;
  return cookie;
}

export async function deleteCookie() {
  cookies().delete("Authorization");
}
