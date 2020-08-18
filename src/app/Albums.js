import React from 'react';

export const Albums = () => {
  const items = Array(5).fill(1).map((album, index) => {
    return (
      <div key={`album-${index}`}className="album"></div>
    );
  });
  return <div>{items}</div>;
};
