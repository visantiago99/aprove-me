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
import { Edit } from "lucide-react";

interface PayableDialogProps {
  isEdit?: boolean;
  payable?: PayableWithAssignor;
}

export function PayableDialog({ isEdit, payable }: PayableDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {!isEdit ? <Button variant="outline">Adicionar Recebível</Button> : <Edit width={16} height={16} className='cursor-pointer' />}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Crie um recebível</DialogTitle>
          <DialogDescription>
            Preencha os campos para registrar um novo recebível
          </DialogDescription>
        </DialogHeader>
        <PayableForm isEdit={isEdit} payable={payable} />
      </DialogContent>
    </Dialog>
  )
}
