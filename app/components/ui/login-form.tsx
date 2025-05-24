'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/lib/utils';
import { Loader2, Eye, EyeOff, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Skema Zod untuk validasi
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

// Tipe untuk data form
type LoginFormData = z.infer<typeof loginSchema>;

interface LoginFormProps {
  onRegisterClick: () => void;
  onClose: () => void;
}

export function LoginForm({ onRegisterClick, onClose }: LoginFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    setIsLoading(true);
    console.log('Login data:', data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    toast({
      title: "Login Berhasil", // Indonesian: Login Successful
      description: "Selamat datang kembali!", // Indonesian: Welcome back!
    });
    router.push('/dashboard');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* Changed className here to use "form" from globals.css */}
      <div className="form p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors" // Kept Tailwind for close button
          aria-label="Tutup modal" // Indonesian: Close modal
        >
          <X size={24} />
        </button>
        <div className="text-center"> {/* Kept text-center, or could be part of .title if centered */}
          <h2 className="title">Masuk</h2> {/* Indonesian: Login / Sign In */}
        {/* Indonesian: Welcome back! Please enter your details. */}
        <p className="message text-center mb-4">Masuk atau Daftar sekarang untuk mendapat respons yang lebih pintar lainnya.</p>
        </div>
        {/* The form tag itself doesn't have a specific class in the provided CSS, but its children are styled based on .form parent */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8"> {/* MODIFIED: space-y-6 to space-y-8 for more vertical spacing */}
          
          {/* Email Input with floating label structure */}
          <label>
            <Input
              id="email"
              type="email"
              className="input" // Used .input class
              placeholder=" " // Important: placeholder with a space for :placeholder-shown
              {...form.register("email")}
            />
            <span>Alamat Email</span> {/* Indonesian: Email address */}
            {form.formState.errors.email && (
              <p className="mt-1 text-xs text-red-400">{form.formState.errors.email.message}</p>
            )}
          </label>

          {/* Password Input with floating label structure and show/hide toggle */}
          <label style={{ position: 'relative' }}> {/* Ensure label is a positioning context for the icon button */}
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              // cn helper from Input component will merge "input" and "pr-10"
              className="input pr-10" // Used .input class and padding for icon
              placeholder=" " // Important: placeholder with a space
              {...form.register("password")}
            />
            <span>Kata Sandi</span> {/* Indonesian: Password */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-200" // Kept Tailwind for icon button
              aria-label={showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"} // Indonesian: Hide/Show password
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {form.formState.errors.password && (
              <p className="mt-1 text-xs text-red-400">{form.formState.errors.password.message}</p>
            )}
          </label>

          <div className="flex items-center justify-between">
            {/* Remember me checkbox removed as it's not in the new CSS structure */}
            <div></div> {/* Empty div to keep "Forgot password" on the right if flex justify-between is kept */}
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-500 hover:text-blue-400"> {/* Kept Tailwind for this link */}
                Lupa kata sandi?
              </a>
            </div>
          </div>

          <div>
            {/* Changed to standard button with .submit class */}
            <button
              type="submit"
              className="submit" // Used .submit class
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" /> {/* Kept loader */}
                  Memproses...
                </>
              ) : (
                "Masuk" // Indonesian: Sign In
              )}
            </button>
          </div>
        </form>
        <p className="signin"> {/* Used .signin class */}
          Belum punya akun?{" "} {/* Indonesian: Don't have an account? */}
          {/* Changed button to a tag to match .signin a CSS */}
          <a onClick={onRegisterClick} href="#" className="font-medium"> {/* Removed text-blue-500 etc. as .signin a will style it */}
            Daftar di sini {/* Indonesian: Register / Sign up */}
          </a>
        </p>
      </div>
    </div>
  );
};
