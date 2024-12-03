import { z } from "zod";

export const loginPasswordSchema = z.object({
  login: z.string().min(3, { message: "Login inválido" }),
  password: z.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
});

export type AuthFormData = z.infer<typeof loginPasswordSchema>;
