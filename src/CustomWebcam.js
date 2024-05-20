import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';

const CustomWebcam = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  return (
    <div className="container mx-auto p-4">
      {imgSrc ? (
        <img src={imgSrc} alt="Captured" className="mx-auto" />
      ) : (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="mx-auto"
        />
      )}
      <div className="flex justify-center mt-4">
        <button
          onClick={capture}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Capture Photo
        </button>
      </div>
    </div>
  );
};

export default CustomWebcam;
