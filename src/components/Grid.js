import React from 'react';

const Grid = ({ children, cols, rowHeight, width }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridAutoRows: `${rowHeight}px`,
    width: `${width}px`,
    gap: '10px'
  };

  return (
    <div style={gridStyle}>
      {children}
    </div>
  );
};

export default Grid;