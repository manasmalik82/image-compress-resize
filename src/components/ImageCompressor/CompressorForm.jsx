import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import useImageCompression from '../../hooks/useImageCompression';
import ImagePreview from './ImagePreview';
import CompressionResult from './CompressionResult';

const CompressorForm = () => {
  const { originalImage, compressedImage, loading, error, compressImage } = useImageCompression();
  const [compressionLevel, setCompressionLevel] = useState(0.6);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    compressImage(file, { quality: compressionLevel });
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

  return (
     
   
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {/* <div {...getRootProps()} className="border-2 border-dashed p-6 text-center cursor-pointer">
        <input {...getInputProps()} />
        <p>Drag & drop an image here, or click to select</p>
      </div> */}
      <div {...getRootProps()} className="border-2 border-dashed border-gray-300 p-6 text-center cursor-pointer mb-6 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors">
        <input {...getInputProps()} />
        <p className="text-gray-600">Drag & drop an image here, or click to select</p>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">Compression Level</label>
        <input
          type="range"
          min="0.1"
          max="1"
          step="0.1"
          value={compressionLevel}
          onChange={(e) => setCompressionLevel(parseFloat(e.target.value))}
          className="w-full"
        />
        <p className="text-sm text-gray-600">Quality: {compressionLevel}</p>
      </div>
      {loading && <p className="mt-4 text-blue-500">Compressing...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {originalImage && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <ImagePreview file={originalImage} title="Original" />
          {compressedImage && <CompressionResult file={compressedImage} />}
        </div>
      )}
    </div>
    

  );
};

export default CompressorForm;