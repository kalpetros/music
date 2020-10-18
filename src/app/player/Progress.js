import styles from '../../styles/app/player/progress.css';
import React from 'react';
import PropTypes from 'prop-types';

export const Progress = (props) => {
  const { value, info } = props;
  const style = {
    width: `${value}%`,
  };

  const handleProgress = (e) => {
    if (Object.keys(info).length > 0) {
      const audio = info.element;
      const duration = audio.duration;
      const position = e.clientX;
      const width = document.body.offsetWidth;
      const time = (position * duration) / width;
      audio.currentTime = time;
    }
  };

  const handleMouseMove = (e) => {
    if (Object.keys(info).length > 0) {
      const handle = document.getElementById('handle');
      const width = document.body.offsetWidth;
      const position = e.clientX;
      const newPosition = (position * 100) / width;
      handle.style.width = `${newPosition}%`;
    }
  };

  const handleMouseLeave = (e) => {
    if (Object.keys(info).length > 0) {
      const handle = document.getElementById('handle');
      handle.style.width = `${value}%`;
    }
  };

  if (value > 0) {
    return (
      <div className={styles.progress}>
        <div
          className={styles.base}
          onClick={handleProgress}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div id="handle" className={styles.handle} style={style}></div>
        </div>
        <div className={styles.tracking} style={style}></div>
      </div>
    );
  }

  return null;
};

Progress.propTypes = {
  value: PropTypes.number.isRequired,
  info: PropTypes.object.isRequired,
};
