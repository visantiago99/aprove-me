"use client";
import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { usePayables } from '@/hooks/usePayables';
import { formatDateBR } from '@/lib/formatDate';
import Link from 'next/link';
import { Trash } from 'lucide-react';
import { PayableDialog } from './PayableDialog';

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
          {payables.length && payables.map((payable, index) => {
            return (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <Link href={`/payable/${payable.id}`}>
                    {payable.id}
                  </Link>
                </TableCell>
                <TableCell>{payable.value}</TableCell>
                <TableCell>{formatDateBR(payable.emissionDate)}</TableCell>
                <TableCell className="text-center">
                  <div className='flex justify-around'>
                    <PayableDialog isEdit payable={payable} handlePayables={handlePayables} />
                    <Trash width={16} height={16} className='cursor-pointer' />
                  </div>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default PayablesTable