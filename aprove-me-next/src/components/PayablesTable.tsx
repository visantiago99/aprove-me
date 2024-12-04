"use client";
import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { usePayables } from '@/hooks/usePayables';
import { formatDateBR } from '@/lib/formatDate';
import Link from 'next/link';
import { Trash } from 'lucide-react';
import { PayableDialog } from './PayableDialog';
import PayableDeleteDialog from './PayableDeleteDialog';

const PayablesTable = () => {
  const [payables, setPayables] = useState<PayableWithAssignor[]>([])
  const { getPayables } = usePayables();

  const handlePayables = async () => {
    const payables = await getPayables();
    if (payables.length) {
      setPayables(payables)
    }
  }

  useEffect(() => {
    handlePayables();
  }, []);

  return (
    <>
      <h1 className='text-4xl'>Recebíveis</h1>
      <Table className='border'>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">Id</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead>Data de emissão</TableHead>
            <TableHead className="text-center">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payables.length > 0 ? (
            payables.map((payable, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <Link href={`/payable/${payable.id}`} className="text-blue-500">
                    {payable.id}
                  </Link>
                </TableCell>
                <TableCell>{payable.value}</TableCell>
                <TableCell>{formatDateBR(payable.emissionDate)}</TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-around">
                    <PayableDialog isEdit payable={payable} handlePayables={handlePayables} />
                    <PayableDeleteDialog payableId={payable.id} handlePayables={handlePayables} />
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                Nenhum recebível encontrado.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}

export default PayablesTable