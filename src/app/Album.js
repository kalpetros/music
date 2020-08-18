import styles from '../styles/app/album.css';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Album = (props) => {
  return (
    <Link id={props.id} className={styles.album} to={`/album/${props.id}`}>
      <div className={styles.cover}>
        <img src={props.cover} />
      </div>
      <div className={styles.meta}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.extra}>{props.releaseYear}</div>
      </div>
    </Link>
  );
};

Album.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string,
  releaseYear: PropTypes.number,
};
