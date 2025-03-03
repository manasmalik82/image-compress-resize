import { useState, useCallback } from 'react';
import imageCompression from 'browser-image-compression';

const useImageCompression = () => {
  const [originalImage, setOriginalImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const compressImage = useCallback(async (file, options = {}) => {
    setLoading(true);
    setError(null);

    const defaultOptions = {
      maxSizeMB: 1,           // Max file size in MB
      maxWidthOrHeight: 1920, // Max resolution
      useWebWorker: true,     // Offload to web worker for performance
      quality: 0.6,           // Default compression quality (0.1 to 1)
    };

    try {
      const mergedOptions = { ...defaultOptions, ...options };
      setOriginalImage(file);
      const compressedFile = await imageCompression(file, mergedOptions);
      setCompressedImage(compressedFile);
    } catch (err) {
      setError('Failed to compress image: ' + err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setOriginalImage(null);
    setCompressedImage(null);
    setLoading(false);
    setError(null);
  }, []);

  return {
    originalImage,
    compressedImage,
    loading,
    error,
    compressImage,
    reset,
  };
};

export default useImageCompression;