import styles from '../styles/components/header.css';

import React, { useContext } from 'react';

import { AlbumContext } from '../store/AlbumContext';

export const Header = () => {
  const { selectedAlbum } = useContext(AlbumContext);
  let title = 'Home';

  if (Object.keys(selectedAlbum).length > 0) {
    title = selectedAlbum.title;
  }

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>{title}</h1>
      </div>
    </header>
  );
};
