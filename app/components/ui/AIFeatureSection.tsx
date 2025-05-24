// components/AIFeaturesSection.tsx
import Image from 'next/image';
import React from 'react';

const AIFeaturesSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 text-center md:py-24 text-gray-900">
      <div className="container mx-auto px-4 max-w-7xl lg:px-12">

        {/* Headline Bagian */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-4 text-left max-w-4xl mx-auto md:mx-0">
          Semua yang Anda butuhkan.
          <br /><span className="text-blue-600">Tak ada yang tidak Anda butuhkan.</span> {/* Aksen biru untuk highlight */}
        </h2>

        {/* Sub-deskripsi Bagian */}
        <p className="text-base md:text-lg text-gray-700 mb-16 text-left max-w-4xl mx-auto md:mx-0">
          Manajemen keuangan dan visibilitas di satu tempat. Rasakan perangkat canggih yang fleksibel yang membuat setiap tugas terasa mudah.
        </p>

        {/* Grid Kartu Fitur */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Kartu Fitur (Template untuk setiap kartu) */}
          {/* Tambahkan kelas 'group' pada div kartu agar bisa menggunakan group-hover */}
          {/* Tambahkan shadow-lg (default), transition, duration, ease, hover:-translate-y-1, hover:shadow-2xl, hover:shadow-blue-500/50 */}
          {
            [
              {
                title: "Insights at your fingertips",
                description: "Semua data dan keuangan Anda di satu tempat untuk memberikan jawaban cepat dan membuat keputusan secara instan.",
                imageSrc: "/feature-insight.png",
                imageAlt: "Insights at your fingertips",
                imageObjectFit: "object-cover",
              },
              {
                title: "Manage in real time",
                description: "Kontrol penuh atas keuangan Anda saat bepergian menggunakan aplikasi seluler iOS/Android kami.",
                imageSrc: "/feature-mobile.png",
                imageAlt: "Manage in real time",
                imageObjectFit: "object-contain",
              },
              {
                title: "Important business alerts",
                description: "Pilih peringatan yang Anda butuhkan dan terima melalui email, ponsel, atau Slack. Tinjau dan ambil tindakan dalam satu klik.",
                imageSrc: "/feature-alerts.png",
                imageAlt: "Important business alerts",
                imageObjectFit: "object-cover",
              },
              {
                title: "Connect all your apps",
                description: "Bawa data Anda dengan integrasi bawaan kami untuk akuntansi, alat pendapatan, dan perbankan.",
                imageSrc: "/feature-integrations.png",
                imageAlt: "Connect all your apps",
                imageObjectFit: "object-contain",
                colSpan: "md:col-span-2" // Ini akan diterapkan ke kartu 4
              },
              {
                title: "You're in control",
                description: "Sangat cepat: Pintasan untuk segalanya. Command+K di Mac, Ctrl+K di Windows. Mode gelap.",
                imageSrc: "/feature-control.png",
                imageAlt: "You're in control",
                imageObjectFit: "object-cover",
                colSpan: "md:col-span-1 lg:col-span-1" // Ini akan diterapkan ke kartu 5
              }
            ].map((card, index) => (
              <div
                key={index}
                className={`group bg-blue rounded-2xl shadow-lg overflow-hidden flex flex-col 
                            transition-all duration-300 ease-in-out
                            hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30
                            ${card.colSpan || ''}`} // Tambahkan colSpan jika ada
              >
                <div className="p-6 flex flex-col flex-grow">
                  <div className="w-full h-56 bg-gray-200 rounded-xl flex items-center justify-center mb-6 border border-blue-600">
                    {/* Placeholder for image if it's not present, or use real image */}
                    {card.imageSrc ? (
                      <Image
                        src={card.imageSrc}
                        alt={card.imageAlt}
                        width={index === 3 ? 600 : 400} // Lebar khusus untuk kartu integrasi
                        height={index === 3 ? 336 : 224} // Tinggi khusus untuk kartu integrasi
                        className={`w-full h-full ${card.imageObjectFit} rounded-xl`}
                      />
                    ) : (
                      <div className="text-gray-400 text-center">No Image</div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-left">{card.title}</h3>
                  <p className="text-gray-700 text-left">{card.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default AIFeaturesSection;