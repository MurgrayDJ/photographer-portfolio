import React from 'react';
import Grid from './Grid';
import GridItem from './GridItem';
import Photo from './Photo';
import photos from '../photos.json';

const PhotoGallery = () => {
  const cols = 4;
  const rowHeight = 200;
  const width = 800;

  return (
    <Grid cols={cols} rowHeight={rowHeight} width={width}>
      {photos.map((photo, index) => (
        <GridItem key={photo.id} x={index % cols} y={Math.floor(index / cols)} w={1} h={1}>
          <Photo photo={photo} />
        </GridItem>
      ))}
    </Grid>
  );
};
 
export default PhotoGallery;