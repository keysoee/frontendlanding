'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from "@/lib/utils";
import { Loader2, Eye, EyeOff, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Type for form data - Define this first
type RegisterFormData = z.infer<typeof registerSchema>;

// Zod schema for registration
const registerSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

interface RegisterFormProps {
  onLoginClick: () => void;
  onClose: () => void;
}

export function RegisterForm({ onLoginClick, onClose }: RegisterFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
    },
  });

  const { register, handleSubmit, formState: { errors } } = form;

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    setIsLoading(true);
    console.log('Registration data:', data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    toast({
      title: "Registration Successful",
      description: "Your account has been created.",
    });
    router.push('/dashboard');
  };

  return (
    <form className="form relative" onSubmit={handleSubmit(onSubmit)}>
      <button
        type="button"
        onClick={onClose}
        className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600"
        aria-label="Close register form"
      >
        <X size={24} />
      </button>
      <p className="title">Register</p>
      <p className="form-message text-center mb-4">Masuk atau Daftar sekarang untuk mendapat respons yang lebih pintar lainnya.</p>
      <div className="flex">
        <label>
          <input
            required
            placeholder=" "
            type="text"
            className="input"
            {...register('firstName')}
          />
          <span>Firstname</span>
        </label>
        {errors.firstName && <p className="text-xs text-red-400">{errors.firstName.message}</p>}
        <label>
          <input
            required
            placeholder=" "
            type="text"
            className="input"
            {...register('lastName')}
          />
          <span>Lastname</span>
        </label>
        {errors.lastName && <p className="text-xs text-red-400">{errors.lastName.message}</p>}
      </div>
      <label>
        <input
          required
          placeholder=" "
          type="email"
          className="input"
          {...register('email')}
        />
        <span>Email</span>
      </label>
      {errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}
      <label>
        <input
          required
          placeholder=" "
          type={showPassword ? "text" : "password"}
          className="input"
          {...register('password')}
        />
        <span>Password</span>
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3"
        >
          {showPassword ? <EyeOff /> : <Eye />}
        </button>
      </label>
      <label>
        <input
          required
          placeholder=" "
          type={showConfirmPassword ? "text" : "password"}
          className="input"
          {...register('confirmPassword')}
        />
        <span>Confirm password</span>
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-3 top-3"
        >
          {showConfirmPassword ? <EyeOff /> : <Eye />}
        </button>
      </label>
      {errors.confirmPassword && <p className="text-xs text-red-400">{errors.confirmPassword.message}</p>}
      <Button type="submit" className="submit w-full" disabled={isLoading}>
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Register'}
      </Button>
      <p className="signin">
        Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); onLoginClick(); }}>Sign in</a>
      </p>
    </form>
  );
}
