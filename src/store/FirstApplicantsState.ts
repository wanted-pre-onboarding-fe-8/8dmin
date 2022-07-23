import { selector } from 'recoil';
import { ApplicantsState } from '../store';

const FIRST_APPLICATION = ['07', '08', '09'];

export const FirstApplicantsState = selector({
  key: 'FirstApplicants',
  get: ({ get }) => {
    const applicants = get(ApplicantsState);
    const firstApply = applicants.filter((applicant: { application_date: string }) =>
      FIRST_APPLICATION.includes(applicant.application_date.substring(5, 7)),
    );
    return firstApply;
  },
});
