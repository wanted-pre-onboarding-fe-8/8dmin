import { RecoilValue, selectorFamily } from 'recoil';
import { MockCandidates } from './types';
import { selectState, keywordState } from '.';

const SELECT_DATE = '지원날짜';
const SELECT_NAME = '지원자명';
const SELECT_GENDER = '성별';
const SELECT_BIRTH = '생년월일';
const SELECT_TRANSPORTAION = '이용수단';
const SELECT_REGION = '거주지';

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
