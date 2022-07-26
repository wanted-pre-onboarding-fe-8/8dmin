import { RecoilValue, selectorFamily } from 'recoil';
import {
  dateToString,
  dateToArray,
  convertYear,
  convertMonth,
  convertDay,
  spaceToArray,
  spaceDeleteToString,
} from '../utils/helpers/convertion';
import { MockCandidates } from './types';
import { selectState, keywordState } from '../store';
import { SELECT_CONSTANTS } from '../utils/constants/data';
const {
  SELECT_DATE,
  SELECT_NAME,
  SELECT_GENDER,
  SELECT_BIRTH,
  SELECT_TRANSPORTAION,
  SELECT_REGION,
} = SELECT_CONSTANTS;
const DESTIGNATION = '자';
const searchSelector = selectorFamily({
  key: 'searchSelector',
  get:
    ({ applicants }: { applicants: RecoilValue<MockCandidates> }) =>
    ({ get }) => {
      const applicantState = get(applicants);
      const select = get(selectState);
      const keyword = get(keywordState);
      if (keyword !== '') {
        switch (select) {
          case SELECT_DATE: {
            const selectedDate = applicantState.filter(
              (applicant) =>
                convertYear(applicant.appliedAt) === keyword ||
                convertYear(applicant.appliedAt) + convertMonth(applicant.appliedAt) === keyword ||
                dateToString(applicant.appliedAt) === keyword,
            );
            return selectedDate;
          }
          case SELECT_NAME: {
            const selectedName = applicantState.filter((applicant) => applicant.name === keyword);
            return selectedName;
          }
          case SELECT_GENDER: {
            const selectedGender = applicantState.filter(
              (applicant) =>
                applicant.gender === keyword || applicant.gender + DESTIGNATION === keyword,
            );
            return selectedGender;
          }
          case SELECT_BIRTH: {
            const selectedBirth = applicantState.filter(
              (applicant) =>
                convertYear(applicant.dateOfBirth) === keyword ||
                convertYear(applicant.dateOfBirth) + convertMonth(applicant.dateOfBirth) ===
                  keyword ||
                dateToString(applicant.dateOfBirth) === keyword,
            );
            return selectedBirth;
          }
          case SELECT_TRANSPORTAION: {
            const selectedTransportaion = applicantState.filter((applicant) =>
              applicant.transportation.includes(keyword),
            );
            return selectedTransportaion;
          }
          case SELECT_REGION: {
            const splitKeyword = keyword.split(' ');
            const selectedRegion = applicantState.filter((applicant) => {
              const integrated = applicant.region.replace(' ', '');
              return splitKeyword.every((kwd) => integrated.includes(kwd));
            });
            return selectedRegion;
          }
          default: {
            return applicantState;
          }
        }
      }
      return applicantState;
    },
});
export default searchSelector;
