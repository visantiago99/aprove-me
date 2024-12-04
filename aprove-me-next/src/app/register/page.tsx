"use client";
import LoginRegisterForm from '@/components/login/LoginRegisterForm';
import { registerUser } from '@/hooks/useAuth';
import { AuthFormData } from '@/schemas/validationSchemas';
import { useRouter } from 'next/navigation';
import React from 'react'

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (data: AuthFormData) => {
    const register = await registerUser(data);

    if (register) {
      router.push("/login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Cadastro</h2>
        <LoginRegisterForm onSubmit={handleRegister} isRegister />
      </div>
    </div>
  );
}

export default RegisterPage