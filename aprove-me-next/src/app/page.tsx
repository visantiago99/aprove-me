import { PayableDialog } from "@/components/PayableDialog";
import PayablesTable from "@/components/PayablesTable";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex items-center justify-items-center min-h-screen p-8">
      <div className="flex flex-col w-full">
        <div className="w-full flex justify-end gap-4">
          <PayableDialog />
          <Button className="w-44">
            Adicionar Cedente
          </Button>
        </div>
        <PayablesTable />
      </div>
    </main>
  );
}
