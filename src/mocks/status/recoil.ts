import { atom } from 'recoil';

const selectedTabState = atom({
  key: 'selectedTabState',
  default: 0,
});

export { selectedTabState };
