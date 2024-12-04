"use client";
import LoginRegisterForm from '@/components/login/LoginRegisterForm';
import { Button } from '@/components/ui/button';
import { loginUser } from '@/hooks/useAuth';
import { AuthFormData } from '@/schemas/validationSchemas';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (data: AuthFormData) => {
    const login = await loginUser(data);

    if (login) {
      router.push("/");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <LoginRegisterForm onSubmit={handleLogin} />
        <Link href={"/register"}>
          <Button type="button" className="w-full py-2 mt-4 bg-green-500 text-white">
            Cadastrar
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default LoginPage