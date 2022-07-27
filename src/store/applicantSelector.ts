import { selectorFamily } from 'recoil';
import { allApplicantState } from '../store';

export const applicantSelector = selectorFamily({
  key: 'applicantSelector/Series',
  get:
    (series) =>
    ({ get }) => {
      const applicants = get(allApplicantState);
      const selectSeriesApplicants = applicants.filter(
        (applicant: any) => applicant.series === series,
      );
      return selectSeriesApplicants;
    },
});
// export default applicantSelector;
