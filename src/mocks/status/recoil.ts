import { atom, selectorFamily } from 'recoil';
import { MOCK_APPLICANTS } from './table';

const totalSeriesCountState = atom({
  key: 'totalSeriesCountState',
  default: 100,
});

const selectedSeriesState = atom({
  key: 'selectedSeriesState',
  default: 1,
});

const applicantsState = atom({
  key: 'applicantsState',
  default: MOCK_APPLICANTS,
});

const applicantsBySeries = selectorFamily({
  key: 'applicantsBySeries',
  get:
    (series) =>
    ({ get }) => {
      return get(applicantsState).filter((applicant) => applicant.series === series);
    },
});

export { selectedSeriesState, applicantsBySeries, totalSeriesCountState };
