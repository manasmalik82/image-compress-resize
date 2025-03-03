import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const Resize = () => {
  const [originalImage, setOriginalImage] = useState(null);
  const [resizedImage, setResizedImage] = useState(null);
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(600);
  const [downloadMessage, setDownloadMessage] = useState('');
  const [isResizing, setIsResizing] = useState(false); // Loading state

  // Handle image drop
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setOriginalImage(file);
    resizeImage(file, width, height);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

  // Resize function
  const resizeImage = (sourceImage, newWidth, newHeight) => {
    setIsResizing(true); // Start loader
    const img = new Image();
    img.src = URL.createObjectURL(sourceImage);
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = newWidth;
      canvas.height = newHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, newWidth, newHeight);
      canvas.toBlob((blob) => {
        const resizedFile = new File([blob], 'resized-image.jpg', { type: 'image/jpeg' });
        setResizedImage(resizedFile);
        setIsResizing(false); // Stop loader
      }, 'image/jpeg', 0.9);
    };
  };

  // Handle blur for input changes
  const handleBlur = () => {
    if (originalImage) {
      resizeImage(originalImage, width, height);
    }
  };

  // Handle input changes with 4K limit
  const handleWidthChange = (e) => {
    const value = Math.max(1, Math.min(4096, parseInt(e.target.value) || 1));
    setWidth(value);
  };

  const handleHeightChange = (e) => {
    const value = Math.max(1, Math.min(4096, parseInt(e.target.value) || 1));
    setHeight(value);
  };

  // Handle download with success message
  const handleDownload = () => {
    if (resizedImage) {
      setDownloadMessage('Resized image downloaded successfully!');
      setTimeout(() => setDownloadMessage(''), 3000);
    }
  };

  return (
    <main className="flex-grow">
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Image Resizer</h1>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div {...getRootProps()} className="border-2 border-dashed border-gray-300 p-6 text-center cursor-pointer mb-6 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors">
              <input {...getInputProps()} />
              <p className="text-gray-600">Drag & drop an image here, or click to select</p>
            </div>
            {originalImage && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Width (px)</label>
                    <input
                      type="number"
                      value={width}
                      onChange={handleWidthChange}
                      onBlur={handleBlur}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="1"
                      max="4096"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Height (px)</label>
                    <input
                      type="number"
                      value={height}
                      onChange={handleHeightChange}
                      onBlur={handleBlur}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="1"
                      max="4096"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Original</h3>
                    <div className="max-h-[500px] max-w-[800px] overflow-auto border border-gray-200 rounded-md p-4 bg-white shadow-sm">
                      <img
                        src={URL.createObjectURL(originalImage)}
                        alt="Original"
                        className="h-auto"
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Size: {(originalImage.size / 1024).toFixed(2)} KB</p>
                  </div>
                  <div className="relative">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Resized</h3>
                    {isResizing ? (
                      <div className="flex items-center justify-center h-40">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
                        <p className="ml-2 text-blue-500">Resizing in progress...</p>
                      </div>
                    ) : resizedImage ? (
                      <div>
                        <div className="max-h-[500px] max-w-[800px] overflow-auto border border-gray-200 rounded-md p-4 bg-white shadow-sm">
                          <img
                            src={URL.createObjectURL(resizedImage)}
                            alt="Resized"
                            className="h-auto"
                            style={{ width: `${width}px`, height: `${height}px` }}
                          />
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Size: {(resizedImage.size / 1024).toFixed(2)} KB</p>
                        <div className="mt-4">
                          <a
                            href={URL.createObjectURL(resizedImage)}
                            download="resized-image.jpg"
                            onClick={handleDownload}
                            className="flex justify-center items-center inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors shadow-md"
                          >
                            Download
                          </a>
                        </div>
                        {downloadMessage && (
                          <p className="mt-2 text-green-600 text-sm font-medium">{downloadMessage}</p>
                        )}
                      </div>
                    ) : (
                      <p className="text-gray-500">No resized image yet.</p>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resize;