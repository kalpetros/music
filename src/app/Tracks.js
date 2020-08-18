import React from 'react';
import PropTypes from 'prop-types';

export const Tracks = () => {
  const items = Array(5)
    .fill(1)
    .map((track, index) => {
      return (
        <li key={`track-${index}`} className="track">
          <div>{index + 1}</div>
          <div>Play</div>
          <div>Title</div>
          <div>Duration</div>
        </li>
      );
    });
  return <ul>{items}</ul>;
};
