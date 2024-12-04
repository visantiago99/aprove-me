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

  const updatePayables = async (id: string, data: PayableFormFields) => {
    const options: RequestInit = {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    return await requestWithAuth(
      `http://localhost:3001/integrations/payable/${id}`,
      options
    );
  };

  const deletePayableById = async (id: string) => {
    const options: RequestInit = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    return await requestWithAuth(
      `http://localhost:3001/integrations/payable/${id}`,
      options
    );
  };

  return {
    getPayables,
    createPayables,
    getPayableById,
    updatePayables,
    deletePayableById,
  };
};
