import { FC } from "react";
import { useForm } from "react-hook-form";
import { AuthFormData, loginPasswordSchema } from "@/schemas/validationSchemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface LoginRegisterFormProps {
  onSubmit: (data: AuthFormData) => void;
  isRegister?: boolean;
}

const LoginRegisterForm: FC<LoginRegisterFormProps> = ({ onSubmit, isRegister }) => {
  const form = useForm<AuthFormData>({
    resolver: zodResolver(loginPasswordSchema),
    defaultValues: {
      login: "",
      password: ""
    }
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          name="login"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Login</FormLabel>
              <FormControl>
                <Input placeholder="Insira seu login" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Insira sua senha" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full bg-blue-500">
          {isRegister ? "Cadastrar" : "Entrar"}
        </Button>
      </form>
    </Form>
  );
};

export default LoginRegisterForm;
