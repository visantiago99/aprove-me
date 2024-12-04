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
import AssignorForm from "./AssignorForm";

export function AssignorDialog() {
  const [open, setOpen] = useState(false);

  const closeDialog = () => setOpen(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Adicionar Cedente</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Registre um cedente</DialogTitle>
          <DialogDescription>
            Preencha os campos para registrar um novo cedente
          </DialogDescription>
        </DialogHeader>
        <AssignorForm closeDialog={closeDialog} />
      </DialogContent>
    </Dialog>
  )
}
