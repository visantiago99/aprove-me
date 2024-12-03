import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import PayableForm from "./PayableForm"

export function PayableDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Adicionar Recebível</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Crie um recebível</DialogTitle>
          <DialogDescription>
            Preencha os campos para registrar um novo recebível
          </DialogDescription>
        </DialogHeader>
        <PayableForm />
      </DialogContent>
    </Dialog>
  )
}
