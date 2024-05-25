import React from 'react';
import Grid from './Grid';
import GridItem from './GridItem';
import Photo from './Photo';
import photos from '../photos.json';

const PhotoGallery = () => {
  const rowHeight = 200;
  const width = window.innerWidth;
  const cols = Math.floor(width / 200);
  const rows = Math.ceil(photos.length / cols) + 1;

  return (
    <Grid rowHeight={rowHeight} width={width}>
      {Array.from({ length: rows * cols }, (_, index) => {
        const photo = photos[index];
        return (
          <GridItem key={index} x={index % cols} y={Math.floor(index / cols)} w={1} h={1}>
            {photo ? (
              <Photo photo={photo} />
            ) : (
              <div />
            )}
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default PhotoGallery;