import { AuthFormData } from "@/utils/validationSchemas";

export const registerUser = async (data: AuthFormData) => {
  const res = await fetch("http://localhost:3001/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      data,
    ),
  });

  if (!res.ok) {
    throw new Error(`Failed to register ${res.statusText}`);
  }

  return res.json();
};

export const loginUser = async (data: AuthFormData) => {
  const res = await fetch("http://localhost:3001/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      data,
    ),
  });

  if (!res.ok) {
    throw new Error(`Failed to login ${res.statusText}`);
  }

  const responseData = await res.json();

  localStorage.setItem("accessToken", responseData.accessToken);

  return responseData;
};