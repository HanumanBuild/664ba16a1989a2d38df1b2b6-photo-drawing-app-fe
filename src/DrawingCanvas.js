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

  return <canvas ref={canvasRef} />;
};

export default DrawingCanvas;
