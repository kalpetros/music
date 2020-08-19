import { getTime, getProgress } from '../src/utils';

test('returns the correct formatted time', () => {
  const info = {
    duration: 18.0,
    currentTime: 19,
  };
  const result = getTime(info);
  expect(result).toBe('00:19 / 00:18');
});

test('returns the correct percentage of elapsed time', () => {
  const info = {
    duration: 18.0,
    currentTime: 19,
  };
  const result = getProgress(info);
  expect(result).toBe(106);
});
