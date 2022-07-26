import { selectorFamily } from 'recoil';
import { allCandidateState } from '../store';

export const candidateSelector = selectorFamily({
  key: 'candidateSelector/Series',
  get:
    (series) =>
    ({ get }) => {
      const candidates = get(allCandidateState);
      const selectSeriesCandidates = candidates.filter(
        (candidate: any) => candidate.series === series,
      );
      return selectSeriesCandidates;
    },
});
