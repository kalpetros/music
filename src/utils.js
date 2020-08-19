import moment from 'moment';

/**
 * Return a string representation
 * of the time elapsed and total
 * duration.
 * @param {object} info - An object with current time and total duration
 */
export function getTime(info) {
  if (Object.keys(info).length > 0) {
    const durationObj = moment
      .duration(info.duration, 'seconds')
      .as('milliseconds');

    const currentTimeObj = moment
      .duration(info.currentTime, 'seconds')
      .as('milliseconds');

    if (moment(durationObj).isValid() && moment(currentTimeObj).isValid()) {
      const duration = moment(durationObj).format('mm:ss');
      const currentTime = moment(currentTimeObj).format('mm:ss');

      return `${currentTime} / ${duration}`;
    }
  }

  return null;
}

/**
 * Return a percentage of elapsed time
 * @param {object} info - An object with current time and total duration
 */
export function getProgress(info) {
  if (Object.keys(info).length > 0) {
    const duration = moment
      .duration(info.duration, 'seconds')
      .as('milliseconds');

    const currentTime = moment
      .duration(info.currentTime, 'seconds')
      .as('milliseconds');

    if (moment(duration).isValid() && moment(currentTime).isValid()) {
      const progress = Math.round((currentTime / duration) * 100, 0);
      return progress;
    }
  }

  return 0;
}
