import { selector } from 'recoil';
import { ApplicantsState } from '../store';

const SECOND_APPLICATION = ['10', '11', '12'];

export const SecondApplicantsState = selector({
  key: 'SecondApplicants',
  get: ({ get }) => {
    const applicants = get(ApplicantsState);
    const SecondApply = applicants.filter((applicant: { application_date: string }) =>
      SECOND_APPLICATION.includes(applicant.application_date.substring(5, 7)),
    );
    return SecondApply;
  },
});
