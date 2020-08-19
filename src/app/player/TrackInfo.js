import styles from '../../styles/app/player/trackinfo.css';

import React from 'react';
import PropTypes from 'prop-types';

export const TrackInfo = (props) => {
  const { selectedTrack } = props;

  if (Object.keys(selectedTrack).length > 0) {
    const cover = selectedTrack.album.cover.url;
    const artists = selectedTrack.track.artists.map((a) => a.name).join(', ');

    return (
      <div>
        <div className={styles.track}>
          <div className={styles.cover}>
            <img src={cover} />
          </div>
          <div>
            <div className={styles.title}>{selectedTrack.track.title}</div>
            <div className={styles.artist}>{artists}</div>
          </div>
        </div>
      </div>
    );
  }

  return <div></div>;
};

TrackInfo.propTypes = {
  selectedTrack: PropTypes.object.isRequired,
};
