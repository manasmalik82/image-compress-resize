import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">    
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About Image Tools
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Empowering you to optimize images effortlessly with cutting-edge technology.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600">
                  At Image Tools, we aim to simplify image optimization for everyone—web developers, content creators, and casual users alike. Our free, browser-based tools deliver fast, reliable results without compromising quality.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://via.placeholder.com/400x300?text=Mission+Image"
                  alt="Our Mission"
                  className="rounded-lg shadow-md w-full max-w-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Fast Compression
                </h3>
                <p className="text-gray-600">
                  Reduce image sizes in seconds with our optimized algorithms.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  User-Friendly
                </h3>
                <p className="text-gray-600">
                  Intuitive drag-and-drop interface for all skill levels.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Free & Secure
                </h3>
                <p className="text-gray-600">
                  No cost, no sign-up, and all processing happens locally in your browser.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team/Tech Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Built with Passion
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Image Tools is powered by modern web technologies like React.js and Tailwind CSS, with image processing handled by the robust `browser-image-compression` library. We’re a small team dedicated to making your digital experience better, one image at a time.
            </p>
          </div>
        </section>
      </main>
  
    </div>
  );
};

export default About;