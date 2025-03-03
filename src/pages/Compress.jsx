import React from 'react';
import CompressorForm from '../components/ImageCompressor/CompressorForm';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Compress = () => {
  return (
    <div className="min-h-screen flex flex-col">
       
      <main className="flex-grow">
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Compress Your Images</h1>
            <CompressorForm />
          </div>
        </section>
      </main>
      
    </div>
  );
};

export default Compress;