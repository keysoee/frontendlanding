'use client';

import React from 'react';

const ProductGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Product Grid</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-gray-200 h-40 mb-4 rounded"></div>
              <h3 className="text-xl font-semibold">Product {item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
