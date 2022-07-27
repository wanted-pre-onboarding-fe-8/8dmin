import { atom } from 'recoil';
import original from '../mocks/applicant.json';

export const allApplicantState = atom({
  key: 'allApplicantState',
  default: original.applicants,
});

export const seriesState = atom({
  key: 'seriesState',
  default: 1,
});

export const keywordState = atom({
  key: 'keywordState',
  default: '',
});

export const selectState = atom({
  key: 'selectState',
  default: 'dateOfApply',
});

export const pageState = atom({
  key: 'pageState',
  default: 1,
});

export const rowsPerPageState = atom({
  key: 'rowsPerPageState',
  default: 5,
});
