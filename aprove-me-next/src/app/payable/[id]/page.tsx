"use client";
import { usePayables } from '@/hooks/usePayables';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { formatDateBR } from '@/lib/formatDate';

const PayableDetailsPage = () => {
  const { id } = useParams();
  const { getPayableById } = usePayables();
  const [payable, setPayable] = useState<PayableWithAssignor | null>(null);

  const handleGetPayable = async () => {
    if (id) {
      const payable = await getPayableById(id.toString());
      if (payable) {
        setPayable(payable);
      }
    }
  };

  useEffect(() => {
    handleGetPayable();
  }, [id]);

  if (!payable) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Detalhes do Pagamento</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col w-full gap-4'>
            <p>
              <strong>ID:</strong> {payable.id}
            </p>
            <p>
              <strong>Cedente:</strong> {payable.assignorId}
            </p>
            <p>
              <strong>Valor:</strong> R$ {payable.value.toFixed(2)}
            </p>
            <p>
              <strong>Data de Emissão:</strong> {formatDateBR(payable.emissionDate)}
            </p>
          </div>
        </CardContent>
      </Card>
      <Link href={"/"}>
        <Button>
          Retornar para listagem
        </Button>
      </Link>
    </div>
  );
};

export default PayableDetailsPage;
