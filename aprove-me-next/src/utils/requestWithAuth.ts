import { useRouter } from "next/router";
import { isTokenExpired } from "./verifyToken";

export const requestWithAuth = async (url: string, options?: RequestInit) => {
  const router = useRouter();
  const token = localStorage.getItem("accessToken");

  if (!token || isTokenExpired(token)) {
    router.push("/auth/login");
    throw new Error("Token expired or not found");
  }

  const headers = {
    ...options?.headers,
    Authorization: `Bearer ${token}`,
  };

  const res = await fetch(url, { ...options, headers });

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  return res.json();
};