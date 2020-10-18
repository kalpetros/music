import styles from '../styles/app/home.css';

import React, { useContext, useEffect } from 'react';

import { Album } from './Album';
import { AlbumContext } from '../store/AlbumContext';
import { SubHeader } from '../components/SubHeader';

export const Home = () => {
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

  return (
    <div className={styles.home}>
      <div className={styles.recent}>
        <SubHeader title="Recently played" />
        <div className={styles.content}>{items}</div>
      </div>
      <div className={styles.recent}>
        <SubHeader title="Suggestions" />
        <div className={styles.content}>{items}</div>
      </div>
      <div className={styles.recent}>
        <SubHeader title="Popular" />
        <div className={styles.content}>{items}</div>
      </div>
      <div className={styles.recent}>
        <SubHeader title="Favorites" />
        <div className={styles.content}>{items}</div>
      </div>
    </div>
  );
};
