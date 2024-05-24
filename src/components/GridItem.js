import React from 'react';

const GridItem = ({ children, x, y, w, h }) => {
  const gridItemStyle = {
    gridColumn: `${x + 1} / span ${w}`,
    gridRow: `${y + 1} / span ${h}`
  };

  return (
    <div style={gridItemStyle}>
      {children}
    </div>
  );
};

export default GridItem;