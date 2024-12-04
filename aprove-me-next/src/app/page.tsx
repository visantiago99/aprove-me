"use client";
import { AssignorDialog } from "@/components/assignors/AssignorDialog";
import { PayableDialog } from "@/components/payables/PayableDialog";
import PayablesTable from "@/components/payables/PayablesTable";
import { isTokenExpired } from "@/lib/verifyToken";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const token = localStorage.getItem("accessToken");
  const isInvalidToken = !token || isTokenExpired(token);

  useEffect(() => {
    if (isInvalidToken) {
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    }
  }, []);

  return (
    <main className="flex items-center justify-items-center min-h-screen p-8">
      {!isInvalidToken ? (
        <div className="flex flex-col w-full">
          <div className="w-full flex justify-end gap-4">
            <PayableDialog />
            <AssignorDialog />
          </div>
          <PayablesTable />
        </div>
      ) : (
        <div className="w-full flex justify-center">
          <h1 className="text-4xl">Token inválido, redirecionando para login...</h1>
        </div>
      )}
    </main>
  );
}
