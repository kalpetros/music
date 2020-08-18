import styles from '../styles/app/tracks.css';

import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faPauseCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AlbumContext } from '../store/AlbumContext';
import { TrackContext } from '../store/TrackContext';

export const Tracks = ({ match }) => {
  const { albums, selectedAlbum, setSelectedAlbum } = useContext(AlbumContext);
  const { selectedTrack, trackInfo, setSelectedTrack } = useContext(
    TrackContext
  );
  const tracks = selectedAlbum.tracks ? selectedAlbum.tracks : [];
  const params = match.params;

  useEffect(() => {
    if (albums.length > 0) {
      const selection = albums.find((a) => a.id === params.id);
      setSelectedAlbum(selection);
    }
  }, [albums, setSelectedAlbum, params.id]);

  const playNew = (id) => {
    const tracks = selectedAlbum.tracks;

    const track = tracks.find((t) => t.id == id);
    const state = { track: track, album: selectedAlbum };
    setSelectedTrack(state);
  };

  const handlePlay = (e) => {
    const id = e.currentTarget.id;

    if (Object.keys(trackInfo).length > 0) {
      if (id === selectedTrack.track.id) {
        const audio = trackInfo.element;
        audio.play();
      } else {
        playNew(id);
      }
    } else {
      playNew(id);
    }
  };

  const handlePause = () => {
    const audio = trackInfo.element;
    audio.pause();
  };

  const items = tracks.map((track, index) => {
    const name = track.title;
    const artists = track.artists.map((a) => a.name).join(', ');
    let inProgress = false;
    let duration = null;

    if (Object.keys(trackInfo).length > 0) {
      inProgress =
        trackInfo.state === 'in_progress' &&
        selectedTrack.track.id === track.id;
    }

    return (
      <li
        key={`track-${index}`}
        className={inProgress ? styles.selected : styles.track}
      >
        <div>{index + 1}</div>
        <div>
          <FontAwesomeIcon
            id={track.id}
            icon={inProgress ? faPauseCircle : faPlayCircle}
            color={inProgress ? '#fce997' : '#fff'}
            size="1x"
            className={styles.button}
            onClick={inProgress ? handlePause : handlePlay}
          />
        </div>
        <div>
          <div>{name}</div>
          <div className={styles.artist}>{artists}</div>
        </div>
        <div>{duration}</div>
      </li>
    );
  });
  return <ul className={styles.list}>{items}</ul>;
};

Tracks.propTypes = {
  match: PropTypes.object.isRequired,
};
