// Modal.js
import React from 'react';

const Modal = ({ photo, closeModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white p-4 rounded-lg">
        <img
          src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
          alt={photo.title}
          className="object-cover w-full h-full rounded-lg"
        />
        <button onClick={closeModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
