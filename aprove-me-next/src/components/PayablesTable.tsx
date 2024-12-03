"use client";
import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { usePayables } from '@/hooks/usePayables';
import { formatDateBR } from '@/lib/formatDate';

const PayablesTable = () => {
  const [payables, setPayables] = useState<Payable[]>([])
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
              <TableHead className="text-right">Data de emissão</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payables.length && payables.map((payable, index) => {
              return (
                <TableRow key={index}>
                  <TableCell className="font-medium">{payable.id}</TableCell>
                  <TableCell>{payable.value}</TableCell>
                  <TableCell className="text-right">{formatDateBR(payable.emissionDate)}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
      </Table>
    </>
  );
}

export default PayablesTable