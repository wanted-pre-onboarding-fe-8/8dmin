import { RecoilValue, selectorFamily } from 'recoil';
import { MockCandidates } from './types';

const ORDER_ID = 'id';
const ORDER_NAME = 'name';
const ORDER_APPLIED_AT = 'appliedAt';
const ORDER_GENDER = 'gender';
const ORDER_BIRTH = 'birth';
const ORDER_EMAIL = 'email';
const ORDER_REGION = 'region';

export const sortCandidateSelector = selectorFamily({
  key: 'sortCandidateSelector',
  get:
    ({ candidates, order }: { candidates: RecoilValue<MockCandidates>; order: string }) =>
    ({ get }) => {
      const selectorCandidate: MockCandidates = [...get(candidates)];
      switch (order) {
        case ORDER_ID: {
          const sortedId = selectorCandidate.sort((a, b) => a[order] - b[order]);
          return sortedId;
        }
        case ORDER_NAME: {
          const sortedName = selectorCandidate.sort(nameAscending);
          return sortedName;
        }
        case ORDER_APPLIED_AT: {
          const sortedAppliedAt = selectorCandidate.sort(dateAscending);
          return sortedAppliedAt;
        }
        case ORDER_GENDER: {
          const sortedGender = selectorCandidate.sort(genderAscending);
          return sortedGender;
        }
        case ORDER_BIRTH: {
          const sortedBirth = selectorCandidate.sort(birthAscending);
          return sortedBirth;
        }
        default: {
          return selectorCandidate;
        }
      }
    },
});

function nameAscending(a: { name: string }, b: { name: string }) {
  return a.name < b.name ? -1 : a.name == b.name ? 0 : 1;
}
function dateAscending(a: { appliedAt: Date | string }, b: { appliedAt: Date | string }) {
  const first: any = new Date(a.appliedAt);
  const second: any = new Date(b.appliedAt);
  return first - second;
}
function genderAscending(a: { gender: string }, b: { gender: string }) {
  return a.gender < b.gender ? -1 : a.gender == b.gender ? 0 : 1;
}

function birthAscending(a: { birth: Date | string }, b: { birth: Date | string }) {
  const first: any = new Date(a.birth);
  const second: any = new Date(b.birth);
  return first - second;
}
