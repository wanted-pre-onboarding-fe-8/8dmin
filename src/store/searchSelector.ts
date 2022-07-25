import { RecoilValue, selectorFamily } from 'recoil';
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

export const searchSelector = selectorFamily({
  key: 'searchSelector',
  get:
    ({ candidates }: { candidates: RecoilValue<MockCandidates> }) =>
    ({ get }) => {
      const candidateState = get(candidates);
      const select = get(selectState);
      const keyword = get(keywordState);
      if (keyword !== '') {
        switch (select) {
          case SELECT_DATE: {
            const selectedDate = candidateState.filter((candidate) => candidate.name === keyword);
            return selectedDate;
          }
          case SELECT_NAME: {
            const selectedName = candidateState.filter((candidate) => candidate.name === keyword);
            return selectedName;
          }
          case SELECT_GENDER: {
            const selectedGender = candidateState.filter(
              (candidate) => candidate.gender === keyword,
            );
            return selectedGender;
          }
          case SELECT_BIRTH: {
            const selectedBirth = candidateState.filter((candidate) => candidate.birth === keyword);
            return selectedBirth;
          }
          case SELECT_TRANSPORTAION: {
            const selectedTransportaion = candidateState.filter(
              (candidate) => candidate.transportation === keyword,
            );
            return selectedTransportaion;
          }
          case SELECT_REGION: {
            const selectedRegion = candidateState.filter(
              (candidate) =>
                candidate.region.city === keyword || candidate.region.district === keyword,
            );
            return selectedRegion;
          }
          default: {
            return candidateState;
          }
        }
      }
      return candidateState;
    },
});
