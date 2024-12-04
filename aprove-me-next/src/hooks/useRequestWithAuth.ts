import { isTokenExpired } from "@/lib/verifyToken";
import { useRouter } from "next/navigation";

export const useRequestWithAuth = () => {
  const router = useRouter();

  return async (url: string, options?: RequestInit) => {
    const token = localStorage.getItem("accessToken");

    if (!token || isTokenExpired(token)) {
      router.push("/login");
      alert("Token expirado ou não encontrado");
    }

    const headers = {
      ...options?.headers,
      Authorization: `Bearer ${token}`,
    };

    const res = await fetch(url, { ...options, headers });

    if (!res.ok) {
      console.error(`Request failed: ${res.status}`);
    }

    return res.json();
  };
};
