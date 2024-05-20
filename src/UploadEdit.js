import React, { useState } from 'react';
import axios from 'axios';
import CustomWebcam from './CustomWebcam';

const UploadEdit = () => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('caption', caption);

    axios.post(`${process.env.REACT_APP_PHOTO_DRAWING_APP_BE_URL}/upload`, formData)
      .then(response => {
        alert('Image uploaded successfully');
      })
      .catch(error => {
        console.error('There was an error uploading the image!', error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Upload/Edit Image</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Upload Image
          </label>
          <input type="file" id="image" onChange={handleImageUpload} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="caption">
            Caption
          </label>
          <input type="text" id="caption" value={caption} onChange={(e) => setCaption(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Upload
          </button>
        </div>
      </form>
      <div className="mt-4">
        <CustomWebcam />
      </div>
    </div>
  );
};

export default UploadEdit;