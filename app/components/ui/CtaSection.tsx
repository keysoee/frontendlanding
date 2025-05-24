'use client'; // Jika ingin ada interaktivitas (misalnya, animasi hover di masa depan)

import Link from 'next/link';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'; // Impor ikon dari react-icons

const FinalCtaSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-10 pb-6 text-gray-700"> {/* Mengurangi pt dan pb */}
      <div className="container mx-auto px-4">

        {/* Bagian Atas Footer: CTA Utama (jika masih relevan di footer) */}
        <div className="text-center mb-10 md:mb-12"> {/* Mengurangi mb */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
            Siap Mengelola Keuangan dengan Lebih Baik?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Bergabunglah & rasakan kemudahannya.
          </p>
          <Link
            href="/signup" // Changed from /register to /signup
            className="inline-block px-10 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 font-semibold text-md"
          >
            Daftar Gratis
          </Link>
        </div>

        {/* Garis Pemisah */}
        <div className="border-t border-gray-200 mb-6"></div> {/* Mengurangi mb */}

        {/* Bagian Tengah Footer: Informasi & Link (jika diperlukan) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-center md:text-left"> {/* Mengurangi gap dan mb */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Countrol</h3>
            <p className="text-sm leading-relaxed">
              Solusi cerdas untuk manajemen finansial Anda. Inovatif, intuitif, dan memberdayakan.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Teknologi</h3>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-2">
              <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="h-8 w-auto" title="React" />
              <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" className="h-8 w-auto" title="TypeScript" />
              <img src="https://api.iconify.design/simple-icons:langchain.svg?color=%23f59e42" alt="Langchain" className="h-8 w-auto" title="Langchain" />
              <img src="https://api.iconify.design/fluent:brain-circuit-24-regular.svg?color=%23f59e42" alt="Qwen" className="h-8 w-auto" title="Qwen" />
              <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="Tailwind CSS" className="h-8 w-auto" title="Tailwind CSS" />
              <img src="https://cdn.simpleicons.org/nextdotjs/000000" alt="Next.js" className="h-8 w-auto" title="Next.js" />
              <img src="https://cdn.simpleicons.org/alibabacloud/FF6A00" alt="Alibaba Cloud" className="h-8 w-auto" title="Alibaba Cloud" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Hubungi Kami</h3>
            <p className="text-sm">Email: support@Countrol.com</p> {/* Ganti dengan email Anda */}
            {/* Social Icons */}
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.linkedin.com/company/yourcompany" // Ganti dengan URL LinkedIn Anda
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-blue-600 hover:text-blue-700 transition duration-300"
              >
                <FaLinkedinIn className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/yourgithub" // Ganti dengan URL GitHub Anda
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-700 hover:text-gray-900 transition duration-300"
              >
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Garis Pemisah */}
        <div className="border-t border-gray-200 pt-6"></div> {/* Mengurangi pt */}

        {/* Bagian Bawah Footer: Copyright */}
        <div className="text-center text-sm text-balck-700">
          <p>&copy; {currentYear} Countrol.</p>
        
        </div>
      </div>
    </footer>
  );
};

export default FinalCtaSection;