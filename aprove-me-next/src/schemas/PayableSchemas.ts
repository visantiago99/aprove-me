import { z } from "zod";

export const PayableFormSchema = z.object({
  value: z.preprocess(
    (val) => (typeof val === "string" ? parseFloat(val) : val),
    z
      .number({ invalid_type_error: "O valor deve ser um número" })
      .min(0.01, "O valor deve ser maior que zero")
  ),
  emissionDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Data de emissão deve ser válida",
  }),
  assignorId: z.string().nonempty("Selecione um cedente válido"),
});

export type PayableFormFields = z.infer<typeof PayableFormSchema>;
