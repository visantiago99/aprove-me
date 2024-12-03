import { useRequestWithAuth } from "./useRequestWithAuth";

export const usePayables = () => {
  const requestWithAuth = useRequestWithAuth();

  const getPayables = async () => {
    const payablesRes = await requestWithAuth("http://localhost:3001/integrations/payable");
    console.log(payablesRes);
  };

  return { getPayables };
};