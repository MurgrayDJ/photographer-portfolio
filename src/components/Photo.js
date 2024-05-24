import React from 'react';

const Photo = ({ photo }) => {
  return (
    <img
      src={photo.src}
      alt={photo.alt}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }}
    />
  );
};

export default Photo;