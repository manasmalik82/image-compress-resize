import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
 
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Image Tools</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
              Your one-stop solution for optimizing images and files—fast, free, and easy to use.
            </p>
            <Link
              to="/compress"
              className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-10">Our Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Image Compression</h3>
                <p className="text-gray-600 mb-4">
                  Reduce image file sizes without losing quality. Perfect for web optimization.
                </p>
                <Link to="/compress" className="text-blue-600 font-medium hover:underline">
                  Try Now →
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Image Resizer</h3>
                <p className="text-gray-600 mb-4">
                  Resize images to custom dimensions with ease.
                </p>
                <Link to="/resize" className="text-blue-600 font-medium hover:underline">
                  Try Now →
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Image Cropper</h3>
                <p className="text-gray-600 mb-4">
                  Crop images directly in your browser with precision.
                </p>
                <Link to="/crop" className="text-blue-600 font-medium hover:underline">
                  Try Now →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-10">Why Image Tools?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-blue-600 text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Lightning Fast</h3>
                <p className="text-gray-600">Process your files in seconds with our optimized tools.</p>
              </div>
              <div className="text-center">
                <div className="text-blue-600 text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure & Private</h3>
                <p className="text-gray-600">All processing happens locally—no uploads, no worries.</p>
              </div>
              <div className="text-center">
                <div className="text-blue-600 text-4xl mb-4">🆓</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Completely Free</h3>
                <p className="text-gray-600">No hidden costs, no sign-ups—just pure functionality.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-600 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-4">Ready to Optimize Your Files?</h2>
            <p className="text-lg mb-6">Start with our tools today and enhance your workflow!</p>
            <Link
              to="/compress"
              className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
            >
              Start Now
            </Link>
          </div>
        </section>
      </main>
 
    </div>
  );
};

export default Home;