"use client"
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
import { useState } from "react";

interface PayableDialogProps {
  isEdit?: boolean;
  payable?: PayableWithAssignor;
  handlePayables?: () => Promise<void>;
}

export function PayableDialog({ isEdit, payable, handlePayables }: PayableDialogProps) {
  const [open, setOpen] = useState(false);

  const closeDialog = () => setOpen(false);


  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
        <PayableForm isEdit={isEdit} payable={payable} closeDialog={closeDialog} handlePayables={handlePayables} />
      </DialogContent>
    </Dialog>
  )
}
