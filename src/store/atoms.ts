import { atom } from 'recoil';

export const allCandidateState = atom({
  key: 'allCandidateState',
  default: [],
});

export const seriesState = atom({
  key: 'seriesState',
  default: 1,
});

export const keywordState = atom({
  key: 'keywordState',
  default: '',
});

export const selectState = atom({
  key: 'selectState',
  default: '',
});
