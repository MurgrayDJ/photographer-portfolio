import React from 'react';

const Grid = ({ children, rowHeight, width }) => {
  return (
    <div className="grid">
      {children}
    </div>
  );
};

export default Grid;