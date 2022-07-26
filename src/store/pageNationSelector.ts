import { RecoilValue, selectorFamily } from 'recoil';
import { pageState } from './atoms';
import { MockCandidates } from './types';

const STANDARD_NUMBER = 10;
const pageNationSelector = selectorFamily({
  key: 'pageNationSelector',
  get:
    ({ applicants }: { applicants: RecoilValue<MockCandidates> }) =>
    ({ get }) => {
      const applicantState = get(applicants);
      const page = get(pageState);
      return applicantState.slice(page * STANDARD_NUMBER - STANDARD_NUMBER, page * STANDARD_NUMBER);
    },
});
export default pageNationSelector;
