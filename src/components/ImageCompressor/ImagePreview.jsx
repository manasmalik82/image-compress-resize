import React from 'react';

const ImagePreview = ({ file, title }) => (
  <div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <img src={URL.createObjectURL(file)} alt={title} className="w-full h-auto rounded-md" />
    <p className="text-sm">Size: {(file.size / 1024).toFixed(2)} KB</p>
  </div>
);

export default ImagePreview;