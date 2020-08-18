import styles from '../styles/app/albums.css';

import React, { useContext, useEffect } from 'react';

import { Album } from './Album';
import { AlbumContext } from '../store/AlbumContext';

export const Albums = () => {
  const { albums, setSelectedAlbum } = useContext(AlbumContext);

  useEffect(() => {
    setSelectedAlbum({});
  }, [setSelectedAlbum]);

  const items = albums.map((album, index) => {
    const albumId = album.id;
    const title = album.title;
    const cover = album.cover.url;
    const releaseYear = new Date(album.release_date).getFullYear();
    return (
      <Album
        key={`album-${index}`}
        id={albumId}
        title={title}
        cover={cover}
        releaseYear={releaseYear}
      />
    );
  });
  return <div className={styles.albums}>{items}</div>;
};
