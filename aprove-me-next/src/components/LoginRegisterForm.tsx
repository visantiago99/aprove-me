import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AuthFormData, loginPasswordSchema } from "@/schemas/validationSchemas";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";


interface LoginRegisterFormProps {
  onSubmit: (data: AuthFormData) => void;
  isRegister?: boolean;
}

const LoginRegisterForm: FC<LoginRegisterFormProps> = ({ onSubmit, isRegister }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>({
    resolver: zodResolver(loginPasswordSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="login" className="block text-sm font-medium text-gray-700">
          Login
        </label>
        <Input
          id="login"
          {...register("login")}
          className={`w-full mt-1 ${errors.login ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.login && <p className="text-sm text-red-500">{errors.login.message}</p>}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Senha
        </label>
        <Input
          id="password"
          type="password"
          {...register("password")}
          className={`w-full mt-1 ${errors.password ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
      </div>

      <Button type="submit" className="w-full py-2 mt-4 bg-blue-500 text-white">
        {isRegister ? "Cadastrar" : "Entrar"}
      </Button>
    </form>
  );
};

export default LoginRegisterForm;
