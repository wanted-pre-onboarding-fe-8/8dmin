import { RecoilValue, selectorFamily } from 'recoil';
import { MockCandidates } from './types';
import { ORDER_CONSTANTS } from '../utils/constants/data';

const {
  ORDER_ID,
  ORDER_NAME,
  ORDER_APPLIED_AT,
  ORDER_GENDER,
  ORDER_BIRTH,
  ORDER_EMAIL,
  ORDER_REGION,
} = ORDER_CONSTANTS;

export const sortApplicantSelector = selectorFamily({
  key: 'sortApplicantSelector',
  get:
    ({ applicants, order }: { applicants: RecoilValue<MockCandidates>; order: string }) =>
    ({ get }) => {
      const selectorApplicants: MockCandidates = [...get(applicants)];
      switch (order) {
        case ORDER_ID: {
          const sortedId = selectorApplicants.sort((a, b) => a[order] - b[order]);
          return sortedId;
        }
        case ORDER_NAME: {
          const sortedName = selectorApplicants.sort(nameAscending);
          return sortedName;
        }
        case ORDER_APPLIED_AT: {
          const sortedAppliedAt = selectorApplicants.sort(dateAscending);
          return sortedAppliedAt;
        }
        case ORDER_GENDER: {
          const sortedGender = selectorApplicants.sort(genderAscending);
          return sortedGender;
        }
        case ORDER_BIRTH: {
          const sortedBirth = selectorApplicants.sort(birthAscending);
          return sortedBirth;
        }
        default: {
          return selectorApplicants;
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
