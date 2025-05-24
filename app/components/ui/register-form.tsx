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
      title: "Registrasi Berhasil", // Indonesian: Registration Successful
      description: "Akun Anda telah berhasil dibuat. Silakan masuk.", // Indonesian: Your account has been created. Please log in.
    });
    // router.push('/dashboard'); // Previous: redirect to dashboard
    onLoginClick(); // New: Show the login form
  };

  return (
    // Added outer div for modal consistency with login-form
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="form p-8"> {/* Applied .form class to inner container */}
        <button
          type="button"
          onClick={onClose}
          // Consistent styling with login-form close button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors"
          aria-label="Tutup formulir pendaftaran" // Indonesian: Close register form
        >
          <X size={24} />
        </button>
        <div className="text-center"> {/* Added for title and message centering */}
          <p className="title">Daftar Akun</p> {/* Indonesian: Register Account */}
          {/* Changed class to .message for consistency and updated text */}
        <p className="message text-center mb-4">Masuk atau Daftar sekarang untuk mendapat respons yang lebih pintar lainnya.</p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8"> {/* MODIFIED: space-y-6 to space-y-8 for more vertical spacing */}
          <div className="flex"> {/* This div handles firstname and lastname side-by-side */}
            {/* Removed pr-1, relying on parent .flex gap */}
            <label className="w-1/2"> 
              <Input
                id="firstName"
                type="text"
                className="input"
                placeholder=" "
                {...register('firstName')}
              />
              <span>Nama Depan</span> {/* Indonesian: Firstname */}
              {errors.firstName && <p className="mt-1 text-xs text-red-400">{errors.firstName.message}</p>}
            </label>
            {/* Removed pl-1, relying on parent .flex gap */}
            <label className="w-1/2"> 
              <Input
                id="lastName"
                type="text"
                className="input"
                placeholder=" "
                {...register('lastName')}
              />
              <span>Nama Belakang</span> {/* Indonesian: Lastname */}
              {errors.lastName && <p className="mt-1 text-xs text-red-400">{errors.lastName.message}</p>}
            </label>
          </div>

          <label>
            <Input
              id="email"
              type="email"
              className="input"
              placeholder=" "
              {...register('email')}
            />
            <span>Alamat Email</span> {/* Indonesian: Email Address */}
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
          </label>

          <label style={{ position: 'relative' }}>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              className="input pr-10" // Added pr-10 for icon spacing
              placeholder=" "
              {...register('password')}
            />
            <span>Kata Sandi</span> {/* Indonesian: Password */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              // Consistent styling with login-form icon button
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-200"
              aria-label={showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"} // Indonesian: Hide/Show password
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && <p className="mt-1 text-xs text-red-400">{errors.password.message}</p>}
          </label>

          <label style={{ position: 'relative' }}>
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              className="input pr-10" // Added pr-10 for icon spacing
              placeholder=" "
              {...register('confirmPassword')}
            />
            <span>Konfirmasi Kata Sandi</span> {/* Indonesian: Confirm password */}
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              // Consistent styling with login-form icon button
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-200"
              aria-label={showConfirmPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"} // Indonesian: Hide/Show password
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.confirmPassword && <p className="mt-1 text-xs text-red-400">{errors.confirmPassword.message}</p>}
          </label>
          
          <Button type="submit" className="submit w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Memproses...
              </>
            ) : (
              'Daftar' // Indonesian: Register
            )}
          </Button>
        </form>
        <p className="signin">
          Sudah punya akun?{" "} {/* Indonesian: Already have an account? */}
          <a href="#" onClick={(e) => { e.preventDefault(); onLoginClick(); }} className="font-medium">
            Masuk di sini {/* Indonesian: Sign in here */}
          </a>
        </p>
      </div>
    </div>
  );
}
