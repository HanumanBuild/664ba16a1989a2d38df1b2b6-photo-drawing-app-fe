import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';

const DrawingCanvas = ({ imgSrc }) => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    const initCanvas = new fabric.Canvas(canvasRef.current, {
      isDrawingMode: true,
      backgroundColor: 'white',
      height: 500,
      width: 500,
    });
    setCanvas(initCanvas);

    return () => {
      initCanvas.dispose();
    };
  }, []);

  useEffect(() => {
    if (canvas && imgSrc) {
      fabric.Image.fromURL(imgSrc, (img) => {
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
          scaleX: canvas.width / img.width,
          scaleY: canvas.height / img.height,
        });
      });
    }
  }, [canvas, imgSrc]);

  const saveImage = () => {
    const dataURL = canvas.toDataURL({ format: 'png', quality: 0.8 });
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'edited_photo.png';
    link.click();
  };

  return (
    <div>
      <canvas ref={canvasRef} className="border rounded-lg shadow-md" />
      <div className="flex justify-center mt-4">
        <button
          onClick={saveImage}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save Photo
        </button>
      </div>
    </div>
  );
};

export default DrawingCanvas;