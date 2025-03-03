import React, { useEffect } from 'react';

const AdBanner = ({ adUnitId, slot }) => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className={`my-4 ${slot === 'horizontal' ? 'w-full' : 'w-48 mx-auto'}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
        data-ad-slot={adUnitId}
        data-ad-format={slot === 'horizontal' ? 'auto' : 'vertical'}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdBanner;