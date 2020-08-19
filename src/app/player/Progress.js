import styles from '../../styles/app/player/progress.css';
import React from 'react';
import PropTypes from 'prop-types';

export const Progress = (props) => {
  const { value } = props;
  const style = {
    width: `${value}%`,
  };

  if (value > 0) {
    return (
      <div className={styles.progress}>
        <div className={styles.tracking} style={style}></div>
      </div>
    );
  }

  return null;
};

Progress.propTypes = {
  value: PropTypes.number.isRequired,
};
