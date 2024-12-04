import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Trash } from 'lucide-react';
import { Button } from './ui/button';
import { usePayables } from '@/hooks/usePayables';

interface PayableDeleteDialogProps { payableId: string, handlePayables: () => Promise<void> }

const PayableDeleteDialog = ({ payableId, handlePayables }: PayableDeleteDialogProps) => {
  const [open, setOpen] = useState(false);
  const { deletePayableById } = usePayables();

  const handleDeletePayable = async () => {
    const deletePayableRequest = await deletePayableById(payableId);
    if (deletePayableRequest) {
      setOpen(false);
      handlePayables();
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {<Trash width={16} height={16} className='cursor-pointer' />}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Remover recebível</DialogTitle>
          <DialogDescription>
            {`Tem certeza que deseja remover o recebível ${payableId}? `}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant={'outline'} onClick={() => setOpen(false)} type="button">Cancelar</Button>
          <Button type="button" onClick={handleDeletePayable}>Remover</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default PayableDeleteDialog