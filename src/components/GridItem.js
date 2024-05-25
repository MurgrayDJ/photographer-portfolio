import React from 'react';

const GridItem = ({ children, x, y, w, h }) => {
  return (
    <div className="grid-item">
      {children}
    </div>
  );
};

export default GridItem;