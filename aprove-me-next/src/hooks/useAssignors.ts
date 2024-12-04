import { AssignorFormFields } from "@/schemas/AssignorSchemas";
import { useRequestWithAuth } from "./useRequestWithAuth";

export const useAssignors = () => {
  const requestWithAuth = useRequestWithAuth();

  const getAssignors = async () => {
    return await requestWithAuth("http://localhost:3001/integrations/assignor");
  };

  const getAssignorById = async (id: string) => {
    return await requestWithAuth(
      `http://localhost:3001/integrations/assignor/${id}`
    );
  };

  const createAssignor = async (data: AssignorFormFields) => {
    const options: RequestInit = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    return await requestWithAuth(
      "http://localhost:3001/integrations/assignor",
      options
    );
  };

  return { getAssignors, getAssignorById, createAssignor };
};
