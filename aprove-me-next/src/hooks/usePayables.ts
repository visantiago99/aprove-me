import { useRequestWithAuth } from "./useRequestWithAuth";

export const usePayables = () => {
  const requestWithAuth = useRequestWithAuth();

  const getPayables = async () => {
    return await requestWithAuth("http://localhost:3001/integrations/payable");
  };

  return { getPayables };
};