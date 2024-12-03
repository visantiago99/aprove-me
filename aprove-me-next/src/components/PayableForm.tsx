"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PayableFormFields, PayableFormSchema } from "@/schemas/PayableSchemas";
import { usePayables } from "@/hooks/usePayables";
import { useRouter } from "next/navigation";
import { useAssignors } from "@/hooks/useAssignors";
import { Assignor } from "@/types/assignorsType";

interface PayableFormProps {
  isEdit?: boolean;
  payable?: PayableWithAssignor;
  closeDialog?: () => void;
  handlePayables?: () => Promise<void>;
}

const PayableForm = ({ isEdit, payable, closeDialog, handlePayables }: PayableFormProps) => {
  const { createPayables, updatePayables } = usePayables();
  const { getAssignors } = useAssignors();
  const router = useRouter();
  const [assignors, setAssignors] = useState<Assignor[]>([]);

  const handleGetAssignors = async () => {
    const assignors = await getAssignors();
    if (assignors) {
      setAssignors(assignors)
    }
  }

  useEffect(() => {
    handleGetAssignors();
  }, [])

  const form = useForm<PayableFormFields>({
    resolver: zodResolver(PayableFormSchema),
    defaultValues: {
      value: isEdit && payable ? payable.value : 0,
      emissionDate: isEdit && payable ? payable.emissionDate.split("T")[0] : "",
      assignorId: isEdit && payable ? payable.assignorId : "",
    },
  });

  const onSubmit = async (data: PayableFormFields) => {
    if (!isEdit) {
      const createPayablesRequest = await createPayables({ ...data, emissionDate: new Date(data.emissionDate).toISOString() });
      if (createPayablesRequest?.id) {
        router.push(`/payable/${createPayablesRequest.id}`)
      }
    }

    if (isEdit && payable && closeDialog && handlePayables) {
      const updatePayableRequest = await updatePayables(payable.id, { ...data, emissionDate: new Date(data.emissionDate).toISOString() });
      if (updatePayableRequest) {
        closeDialog();
        handlePayables();
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Valor</FormLabel>
              <FormControl>
                <Input type="number" step="0.01" placeholder="Digite o valor" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="emissionDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Data de emissão</FormLabel>
              <FormControl>
                <Input type="date" placeholder="Selecione a data" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="assignorId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cedente</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um cedente" />
                  </SelectTrigger>
                  <SelectContent>
                    {assignors.map((assignor) => (
                      <SelectItem key={assignor.id} value={assignor.id}>
                        {assignor.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  );
};

export default PayableForm;
