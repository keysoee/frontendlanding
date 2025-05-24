'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-8 mt-8">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <p>Dashboard Footer Placeholder</p>
      </div>
    </footer>
  );
};

export default Footer;
