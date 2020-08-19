import styles from '../../styles/app/player/controls.css';

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { faStepForward } from '@fortawesome/free-solid-svg-icons';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Controls = (props) => {
  const { selectedTrack, info, setSelectedTrack } = props;
  let inProgress = false;

  useEffect(() => {
    if (Object.keys(info).length > 0) {
      if (info.state === 'ended') {
        handleNext();
      }
    }
  }, [info]);

  const handlePlay = () => {
    if (Object.keys(selectedTrack).length > 0) {
      const audio = info.element;
      audio.play();
    }
  };

  const handlePause = () => {
    if (Object.keys(selectedTrack).length > 0) {
      const audio = info.element;
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

  if (Object.keys(info).length > 0) {
    inProgress = info.state === 'in_progress';
  }

  return (
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
  );
};

Controls.propTypes = {
  selectedTrack: PropTypes.object.isRequired,
  info: PropTypes.object.isRequired,
  setSelectedTrack: PropTypes.func.isRequired,
};
