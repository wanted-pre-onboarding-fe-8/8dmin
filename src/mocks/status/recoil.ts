import { atom, selector } from 'recoil';
import { MOCK_APPLICANTS } from './table';
import { MockApplicant } from './type';

const applicantsState = atom({
  key: 'applicantsState',
  default: MOCK_APPLICANTS,
});

const totalApplicantsCount = selector({
  key: 'totalApplicantsCount',
  get: ({ get }) => {
    const origin = MOCK_APPLICANTS;
    const series = get(selectedSeriesState);
    const filtered = origin.filter((applicant) => applicant.series === series);
    return filtered.length;
  },
});

const applicantsBySeries = selector({
  key: 'applicantsBySeries',
  get: ({ get }) => {
    const series = get(selectedSeriesState);
    const filteredApplicants = get(applicantsState).filter(
      (applicant) => applicant.series === series,
    );
    const pagedApplicants = (applicants: MockApplicant[]) => {
      const page = get(pageState);
      const rowsPerPage = get(rowsPerPageState);
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;
      return applicants.slice(start, end);
    };
    return pagedApplicants(filteredApplicants);
  },
  set: ({ set }, newValue) => set(applicantsState, newValue),
});

const pageState = atom({
  key: 'pageState',
  default: 1,
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
  totalApplicantsCount,
  totalSeriesCountState,
};
