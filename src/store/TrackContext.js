import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const TrackContext = createContext({});

export const TrackStateProvider = ({ children }) => {
  const [selectedTrack, setSelectedTrack] = useState({});
  const [trackInfo, setTrackInfo] = useState({});

  const play = () => {
    const baseUrl = 'https://petros-cdn.s3.eu-central-1.amazonaws.com/';
    const src = `${baseUrl}${selectedTrack.track.id}.mp3`;
    let audio = null;

    if (Object.keys(trackInfo).length > 0) {
      audio = trackInfo.element;
      audio.load();
      audio.setAttribute('src', src);
      audio.play();
    } else {
      audio = new Audio(src);
      audio.play();
    }

    audio.addEventListener('timeupdate', () => {
      const info = {
        duration: audio.duration,
        currentTime: audio.currentTime,
        state: 'in_progress',
        element: audio,
      };

      setTrackInfo(info);
    });

    audio.addEventListener('pause', () => {
      setTrackInfo((info) => ({ ...info, ['state']: 'paused' }));
    });

    audio.addEventListener('ended', () => {
      setTrackInfo((info) => ({ ...info, ['state']: 'ended' }));
    });
  };

  useEffect(() => {
    if (Object.keys(selectedTrack).length > 0) {
      play();
    }
  }, [selectedTrack]);

  return (
    <TrackContext.Provider
      value={{ selectedTrack, setSelectedTrack, trackInfo }}
    >
      {children}
    </TrackContext.Provider>
  );
};

TrackStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
