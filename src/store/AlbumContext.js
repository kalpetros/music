import data from '../assets/data.json';
import wallpaper from '../assets/wallpaper.jpg';

import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const AlbumContext = createContext({});

export const AlbumStateProvider = ({ children }) => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState({});

  useEffect(() => {
    setAlbums(data);
  }, [albums]);

  useEffect(() => {
    if (Object.keys(selectedAlbum).length > 0) {
      document.body.style.backgroundImage = `url(${selectedAlbum.cover.url})`;
    } else {
      document.body.style.backgroundImage = `url(${wallpaper})`;
    }
  }, [selectedAlbum]);

  return (
    <AlbumContext.Provider value={{ albums, selectedAlbum, setSelectedAlbum }}>
      {children}
    </AlbumContext.Provider>
  );
};

AlbumStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
