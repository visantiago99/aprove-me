import { PayableFormFields } from "@/schemas/PayableSchemas";
import { useRequestWithAuth } from "./useRequestWithAuth";

export const usePayables = () => {
  const requestWithAuth = useRequestWithAuth();

  const getPayables = async () => {
    return await requestWithAuth("http://localhost:3001/integrations/payable");
  };

  const getPayableById = async (id: string) => {
    return await requestWithAuth(
      `http://localhost:3001/integrations/payable/${id}`
    );
  };

  const createPayables = async (data: PayableFormFields) => {
    const options: RequestInit = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    return await requestWithAuth(
      "http://localhost:3001/integrations/payable",
      options
    );
  };

  return { getPayables, createPayables, getPayableById };
};
