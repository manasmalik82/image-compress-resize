import React from 'react';

const CompressionResult = ({ file }) => (
  <div>
    <h3 className="text-lg font-semibold">Compressed</h3>
    <img src={URL.createObjectURL(file)} alt="Compressed" className="w-full h-auto rounded-md" />
    <p className="text-sm">Size: {(file.size / 1024).toFixed(2)} KB</p>
    <div className="mt-4"><a
      href={URL.createObjectURL(file)}
      download="compressed-image.jpg"
      className="flex justify-center items-center inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors shadow-md"
    >
      Download
    </a>
    </div>
  </div>
);

export default CompressionResult;