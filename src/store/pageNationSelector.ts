import { RecoilValue, selectorFamily } from 'recoil';
import { MockCandidates } from './types';

const STANDARD_NUMBER = 10;
const pageNationSelector = selectorFamily({
  key: 'pageNationSelector',
  get:
    ({ candidates, page }: { candidates: RecoilValue<MockCandidates>; page: number }) =>
    ({ get }) => {
      const candidateState = get(candidates);
      return candidateState.slice(page * STANDARD_NUMBER - STANDARD_NUMBER, page * STANDARD_NUMBER);
    },
});
export default pageNationSelector;
