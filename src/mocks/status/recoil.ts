import { atom } from 'recoil';

const seriesState = atom({
  key: 'seriesState',
  default: 0,
});

export { seriesState };
