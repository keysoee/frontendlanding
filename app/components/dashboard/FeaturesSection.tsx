'use client';

import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Dashboard Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
            <p>Placeholder for feature 1 description.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
            <p>Placeholder for feature 2 description.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
            <p>Placeholder for feature 3 description.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
