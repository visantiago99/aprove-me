"use client";
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useAssignors } from '@/hooks/useAssignors';
import { Assignor } from '@/types/assignorsType';

const AssignorDetailsPage = () => {
  const { id } = useParams();
  const { getAssignorById } = useAssignors();
  const [assignor, setAssignor] = useState<Assignor | null>(null);

  const handleGetAssignor = async () => {
    if (id) {
      const assignor = await getAssignorById(id.toString());
      if (assignor) {
        setAssignor(assignor);
      }
    }
  };

  useEffect(() => {
    handleGetAssignor();
  }, [id]);

  if (!assignor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Detalhes do Cedente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col w-full gap-4'>
            <p>
              <strong>ID:</strong> {assignor.id}
            </p>
            <p>
              <strong>Nome:</strong> {assignor.name}
            </p>
            <p>
              <strong>Email:</strong> {assignor.email}
            </p>
            <p>
              <strong>Telefone:</strong> {assignor.phone}
            </p>
            <p>
              <strong>Documento:</strong>{assignor.document}
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

export default AssignorDetailsPage;
