import { RecoilValue, selectorFamily } from 'recoil';
import {
  dateToString,
  dateToArray,
  convertYear,
  convertMonth,
  convertDay,
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
export const searchSelector = selectorFamily({
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
            const selectedName = applicantState.filter((candidate) => candidate.name === keyword);
            return selectedName;
          }
          case SELECT_GENDER: {
            const selectedGender = applicantState.filter(
              (candidate) =>
                candidate.gender === keyword || candidate.gender + DESTIGNATION === keyword,
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
            const selectedTransportaion = applicantState.filter((candidate) =>
              candidate.transportation.includes(keyword),
            );
            return selectedTransportaion;
          }
          case SELECT_REGION: {
            const selectedRegion = applicantState.filter(
              (candidate) =>
                candidate.region.city === keyword ||
                candidate.region.district === keyword ||
                candidate.region.city + candidate.region.district === keyword,
            );
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
