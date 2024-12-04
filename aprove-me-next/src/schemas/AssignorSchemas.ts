import { z } from "zod";

export const AssignorFormSchema = z.object({
  document: z.string().min(1, "O documento é obrigatório"),
  email: z.string().email("E-mail inválido").min(1, "O e-mail é obrigatório"),
  name: z.string().min(1, "O nome é obrigatório"),
  phone: z.string().min(1, "O telefone é obrigatório"),
});

export type AssignorFormFields = z.infer<typeof AssignorFormSchema>;
