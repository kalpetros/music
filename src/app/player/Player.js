import styles from '../../styles/app/player/player.css';

import React, { useContext, useEffect, useState } from 'react';

import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { faStepForward } from '@fortawesome/free-solid-svg-icons';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TrackContext } from '../../store/TrackContext';
import { getProgress } from '../../utils';
import { getTime } from '../../utils';

export const Player = () => {
  const { selectedTrack, setSelectedTrack, trackInfo } = useContext(
    TrackContext
  );
  const style = {
    width: `${getProgress(trackInfo)}%`,
  };
  let inProgress = false;
  let track = null;

  useEffect(() => {
    if (Object.keys(trackInfo).length > 0) {
      if (trackInfo.state === 'ended') {
        handleNext();
      }
    }
  }, [trackInfo]);

  const handlePlay = () => {
    if (Object.keys(selectedTrack).length > 0) {
      const audio = trackInfo.element;
      audio.play();
    }
  };

  const handlePause = () => {
    if (Object.keys(selectedTrack).length > 0) {
      const audio = trackInfo.element;
      audio.pause();
    }
  };

  const handlePrevious = () => {
    if (Object.keys(selectedTrack).length > 0) {
      const tracks = selectedTrack.album.tracks;
      const currentIndex = tracks.findIndex(
        (i) => i.id === selectedTrack.track.id
      );

      if (currentIndex > 0) {
        const track = tracks[currentIndex - 1];
        const state = { track: track, album: selectedTrack.album };
        setSelectedTrack(state);
      }
    }
  };

  const handleNext = () => {
    if (Object.keys(selectedTrack).length > 0) {
      const tracks = selectedTrack.album.tracks;
      const currentIndex = tracks.findIndex(
        (i) => i.id === selectedTrack.track.id
      );

      if (currentIndex < tracks.length - 1) {
        const track = tracks[currentIndex + 1];
        const state = { track: track, album: selectedTrack.album };
        setSelectedTrack(state);
      }
    }
  };

  if (Object.keys(trackInfo).length > 0) {
    inProgress = trackInfo.state === 'in_progress';
  }

  if (Object.keys(selectedTrack).length > 0) {
    const cover = selectedTrack.album.cover.url;
    const artists = selectedTrack.track.artists.map((a) => a.name).join(', ');

    track = (
      <div className={styles.track}>
        <div className={styles.cover}>
          <img src={cover} />
        </div>
        <div>
          <div className={styles.title}>{selectedTrack.track.title}</div>
          <div className={styles.artist}>{artists}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.player}>
      <div className={styles.progress}>
        <div className={styles.tracking} style={style}></div>
      </div>
      <div>{track}</div>
      <div className={styles.controls}>
        <div>
          <FontAwesomeIcon
            icon={faStepBackward}
            color="#fff"
            size="1x"
            className={styles.button}
            onClick={handlePrevious}
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={inProgress ? faPauseCircle : faPlayCircle}
            color="#fff"
            size="2x"
            className={styles.button}
            onClick={inProgress ? handlePause : handlePlay}
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faStepForward}
            color="#fff"
            size="1x"
            className={styles.button}
            onClick={handleNext}
          />
        </div>
      </div>
      <div>
        <div className={styles.time}>{getTime(trackInfo)}</div>
      </div>
    </div>
  );
};
