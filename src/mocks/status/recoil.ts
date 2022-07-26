import { atom, selectorFamily } from 'recoil';
import { MOCK_APPLICANTS } from './table';

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

const pageState = atom({
  key: 'pageState',
  default: 0,
});

const rowsPerPageState = atom({
  key: 'rowsPerPageState',
  default: 5,
});

const selectedSeriesState = atom({
  key: 'selectedSeriesState',
  default: 1,
});

const totalSeriesCountState = atom({
  key: 'totalSeriesCountState',
  default: 10,
});

export {
  applicantsBySeries,
  pageState,
  rowsPerPageState,
  selectedSeriesState,
  totalSeriesCountState,
};
