import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Impor font Poppins

import "./globals.css";

// Konfigurasi font Poppins
// Disarankan untuk menggunakan subset 'latin' atau 'latin-ext'
// Juga, tentukan `weight` yang ingin Anda gunakan.
// Jangan terlalu banyak weight karena akan memperlambat loading.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Contoh: Light, Regular, Medium, SemiBold, Bold
  variable: "--font-poppins", // Opsional: untuk menggunakan dengan CSS variable
});

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Aplikasi FinTracker Anda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        // Terapkan kelas font Poppins ke body
        className={`${poppins.className} antialiased pt-[70px]`} // pt-[70px] untuk offset navbar
      >
        {children}
      </body>
    </html>
  );
}