"use server";

import { cookies } from "next/headers";

export const getCookies = () => {
  return cookies().get("accessToken");
};
