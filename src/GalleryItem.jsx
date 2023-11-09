import React from 'react';

const GalleryItem = ({ photo, onClick }) => {
  const handleClick = () => {
    onClick(photo);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <img
        src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
        alt={photo.title}
        className="object-cover w-full h-full rounded-lg"
        style={{ maxWidth: '450px', maxHeight: '450px' }}
      />
    </div>
  );
};

export default GalleryItem;
