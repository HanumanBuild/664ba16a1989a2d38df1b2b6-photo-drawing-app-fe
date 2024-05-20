import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Feed = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_PHOTO_DRAWING_APP_BE_URL}/images`)
      .then(response => {
        setImages(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the images!', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Image Feed</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map(image => (
          <div key={image._id} className="bg-white shadow-md rounded-lg p-4">
            <img src={`data:${image.imageType};base64,${Buffer.from(image.imageData).toString('base64')}`} alt={image.imageName} className="w-full h-auto" />
            <p className="mt-2 text-gray-700">{image.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
