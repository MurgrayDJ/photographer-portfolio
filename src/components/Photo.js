import React from 'react';

const Photo = ({ image, caption }) => (
  <div className="photo">
    <img src={image} alt={caption} />
    <div className="caption">{caption}</div>
  </div>
);

export default Photo;