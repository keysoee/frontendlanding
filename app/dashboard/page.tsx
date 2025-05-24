// filepath: c:\landing-page\app\dashboard\page.tsx
'use client';

import React from 'react';
import Navbar from '@/app/components/dashboard/Navbar';
import NewHeroSection from '@/app/components/dashboard/NewHeroSection';
import FeaturesSection from '@/app/components/dashboard/FeaturesSection';
import ProductGrid from '@/app/components/dashboard/ProductGrid';
import ChatBar from '@/app/components/dashboard/ChatBar';
import Footer from '@/app/components/dashboard/Footer';

const DashboardPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <NewHeroSection />
        <FeaturesSection />
        <ProductGrid />
      </main>
      <ChatBar />
      <Footer />
    </div>
  );
};

export default DashboardPage;
