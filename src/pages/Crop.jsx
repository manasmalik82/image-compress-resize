import React, { useState, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const Crop = () => {
  const [crop, setCrop] = useState({ unit: 'px', x: 50, y: 50, width: 200, height: 200 });
  const [imageSrc, setImageSrc] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [downloadMessage, setDownloadMessage] = useState(''); // Added for download feedback
  const imgRef = useRef(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setImageSrc(URL.createObjectURL(file));
    setCroppedImage(null); // Reset cropped image when a new file is dropped
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

  const onImageLoad = (e) => {
    imgRef.current = e.currentTarget; // Assign the image element to the ref
  };

  const onCropComplete = (crop) => {
    if (imgRef.current && crop.width && crop.height) {
      const canvas = document.createElement('canvas');
      const img = imgRef.current;
      const scaleX = img.naturalWidth / img.width;
      const scaleY = img.naturalHeight / img.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(
        img,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );
      canvas.toBlob((blob) => {
        const croppedFile = new File([blob], 'cropped-image.jpg', { type: 'image/jpeg' });
        setCroppedImage(URL.createObjectURL(croppedFile));
      }, 'image/jpeg', 0.9);
    }
  };

  // Handle download with success message
  const handleDownload = () => {
    if (croppedImage) {
      setDownloadMessage('Cropped image downloaded successfully!');
      setTimeout(() => setDownloadMessage(''), 3000); // Clear message after 3 seconds
    }
  };

  return (
    <main className="flex-grow">
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Image Cropper</h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div {...getRootProps()} className="border-2 border-dashed border-gray-300 p-6 text-center cursor-pointer mb-6 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors">
              <input {...getInputProps()} />
              <p className="text-gray-600">Drag & drop an image here, or click to select</p>
            </div>
            {imageSrc && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Original</h3>
                  <ReactCrop
                    crop={crop}
                    onChange={(_, percentCrop) => setCrop(percentCrop)}
                    onComplete={onCropComplete}
                  >
                    <img src={imageSrc} onLoad={onImageLoad} alt="Original" className="w-full h-auto rounded-md" />
                  </ReactCrop>
                </div>
                {croppedImage && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Cropped</h3>
                    <img src={croppedImage} alt="Cropped" className="w-full h-auto rounded-md" />
                    <div className="mt-4">
                      <a
                        href={croppedImage}
                        download="cropped-image.jpg"
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
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Crop;