import { selector, selectorFamily, RecoilValue } from 'recoil';
import { allApplicantState, seriesState, pageState, rowsPerPageState } from './atoms';
import { MockCandidates } from './types';

const countApplicantsByCurrentSeries = selector({
  key: 'countApplicantsByCurrentSeries',
  get: ({ get }) => {
    const applicants = get(allApplicantState);
    const series = get(seriesState);
    return applicants.filter((applicant) => applicant.series === series).length;
  },
});

const filterApplicantsByCurrentSeries = selector({
  key: 'filterApplicantsByCurrentSeries',
  get: ({ get }) => {
    const applicants = get(allApplicantState);
    const series = get(seriesState);
    return applicants.filter((applicant) => applicant.series === series);
  },
});

const pagedApplicantsByCurrentSeries = selector({
  key: 'pagedApplicantsByCurrentSeries',
  get: ({ get }) => {
    const applicants = get(filterApplicantsByCurrentSeries);
    const page = get(pageState);
    const rowsPerPage = get(rowsPerPageState);
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return applicants.slice(start, end);
  },
  set: ({ set }, newValue) => {
    return set(allApplicantState, newValue);
  },
});

const pagingSelector = selectorFamily({
  key: 'pagingSelector',
  get:
    ({ applicants }: { applicants: RecoilValue<MockCandidates> }) =>
    ({ get }) => {
      const applicantState = get(applicants);
      const page = get(pageState);
      const rowsPerPage = get(rowsPerPageState);
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;
      return applicantState.slice(start, end);
    },
});
export default pagingSelector;

export {
  countApplicantsByCurrentSeries,
  filterApplicantsByCurrentSeries,
  pagedApplicantsByCurrentSeries,
  pagingSelector,
};
