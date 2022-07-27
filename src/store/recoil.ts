import { selector } from 'recoil';
import { allApplicantState, seriesState } from './atoms';
import { MockCandidate } from './types';

const countApplicantsByCurrentSeries = selector({
  key: 'countApplicantsByCurrentSeries',
  get: ({ get }) => {
    const applicants = get(allApplicantState);
    const series = get(seriesState);
    return applicants.filter((applicant: MockCandidate) => applicant.series === series).length;
  },
});

export { countApplicantsByCurrentSeries };
