import styles from '../../styles/app/player/player.css';

import React, { useContext } from 'react';

import { Progress } from './Progress';
import { TrackInfo } from './TrackInfo';
import { Controls } from './Controls';
import { TrackContext } from '../../store/TrackContext';
import { getProgress } from '../../utils';
import { getTime } from '../../utils';

export const Player = () => {
  const { selectedTrack, setSelectedTrack, trackInfo } = useContext(
    TrackContext
  );

  return (
    <div className={styles.player}>
      <Progress value={getProgress(trackInfo)} info={trackInfo} />
      <TrackInfo selectedTrack={selectedTrack} />
      <Controls
        selectedTrack={selectedTrack}
        info={trackInfo}
        setSelectedTrack={setSelectedTrack}
      />
      <div>
        <div className={styles.time}>{getTime(trackInfo)}</div>
      </div>
    </div>
  );
};
