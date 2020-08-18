import styles from '../styles/app/albums.css';

import React from 'react';

import { Album } from './Album';

export const Albums = () => {
  const items = Array(5)
    .fill(1)
    .map((album, index) => {
      return (
        <Album
          key={`album-${index}`}
          id={1}
          title='Title'
          cover=''
          releaseYear='2020'
        />
      );
    });
  return <div className={styles.albums}>{items}</div>;
};
