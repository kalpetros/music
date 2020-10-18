import styles from '../../styles/app/player/controls.css';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { faStepForward } from '@fortawesome/free-solid-svg-icons';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Controls = (props) => {
  const [loop, setLoop] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const { selectedTrack, info, setSelectedTrack } = props;
  let inProgress = false;

  useEffect(() => {
    if (Object.keys(info).length > 0) {
      if (info.state === 'ended') {
        handleNext();
      }
    }
  }, [info]);

  const handleLoop = () => {
    if (Object.keys(selectedTrack).length > 0) {
      const audio = info.element;
      audio.loop = loop ? false : true;
      setLoop((s) => (s ? false : true));
    }
  };

  const handleShuffle = () => {
    setShuffle((s) => (s ? false : true));
  };

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

      if (currentIndex < tracks.length - 1 || shuffle) {
        let index = currentIndex + 1;
        if (shuffle) {
          index = Math.floor(Math.random() * (tracks.length - 1));
        }
        const track = tracks[index];
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
          icon={faSyncAlt}
          color={loop ? '#fce997' : '#fff'}
          size="1x"
          className={styles.button}
          onClick={handleLoop}
        />
      </div>
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
      <div>
        <FontAwesomeIcon
          icon={faRandom}
          color={shuffle ? '#fce997' : '#fff'}
          size="1x"
          className={styles.button}
          onClick={handleShuffle}
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
