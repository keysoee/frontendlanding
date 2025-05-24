'use client';

import { RegisterForm } from '@/app/components/ui/register-form';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function SignUpPage() {
  const router = useRouter();

  const handleLoginClick = () => {
    // This will navigate to the login page.
    // We might need to create a /login page if it doesn't exist.
    router.push('/login');
  };

  const handleCloseInPage = () => {
    // For a dedicated page, "close" can navigate to the homepage or previous page.
    router.push('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <RegisterForm onLoginClick={handleLoginClick} onClose={handleCloseInPage} />
    </div>
  );
}
