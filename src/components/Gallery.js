import React from 'react';
import { Grid } from 'react-grid-layout';
import Photo from './Photo';

const Gallery = () => {
  const photos = require('../photos.json');

  return (
    <div className="gallery">
      <Grid layout={[
        { x: 0, y: 0, w: 1, h: 1 },
        { x: 1, y: 0, w: 1, h: 1 },
        { x: 2, y: 0, w: 1, h: 1 }
      ]}>
        {photos.map((photo, index) => (
          <div key={index} className="grid-item">
            <Photo image={photo.image} caption={photo.caption} />
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default Gallery;